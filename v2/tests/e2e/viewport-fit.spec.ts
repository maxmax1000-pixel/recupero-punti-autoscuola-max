import { expect, test } from "@playwright/test";
import { pilotLessonOrder } from "../../src/course/pilotSlides";

const compactViewport = { width: 1024, height: 600 };
const screenshotSlides = new Set([
  "g1-intro-03b-ci-hai-mai-fatto-caso",
  "g1-intro-03b2-quando-la-colpa-diventa-sfiga",
  "g1-intro-03c-senso-civico-alla-guida",
]);

test("AUDIENCE FIT - tutte le slide pilot rientrano nello schermo 1024x600", async ({
  page,
}) => {
  await page.setViewportSize(compactViewport);

  for (const slideId of pilotLessonOrder) {
    await page.goto(`/?deck=pilot&mode=audience&slide=${slideId}`);

    await page.waitForFunction(() => {
      const content = document.querySelector<HTMLElement>(
        '[data-testid="audience-fit-content"]',
      );
      return Boolean(content?.dataset.fitScale);
    });

    const bounds = await page.evaluate(() => {
      const viewport = document
        .querySelector<HTMLElement>('[data-testid="audience-fit-viewport"]')
        ?.getBoundingClientRect();
      const frame = document.querySelector<HTMLElement>("article")?.getBoundingClientRect();
      const fitContent = document.querySelector<HTMLElement>(
        '[data-testid="audience-fit-content"]',
      );

      if (!viewport || !frame || !fitContent) return null;

      return {
        viewport: {
          top: viewport.top,
          right: viewport.right,
          bottom: viewport.bottom,
          left: viewport.left,
        },
        frame: {
          top: frame.top,
          right: frame.right,
          bottom: frame.bottom,
          left: frame.left,
        },
        scale: Number(fitContent.dataset.fitScale),
      };
    });

    expect(bounds, `Misure mancanti per ${slideId}`).not.toBeNull();
    if (!bounds) continue;

    expect(bounds.scale, `Scala non valida per ${slideId}`).toBeGreaterThan(0);
    expect(bounds.scale, `Scala eccessiva per ${slideId}`).toBeLessThanOrEqual(1);
    expect(bounds.frame.top, `${slideId} esce sopra`).toBeGreaterThanOrEqual(
      bounds.viewport.top - 1,
    );
    expect(bounds.frame.left, `${slideId} esce a sinistra`).toBeGreaterThanOrEqual(
      bounds.viewport.left - 1,
    );
    expect(bounds.frame.bottom, `${slideId} esce sotto`).toBeLessThanOrEqual(
      bounds.viewport.bottom + 1,
    );
    expect(bounds.frame.right, `${slideId} esce a destra`).toBeLessThanOrEqual(
      bounds.viewport.right + 1,
    );

    if (screenshotSlides.has(slideId)) {
      await page.screenshot({
        path: `artifacts/viewport-fit-${slideId}-1024x600.png`,
      });
    }
  }
});
