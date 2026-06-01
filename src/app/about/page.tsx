import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { SwamiPortrait } from "@/components/SwamiPortrait";
import { event } from "@/data/event";

const aboutLinks = [
  {
    href: "/about/mission",
    title: "Our Mission",
    description: "Why RAMS exists and how we serve the devotee community.",
    icon: "🎯",
  },
  {
    href: "/about/executive-committee",
    title: "Executive Committee",
    description: "Meet the volunteers who plan and lead our annual Mahotsava.",
    icon: "👥",
  },
  {
    href: "/about/finance",
    title: "Finance",
    description: "Transparent reporting of every dollar in and out.",
    icon: "📊",
  },
];

export const metadata = {
  title: "About Us",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow={event.orgShort}
        title="About Us"
        subtitle={`${event.orgName} — celebrating the divine grace of Sri Guru Raghavendra Swami in Nashville.`}
      />

      <section className="py-12">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 md:px-6 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-brown/90">
              RAMS is a devotee-led community organization hosting the annual
              Raayara Aaradhana Mahotsava and year-round spiritual activities
              for families in Middle Tennessee.
            </p>
            <p className="mt-4 text-brown/90">{event.association}</p>
            <p className="mt-4 font-medium text-maroon">{event.dedication}</p>
          </div>
          <SwamiPortrait variant="about" />
        </div>
      </section>

      <section className="border-t border-amber/40 bg-amber/15 py-12">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <h2 className="section-title text-center">Learn More</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {aboutLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="card transition hover:border-saffron hover:shadow-md"
              >
                <span className="text-3xl" aria-hidden>
                  {link.icon}
                </span>
                <h3 className="mt-3 text-lg font-bold text-maroon-deep">
                  {link.title}
                </h3>
                <p className="mt-2 text-sm text-brown/85">{link.description}</p>
                <p className="mt-4 text-sm font-bold text-saffron">Read more →</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
