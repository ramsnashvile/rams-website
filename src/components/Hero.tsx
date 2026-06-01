import Link from "next/link";
import { SwamiPortrait } from "@/components/SwamiPortrait";
import { VenueLink } from "@/components/VenueLink";
import { event } from "@/data/event";

export function Hero() {
  return (
    <section className="relative min-h-[85vh] overflow-hidden bg-maroon-deep text-parchment">
      {event.useHeroVideo && event.heroVideoUrl ? (
        <video
          autoPlay
          muted
          loop
          playsInline
          poster={event.heroPosterUrl}
          className="absolute inset-0 h-full w-full object-cover opacity-50"
        >
          <source src={event.heroVideoUrl} type="video/mp4" />
        </video>
      ) : (
        <div
          className="absolute inset-0 bg-gradient-to-br from-maroon-deep via-maroon to-maroon-deep/90"
          style={{
            backgroundImage: `radial-gradient(ellipse at 30% 20%, rgba(224,120,32,0.25) 0%, transparent 50%),
              radial-gradient(ellipse at 70% 80%, rgba(123,26,0,0.4) 0%, transparent 45%)`,
          }}
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-maroon-deep via-maroon-deep/70 to-transparent" />

      <div className="relative mx-auto flex max-w-6xl flex-col items-center px-4 py-20 text-center md:px-6 md:py-28 lg:flex-row lg:items-center lg:text-left">
        <div className="flex-1">
          <p className="font-kannada text-lg text-saffron md:text-xl">
            {event.heroKannada}
          </p>
          <p className="mt-2 text-sm uppercase tracking-widest text-parchment/80">
            {event.heroSubtitle}
          </p>
          <h1 className="mt-6 font-display text-4xl font-black leading-tight md:text-5xl lg:text-6xl">
            {event.name}
            <br />
            <span className="text-saffron">{event.year}</span>
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-parchment/90 lg:mx-0">
            {event.tagline}
          </p>
          <ul className="mt-6 space-y-2 text-sm md:text-base">
            <li>📅 {event.date}</li>
            <li>
              <VenueLink />
            </li>
            <li>🕘 {event.time}</li>
          </ul>
          <div className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">
            <Link href="/rsvp" className="btn-saffron">
              RSVP — It&apos;s Free →
            </Link>
            <Link href="/schedule" className="btn-secondary border-parchment text-parchment hover:bg-white/10">
              View Schedule
            </Link>
            <Link href="/sponsor" className="btn-secondary border-parchment text-parchment hover:bg-white/10">
              Donate / Sponsor
            </Link>
          </div>
          <p className="mt-6 text-xs text-parchment/70">{event.association}</p>
        </div>

        <div className="mt-12 shrink-0 lg:mt-0">
          <SwamiPortrait variant="hero" />
        </div>
      </div>

      <div className="relative border-t border-parchment/10 bg-maroon-deep/80">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-4 px-4 py-8 md:grid-cols-4 md:px-6">
          {[
            { value: event.stats.attendees, label: "Attendees expected" },
            { value: event.stats.programs, label: "Program segments" },
            { value: event.stats.volunteerSlots, label: "Volunteer slots open" },
            { value: event.stats.saveTheDate, label: "Save the date" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-display text-2xl font-black text-saffron md:text-3xl">
                {stat.value}
              </p>
              <p className="mt-1 text-xs text-parchment/75">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
