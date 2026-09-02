import { copyFileSync, existsSync, readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";

const [sourceDirArg, targetRootArg, versionArg] = process.argv.slice(2);
if (!sourceDirArg || !targetRootArg || !versionArg) {
  console.error("Uso: node sync-legacy-publish.mjs <sourceDir> <targetRoot> <version>");
  process.exit(1);
}

const sourceDir = resolve(sourceDirArg);
const targetRoot = resolve(targetRootArg);
const manifestPath = resolve(sourceDir, "manifest.json");
const indexPath = resolve(targetRoot, "index.html");

if (!existsSync(manifestPath)) throw new Error("Manifest legacy mancante");
if (!existsSync(indexPath)) throw new Error("index.html del programma completo mancante");

const manifest = JSON.parse(readFileSync(manifestPath, "utf8"));
const scripts = manifest.entries.map((entry) => entry.script);

for (const script of scripts) {
  const source = resolve(sourceDir, script);
  const target = resolve(targetRoot, script);
  if (!existsSync(source)) throw new Error(`Adapter legacy mancante: ${script}`);
  copyFileSync(source, target);
}

const startMarker = "<!-- V2_LEGACY_SYNC_START -->";
const endMarker = "<!-- V2_LEGACY_SYNC_END -->";
let lines = readFileSync(indexPath, "utf8").split(/\r?\n/);

let insideManagedBlock = false;
lines = lines.filter((line) => {
  if (line.includes(startMarker)) {
    insideManagedBlock = true;
    return false;
  }
  if (line.includes(endMarker)) {
    insideManagedBlock = false;
    return false;
  }
  if (insideManagedBlock) return false;
  return !scripts.some((script) => line.includes(`<script src="${script}`));
});

const anchorIndex = lines.findIndex((line) => line.includes('<script src="intro-fix.js'));
if (anchorIndex < 0) throw new Error("Punto di inserimento intro-fix.js non trovato in index.html");

const managedBlock = [
  startMarker,
  ...scripts.map((script) => `<script src="${script}?v=${versionArg}"></script>`),
  endMarker,
];
lines.splice(anchorIndex + 1, 0, ...managedBlock);

writeFileSync(indexPath, `${lines.join("\n")}\n`, "utf8");
console.log(`Programma completo sincronizzato con ${scripts.length} slide V2.`);
