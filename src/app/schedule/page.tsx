import { PageHeader } from "@/components/PageHeader";
import { ScheduleTable } from "@/components/ScheduleTable";
import { event } from "@/data/event";
import { schedule } from "@/data/schedule";

export const metadata = {
  title: "Event Schedule",
};

export default function SchedulePage() {
  return (
    <>
      <PageHeader
        eyebrow={event.dateShort}
        title="Event Schedule"
        subtitle={`${event.venue} · Doors open at 9:00 AM`}
      >
        {event.schedulePdfUrl && (
          <a
            href={event.schedulePdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            Download PDF
          </a>
        )}
        {event.calendarIcsUrl && (
          <a href={event.calendarIcsUrl} className="btn-secondary">
            Add to Calendar
          </a>
        )}
      </PageHeader>

      <section className="py-12">
        <div className="mx-auto max-w-3xl px-4 md:px-6">
          <p className="mb-8 rounded-lg bg-amber/25 px-4 py-3 text-sm text-brown/85">
            Schedule content comes from{" "}
            <code className="rounded bg-white/50 px-1">src/data/schedule.ts</code>{" "}
            — youth committee can update times and titles on GitHub without
            touching page code.
          </p>
          <ScheduleTable items={schedule} />
        </div>
      </section>

      <section className="border-t border-amber/40 bg-white/50 py-12">
        <div className="mx-auto max-w-3xl px-4 md:px-6">
          <div className="card">
            <p className="text-2xl" aria-hidden>
              📍
            </p>
            <h2 className="mt-2 text-xl font-bold text-maroon-deep">
              {event.venue}
            </h2>
            <p className="mt-2 text-sm text-brown/85">
              {event.venueAddress} · Free parking available · Accessible entrance
              on east side
            </p>
            <a
              href={event.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-4 inline-flex"
            >
              Get Directions →
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
