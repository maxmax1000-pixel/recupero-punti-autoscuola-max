import { mkdirSync } from "node:fs";
import { expect, test, type Locator, type Page } from "@playwright/test";
import { pilotLessonOrder } from "../../src/course/pilotSlides";

const slideId = "g1-intro-03b2-quando-la-colpa-diventa-sfiga";
const audienceUrl = `/?deck=pilot&mode=audience&slide=${slideId}`;
const teacherUrl = `/?deck=pilot&mode=teacher&slide=${slideId}`;
const title = "Quando la colpa diventa “sfiga”";
const subtitle =
  "Il problema non è la sfortuna. Il problema è tirarla fuori solo quando ci fa comodo.";
const phrases = [
  "“Che sfiga...”",
  "“Non potevo farci niente.”",
  "“È successo tutto in un attimo.”",
  "“Mi è andata male.”",
  "“Ma questo è incapace.”",
  "“Ma come guida?”",
  "“Doveva stare più attento.”",
  "“Uno così non dovrebbe guidare.”",
];
const question =
  "Perché, quando l’errore è nostro, diventa sfortuna... e quando è degli altri diventa incapacità?";
const conclusion =
  "La sfiga non deve diventare l’alibi per non riconoscere i nostri errori. E non può valere solo quando fa comodo a noi.";

function collectRuntimeErrors(page: Page) {
  const pageErrors: string[] = [];
  const consoleErrors: string[] = [];

  page.on("pageerror", (error) => pageErrors.push(error.message));
  page.on("console", (message) => {
    if (message.type() === "error") consoleErrors.push(message.text());
  });

  return { consoleErrors, pageErrors };
}

async function expectInsideViewport(locator: Locator) {
  const isInside = await locator.evaluate((element) => {
    const box = element.getBoundingClientRect();
    return (
      box.top >= 0 &&
      box.left >= 0 &&
      box.bottom <= window.innerHeight &&
      box.right <= window.innerWidth
    );
  });

  expect(isInside).toBe(true);
}

async function expectNoViewportOverflow(page: Page) {
  const overflow = await page.evaluate(() => ({
    horizontal: document.documentElement.scrollWidth > window.innerWidth,
    vertical: document.documentElement.scrollHeight > window.innerHeight,
  }));

  expect(overflow).toEqual({ horizontal: false, vertical: false });
}

async function expectNoClippedText(page: Page) {
  const clipped = await page.locator("article *").evaluateAll((elements) =>
    elements
      .filter((element) => element.textContent?.trim())
      .filter((element) => {
        const node = element as HTMLElement;
        const style = getComputedStyle(element);
        const canClip =
          style.overflow !== "visible" ||
          style.overflowX !== "visible" ||
          style.overflowY !== "visible";

        return (
          canClip &&
          (node.scrollWidth > node.clientWidth + 1 ||
            node.scrollHeight > node.clientHeight + 1)
        );
      })
      .map((element) => element.textContent?.trim() ?? element.tagName),
  );

  expect(clipped).toEqual([]);
}

async function expectBalancedLayout(page: Page) {
  const layout = await page.evaluate(() => {
    const rect = (selector: string) => {
      const element = document.querySelector<HTMLElement>(selector);
      if (!element) throw new Error(`Elemento mancante: ${selector}`);
      return element.getBoundingClientRect();
    };

    const left = rect('[data-testid="double-standard-panel-succede-a-noi"]');
    const right = rect('[data-testid="double-standard-panel-colpa-di-un-altro"]');
    const subtitleBox = rect('[class*="subtitle"]');
    const questionBox = rect('[data-testid="double-standard-question"]');
    const conclusionBox = rect('[data-testid="double-standard-conclusion"]');

    return {
      samePanelTop: Math.abs(left.top - right.top),
      samePanelHeight: Math.abs(left.height - right.height),
      panelsSeparated: left.right <= right.left,
      verticalOrder:
        subtitleBox.bottom <= left.top &&
        left.bottom <= questionBox.top &&
        questionBox.bottom <= conclusionBox.top,
    };
  });

  expect(layout.samePanelTop).toBeLessThanOrEqual(1);
  expect(layout.samePanelHeight).toBeLessThanOrEqual(1);
  expect(layout.panelsSeparated).toBe(true);
  expect(layout.verticalOrder).toBe(true);
}

async function expectExactContent(page: Page) {
  await expect(page.getByRole("heading", { name: title, exact: true })).toBeVisible();
  await expect(page.getByText(subtitle, { exact: true })).toBeVisible();
  await expect(page.getByRole("heading", { name: "SE SUCCEDE A NOI" })).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "SE SUCCEDE PER COLPA DI UN ALTRO" }),
  ).toBeVisible();
  for (const phrase of phrases) {
    await expect(page.getByText(phrase, { exact: true })).toBeVisible();
  }
  await expect(page.getByText(question, { exact: true })).toBeVisible();
  await expect(page.getByText(conclusion, { exact: true })).toBeVisible();
}

test.beforeAll(() => {
  mkdirSync("artifacts", { recursive: true });
});

for (const viewport of [
  { width: 1600, height: 900, label: "1600x900" },
  { width: 1920, height: 1080, label: "1920x1080" },
]) {
  test(`DOPPIO STANDARD - contenuto e fit audience ${viewport.label}`, async ({
    page,
  }) => {
    const errors = collectRuntimeErrors(page);
    await page.setViewportSize({ width: viewport.width, height: viewport.height });
    await page.goto(audienceUrl);

    await expectExactContent(page);
    await expectNoViewportOverflow(page);
    await expectNoClippedText(page);
    await expectInsideViewport(page.locator("article"));
    await expectBalancedLayout(page);
    expect(errors.pageErrors).toEqual([]);
    expect(errors.consoleErrors).toEqual([]);

    await page.screenshot({
      path: `artifacts/double-standard-${viewport.label}.png`,
    });
  });
}

test("DOPPIO STANDARD - ordine per ID stabile e adiacenti invariati", async ({ page }) => {
  const slideIndex = pilotLessonOrder.indexOf(slideId);
  expect(pilotLessonOrder.slice(slideIndex - 1, slideIndex + 2)).toEqual([
    "g1-intro-03b-ci-hai-mai-fatto-caso",
    slideId,
    "g1-intro-03c-senso-civico-alla-guida",
  ]);

  await page.setViewportSize({ width: 1600, height: 900 });
  await page.goto(teacherUrl);
  await expect(page.getByText("4 di 8", { exact: true })).toHaveCount(2);

  await page.getByRole("button", { name: "Avanti" }).click();
  await expect(
    page.getByRole("heading", {
      name: "Il senso civico alla guida: questo sconosciuto",
      exact: true,
    }),
  ).toBeVisible();

  await page.getByRole("button", { name: "Indietro" }).click();
  await page.getByRole("button", { name: "Indietro" }).click();
  await expect(
    page.getByRole("heading", { name: "Hai mai notato questa cosa?", exact: true }),
  ).toBeVisible();
});
