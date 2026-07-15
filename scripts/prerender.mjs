// Bakes each route into static HTML, so the deployed pages contain real content instead
// of an empty <div id="root">. Runs after `build:client` and `build:server` — see the
// build script in package.json.
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const distDir = path.join(root, "dist");
const serverEntry = path.join(root, ".prerender", "entry-server.js");
const templatePath = path.join(distDir, "index.html");
const ROOT_DIV = '<div id="root"></div>';
const SEO_MARKER = "<!--seo-urls-->";

// Vercel sets VERCEL_PROJECT_PRODUCTION_URL to the production domain (the custom
// domain if one is attached, otherwise the .vercel.app one). SITE_URL overrides it.
// Absolute-URL tags are emitted only when the domain is actually known — a wrong
// canonical is worse than no canonical.
function resolveSiteUrl() {
  const explicit = process.env.SITE_URL;
  if (explicit) return explicit.replace(/\/$/, "");

  const vercel = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  if (vercel) return `https://${vercel.replace(/\/$/, "")}`;

  return null;
}

const escapeHtml = (s) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

function personJsonLd(siteUrl) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Aishwarya",
    jobTitle: "AI Engineer",
    email: "mailto:aishmooc@gmail.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Delhi",
      addressCountry: "IN",
    },
    knowsAbout: [
      "Generative AI",
      "Large Language Models",
      "Retrieval-Augmented Generation",
      "Agentic AI",
      "LangChain",
      "LangGraph",
      "Azure AI Search",
      "Azure OpenAI",
      "Machine Learning",
      "Data Science",
      "Python",
      "SQL",
      "R",
      "Alteryx",
      "Snowflake",
    ],
    // Keep in sync with the social links in HeroSection/Footer — this is how search
    // engines tie the site to the same person across platforms.
    sameAs: [
      "https://www.linkedin.com/in/aishwaryasharma2/",
      "https://github.com/aish-codes",
      "https://x.com/AishIdiot",
      "https://www.youtube.com/@aishidiot",
      "https://instagram.com/aishidiot",
    ],
    ...(siteUrl ? { url: siteUrl } : {}),
  };
}

function seoTags(siteUrl, route) {
  const tags = [];

  if (siteUrl) {
    const pageUrl = `${siteUrl}${route.path === "/" ? "/" : route.path}`;
    const ogImage = `${siteUrl}/og-image.png`;
    tags.push(
      `<link rel="canonical" href="${pageUrl}" />`,
      `<meta property="og:url" content="${pageUrl}" />`,
      `<meta property="og:image" content="${ogImage}" />`,
      `<meta property="og:image:width" content="1200" />`,
      `<meta property="og:image:height" content="630" />`,
      `<meta property="og:image:alt" content="Aishwarya — AI Engineer, Delhi, India" />`,
      `<meta name="twitter:image" content="${ogImage}" />`,
    );
  }

  tags.push(
    `<script type="application/ld+json">${JSON.stringify(personJsonLd(siteUrl))}</script>`,
  );

  return tags.join("\n    ");
}

/** Applies per-page title/description/og:type over the template's defaults. */
function applyRouteMeta(html, route) {
  let out = html;

  if (route.title) {
    const title = escapeHtml(route.title);
    out = out
      .replace(/<title>[^<]*<\/title>/, `<title>${title}</title>`)
      .replace(
        /(<meta property="og:title" content=")[^"]*(")/,
        `$1${title}$2`,
      )
      .replace(
        /(<meta name="twitter:title" content=")[^"]*(")/,
        `$1${title}$2`,
      );
  }

  if (route.description) {
    const desc = escapeHtml(route.description);
    out = out
      .replace(/(<meta\s+name="description"\s+content=")[^"]*(")/s, `$1${desc}$2`)
      .replace(/(<meta\s+property="og:description"\s+content=")[^"]*(")/s, `$1${desc}$2`)
      .replace(/(<meta\s+name="twitter:description"\s+content=")[^"]*(")/s, `$1${desc}$2`);
  }

  return out.replace(
    /(<meta property="og:type" content=")[^"]*(")/,
    `$1${route.ogType}$2`,
  );
}

async function writeSitemap(siteUrl, routes) {
  const today = new Date().toISOString().slice(0, 10);
  const urls = routes
    .map(
      (r) => `  <url>
    <loc>${siteUrl}${r.path === "/" ? "/" : r.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${r.path === "/" ? "1.0" : "0.8"}</priority>
  </url>`,
    )
    .join("\n");

  await fs.writeFile(
    path.join(distDir, "sitemap.xml"),
    `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`,
  );

  const robotsPath = path.join(distDir, "robots.txt");
  const robots = await fs.readFile(robotsPath, "utf8");
  if (!robots.includes("Sitemap:")) {
    await fs.writeFile(
      robotsPath,
      `${robots.trimEnd()}\n\nSitemap: ${siteUrl}/sitemap.xml\n`,
    );
  }
}

const { render, getRoutes } = await import(pathToFileURL(serverEntry).href);

const template = await fs.readFile(templatePath, "utf8");
if (!template.includes(ROOT_DIV)) {
  throw new Error(
    `Could not find ${ROOT_DIV} in dist/index.html — prerendered markup would be dropped.`,
  );
}

const siteUrl = resolveSiteUrl();
const routes = getRoutes();

for (const route of routes) {
  const appHtml = render(route.path);
  if (!appHtml.trim()) {
    throw new Error(`Server render produced empty markup for ${route.path}`);
  }

  const html = applyRouteMeta(
    template
      .replace(ROOT_DIV, `<div id="root">${appHtml}</div>`)
      .replace(SEO_MARKER, seoTags(siteUrl, route)),
    route,
  );

  const outPath = path.join(distDir, route.out);
  await fs.mkdir(path.dirname(outPath), { recursive: true });
  await fs.writeFile(outPath, html);
  console.log(
    `prerendered ${route.path.padEnd(34)} → dist/${route.out} (${appHtml.length} chars)`,
  );
}

if (siteUrl) {
  await writeSitemap(siteUrl, routes);
}

// The SSR bundle is a build-time tool, not something to deploy.
await fs.rm(path.join(root, ".prerender"), { recursive: true, force: true });

console.log(
  siteUrl
    ? `site URL: ${siteUrl} (canonical, og:url, og:image, sitemap.xml written)`
    : "site URL unknown — skipped canonical/og:url/og:image/sitemap.\n" +
      "  Set SITE_URL (or deploy on Vercel, which sets VERCEL_PROJECT_PRODUCTION_URL) to emit them.",
);
