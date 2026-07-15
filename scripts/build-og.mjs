// Renders assets/og-image.svg to public/og-image.png (1200x630) using headless Chrome.
//
// Like the resume, this is NOT part of `npm run build` — the Vercel build image has no
// Chrome, so the PNG is committed. Edit the SVG, run `npm run og`, commit the result.
//
// Chrome is used rather than a rasteriser because it renders the SVG exactly as a browser
// does, including the system fonts the card relies on.
import { execFile } from "node:child_process";
import fs from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { promisify } from "node:util";

const execFileAsync = promisify(execFile);

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const source = path.join(root, "assets", "og-image.svg");
const output = path.join(root, "public", "og-image.png");
const WIDTH = 1200;
const HEIGHT = 630;

const CHROME_CANDIDATES = [
  process.env.CHROME_PATH,
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  "/Applications/Chromium.app/Contents/MacOS/Chromium",
  "/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge",
  "/usr/bin/google-chrome",
  "/usr/bin/chromium",
  "/usr/bin/chromium-browser",
].filter(Boolean);

async function findChrome() {
  for (const candidate of CHROME_CANDIDATES) {
    try {
      await fs.access(candidate);
      return candidate;
    } catch {
      // try the next one
    }
  }
  throw new Error(
    "No Chrome/Chromium found. Set CHROME_PATH to your browser binary and retry.",
  );
}

const svg = await fs.readFile(source, "utf8");
const chrome = await findChrome();

// Wrap the SVG in a zero-margin page so the screenshot is exactly 1200x630 with no padding.
const tmpDir = await fs.mkdtemp(path.join(os.tmpdir(), "og-"));
const page = path.join(tmpDir, "og.html");
await fs.writeFile(
  page,
  `<html><head><style>html,body{margin:0;padding:0;width:${WIDTH}px;height:${HEIGHT}px;overflow:hidden}</style></head><body>${svg}</body></html>`,
);

try {
  await execFileAsync(chrome, [
    "--headless",
    "--disable-gpu",
    "--hide-scrollbars",
    `--screenshot=${output}`,
    `--window-size=${WIDTH},${HEIGHT}`,
    pathToFileURL(page).href,
  ]);
} finally {
  await fs.rm(tmpDir, { recursive: true, force: true });
}

const { size } = await fs.stat(output);
if (size === 0) throw new Error("Chrome produced an empty PNG.");

console.log(`assets/og-image.svg → public/og-image.png (${(size / 1024).toFixed(1)} kB)`);
console.log("Remember to commit the regenerated PNG.");
