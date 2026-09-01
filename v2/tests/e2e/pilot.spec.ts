import { mkdirSync } from "node:fs";
import { expect, test, type Page } from "@playwright/test";

const pilotUrl = "/?deck=pilot&mode=audience&slide=g1-intro-02-differenza";

const leftItems = [
  "partire",
  "accelerare",
  "frenare",
  "sterzare",
  "parcheggiare",
  "arrivare dove serve",
];

const rightItems = [
  "conoscere le norme",
  "leggere la strada e la situazione",
  "prevedere i rischi e gli altri utenti",
  "adattare il comportamento",
  "guidare in sicurezza anche quando nessuno controlla",
];

function collectRuntimeErrors(page: Page) {
  const pageErrors: string[] = [];
  const consoleErrors: string[] = [];

  page.on("pageerror", (error) => pageErrors.push(error.message));
  page.on("console", (message) => {
    if (message.type() === "error") {
      consoleErrors.push(message.text());
    }
  });

  return { consoleErrors, pageErrors };
}

async function expectNoRuntimeErrors(errors: {
  consoleErrors: string[];
  pageErrors: string[];
}) {
  expect(errors.pageErrors).toEqual([]);
  expect(errors.consoleErrors).toEqual([]);
}

async function expectNoHorizontalOverflow(page: Page) {
  const hasNoOverflow = await page.evaluate(
    () => document.documentElement.scrollWidth <= window.innerWidth,
  );

  expect(hasNoOverflow).toBe(true);
}

async function expectSelectorInsideViewport(page: Page, selector: string) {
  const isInsideViewport = await page.locator(selector).evaluate((element) => {
    const box = element.getBoundingClientRect();

    return (
      box.top >= 0 &&
      box.left >= 0 &&
      box.bottom <= window.innerHeight &&
      box.right <= window.innerWidth
    );
  });

  expect(isInsideViewport).toBe(true);
}

async function expectPilotTextInsideViewport(page: Page) {
  const texts = [
    "La differenza è questa",
    "2 di 3",
    "MUOVERE UN VEICOLO",
    ...leftItems,
    "SAPER GUIDARE",
    ...rightItems,
    "Molti conducenti sanno spostare un veicolo.",
    "Non tutti sanno davvero guidare.",
  ];

  for (const text of texts) {
    await expectSelectorInsideViewport(page, `text=${text}`);
  }
}

async function expectNoClippedText(page: Page) {
  const clippedTexts = await page.locator("article *").evaluateAll((elements) =>
    elements
      .filter((element) => element.textContent?.trim())
      .filter((element) => {
        const htmlElement = element as HTMLElement;
        const style = window.getComputedStyle(element);
        const canClip =
          style.overflow !== "visible" ||
          style.overflowX !== "visible" ||
          style.overflowY !== "visible";

        return (
          canClip &&
          (htmlElement.scrollWidth > htmlElement.clientWidth + 1 ||
            htmlElement.scrollHeight > htmlElement.clientHeight + 1)
        );
      })
      .map((element) => element.textContent?.trim() ?? element.tagName),
  );

  expect(clippedTexts).toEqual([]);
}

test.beforeAll(() => {
  mkdirSync("artifacts", { recursive: true });
});

test("PILOT TEST 1 - slide pilota 1600x900", async ({ page }) => {
  const errors = collectRuntimeErrors(page);

  await page.setViewportSize({ width: 1600, height: 900 });
  await page.goto(pilotUrl);

  await expect(page.getByRole("heading", { name: "La differenza è questa" })).toBeVisible();
  await expect(page.getByText("2 di 3")).toBeVisible();
  await expect(page.getByRole("heading", { name: "MUOVERE UN VEICOLO" })).toBeVisible();
  for (const item of leftItems) {
    await expect(page.getByText(item)).toBeVisible();
  }
  await expect(page.getByRole("heading", { name: "SAPER GUIDARE" })).toBeVisible();
  for (const item of rightItems) {
    await expect(page.getByText(item)).toBeVisible();
  }
  await expect(page.getByText("Molti conducenti sanno spostare un veicolo.")).toBeVisible();
  await expect(page.getByText("Non tutti sanno davvero guidare.")).toBeVisible();
  await expect(page.getByTestId("teacher-notes")).toHaveCount(0);
  await expect(page.getByTestId("teacher-controls")).toHaveCount(0);
  await expect(page.getByText("Recupero Punti V2")).toHaveCount(0);
  await expect(page.getByText("audience")).toHaveCount(0);
  await expectNoRuntimeErrors(errors);
  await expectNoHorizontalOverflow(page);
  await expectSelectorInsideViewport(page, "main");
  await expectSelectorInsideViewport(page, "article");

  await page.screenshot({ path: "artifacts/pilot-comparison-1600x900.png" });
});

test("PILOT TEST 2 - slide pilota 1920x1080", async ({ page }) => {
  const errors = collectRuntimeErrors(page);

  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(pilotUrl);

  await expectNoRuntimeErrors(errors);
  await expectNoHorizontalOverflow(page);
  await expectSelectorInsideViewport(page, '[data-testid="comparison-left-card"]');
  await expectSelectorInsideViewport(page, '[data-testid="comparison-right-card"]');
  await expectSelectorInsideViewport(page, '[data-testid="comparison-conclusion"]');
  await expectPilotTextInsideViewport(page);
  await expectNoClippedText(page);
  await expectSelectorInsideViewport(page, "main");
  await expectSelectorInsideViewport(page, "article");

  await page.screenshot({ path: "artifacts/pilot-comparison-1920x1080.png" });
});
