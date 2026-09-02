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

if (new Set(slideIds).size !== slideIds.length) fail("slideId duplicato nel manifest");
if (new Set(scripts).size !== scripts.length) fail("script duplicato nel manifest");

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

console.log(`Legacy publish package OK: ${pilotIds.length} slide coperte.`);
