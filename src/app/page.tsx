import Link from "next/link";
import { GalleryGrid } from "@/components/GalleryGrid";
import { HelpCards } from "@/components/HelpCards";
import { Hero } from "@/components/Hero";
import { SwamiPortrait } from "@/components/SwamiPortrait";
import { SponsorLogos } from "@/components/SponsorSection";
import { event } from "@/data/event";
import { sponsors } from "@/data/sponsors";

export default function HomePage() {
  return (
    <>
      <Hero />

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <p className="eyebrow text-center">Get involved</p>
          <h2 className="section-title mt-2 text-center">How Can You Help?</h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-brown/85">
            RSVP to attend, sign up to volunteer, bring a dish, or support us
            with a donation.
          </p>
          <div className="mt-10">
            <HelpCards />
          </div>
        </div>
      </section>

      <section className="border-y border-amber/40 bg-white/40 py-16">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <p className="eyebrow">About the Event</p>
          <h2 className="section-title mt-2">
            With the Divine Blessings of
            <br />
            Sri Guru Raghavendra Swami
          </h2>
          <div className="mt-8 grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-brown/90">
                {event.orgName} ({event.orgShort}) is proud to announce the
                annual {event.name} — a sacred gathering of the Sri Raghavendra
                devotee community in Nashville.
              </p>
              <p className="mt-4 text-brown/90">
                The event features morning Pooja, Pravachana, a cultural
                program, community Prasadam, and evening Aarti. {event.association}.
              </p>
              <p className="mt-4 font-medium text-maroon">{event.dedication}</p>
              <Link href="/schedule" className="btn-primary mt-6 inline-flex">
                View Full Schedule →
              </Link>
            </div>
            <SwamiPortrait variant="about" />
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <p className="eyebrow">Past Events</p>
          <h2 className="section-title mt-2">
            See the Spirit of Our Community
          </h2>
          <p className="mt-3 max-w-2xl text-brown/85">
            Watch the highlights from Raayara Aaradhana Mahotsava 2025 — moments
            of devotion, joy, and togetherness.
          </p>
          <div className="mt-8 aspect-video overflow-hidden rounded-xl border border-amber/50 shadow-lg">
            <iframe
              src={event.highlightVideoUrl}
              title="Event highlights 2025"
              className="h-full w-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {event.highlightClips.map((clip) => {
              const platformLabel =
                clip.platform === "facebook" ? "Facebook" : "YouTube";
              const isLink = clip.url && clip.url !== "#";
              const inner = (
                <>
                  <span className="text-2xl">▶</span>
                  <div>
                    <p className="font-bold text-maroon-deep">{clip.title}</p>
                    <p className="text-xs text-brown/70">
                      {clip.duration} · {platformLabel}
                    </p>
                  </div>
                </>
              );
              if (!isLink) {
                return (
                  <div
                    key={clip.title}
                    className="card flex items-center gap-3 opacity-70"
                  >
                    {inner}
                  </div>
                );
              }
              return (
                <a
                  key={clip.title}
                  href={clip.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card flex items-center gap-3 transition hover:border-saffron"
                >
                  {inner}
                </a>
              );
            })}
          </div>
          <p className="mt-6 text-center">
            <a
              href={event.youtubeChannelUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-maroon underline"
            >
              View YouTube Channel →
            </a>
          </p>
        </div>
      </section>

      <section className="border-t border-amber/40 bg-amber/20 py-16">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <p className="eyebrow text-center">Program</p>
          <h2 className="section-title mt-2 text-center">What to Expect</h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-brown/85">
            A full day of meaningful activities for the whole family.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {event.whatToExpect.map((item) => (
              <div key={item.title} className="card">
                <span className="text-3xl" aria-hidden>
                  {item.icon}
                </span>
                <h3 className="mt-3 text-lg font-bold text-maroon-deep">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-brown/85">{item.description}</p>
                <p className="mt-3 text-sm font-bold text-saffron">{item.time}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <p className="eyebrow text-center">Memories</p>
          <h2 className="section-title mt-2 text-center">
            Photos from Past Events
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-brown/85">
            A glimpse of the joy, devotion, and community from Raayara Aaradhana
            Mahotsava 2025.
          </p>
          <div className="mt-10">
            <GalleryGrid />
          </div>
        </div>
      </section>

      <section className="border-t border-amber/40 bg-maroon/5 py-16">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <p className="eyebrow text-center">Gratitude</p>
          <h2 className="section-title mt-2 text-center">
            Thank You to Our Sponsors
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-brown/85">
            Generous community members who make this event possible.
          </p>
          <div className="mt-10">
            <SponsorLogos sponsors={sponsors} />
          </div>
          <p className="mt-8 text-center">
            <Link href="/sponsor" className="btn-saffron">
              Become a Sponsor →
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
