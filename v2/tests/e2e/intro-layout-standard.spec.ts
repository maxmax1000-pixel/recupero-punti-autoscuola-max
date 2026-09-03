import { mkdirSync, readFileSync } from "node:fs";
import { resolve } from "node:path";
import { expect, test, type Page } from "@playwright/test";
import { pilotLessonOrder } from "../../src/course/pilotSlides";

const repoRoot = resolve(process.cwd(), "..");
const baseCss = readFileSync(resolve(repoRoot, "styles-base.css"), "utf8");
const layoutCss = readFileSync(resolve(repoRoot, "styles-layout.css"), "utf8");
const introLayoutCss = readFileSync(
  resolve(repoRoot, "v2/legacy-publish/intro-layout-standard.css"),
  "utf8",
);
const manifest = JSON.parse(
  readFileSync(resolve(repoRoot, "v2/legacy-publish/manifest.json"), "utf8"),
) as { entries: Array<{ script: string }> };

const legacySetupScripts = [
  resolve(repoRoot, "app-core.js"),
  resolve(repoRoot, "slides-1.js"),
  resolve(repoRoot, "slides-intro.js"),
  ...manifest.entries.map((entry) =>
    resolve(repoRoot, "v2/legacy-publish", entry.script),
  ),
];

const audienceFitScript = resolve(
  repoRoot,
  "v2/legacy-publish/audience-fit-fix.js",
);
const teacherFitScript = resolve(
  repoRoot,
  "v2/legacy-publish/teacher-fit-fix.js",
);

const introSlides = [
  { title: "Benvenuti", heading: "Sei sicuro di conoscere ancora la strada?" },
  { title: "Perché siete qui?", heading: "Quale comportamento vi ha portato qui?" },
  {
    title: "Saper guidare o muovere un veicolo?",
    heading: "Saper guidare o saper soltanto muovere un veicolo da punto A a punto B",
  },
  { title: "La differenza è questa", heading: "La differenza è questa" },
  {
    title: "Le frasi che sentiamo più spesso",
    heading: "Le frasi che sentiamo più spesso",
  },
  { title: "Hai mai notato questa cosa?", heading: "Hai mai notato questa cosa?" },
  {
    title: "Quando la colpa diventa “sfiga”",
    heading: "Quando la colpa diventa “sfiga”",
  },
  {
    title: "Il senso civico alla guida: questo sconosciuto",
    heading: "Il senso civico alla guida: questo sconosciuto",
  },
  {
    title: "Il problema vero non sei solo tu",
    heading: "Il problema vero non sei solo tu",
  },
  {
    title: "Prevenire l’urgenza prima di partire",
    heading: "Prevenire l’urgenza prima di partire",
  },
  { title: "Mettiamoci alla prova", heading: "Mettiamoci alla prova" },
] as const;

const screenshotSlugs = new Map<string, string>([
  ["La differenza è questa", "differenza"],
  ["Hai mai notato questa cosa?", "osservazione"],
  ["Quando la colpa diventa “sfiga”", "doppio-standard"],
  ["Il senso civico alla guida: questo sconosciuto", "senso-civico"],
  ["Prevenire l’urgenza prima di partire", "prevenire-urgenza"],
  ["Mettiamoci alla prova", "mettiamoci-alla-prova"],
]);

const v2ScreenshotSlugs = new Map<string, string>([
  ["g1-intro-02-differenza", "differenza"],
  ["g1-intro-03b-ci-hai-mai-fatto-caso", "osservazione"],
  ["g1-intro-03b2-quando-la-colpa-diventa-sfiga", "doppio-standard"],
  ["g1-intro-03c-senso-civico-alla-guida", "senso-civico"],
  ["g1-intro-03e-prevenire-urgenza-prima-di-partire", "prevenire-urgenza"],
  ["g1-intro-04-mettiamoci-alla-prova", "mettiamoci-alla-prova"],
]);

type LegacyMode = "audience" | "teacher";

async function prepareLegacyHarness(page: Page, mode: LegacyMode) {
  await page.goto(mode === "audience" ? "/#aula" : "/");
  await page.route("**/legacy-publish/intro-driving.webp", (route) =>
    route.fulfill({
      contentType: "image/webp",
      path: resolve(repoRoot, "intro-driving.webp"),
    }),
  );

  await page.setContent(`<!doctype html>
    <html lang="it">
      <head>
        <meta charset="utf-8" />
        <base href="http://127.0.0.1:4173/legacy-publish/" />
        <style>${baseCss}\n${layoutCss}\n${introLayoutCss}</style>
      </head>
      <body class="${mode === "audience" ? "audience" : ""}">
        <div class="app" id="app">
          <header class="topbar">
            <div class="brand"><div class="brandmark">M</div><div class="brandtext"><strong>AUTOSCUOLA MAX</strong><span>Recupero punti interattivo</span></div></div>
            <div class="crumb" id="crumb">Blocco introduttivo</div>
            <div class="spacer"></div>
            <div class="modebadge" id="modeBadge">${mode === "audience" ? "Schermo aula" : "Modalità docente"}</div>
          </header>
          <main class="main">
            <section class="stage"><article class="slide" id="slide"></article></section>
            <aside class="sidebar teacher-only">
              <div class="side-scroll"><div class="side-title">Regia docente</div><div class="teacher-card"><strong>Note docente</strong><p>Controllo impaginazione del programma completo.</p></div></div>
            </aside>
          </main>
          <footer class="bottom teacher-only">
            <button class="navbtn" type="button">Indietro</button>
            <div class="progress-wrap"><div class="progress-track"></div><div class="progress-label">Intro</div></div>
            <button class="navbtn primary" type="button">Avanti</button>
          </footer>
        </div>
      </body>
    </html>`);

  for (const script of legacySetupScripts) {
    await page.addScriptTag({ path: script });
  }
  await page.addScriptTag({
    path: mode === "audience" ? audienceFitScript : teacherFitScript,
  });
}

