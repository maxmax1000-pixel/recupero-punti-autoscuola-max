import { mkdirSync } from "node:fs";
import { expect, test, type Locator, type Page } from "@playwright/test";

const slideId = "g1-intro-03e-prevenire-urgenza-prima-di-partire";
const audienceUrl = `/?deck=pilot&mode=audience&slide=${slideId}`;
const teacherUrl = `/?deck=pilot&mode=teacher&slide=${slideId}`;
const title = "Prevenire l’urgenza prima di partire";
const intro = [
  "Trovi coda? Hai una giornata piena e sei di corsa? Hai avuto un imprevisto ed hai fretta?",
  "Tutto questo va considerato PRIMA di salire sul veicolo.",
  "Un buon autista dà per scontato che queste cose possano accadere. Anzi, dà per scontato che succederanno.",
  "Questo è l’approccio corretto da tenere ogni volta che si sa che durante la giornata si dovrà usare un veicolo.",
];
const question = "Una valida soluzione?";
const answer = "Partire SEMPRE in largo anticipo.";
const conclusion =
  "Partire in orario o addirittura in ritardo è una delle cause che producono incidenti.";

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

async function expectNoClippedText(page: Page) {
  const clipped = await page.locator("article *").evaluateAll((elements) =>
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

  expect(clipped).toEqual([]);
}

async function expectInitialState(page: Page) {
  const heading = page.getByRole("heading", { name: title });
  const revealButton = page.getByRole("button", { name: question, exact: true });

  await expect(heading).toBeVisible();
  for (const paragraph of intro) {
    await expect(page.getByText(paragraph, { exact: true })).toBeVisible();
  }
  await expect(revealButton).toBeVisible();
  await expect(revealButton).toHaveAttribute("aria-expanded", "false");
  await expect(page.getByText(answer, { exact: true })).toBeHidden();
  await expect(page.getByText(conclusion, { exact: true })).toBeHidden();
  await expect(heading).toHaveCSS("text-align", "center");
}

test.beforeAll(() => {
  mkdirSync("artifacts", { recursive: true });
});

test("PREVENZIONE URGENZA 1 - stato chiuso 1600x900", async ({ page }) => {
  const errors = collectRuntimeErrors(page);

  await page.setViewportSize({ width: 1600, height: 900 });
  await page.goto(audienceUrl);

  await expectInitialState(page);
  await expectNoViewportOverflow(page);
  await expectNoClippedText(page);
  await expectInsideViewport(page.locator("article"));
  expect(errors.pageErrors).toEqual([]);
  expect(errors.consoleErrors).toEqual([]);

  await page.screenshot({
    path: "artifacts/prevenzione-urgenza-closed-1600x900.png",
  });
});

test("PREVENZIONE URGENZA 2 - stato aperto 1600x900", async ({ page }) => {
  await page.setViewportSize({ width: 1600, height: 900 });
  await page.goto(audienceUrl);

  const revealButton = page.getByRole("button", { name: question, exact: true });
  await revealButton.click();

  await expect(revealButton).toHaveAttribute("aria-expanded", "true");
  await expect(page.getByText(answer, { exact: true })).toBeVisible();
  await expect(page.getByText(conclusion, { exact: true })).toBeVisible();
  await expectNoViewportOverflow(page);
  await expectNoClippedText(page);
  await expectInsideViewport(page.getByTestId("revealed-solution"));

  await page.screenshot({
    path: "artifacts/prevenzione-urgenza-open-1600x900.png",
  });
});

test("PREVENZIONE URGENZA 3 - stati chiuso e aperto 1920x1080", async ({ page }) => {
  const errors = collectRuntimeErrors(page);

  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(audienceUrl);
  await expectInitialState(page);
  await expectNoViewportOverflow(page);
  await expectNoClippedText(page);
  await page.screenshot({
    path: "artifacts/prevenzione-urgenza-closed-1920x1080.png",
  });

  await page.getByRole("button", { name: question, exact: true }).click();
  await expect(page.getByText(answer, { exact: true })).toBeVisible();
  await expect(page.getByText(conclusion, { exact: true })).toBeVisible();
  await expectNoViewportOverflow(page);
  await expectNoClippedText(page);
  await page.screenshot({
    path: "artifacts/prevenzione-urgenza-open-1920x1080.png",
  });

  expect(errors.pageErrors).toEqual([]);
  expect(errors.consoleErrors).toEqual([]);
});

test("PREVENZIONE URGENZA 4 - ordine e reset per ID stabile", async ({ page }) => {
  await page.setViewportSize({ width: 1600, height: 900 });
  await page.goto(teacherUrl);

  await expect(page.getByText("6 di 7", { exact: true })).toHaveCount(2);
  await page.getByRole("button", { name: question, exact: true }).click();
  await expect(page.getByText(answer, { exact: true })).toBeVisible();

  await page.getByRole("button", { name: "Avanti" }).click();
  await expect(page.getByRole("heading", { name: "Mettiamoci alla prova" })).toBeVisible();
  await expect(page.getByText("7 di 7", { exact: true })).toHaveCount(2);
  await expect(page.getByRole("button", { name: "Mostra soluzione" })).toHaveAttribute(
    "aria-expanded",
    "false",
  );

  await page.getByRole("button", { name: "Indietro" }).click();
  await expect(page.getByRole("heading", { name: title })).toBeVisible();
  await expect(page.getByRole("button", { name: question, exact: true })).toHaveAttribute(
    "aria-expanded",
    "false",
  );
  await expect(page.getByText(answer, { exact: true })).toBeHidden();
});
