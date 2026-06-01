import { PageHeader } from "@/components/PageHeader";
import { TallyEmbed } from "@/components/TallyEmbed";
import { event } from "@/data/event";

export const metadata = {
  title: "Contact",
};

const contacts = [
  {
    icon: "📧",
    title: "General Inquiries",
    value: event.emails.general,
    href: `mailto:${event.emails.general}`,
  },
  {
    icon: "🙌",
    title: "Volunteer Coordinator",
    value: event.emails.volunteer,
    href: `mailto:${event.emails.volunteer}`,
  },
  {
    icon: "💛",
    title: "Sponsorship & Donations",
    value: event.emails.sponsor,
    href: `mailto:${event.emails.sponsor}`,
  },
  {
    icon: "💰",
    title: "Treasurer / Finance",
    value: `${event.treasurerName} · ${event.emails.treasurer}`,
    href: `mailto:${event.emails.treasurer}`,
  },
  {
    icon: "📍",
    title: "Venue",
    value: `${event.venue}\n${event.venueAddress}`,
    href: event.directionsUrl,
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Get in Touch"
        subtitle="Questions about the event? We're happy to help."
      />

      <section className="py-12">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 md:px-6 lg:grid-cols-2">
          <div>
            <h2 className="text-xl font-bold text-maroon-deep">
              Contact Information
            </h2>
            <ul className="mt-6 space-y-6">
              {contacts.map((c) => (
                <li key={c.title} className="flex gap-4">
                  <span className="text-2xl" aria-hidden>
                    {c.icon}
                  </span>
                  <div>
                    <h3 className="font-bold text-maroon-deep">{c.title}</h3>
                    <a
                      href={c.href}
                      target={c.href.startsWith("http") ? "_blank" : undefined}
                      rel={
                        c.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="text-sm text-brown/90 underline hover:text-maroon"
                    >
                      {c.value}
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-maroon-deep">
              Send a Message
            </h2>
            <div className="mt-6">
              <TallyEmbed
                url={event.contactFormUrl}
                title="Contact Form"
                minHeight={500}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
