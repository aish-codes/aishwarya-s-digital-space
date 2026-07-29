import { StrictMode } from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import App from "./App.tsx";
import { blogPosts } from "./data/blogPosts";
import { galleries } from "./data/galleries";

// Consumed by scripts/prerender.mjs at build time.
export function render(url: string) {
  return renderToString(
    <StrictMode>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </StrictMode>,
  );
}

export interface PrerenderRoute {
  /** Route to render. */
  path: string;
  /** Path of the emitted file, relative to dist/. */
  out: string;
  /** Per-page <title>; null keeps the template's. */
  title: string | null;
  /** Per-page description; null keeps the template's. */
  description: string | null;
  /** og:type for the page. */
  ogType: string;
}

// Every route that gets baked to static HTML. Blog posts are included so the long-form
// content is crawlable rather than JS-only.
export function getRoutes(): PrerenderRoute[] {
  return [
    {
      path: "/",
      out: "index.html",
      title: null,
      description: null,
      ogType: "website",
    },
    ...blogPosts.map((post) => ({
      // Emitted as a directory index so Vercel serves it at the extensionless URL.
      path: `/blog/${post.id}`,
      out: `blog/${post.id}/index.html`,
      title: `${post.title} | Aishwarya`,
      description: post.excerpt,
      ogType: "article",
    })),
    ...galleries.map((gallery) => ({
      path: `/blog/${gallery.id}`,
      out: `blog/${gallery.id}/index.html`,
      title: `${gallery.title} | Aishwarya`,
      description: gallery.excerpt,
      ogType: "article",
    })),
  ];
}
