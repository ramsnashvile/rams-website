"use client";

import Link from "next/link";
import { useEffect } from "react";

declare global {
  interface Window {
    Tally?: {
      loadEmbeds: () => void;
    };
  }
}

type TallyEmbedProps = {
  url: string;
  title?: string;
  minHeight?: number;
  /** Resize iframe to fit form content (requires Tally embed script). */
  dynamicHeight?: boolean;
};

/** Convert tally.so/r/ID share links to tally.so/embed/ID for iframes. */
function toTallyEmbedUrl(url: string, dynamicHeight: boolean): string {
  let embedUrl = url;

  if (!url.includes("/embed/")) {
    const match = url.match(/tally\.so\/(?:r\/|forms\/)([A-Za-z0-9]+)/);
    if (match) {
      const [, formId] = match;
      const queryIndex = url.indexOf("?");
      const query = queryIndex >= 0 ? url.slice(queryIndex) : "";
      embedUrl = `https://tally.so/embed/${formId}${query}`;
    }
  }

  if (!dynamicHeight) {
    return embedUrl;
  }

  const parsed = new URL(embedUrl);
  parsed.searchParams.set("dynamicHeight", "1");
  return parsed.toString();
}

const TALLY_EMBED_SCRIPT = "https://tally.so/widgets/embed.js";

function loadTallyEmbeds() {
  if (typeof window.Tally !== "undefined") {
    window.Tally.loadEmbeds();
    return;
  }

  document
    .querySelectorAll<HTMLIFrameElement>("iframe[data-tally-src]:not([src])")
    .forEach((iframe) => {
      if (iframe.dataset.tallySrc) {
        iframe.src = iframe.dataset.tallySrc;
      }
    });
}

export function TallyEmbed({
  url,
  title = "Form",
  minHeight = 600,
  dynamicHeight = true,
}: TallyEmbedProps) {
  const embedSrc = url ? toTallyEmbedUrl(url, dynamicHeight) : "";

  useEffect(() => {
    if (!embedSrc || !dynamicHeight) {
      return;
    }

    if (typeof window.Tally !== "undefined") {
      loadTallyEmbeds();
      return;
    }

    const existingScript = document.querySelector(
      `script[src="${TALLY_EMBED_SCRIPT}"]`,
    );

    if (existingScript) {
      loadTallyEmbeds();
      return;
    }

    const script = document.createElement("script");
    script.src = TALLY_EMBED_SCRIPT;
    script.async = true;
    script.onload = loadTallyEmbeds;
    script.onerror = loadTallyEmbeds;
    document.body.appendChild(script);
  }, [embedSrc, dynamicHeight]);

  if (!url) {
    return (
      <div className="card flex flex-col items-center justify-center gap-4 text-center">
        <span className="text-4xl" aria-hidden>
          📋
        </span>
        <h3 className="text-lg font-bold text-maroon-deep">{title}</h3>
        <p className="max-w-md text-sm text-brown/80">
          Add your Tally form URL in{" "}
          <code className="rounded bg-amber/30 px-1">src/data/event.ts</code>{" "}
          (e.g. <code className="rounded bg-amber/30 px-1">rsvpTallyUrl</code>).
          Create a free form at{" "}
          <a
            href="https://tally.so"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-maroon underline"
          >
            tally.so
          </a>
          , then paste the embed URL here.
        </p>
      </div>
    );
  }

  if (dynamicHeight) {
    return (
      <iframe
        data-tally-src={embedSrc}
        title={title}
        className="w-full rounded-xl border border-amber/50 bg-white"
        style={{ minHeight, height: minHeight }}
        loading="lazy"
      />
    );
  }

  return (
    <iframe
      src={embedSrc}
      title={title}
      className="w-full rounded-xl border border-amber/50 bg-white"
      style={{ minHeight }}
      loading="lazy"
    />
  );
}

export function ExternalSignupLink({
  url,
  label,
}: {
  url: string;
  label: string;
}) {
  if (!url) return null;
  return (
    <p className="mt-4 text-center">
      <Link
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="font-bold text-maroon underline hover:text-maroon-deep"
      >
        {label} →
      </Link>
    </p>
  );
}
