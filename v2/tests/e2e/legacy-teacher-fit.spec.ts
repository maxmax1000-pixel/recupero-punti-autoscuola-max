import { mkdirSync, readFileSync } from "node:fs";
import { resolve } from "node:path";
import { expect, test, type Page } from "@playwright/test";

const repoRoot = resolve(process.cwd(), "..");
const baseCss = readFileSync(resolve(repoRoot, "styles-base.css"), "utf8");
const layoutCss = readFileSync(resolve(repoRoot, "styles-layout.css"), "utf8");

const observationAdapter = resolve(
  repoRoot,
  "v2/legacy-publish/intro-slide3b-ci-hai-mai-fatto-caso.js",
);
const civicAdapter = resolve(
  repoRoot,
  "v2/legacy-publish/intro-slide3c-senso-civico-alla-guida.js",
);
const teacherFitScript = resolve(repoRoot, "teacher-fit-fix.js");

async function prepareTeacherHarness(page: Page) {
  await page.setContent(`<!doctype html>
    <html lang="it">
      <head>
        <meta charset="utf-8" />
        <style>${baseCss}\n${layoutCss}</style>
      </head>
      <body>
        <div class="app">
          <header class="topbar"><div class="brand">AUTOSCUOLA MAX</div></header>
          <main class="main">
            <section class="stage">
              <article class="slide" id="slide"></article>
            </section>
            <aside class="sidebar"></aside>
          </main>
          <footer class="bottom"></footer>
        </div>
      </body>
    </html>`);

  await page.evaluate(() => {
    (window as typeof window & { slides: Array<Record<string, unknown>> }).slides = [
      { title: "Le frasi che sentiamo più spesso" },
    ];
  });

  await page.addScriptTag({ path: observationAdapter });
  await page.addScriptTag({ path: civicAdapter });
  await page.addScriptTag({ path: teacherFitScript });
}

async function renderLegacySlide(page: Page, title: string) {
  await page.evaluate((requestedTitle) => {
    const slides = (
      window as typeof window & {
        slides: Array<{ title: string; html?: () => string }>;
      }
    ).slides;
    const slide = slides.find((entry) => entry.title === requestedTitle);
    if (!slide?.html) throw new Error(`Slide non trovata: ${requestedTitle}`);
    const host = document.getElementById("slide");
    if (!host) throw new Error("Contenitore slide non trovato");
    host.innerHTML = slide.html();
  }, title);

  const fitted = page.locator("#slide > .teacher-fit-inner");
  await expect(fitted).toHaveAttribute("data-fit-engine", "teacher-structural-v1");
}

async function readVisualFit(page: Page) {
  return page.evaluate(() => {
    const slide = document.getElementById("slide");
    const inner = slide?.querySelector<HTMLElement>(":scope > .teacher-fit-inner");
    if (!slide || !inner) throw new Error("Fit docente non disponibile");

    const slideRect = slide.getBoundingClientRect();
    const slideStyle = getComputedStyle(slide);
    const px = (value: string) => Number.parseFloat(value) || 0;
    const bounds = {
      top: slideRect.top + px(slideStyle.paddingTop),
      right: slideRect.right - px(slideStyle.paddingRight),
      bottom: slideRect.bottom - px(slideStyle.paddingBottom),
      left: slideRect.left + px(slideStyle.paddingLeft),
    };

    let minTop = Number.POSITIVE_INFINITY;
    let minLeft = Number.POSITIVE_INFINITY;
    let maxRight = Number.NEGATIVE_INFINITY;
    let maxBottom = Number.NEGATIVE_INFINITY;

    [inner, ...Array.from(inner.querySelectorAll<HTMLElement>("*"))].forEach((node) => {
      const style = getComputedStyle(node);
      if (style.display === "none" || style.visibility === "hidden") return;
      const rect = node.getBoundingClientRect();
      if (!rect.width && !rect.height) return;
      minTop = Math.min(minTop, rect.top);
      minLeft = Math.min(minLeft, rect.left);
      maxRight = Math.max(maxRight, rect.right);
      maxBottom = Math.max(maxBottom, rect.bottom);
    });

    return {
      bounds,
      minTop,
      minLeft,
      maxRight,
      maxBottom,
      scale: Number.parseFloat(inner.dataset.fitScale ?? "0"),
      scrollTop: slide.scrollTop,
      overflow: getComputedStyle(slide).overflow,
    };
  });
}

async function expectFullyInsideTeacherFrame(page: Page) {
  const fit = await readVisualFit(page);
  expect(fit.scrollTop).toBe(0);
  expect(fit.overflow).toBe("hidden");
  expect(fit.scale).toBeGreaterThanOrEqual(0.42);
  expect(fit.minTop).toBeGreaterThanOrEqual(fit.bounds.top - 2);
  expect(fit.minLeft).toBeGreaterThanOrEqual(fit.bounds.left - 2);
  expect(fit.maxRight).toBeLessThanOrEqual(fit.bounds.right + 2);
  expect(fit.maxBottom).toBeLessThanOrEqual(fit.bounds.bottom + 2);
}

test.beforeAll(() => {
  mkdirSync("artifacts", { recursive: true });
});

for (const viewport of [
  { width: 1600, height: 900, label: "1600x900" },
  { width: 1366, height: 768, label: "1366x768" },
]) {
  test(`PROGRAMMA COMPLETO DOCENTE - fit strutturale ${viewport.label}`, async ({ page }) => {
    await page.setViewportSize({ width: viewport.width, height: viewport.height });
    await prepareTeacherHarness(page);

    await renderLegacySlide(page, "Hai mai notato questa cosa?");
    await expectFullyInsideTeacherFrame(page);
    await page.screenshot({
      path: `artifacts/viewport-fit-legacy-teacher-osservazione-${viewport.label}.png`,
    });

    // Verifica anche il cambio slide nello stesso contenitore persistente della regia docente.
    await renderLegacySlide(page, "Il senso civico alla guida: questo sconosciuto");
    await expectFullyInsideTeacherFrame(page);
    await page.screenshot({
      path: `artifacts/viewport-fit-legacy-teacher-senso-civico-${viewport.label}.png`,
    });
  });
}
