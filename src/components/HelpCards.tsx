import Link from "next/link";
import { event } from "@/data/event";

type HelpCard = {
  icon: string;
  title: string;
  description: string;
  href: string;
  cta: string;
  external?: boolean;
};

const cards: HelpCard[] = [
  {
    icon: "📸",
    title: "Photo Album",
    description: "View event memories from Raayara Aaradhana 2026",
    href: event.galleryAlbumUrl,
    cta: "Open Album →",
    external: true,
  },
  {
    icon: "🎬",
    title: "Photo Highlights Video",
    description: "Watch the latest YouTube highlights from this year's event",
    href: event.highlightVideoWatchUrl,
    cta: "Watch Highlights →",
    external: true,
  },
  {
    icon: "💛",
    title: "Donate / Sponsor",
    description: "Guru Pada, Brindavana, Bhakti Seva or open donation",
    href: "/sponsor",
    cta: "Give →",
  },
  {
    icon: "🙌",
    title: "Volunteer",
    description: "Parking, setup, food serving, AV & more",
    href: "/volunteer",
    cta: "View Slots →",
  },
];

export function HelpCards() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {cards.map((card) =>
        card.external ? (
          <a
            key={card.href}
            href={card.href}
            target="_blank"
            rel="noopener noreferrer"
            className="card group transition hover:border-saffron hover:shadow-md"
          >
            <span className="text-3xl" aria-hidden>
              {card.icon}
            </span>
            <h3 className="mt-3 text-lg font-bold text-maroon-deep group-hover:text-maroon">
              {card.title}
            </h3>
            <p className="mt-2 text-sm text-brown/80">{card.description}</p>
            <p className="mt-4 text-sm font-bold text-saffron">{card.cta}</p>
          </a>
        ) : (
          <Link
            key={card.href}
            href={card.href}
            className="card group transition hover:border-saffron hover:shadow-md"
          >
            <span className="text-3xl" aria-hidden>
              {card.icon}
            </span>
            <h3 className="mt-3 text-lg font-bold text-maroon-deep group-hover:text-maroon">
              {card.title}
            </h3>
            <p className="mt-2 text-sm text-brown/80">{card.description}</p>
            <p className="mt-4 text-sm font-bold text-saffron">{card.cta}</p>
          </Link>
        )
      )}
    </div>
  );
}
