// Renders resume/resume.html to public/resume.pdf using headless Chrome.
//
// Deliberately NOT part of `npm run build`: the Vercel build image has no Chrome, so the
// generated PDF is committed to the repo instead. Edit resume/resume.html, run
// `npm run resume`, and commit the regenerated PDF.
import { execFile } from "node:child_process";
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { promisify } from "node:util";

const execFileAsync = promisify(execFile);

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const source = path.join(root, "resume", "resume.html");
const output = path.join(root, "public", "resume.pdf");

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

await fs.access(source);
const chrome = await findChrome();

await execFileAsync(chrome, [
  "--headless",
  "--disable-gpu",
  "--no-pdf-header-footer",
  `--print-to-pdf=${output}`,
  pathToFileURL(source).href,
]);

const { size } = await fs.stat(output);
if (size === 0) throw new Error("Chrome produced an empty PDF.");

console.log(`resume/resume.html → public/resume.pdf (${(size / 1024).toFixed(1)} kB)`);
console.log("Remember to commit the regenerated PDF.");
