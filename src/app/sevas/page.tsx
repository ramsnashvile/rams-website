import Image from "next/image";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { sevas } from "@/data/sevas";

export const metadata = {
  title: "Sevas",
};

function SevaImage({
  name,
  imageUrl,
}: {
  name: string;
  imageUrl?: string;
}) {
  if (!imageUrl) {
    return (
      <div className="flex h-44 items-center justify-center rounded-xl border border-amber/50 bg-gradient-to-br from-maroon/10 to-amber/20 text-4xl">
        🙏
      </div>
    );
  }

  return (
    <div className="relative h-44 overflow-hidden rounded-xl border border-amber/50">
      <Image src={imageUrl} alt={name} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
    </div>
  );
}

export default function SevasPage() {
  return (
    <>
      <PageHeader
        eyebrow="Aaraadhane 2026"
        title="Sevas"
        subtitle="Choose a seva to support the event. Seva name, price, description, and image are configurable in src/data/sevas.ts."
      />

      <section className="py-12">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <p className="mb-8 rounded-lg bg-amber/25 px-4 py-3 text-sm text-brown/85">
            Add seva images in <code className="rounded bg-white/60 px-1">public/sevas/</code> and set{" "}
            <code className="rounded bg-white/60 px-1">imageUrl</code> in{" "}
            <code className="rounded bg-white/60 px-1">src/data/sevas.ts</code>. Add{" "}
            <code className="rounded bg-white/60 px-1">bookingUrl</code> to enable Book Seva buttons.
          </p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {sevas.map((seva) => (
              <article key={seva.id} className="card">
                <SevaImage name={seva.name} imageUrl={seva.imageUrl} />
                <h2 className="mt-4 text-xl font-bold text-maroon-deep">{seva.name}</h2>
                <p className="mt-2 text-sm text-brown/85">{seva.description}</p>
                <p className="mt-4 text-lg font-extrabold text-saffron">${seva.price}</p>
                {seva.bookingUrl ? (
                  <Link
                    href={seva.bookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary mt-4 w-full"
                  >
                    Book Seva
                  </Link>
                ) : (
                  <button
                    type="button"
                    disabled
                    className="btn-primary mt-4 w-full cursor-not-allowed opacity-60"
                  >
                    Add booking URL in sevas.ts
                  </button>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
