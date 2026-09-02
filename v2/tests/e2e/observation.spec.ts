import { mkdirSync } from "node:fs";
import { expect, test, type Page } from "@playwright/test";

const observationUrl =
  "/?deck=pilot&mode=audience&slide=g1-intro-03b-ci-hai-mai-fatto-caso";

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

test.beforeAll(() => {
  mkdirSync("artifacts", { recursive: true });
});

test("OBSERVATION TEST 1 - 1600x900", async ({ page }) => {
  const errors = collectRuntimeErrors(page);

  await page.setViewportSize({ width: 1600, height: 900 });
  await page.goto(observationUrl);

  await expect(page.getByRole("heading", { name: "Hai mai notato questa cosa?" })).toBeVisible();
  await expect(page.getByText("Ma guarda questo qui... svegliati!", { exact: false })).toBeVisible();
  await expect(page.getByText("Ma dove corre questo? Che fretta ha?", { exact: false })).toBeVisible();
  await expect(page.getByText("NON SONO OPTIONAL.", { exact: true })).toBeVisible();
  await expect(page.getByText("tra l’essere un vero autista o un semplice portatore sano di veicoli.", { exact: false })).toBeVisible();
  await expectNoViewportOverflow(page);
  expect(errors.pageErrors).toEqual([]);
  expect(errors.consoleErrors).toEqual([]);

  await page.screenshot({ path: "artifacts/intro05-observation-1600x900.png" });
});

test("OBSERVATION TEST 2 - 1920x1080", async ({ page }) => {
  const errors = collectRuntimeErrors(page);

  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(observationUrl);

  await expect(page.getByText("limite", { exact: false })).toBeVisible();
  await expect(page.getByText("struttura della strada", { exact: false })).toBeVisible();
  await expect(page.getByText("condizioni del veicolo", { exact: false })).toBeVisible();
  await expect(page.getByText("visibilità", { exact: false })).toBeVisible();
  await expectNoViewportOverflow(page);
  expect(errors.pageErrors).toEqual([]);
  expect(errors.consoleErrors).toEqual([]);

  await page.screenshot({ path: "artifacts/intro05-observation-1920x1080.png" });
});
