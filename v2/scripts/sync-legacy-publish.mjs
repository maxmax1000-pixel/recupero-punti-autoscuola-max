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
const assets = manifest.assets ?? [];
const styles = manifest.styles ?? [];
const runtimeScripts = manifest.runtimeScripts ?? [];

for (const asset of [...assets, ...styles, ...runtimeScripts]) {
  const source = resolve(sourceDir, asset);
  const target = resolve(targetRoot, asset);
  if (!existsSync(source)) throw new Error(`File legacy mancante: ${asset}`);
  copyFileSync(source, target);
}

for (const script of scripts) {
  const source = resolve(sourceDir, script);
  const target = resolve(targetRoot, script);
  if (!existsSync(source)) throw new Error(`Adapter legacy mancante: ${script}`);
  copyFileSync(source, target);
}

let lines = readFileSync(indexPath, "utf8").split(/\r?\n/);

function removeManagedBlock(sourceLines, startMarker, endMarker) {
  let insideManagedBlock = false;
  return sourceLines.filter((line) => {
    if (line.includes(startMarker)) {
      insideManagedBlock = true;
      return false;
    }
    if (line.includes(endMarker)) {
      insideManagedBlock = false;
      return false;
    }
    return !insideManagedBlock;
  });
}

const styleStartMarker = "<!-- V2_LEGACY_STYLES_START -->";
const styleEndMarker = "<!-- V2_LEGACY_STYLES_END -->";
const slideStartMarker = "<!-- V2_LEGACY_SYNC_START -->";
const slideEndMarker = "<!-- V2_LEGACY_SYNC_END -->";
const runtimeStartMarker = "<!-- V2_LEGACY_RUNTIME_START -->";
const runtimeEndMarker = "<!-- V2_LEGACY_RUNTIME_END -->";

for (const [startMarker, endMarker] of [
  [styleStartMarker, styleEndMarker],
  [slideStartMarker, slideEndMarker],
  [runtimeStartMarker, runtimeEndMarker],
]) {
  lines = removeManagedBlock(lines, startMarker, endMarker);
}

lines = lines.filter(
  (line) =>
    !scripts.some((script) => line.includes(`<script src="${script}`)) &&
    !runtimeScripts.some((script) => line.includes(`<script src="${script}`)) &&
    !styles.some((style) => line.includes(`href="${style}`)),
);

const styleAnchorIndex = lines.findIndex((line) => line.includes('href="styles-layout.css'));
if (styleAnchorIndex < 0) throw new Error("Punto di inserimento styles-layout.css non trovato");

lines.splice(styleAnchorIndex + 1, 0, ...[
  styleStartMarker,
  ...styles.map((style) => `<link rel="stylesheet" href="${style}?v=${versionArg}" />`),
  styleEndMarker,
]);

const anchorIndex = lines.findIndex((line) => line.includes('<script src="intro-fix.js'));
if (anchorIndex < 0) throw new Error("Punto di inserimento intro-fix.js non trovato in index.html");

const managedBlock = [
  slideStartMarker,
  ...scripts.map((script) => `<script src="${script}?v=${versionArg}"></script>`),
  slideEndMarker,
];
lines.splice(anchorIndex + 1, 0, ...managedBlock);

const runtimeAnchorIndex = lines.findIndex((line) =>
  line.includes('<script src="app-runtime.js'),
);
if (runtimeAnchorIndex < 0) {
  throw new Error("Punto di inserimento app-runtime.js non trovato in index.html");
}

lines.splice(runtimeAnchorIndex + 1, 0, ...[
  runtimeStartMarker,
  ...runtimeScripts.map(
    (script) => `<script src="${script}?v=${versionArg}"></script>`,
  ),
  runtimeEndMarker,
]);

writeFileSync(indexPath, `${lines.join("\n")}\n`, "utf8");
console.log(
  `Programma completo sincronizzato con ${scripts.length} slide V2, ${styles.length} fogli stile, ${runtimeScripts.length} script runtime e ${assets.length} asset.`,
);
