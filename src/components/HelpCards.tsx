import Link from "next/link";

const cards = [
  {
    icon: "📋",
    title: "RSVP to Attend",
    description: "Register your family — adults + children count",
    href: "/rsvp",
    cta: "Register Free →",
  },
  {
    icon: "🙌",
    title: "Volunteer",
    description: "Parking, setup, food serving, AV & more",
    href: "/volunteer",
    cta: "View Slots →",
  },
  {
    icon: "🍱",
    title: "Volunteer For Food Preparation",
    description: "Contact Sushma Prasanna +13098257620 for food volunteering opportunities",
    href: "/food",
    cta: "Signup →",
  },
  {
    icon: "💛",
    title: "Donate / Sponsor",
    description: "Guru Pada, Brindavana, Bhakti Seva or open donation",
    href: "/sponsor",
    cta: "Give →",
  },
];

export function HelpCards() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {cards.map((card) => (
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
      ))}
    </div>
  );
}
