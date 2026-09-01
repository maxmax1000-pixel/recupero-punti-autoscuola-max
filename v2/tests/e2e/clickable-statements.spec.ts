import { mkdirSync } from "node:fs";
import { expect, test, type Locator, type Page } from "@playwright/test";

const clickableStatementsUrl =
  "/?deck=pilot&mode=audience&slide=g1-intro-03-frasi-che-sentiamo";

const statements = {
  first: "Eh, ma sono passati 20 anni da quando ho preso la patente...",
  second: "Eh, ma tanto lo fanno tutti...",
  third: "Sono 30 anni che ho la patente e non ho mai fatto un incidente.",
};

const responses = {
  first:
    "E quindi? Non è che se tu ti dimentichi la regola smette di esistere. È tuo compito, in quanto possessore di patente, restare aggiornato sulle nuove disposizioni del Codice della Strada e non dimenticare quelle vecchie.",
  second:
    "E quindi? Se tanti sbagliano, questo rende giusto l’errore? Dobbiamo ragionare con la nostra testa o imitare gli altri?",
  third: "Finché gli altri frenano al posto tuo, incidenti non ne fai.",
};

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

function statementButton(page: Page, itemId: string) {
  return page.getByTestId(`statement-${itemId}`);
}

function responsePanel(page: Page, itemId: string) {
  return page.getByTestId(`response-${itemId}`);
}

test.beforeAll(() => {
  mkdirSync("artifacts", { recursive: true });
});

test("CLICKABLE TEST 1 - stato iniziale", async ({ page }) => {
  const errors = collectRuntimeErrors(page);

  await page.setViewportSize({ width: 1600, height: 900 });
  await page.goto(clickableStatementsUrl);

  await expect(page.getByText("3 di 3", { exact: true })).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "Le frasi che sentiamo più spesso" }),
  ).toBeVisible();
  await expect(page.getByTestId("clickable-statement")).toHaveCount(3);
  for (const statement of Object.values(statements)) {
    await expect(page.getByText(statement, { exact: true })).toBeVisible();
  }

  for (const itemId of ["patente-20-anni", "lo-fanno-tutti", "mai-fatto-incidente"]) {
    await expect(statementButton(page, itemId)).toHaveAttribute("aria-expanded", "false");
    await expect(responsePanel(page, itemId)).toBeHidden();
  }

  await expect(page.getByText("Eh, ma io ho sempre fatto così...", { exact: true })).toHaveCount(
    0,
  );
  await expect(page.getByText("Eh, ma non me lo ricordavo...", { exact: true })).toHaveCount(0);
  await expect(page.getByText("Dimenticare una regola non significa", { exact: false })).toHaveCount(
    0,
  );
  await expectNoRuntimeErrors(errors);

  await page.screenshot({ path: "artifacts/intro03-closed-1600x900.png" });
});

test("CLICKABLE TEST 2 - apertura e richiusura item 1", async ({ page }) => {
  await page.goto(clickableStatementsUrl);

  const firstButton = statementButton(page, "patente-20-anni");
  await firstButton.click();

  await expect(firstButton).toHaveAttribute("aria-expanded", "true");
  await expect(page.getByText(responses.first, { exact: true })).toBeVisible();
  await expect(responsePanel(page, "lo-fanno-tutti")).toBeHidden();
  await expect(responsePanel(page, "mai-fatto-incidente")).toBeHidden();

  await firstButton.click();

  await expect(firstButton).toHaveAttribute("aria-expanded", "false");
  await expect(page.getByText(responses.first, { exact: true })).toBeHidden();
});

test("CLICKABLE TEST 3 - una sola risposta aperta", async ({ page }) => {
  await page.goto(clickableStatementsUrl);

  const firstButton = statementButton(page, "patente-20-anni");
  const secondButton = statementButton(page, "lo-fanno-tutti");
  await firstButton.click();
  await secondButton.click();

  await expect(firstButton).toHaveAttribute("aria-expanded", "false");
  await expect(responsePanel(page, "patente-20-anni")).toBeHidden();
  await expect(secondButton).toHaveAttribute("aria-expanded", "true");
  await expect(page.getByText(responses.second, { exact: true })).toBeVisible();
  await expect(page.getByText("gregge di pecore", { exact: false })).toHaveCount(0);
});

test("CLICKABLE TEST 4 - item 3", async ({ page }) => {
  await page.goto(clickableStatementsUrl);

  const thirdButton = statementButton(page, "mai-fatto-incidente");
  await thirdButton.click();

  await expect(thirdButton).toHaveAttribute("aria-expanded", "true");
  await expect(page.getByText(responses.third, { exact: true })).toBeVisible();
  await expect(statementButton(page, "patente-20-anni")).toHaveAttribute(
    "aria-expanded",
    "false",
  );
  await expect(statementButton(page, "lo-fanno-tutti")).toHaveAttribute(
    "aria-expanded",
    "false",
  );
  await expect(responsePanel(page, "patente-20-anni")).toBeHidden();
  await expect(responsePanel(page, "lo-fanno-tutti")).toBeHidden();
});

test("CLICKABLE TEST 5 - responsive e screenshot", async ({ page }) => {
  await page.setViewportSize({ width: 1600, height: 900 });
  await page.goto(clickableStatementsUrl);
  await statementButton(page, "patente-20-anni").click();

  await expectNoViewportOverflow(page);
  await expectInsideViewport(
    page.getByRole("heading", { name: "Le frasi che sentiamo più spesso" }),
  );
  for (const statement of Object.values(statements)) {
    await expect(page.getByText(statement, { exact: true })).toBeVisible();
    await expectInsideViewport(page.getByText(statement, { exact: true }));
  }
  for (const card of await page.getByTestId("clickable-statement").all()) {
    await expectInsideViewport(card);
  }
  await expectInsideViewport(responsePanel(page, "patente-20-anni"));
  await page.screenshot({ path: "artifacts/intro03-first-open-1600x900.png" });

  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(clickableStatementsUrl);
  await statementButton(page, "mai-fatto-incidente").click();

  await expectNoViewportOverflow(page);
  await expectInsideViewport(
    page.getByRole("heading", { name: "Le frasi che sentiamo più spesso" }),
  );
  for (const statement of Object.values(statements)) {
    await expect(page.getByText(statement, { exact: true })).toBeVisible();
    await expectInsideViewport(page.getByText(statement, { exact: true }));
  }
  for (const card of await page.getByTestId("clickable-statement").all()) {
    await expectInsideViewport(card);
  }
  await expectInsideViewport(responsePanel(page, "mai-fatto-incidente"));
  await page.screenshot({ path: "artifacts/intro03-third-open-1920x1080.png" });
});
