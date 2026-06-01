import Link from "next/link";

type TallyEmbedProps = {
  url: string;
  title?: string;
  minHeight?: number;
};

export function TallyEmbed({ url, title = "Form", minHeight = 600 }: TallyEmbedProps) {
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

  const embedSrc = url.includes("/embed")
    ? url
    : url.replace("tally.so/", "tally.so/embed/");

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
