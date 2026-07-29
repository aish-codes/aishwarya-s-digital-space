import { useEffect, useRef } from "react";

// Renders one Getty Images official embed. An empty `embed` renders a numbered
// placeholder so the gallery is reviewable before real photos are added.
//
// Getty's dialog offers two embed codes and they render differently:
//
//   • Standard — a self-contained <iframe> with the signature in its URL. Rendered
//     verbatim, so it lands in the prerendered HTML and shows even with JS disabled.
//     Preferred.
//
//   • Legacy — an <a class="gie-single"> plus a script that calls gie.widgets.load()
//     and pulls in widgets.js. React won't run injected <script> tags, so we parse the
//     load() params and drive Getty's widget loader ourselves, after hydration. Needs
//     JS and isn't in the prerendered HTML, but still displays for real visitors.
//
// Both are accepted so a stray legacy paste doesn't silently render blank. Either way the
// server and initial client render are identical, so hydration stays clean.

interface GettyWidgets {
  widgets: { load: (params: Record<string, unknown>) => void };
}
type GieFn = ((cb: () => void) => void) & { q?: unknown[] } & Partial<GettyWidgets>;

declare global {
  interface Window {
    gie?: GieFn;
  }
}

const WIDGETS_SRC = "//embed-cdn.gettyimages.com/widgets.js";

/** Pulls the anchor markup and load() params out of a legacy (script-widget) snippet. */
function parseLegacyEmbed(embed: string) {
  const anchor = embed.match(/<a\b[^>]*class=['"][^'"]*gie-[^'"]*['"][^>]*>[\s\S]*?<\/a>/i);
  const block = embed.match(/gie\.widgets\.load\(\s*(\{[\s\S]*?\})\s*\)/);
  if (!anchor || !block) return null;

  const grab = (key: string) => {
    const m = block[1].match(new RegExp(`${key}\\s*:\\s*['"]([^'"]*)['"]`));
    return m ? m[1] : undefined;
  };

  const id = grab("id");
  const sig = grab("sig");
  const items = grab("items");
  if (!id || !sig || !items) return null;

  return {
    anchorHtml: anchor[0],
    params: {
      id,
      sig,
      items,
      w: grab("w"),
      h: grab("h"),
      tld: grab("tld") ?? "com",
      caption: true,
      is360: false,
    },
  };
}

function ensureWidgetsScript() {
  window.gie =
    window.gie ||
    (((c: () => void) => {
      (window.gie!.q = window.gie!.q || []).push(c);
    }) as GieFn);

  if (!document.querySelector(`script[src="${WIDGETS_SRC}"]`)) {
    const s = document.createElement("script");
    s.src = WIDGETS_SRC;
    s.async = true;
    document.body.appendChild(s);
  }
}

interface GettyEmbedProps {
  /** Exact snippet from Getty's </> Embed button, standard or legacy. "" = placeholder. */
  embed: string;
  caption: string;
  index: number;
}

export const GettyEmbed = ({ embed, caption, index }: GettyEmbedProps) => {
  const holder = useRef<HTMLDivElement>(null);
  const trimmed = embed.trim();
  const hasEmbed = trimmed.length > 0;
  const isIframe = /<iframe/i.test(trimmed);

  useEffect(() => {
    // Only the legacy path needs JS; the iframe path is already rendered statically.
    if (!hasEmbed || isIframe) return;
    const el = holder.current;
    if (!el) return;

    const parsed = parseLegacyEmbed(trimmed);
    if (!parsed) {
      el.textContent = "Could not read this Getty embed code.";
      return;
    }

    el.innerHTML = parsed.anchorHtml;
    ensureWidgetsScript();
    window.gie!(() => window.gie!.widgets!.load(parsed.params));

    return () => {
      el.innerHTML = "";
    };
  }, [trimmed, hasEmbed, isIframe]);

  return (
    <figure className="my-10 md:my-16">
      {!hasEmbed ? (
        <div className="flex aspect-[3/2] w-full items-center justify-center rounded-lg border border-dashed border-border bg-card">
          <div className="text-center px-6">
            <p className="text-4xl font-bold text-muted-foreground/40">
              {String(index).padStart(2, "0")}
            </p>
            <p className="mt-2 text-xs uppercase tracking-widest text-muted-foreground/60">
              Getty photo — embed pending
            </p>
          </div>
        </div>
      ) : isIframe ? (
        // Standard: render Getty's markup verbatim (their terms allow resizing only).
        <div
          className="getty-embed text-center"
          dangerouslySetInnerHTML={{ __html: trimmed }}
        />
      ) : (
        // Legacy: filled by the effect above once the widget loads.
        <div ref={holder} className="getty-embed text-center [&_iframe]:max-w-full" />
      )}
      {caption && (
        <figcaption className="mt-3 text-sm text-muted-foreground text-center max-w-2xl mx-auto">
          {caption}
        </figcaption>
      )}
    </figure>
  );
};
