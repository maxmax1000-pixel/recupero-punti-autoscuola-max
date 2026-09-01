import { expect, test } from "@playwright/test";

const demoIds = [
  "demo-discussion",
  "demo-comparison",
  "demo-ab",
  "demo-free-response",
  "demo-solution",
  "demo-image-text",
];

test("TEST 1 e TEST 2 - app senza pageerror e console error", async ({ page }) => {
  const pageErrors: Error[] = [];
  const consoleErrors: string[] = [];

  page.on("pageerror", (error) => pageErrors.push(error));
  page.on("console", (message) => {
    if (message.type() === "error") {
      consoleErrors.push(message.text());
    }
  });

  await page.goto("/");
  await expect(page.getByRole("heading", { name: "Demo discussion" })).toBeVisible();
  expect(pageErrors).toEqual([]);
  expect(consoleErrors).toEqual([]);
});

test("TEST 3 - prima demo slide visualizzata", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { name: "Demo discussion" })).toBeVisible();
});

test("TEST 4 e TEST 5 - avanti e indietro cambiano slide", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("button", { name: "Avanti" }).click();
  await expect(page.getByRole("heading", { name: "Demo comparison" })).toBeVisible();
  await page.getByRole("button", { name: "Indietro" }).click();
  await expect(page.getByRole("heading", { name: "Demo discussion" })).toBeVisible();
});

test("TEST 6 - ultima slide non avanza oltre il limite", async ({ page }) => {
  await page.goto("/?slide=demo-image-text");
  await expect(page.getByRole("heading", { name: "Demo image text" })).toBeVisible();
  await expect(page.getByRole("button", { name: "Avanti" })).toBeDisabled();
});

test("TEST 7 - audience senza note e controlli docente", async ({ page }) => {
  await page.goto("/?mode=audience");
  await expect(page.getByTestId("teacher-notes")).toHaveCount(0);
  await expect(page.getByTestId("teacher-controls")).toHaveCount(0);
});

test("TEST 8 - teacher con controlli docente", async ({ page }) => {
  await page.goto("/?mode=teacher");
  await expect(page.getByTestId("teacher-controls")).toBeVisible();
  await expect(page.getByTestId("teacher-notes")).toBeVisible();
});

test("TEST 9 - tutti i 6 ID demo sono risolvibili dal registry", async ({ page }) => {
  for (const slideId of demoIds) {
    await page.goto(`/?slide=${slideId}`);
    await expect(page.getByText("Slide non trovata")).toHaveCount(0);
    await expect(page.locator("article")).toBeVisible();
  }
});

test("TEST 10 - ID inesistente mostra errore controllato", async ({ page }) => {
  await page.goto("/?slide=demo-id-inesistente");
  await expect(page.getByRole("heading", { name: "Slide non trovata" })).toBeVisible();
  await expect(page.getByText("ID slide inesistente: demo-id-inesistente")).toBeVisible();
});
