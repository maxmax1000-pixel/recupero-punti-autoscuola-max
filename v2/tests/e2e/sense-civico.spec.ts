import { mkdirSync } from "node:fs";
import { expect, test, type Page } from "@playwright/test";

const staticUrl =
  "/?deck=pilot&mode=audience&slide=g1-intro-03c-senso-civico-alla-guida";
const progressiveUrl =
  "/?deck=pilot&mode=audience&slide=g1-intro-03d-il-problema-vero-non-sei-solo-tu";

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

test("SENSO CIVICO 1 - slide a riquadri 1600x900", async ({ page }) => {
  await page.setViewportSize({ width: 1600, height: 900 });
  await page.goto(staticUrl);

  await expect(
    page.getByRole("heading", { name: "Il senso civico alla guida: questo sconosciuto" }),
  ).toBeVisible();
  await expect(page.getByText("LA STRADA NON È SOLO TUA", { exact: true })).toBeVisible();
  await expect(
    page.getByText("LE TUE URGENZE NON VALGONO PIÙ DI QUELLE DEGLI ALTRI", {
      exact: true,
    }),
  ).toBeVisible();
  await expect(
    page.getByText("GUIDARE NON SIGNIFICA RISPONDERE AL TELEFONO", { exact: true }),
  ).toBeVisible();
  await expect(
    page.getByText("ESSERE SICURI NON SIGNIFICA ESSERE ARROGANTI", { exact: true }),
  ).toBeVisible();
  await expectNoViewportOverflow(page);

  await page.screenshot({ path: "artifacts/sense-civico-slide1-1600x900.png" });
});

test("SENSO CIVICO 2 - slide a riquadri 1920x1080", async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(staticUrl);

  await expect(
    page.getByText(
      "Il senso civico fa parte della differenza tra l’essere un vero autista o un semplice portatore sano di veicoli.",
      { exact: true },
    ),
  ).toBeVisible();
  await expectNoViewportOverflow(page);

  await page.screenshot({ path: "artifacts/sense-civico-slide1-1920x1080.png" });
});

test("SENSO CIVICO 3 - reveal progressivo iniziale e cumulativo", async ({ page }) => {
  await page.setViewportSize({ width: 1600, height: 900 });
  await page.goto(progressiveUrl);

  await expect(
    page.getByRole("heading", { name: "Il problema vero non sei solo tu" }),
  ).toBeVisible();
  await expect(page.getByText("NON DECIDI SOLO PER TE", { exact: true })).toHaveCount(0);
  await expect(page.getByText("PUOI ROVINARE VITE ALTRUI", { exact: true })).toHaveCount(0);
  await expect(page.getByText("QUESTO EGOISMO VA ELIMINATO", { exact: true })).toHaveCount(0);
  await expect(
    page.getByText(
      "Un comportamento irresponsabile può cambiare la vita di una persona, di una famiglia, per sempre.",
      { exact: true },
    ),
  ).toHaveCount(0);
  await expectNoViewportOverflow(page);

  await page.screenshot({ path: "artifacts/sense-civico-slide2-closed-1600x900.png" });

  await page.getByRole("button", { name: "Rivela punto 2" }).click();
  await expect(page.getByText("NON DECIDI SOLO PER TE", { exact: true })).toBeVisible();
  await expect(page.getByText("PUOI ROVINARE VITE ALTRUI", { exact: true })).toBeVisible();
  await expect(page.getByText("QUESTO EGOISMO VA ELIMINATO", { exact: true })).toHaveCount(0);
  await expectNoViewportOverflow(page);

  await page.screenshot({ path: "artifacts/sense-civico-slide2-step2-1600x900.png" });
});

test("SENSO CIVICO 4 - chiusura finale 1920x1080", async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(progressiveUrl);

  await page.getByRole("button", { name: "Rivela la chiusura finale" }).click();

  await expect(page.getByText("NON DECIDI SOLO PER TE", { exact: true })).toBeVisible();
  await expect(page.getByText("PUOI ROVINARE VITE ALTRUI", { exact: true })).toBeVisible();
  await expect(page.getByText("QUESTO EGOISMO VA ELIMINATO", { exact: true })).toBeVisible();
  await expect(
    page.getByText(
      "Un comportamento irresponsabile può cambiare la vita di una persona, di una famiglia, per sempre.",
      { exact: true },
    ),
  ).toBeVisible();
  await expectNoViewportOverflow(page);

  await page.screenshot({ path: "artifacts/sense-civico-slide2-open-1920x1080.png" });
});
