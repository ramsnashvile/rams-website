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

      <section className="pb-16 pt-12">
        <div className="mx-auto max-w-2xl px-4 md:px-6">
          <TallyEmbed url={event.rsvpTallyUrl} title="RSVP Form" minHeight={800} />
        </div>
      </section>
    </>
  );
}
