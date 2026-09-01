import { mkdirSync } from "node:fs";
import { expect, test, type Locator, type Page } from "@playwright/test";

const revealQuestionUrl =
  "/?deck=pilot&mode=audience&slide=g1-intro-04-mettiamoci-alla-prova";
const question =
  "Il rispetto delle Norme del Codice della Strada è sempre subordinato alla presenza della segnaletica?";
const answer =
  "NO, esistono delle regole generali che dobbiamo conoscere e per le quali non è prevista la presenza dei segnali.";
const bridge = "Da qui iniziamo a parlare proprio di queste regole generali.";

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

async function expectNoViewportOverflow(page: Page) {
  const overflow = await page.evaluate(() => ({
    horizontal: document.documentElement.scrollWidth > window.innerWidth,
    vertical: document.documentElement.scrollHeight > window.innerHeight,
  }));

  expect(overflow).toEqual({ horizontal: false, vertical: false });
}

async function expectInsideViewport(locator: Locator) {
  const isInsideViewport = await locator.evaluate((element) => {
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

test.beforeAll(() => {
  mkdirSync("artifacts", { recursive: true });
});

test("REVEAL TEST 1 - stato iniziale 1600x900", async ({ page }) => {
  const errors = collectRuntimeErrors(page);

  await page.setViewportSize({ width: 1600, height: 900 });
  await page.goto(revealQuestionUrl);

  await expect(page.getByRole("heading", { name: "Mettiamoci alla prova" })).toBeVisible();
  await expect(page.getByRole("heading", { name: question })).toBeVisible();
  const revealButton = page.getByRole("button", { name: "Mostra soluzione" });
  await expect(revealButton).toBeVisible();
  await expect(revealButton).toHaveAttribute("aria-expanded", "false");
  await expect(page.getByText(answer, { exact: true })).toBeHidden();
  await expect(page.getByText(bridge, { exact: true })).toBeHidden();
  await expectNoViewportOverflow(page);
  await expectInsideViewport(page.locator("article"));
  await expectNoRuntimeErrors(errors);

  await page.screenshot({ path: "artifacts/intro04-closed-1600x900.png" });
});

test("REVEAL TEST 2 - mostra e nasconde soluzione 1600x900", async ({ page }) => {
  await page.setViewportSize({ width: 1600, height: 900 });
  await page.goto(revealQuestionUrl);

  const revealButton = page.getByTestId("reveal-solution");
  await revealButton.click();

  await expect(revealButton).toHaveAttribute("aria-expanded", "true");
  await expect(page.getByRole("button", { name: "Nascondi soluzione" })).toBeVisible();
  await expect(page.getByText(answer, { exact: true })).toBeVisible();
  await expect(page.getByText(bridge, { exact: true })).toBeVisible();
  await expectNoViewportOverflow(page);
  await expectInsideViewport(page.getByTestId("revealed-solution"));
  await page.screenshot({ path: "artifacts/intro04-open-1600x900.png" });

  await revealButton.click();
  await expect(revealButton).toHaveAttribute("aria-expanded", "false");
  await expect(page.getByRole("button", { name: "Mostra soluzione" })).toBeVisible();
  await expect(page.getByText(answer, { exact: true })).toBeHidden();
  await expect(page.getByText(bridge, { exact: true })).toBeHidden();
});

test("REVEAL TEST 3 - soluzione aperta 1920x1080", async ({ page }) => {
  const errors = collectRuntimeErrors(page);

  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(revealQuestionUrl);
  await page.getByRole("button", { name: "Mostra soluzione" }).click();

  await expect(page.getByText(answer, { exact: true })).toBeVisible();
  await expect(page.getByText(bridge, { exact: true })).toBeVisible();
  await expectNoViewportOverflow(page);
  await expectInsideViewport(page.getByRole("heading", { name: "Mettiamoci alla prova" }));
  await expectInsideViewport(page.getByRole("heading", { name: question }));
  await expectInsideViewport(page.getByTestId("revealed-solution"));
  await expectNoRuntimeErrors(errors);

  await page.screenshot({ path: "artifacts/intro04-open-1920x1080.png" });
});
