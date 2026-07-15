# Aishwarya — AI Engineer Portfolio

Personal portfolio site. Built with Vite, React, TypeScript, Tailwind and shadcn/ui, and
prerendered to static HTML so crawlers and link previews see real content.

## Local development

```sh
npm install
npm run dev
```

The dev server runs at http://localhost:8080.

## Build

```sh
npm run build
```

This runs three steps in order:

1. `build:client` — the normal Vite client build into `dist/`.
2. `build:server` — an SSR bundle of `src/entry-server.tsx` into `.prerender/` (a throwaway
   build artifact, not deployed).
3. `prerender` — runs the server bundle, renders the app to an HTML string, and injects it
   into `dist/index.html`.

The result is that `dist/index.html` ships the fully rendered page instead of an empty
`<div id="root">`. React then hydrates it in the browser, so the nav, dark mode toggle and
smooth scrolling all still work.

Preview the built output with `npm run preview`.

## Deployment

Deployed on Vercel. Vercel auto-detects the Vite preset, runs `npm run build`, and serves
`dist/` — the prerender step is part of that build, so no extra configuration is needed.

## Why prerendering

A plain client-rendered SPA serves an empty `<div id="root">`. Googlebot can execute JS and
will eventually index it, but most other crawlers won't: LinkedIn, Twitter/X, Slack and
Discord link previews, and most AI crawlers read the raw HTML only. Prerendering makes the
content visible to all of them without giving up React.

## Resume

The "Download Resume" button serves `public/resume.pdf`. That PDF is generated from
`resume/resume.html`:

```sh
npm run resume
```

Edit `resume/resume.html`, re-run the command, and commit the regenerated PDF. Anything in
`[square brackets]` renders in red and marks a placeholder that still needs real
information — those are meant to be replaced, not shipped.

This is deliberately *not* part of `npm run build`: it shells out to headless Chrome, which
the Vercel build image doesn't have. The PDF is committed to the repo instead. Set
`CHROME_PATH` if the script can't find your browser.

The layout is tuned to fit exactly one A4 page with very little slack, so adding content
will likely push it to a second page. If that happens, either trim elsewhere or accept two
pages — `page-break-inside: avoid` on sections keeps the break tidy.

## Social preview image

`public/og-image.png` is the card shown when the site is linked on LinkedIn, Slack, etc.
It's generated from `assets/og-image.svg` the same way as the resume:

```sh
npm run og
```

Same caveat: not part of `npm run build`, so commit the regenerated PNG. If you change your
title or headline, update this too — it's easy to forget, since nothing on the site itself
displays it.

## Editing content

Page sections live in `src/components/` and are composed in `src/pages/Index.tsx`. Each
section keeps its data in a local array at the top of the file. `src/components/ui/` is
shadcn/ui primitives — generally not edited by hand.