async function renderLegacySlide(page: Page, title: string, mode: LegacyMode) {
  await page.evaluate(
    ({ requestedTitle, requestedMode }) => {
      const slides = (0, eval)("slides") as Array<{
        title: string;
        html: () => string;
      }>;
      const state = (0, eval)("state") as {
        caseSelection: string | null;
        quick: Record<string, unknown>;
        revealed: boolean;
      };
      const entry = slides.find((slide) => slide.title === requestedTitle);
      const host = document.getElementById("slide");
      if (!entry || !host) throw new Error(`Slide legacy mancante: ${requestedTitle}`);

      state.caseSelection = null;
      state.quick = {};
      state.revealed = false;
      const html = entry.html();
      host.innerHTML =
        requestedMode === "audience"
          ? `<div class="audience-fit-inner" style="width:100%;transform-origin:top center">${html}</div>`
          : html;
    },
    { requestedMode: mode, requestedTitle: title },
  );

  const fit = page.locator(
    mode === "audience"
      ? "#slide > .audience-fit-inner"
      : "#slide > .teacher-fit-inner",
  );
  await expect(fit).toHaveAttribute(
    "data-fit-engine",
    mode === "audience" ? "audience-centered-v3" : "teacher-balanced-v2",
  );
  await expect(page.locator("#slide .intro-layout")).toBeVisible();
}

async function expectLegacyLayout(page: Page, mode: LegacyMode) {
  const metrics = await page.evaluate((requestedMode) => {
    const slide = document.getElementById("slide");
    const stage = document.querySelector<HTMLElement>(".stage");
    const layout = slide?.querySelector<HTMLElement>(".intro-layout");
    const fit = slide?.querySelector<HTMLElement>(
      requestedMode === "audience" ? ".audience-fit-inner" : ".teacher-fit-inner",
    );
    if (!slide || !stage || !layout || !fit) throw new Error("Metriche legacy mancanti");

    const slideRect = slide.getBoundingClientRect();
    const stageRect = stage.getBoundingClientRect();
    const layoutRect = layout.getBoundingClientRect();
    const fitRect = fit.getBoundingClientRect();
    const style = getComputedStyle(slide);
    const px = (value: string) => Number.parseFloat(value) || 0;
    const contentBounds = {
      top: slideRect.top + px(style.paddingTop),
      right: slideRect.right - px(style.paddingRight),
      bottom: slideRect.bottom - px(style.paddingBottom),
      left: slideRect.left + px(style.paddingLeft),
    };
    const visibleChildren = Array.from(layout.children)
      .filter((element) => getComputedStyle(element).display !== "none")
      .filter((element) => element.tagName !== "STYLE")
      .map((element) => element.getBoundingClientRect())
      .filter((rect) => rect.width > 0 && rect.height > 0);
    const overlappingChildren = visibleChildren.some(
      (rect, index) => index > 0 && rect.top < visibleChildren[index - 1].bottom - 1,
    );
    const clippedText = Array.from(layout.querySelectorAll<HTMLElement>("*"))
      .filter((element) => element.textContent?.trim())
      .filter((element) => {
        const rect = element.getBoundingClientRect();
        const elementStyle = getComputedStyle(element);
        if (elementStyle.display === "none" || elementStyle.visibility === "hidden") {
          return false;
        }
        return (
          rect.left < slideRect.left - 2 ||
          rect.right > slideRect.right + 2 ||
          rect.top < slideRect.top - 2 ||
          rect.bottom > slideRect.bottom + 2
        );
      })
      .map((element) => element.textContent?.trim());

    return {
      centerDelta: Math.abs(slideRect.left - (window.innerWidth - slideRect.right)),
      contentCenterDelta: Math.abs(
        fitRect.left - contentBounds.left - (contentBounds.right - fitRect.right),
      ),
      clippedText,
      documentScroll:
        document.documentElement.scrollWidth > window.innerWidth + 1 ||
        document.documentElement.scrollHeight > window.innerHeight + 1,
      layoutInside:
        layoutRect.left >= slideRect.left - 2 &&
        layoutRect.right <= slideRect.right + 2 &&
        layoutRect.top >= slideRect.top - 2 &&
        layoutRect.bottom <= slideRect.bottom + 2,
      overlappingChildren,
      slideInsideStage:
        slideRect.left >= stageRect.left - 1 &&
        slideRect.right <= stageRect.right + 1 &&
        slideRect.top >= stageRect.top - 1 &&
        slideRect.bottom <= stageRect.bottom + 1,
      slideOverflow: getComputedStyle(slide).overflow,
      slideScrollLeft: slide.scrollLeft,
      slideScrollTop: slide.scrollTop,
      verticalUse: layoutRect.height / Math.max(1, contentBounds.bottom - contentBounds.top),
    };
  }, mode);

  expect(metrics.documentScroll).toBe(false);
  expect(metrics.slideOverflow).toBe("hidden");
  expect(metrics.slideScrollLeft).toBe(0);
  expect(metrics.slideScrollTop).toBe(0);
  expect(metrics.slideInsideStage).toBe(true);
  expect(metrics.layoutInside).toBe(true);
  expect(metrics.overlappingChildren).toBe(false);
  expect(metrics.clippedText).toEqual([]);
  expect(metrics.verticalUse).toBeGreaterThanOrEqual(0.72);
  if (mode === "audience") {
    expect(metrics.centerDelta).toBeLessThanOrEqual(1);
    expect(metrics.contentCenterDelta).toBeLessThanOrEqual(2);
  }
}

