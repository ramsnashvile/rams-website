import { PageHeader } from "@/components/PageHeader";
import { shlokas } from "@/data/shlokas";

export const metadata = {
  title: "Shlokas",
};

export default function ShlokasPage() {
  return (
    <>
      <PageHeader
        eyebrow="Resources"
        title="Shlokas"
        subtitle="Devotional verses for daily remembrance. Edit src/data/shlokas.ts to add more."
      />

      <section className="py-12">
        <div className="mx-auto max-w-3xl space-y-8 px-4 md:px-6">
          {shlokas.map((shloka) => (
            <article key={shloka.id} className="card">
              <h2 className="text-xl font-bold text-maroon-deep">
                {shloka.title}
              </h2>
              {shloka.kannada && (
                <p className="mt-4 font-kannada text-lg leading-relaxed text-maroon">
                  {shloka.kannada}
                </p>
              )}
              {shloka.devanagari && (
                <p className="mt-3 text-lg leading-relaxed text-maroon/90">
                  {shloka.devanagari}
                </p>
              )}
              <p className="mt-4 font-medium italic leading-relaxed text-brown">
                {shloka.transliteration}
              </p>
              <p className="mt-3 text-brown/85">{shloka.translation}</p>
              {shloka.source && (
                <p className="mt-3 text-xs font-semibold text-saffron">
                  — {shloka.source}
                </p>
              )}
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
