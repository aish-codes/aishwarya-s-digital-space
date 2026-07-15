// Generates public/favicon.ico and public/apple-touch-icon.png from public/favicon.svg.
//
// Like the resume and OG card, this is NOT part of `npm run build` (no Chrome on Vercel) —
// the generated icons are committed. Edit public/favicon.svg, run `npm run icons`, commit.
//
// Chrome rasterises each size individually rather than downscaling one large bitmap, so the
// small sizes stay crisp instead of turning to mush.
import { execFile } from "node:child_process";
import fs from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { promisify } from "node:util";

const execFileAsync = promisify(execFile);

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const source = path.join(root, "public", "favicon.svg");
const icoOut = path.join(root, "public", "favicon.ico");
const appleOut = path.join(root, "public", "apple-touch-icon.png");

const ICO_SIZES = [16, 32, 48, 256];
const APPLE_SIZE = 180;

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

/** Renders the SVG at exactly size x size and returns the PNG bytes. */
async function render(chrome, svg, tmpDir, size) {
  const page = path.join(tmpDir, `icon-${size}.html`);
  const out = path.join(tmpDir, `icon-${size}.png`);
  await fs.writeFile(
    page,
    `<html><head><style>html,body{margin:0;padding:0;width:${size}px;height:${size}px;overflow:hidden}svg{display:block;width:${size}px;height:${size}px}</style></head><body>${svg}</body></html>`,
  );
  await execFileAsync(chrome, [
    "--headless",
    "--disable-gpu",
    "--hide-scrollbars",
    "--default-background-color=00000000", // keep the rounded corners transparent
    `--screenshot=${out}`,
    `--window-size=${size},${size}`,
    pathToFileURL(page).href,
  ]);
  return fs.readFile(out);
}

/** Packs PNG buffers into a multi-size .ico (PNG-compressed entries, Vista+). */
function packIco(images) {
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0); // reserved
  header.writeUInt16LE(1, 2); // type: icon
  header.writeUInt16LE(images.length, 4);

  let offset = 6 + 16 * images.length;
  const entries = [];
  for (const { size, data } of images) {
    const entry = Buffer.alloc(16);
    entry.writeUInt8(size >= 256 ? 0 : size, 0); // 256 is encoded as 0
    entry.writeUInt8(size >= 256 ? 0 : size, 1);
    entry.writeUInt8(0, 2); // palette colours
    entry.writeUInt8(0, 3); // reserved
    entry.writeUInt16LE(1, 4); // colour planes
    entry.writeUInt16LE(32, 6); // bits per pixel
    entry.writeUInt32LE(data.length, 8);
    entry.writeUInt32LE(offset, 12);
    entries.push(entry);
    offset += data.length;
  }

  return Buffer.concat([header, ...entries, ...images.map((i) => i.data)]);
}

const svg = await fs.readFile(source, "utf8");
const chrome = await findChrome();
const tmpDir = await fs.mkdtemp(path.join(os.tmpdir(), "icons-"));

try {
  const images = [];
  for (const size of ICO_SIZES) {
    images.push({ size, data: await render(chrome, svg, tmpDir, size) });
  }

  const ico = packIco(images);
  await fs.writeFile(icoOut, ico);

  const apple = await render(chrome, svg, tmpDir, APPLE_SIZE);
  await fs.writeFile(appleOut, apple);

  console.log(
    `public/favicon.svg → favicon.ico (${ICO_SIZES.join("/")}, ${(ico.length / 1024).toFixed(1)} kB)`,
  );
  console.log(
    `public/favicon.svg → apple-touch-icon.png (${APPLE_SIZE}px, ${(apple.length / 1024).toFixed(1)} kB)`,
  );
  console.log("Remember to commit the regenerated icons.");
} finally {
  await fs.rm(tmpDir, { recursive: true, force: true });
}