async function expectV2Layout(page: Page) {
  const metrics = await page.evaluate(() => {
    const frame = document.querySelector<HTMLElement>("article");
    const viewport = document.querySelector<HTMLElement>(
      '[data-testid="audience-fit-viewport"]',
    );
    if (!frame || !viewport) throw new Error("Metriche V2 mancanti");
    const frameRect = frame.getBoundingClientRect();
    const viewportRect = viewport.getBoundingClientRect();
    return {
      centerDelta: Math.abs(
        frameRect.left - viewportRect.left - (viewportRect.right - frameRect.right),
      ),
      documentScroll:
        document.documentElement.scrollWidth > window.innerWidth + 1 ||
        document.documentElement.scrollHeight > window.innerHeight + 1,
      frameInside:
        frameRect.left >= viewportRect.left - 1 &&
        frameRect.right <= viewportRect.right + 1 &&
        frameRect.top >= viewportRect.top - 1 &&
        frameRect.bottom <= viewportRect.bottom + 1,
      frameUse: frameRect.height / viewportRect.height,
    };
  });

  expect(metrics.documentScroll).toBe(false);
  expect(metrics.frameInside).toBe(true);
  expect(metrics.centerDelta).toBeLessThanOrEqual(1);
  expect(metrics.frameUse).toBeGreaterThanOrEqual(0.98);
}

test.beforeAll(() => {
  mkdirSync("artifacts", { recursive: true });
});

for (const viewport of [
  { width: 1600, height: 900, label: "1600x900" },
  { width: 1920, height: 1080, label: "1920x1080" },
]) {
  test(`STANDARD INTRO - programma completo aula ${viewport.label}`, async ({ page }) => {
    await page.setViewportSize(viewport);
    await prepareLegacyHarness(page, "audience");

    for (const slide of introSlides) {
      await renderLegacySlide(page, slide.title, "audience");
      await expect(page.getByText(slide.heading, { exact: true })).toBeVisible();
      await expectLegacyLayout(page, "audience");
      const slug = screenshotSlugs.get(slide.title);
      if (slug) {
        await page.screenshot({
          path: `artifacts/viewport-fit-complete-audience-${slug}-${viewport.label}.png`,
        });
      }
    }
  });
}

for (const viewport of [
  { width: 1600, height: 900, label: "1600x900" },
  { width: 1366, height: 768, label: "1366x768" },
]) {
  test(`STANDARD INTRO - programma completo docente ${viewport.label}`, async ({ page }) => {
    await page.setViewportSize(viewport);
    await prepareLegacyHarness(page, "teacher");

    for (const slide of introSlides) {
      await renderLegacySlide(page, slide.title, "teacher");
      await expect(page.getByText(slide.heading, { exact: true })).toBeVisible();
      await expectLegacyLayout(page, "teacher");
      const slug = screenshotSlugs.get(slide.title);
      if (slug) {
        await page.screenshot({
          path: `artifacts/viewport-fit-complete-teacher-${slug}-${viewport.label}.png`,
        });
      }
    }
  });
}

for (const viewport of [
  { width: 1600, height: 900, label: "1600x900" },
  { width: 1920, height: 1080, label: "1920x1080" },
]) {
  test(`STANDARD INTRO - V2 audience ${viewport.label}`, async ({ page }) => {
    await page.setViewportSize(viewport);

    for (const slideId of pilotLessonOrder) {
      await page.goto(`/?deck=pilot&mode=audience&slide=${slideId}`);
      await page.waitForFunction(() =>
        Boolean(
          document.querySelector<HTMLElement>('[data-testid="audience-fit-content"]')
            ?.dataset.fitScale,
        ),
      );
      await expectV2Layout(page);
      const slug = v2ScreenshotSlugs.get(slideId);
      if (slug) {
        await page.screenshot({
          path: `artifacts/viewport-fit-v2-audience-${slug}-${viewport.label}.png`,
        });
      }
    }
  });
}
