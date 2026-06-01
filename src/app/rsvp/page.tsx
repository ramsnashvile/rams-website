import { PageHeader } from "@/components/PageHeader";
import { TallyEmbed } from "@/components/TallyEmbed";
import { event } from "@/data/event";

export const metadata = {
  title: "Register to Attend",
};

export default function RsvpPage() {
  return (
    <>
      <PageHeader
        eyebrow="Free · No tickets required"
        title="Register to Attend"
        subtitle="Help us plan — let us know how many are coming from your family."
      />

      <section className="py-12">
        <div className="mx-auto max-w-2xl px-4 md:px-6">
          <TallyEmbed url={event.rsvpTallyUrl} title="RSVP Form" minHeight={700} />
        </div>
      </section>

      <section className="border-t border-amber/40 bg-amber/15 py-12">
        <div className="mx-auto max-w-4xl px-4 md:px-6">
          <h2 className="section-title text-center">
            What happens after you RSVP?
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {[
              {
                icon: "📧",
                title: "Confirmation Email",
                text: "You'll receive a confirmation from Tally immediately after submitting.",
              },
              {
                icon: "📅",
                title: "Calendar Invite",
                text: "We'll send an .ics calendar link so you don't forget the date.",
              },
              {
                icon: "🔔",
                title: "Reminders",
                text: "1-week and 1-day reminders via Brevo email (free tier: 300/day).",
              },
            ].map((item) => (
              <div key={item.title} className="card text-center">
                <span className="text-3xl">{item.icon}</span>
                <h3 className="mt-3 font-bold text-maroon-deep">{item.title}</h3>
                <p className="mt-2 text-sm text-brown/85">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
