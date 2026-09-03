import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";

const v2Root = process.cwd();
const manifestPath = resolve(v2Root, "legacy-publish/manifest.json");
const pilotSlidesPath = resolve(v2Root, "src/course/pilotSlides.ts");

function fail(message) {
  console.error(`LEGACY PUBLISH VALIDATION FAILED: ${message}`);
  process.exit(1);
}

if (!existsSync(manifestPath)) fail("manifest.json mancante");
if (!existsSync(pilotSlidesPath)) fail("pilotSlides.ts mancante");

const manifest = JSON.parse(readFileSync(manifestPath, "utf8"));
if (!Array.isArray(manifest.entries) || manifest.entries.length === 0) {
  fail("manifest.entries deve contenere almeno una slide");
}

const slideIds = manifest.entries.map((entry) => entry.slideId);
const scripts = manifest.entries.map((entry) => entry.script);
const assets = manifest.assets ?? [];
const styles = manifest.styles ?? [];
const runtimeScripts = manifest.runtimeScripts ?? [];

if (new Set(slideIds).size !== slideIds.length) fail("slideId duplicato nel manifest");
if (new Set(scripts).size !== scripts.length) fail("script duplicato nel manifest");
if (!Array.isArray(assets)) fail("manifest.assets deve essere un array");
if (new Set(assets).size !== assets.length) fail("asset duplicato nel manifest");
if (!Array.isArray(styles)) fail("manifest.styles deve essere un array");
if (new Set(styles).size !== styles.length) fail("foglio stile duplicato nel manifest");
if (!Array.isArray(runtimeScripts)) fail("manifest.runtimeScripts deve essere un array");
if (new Set(runtimeScripts).size !== runtimeScripts.length) {
  fail("script runtime duplicato nel manifest");
}

for (const [label, files] of [
  ["asset", assets],
  ["foglio stile", styles],
  ["script runtime", runtimeScripts],
]) {
  for (const file of files) {
    if (typeof file !== "string" || !file) fail(`nome ${label} mancante`);
    if (file.includes("/") || file.includes("..")) {
      fail(`nome ${label} non valido: ${file}`);
    }
    if (!existsSync(resolve(v2Root, "legacy-publish", file))) {
      fail(`${label} legacy mancante: ${file}`);
    }
  }
}

for (const entry of manifest.entries) {
  if (!entry.slideId || !entry.script) fail("ogni voce deve avere slideId e script");
  if (entry.script.includes("/") || entry.script.includes("..")) {
    fail(`nome script non valido: ${entry.script}`);
  }
  if (!existsSync(resolve(v2Root, "legacy-publish", entry.script))) {
    fail(`adapter legacy mancante per ${entry.slideId}: ${entry.script}`);
  }
}

const pilotSource = readFileSync(pilotSlidesPath, "utf8");
const orderMatch = pilotSource.match(
  /export const pilotLessonOrder:[\s\S]*?=\s*\[([\s\S]*?)\];/,
);
if (!orderMatch) fail("pilotLessonOrder non trovato");

const pilotIds = [...orderMatch[1].matchAll(/"([^"]+)"/g)].map((match) => match[1]);
const missing = pilotIds.filter((id) => !slideIds.includes(id));
const extra = slideIds.filter((id) => !pilotIds.includes(id));

if (missing.length) fail(`slide V2 senza copia programma completo: ${missing.join(", ")}`);
if (extra.length) fail(`manifest contiene slide non presenti nel pilot: ${extra.join(", ")}`);

if (pilotIds.length !== slideIds.length || pilotIds.some((id, index) => slideIds[index] !== id)) {
  fail(
    `ordine manifest diverso da pilotLessonOrder. Atteso: ${pilotIds.join(" -> ")}. Manifest: ${slideIds.join(" -> ")}`,
  );
}

console.log(
  `Legacy publish package OK: ${pilotIds.length} slide, ${styles.length} fogli stile, ${runtimeScripts.length} script runtime e ${assets.length} asset verificati.`,
);
