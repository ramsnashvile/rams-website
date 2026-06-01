import { ExternalSignupLink } from "@/components/TallyEmbed";
import { PageHeader } from "@/components/PageHeader";
import { VolunteerList } from "@/components/VolunteerList";
import { event } from "@/data/event";
import { volunteerTasks } from "@/data/volunteer-tasks";

export const metadata = {
  title: "Volunteer Signup",
};

export default function VolunteerPage() {
  const embedUrl = event.volunteerSignupUrl;

  return (
    <>
      <PageHeader
        eyebrow="Give Back · Be Part of It"
        title="Volunteer Signup"
        subtitle="50+ volunteer slots available · Pick a task that fits your schedule"
      />

      <section className="py-12">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <p className="eyebrow mb-4">Task slots</p>
          <VolunteerList tasks={volunteerTasks} />
          <p className="mt-6 text-sm text-brown/75">
            Slot counts are defined in{" "}
            <code className="rounded bg-amber/30 px-1">volunteer-tasks.ts</code>.
            Live availability is tracked in SignUpGenius.
          </p>
        </div>
      </section>

      <section className="border-t border-amber/40 py-12">
        <div className="mx-auto max-w-3xl px-4 md:px-6">
          {embedUrl ? (
            <iframe
              src={embedUrl}
              title="Volunteer signup"
              className="min-h-[600px] w-full rounded-xl border border-amber/50"
              loading="lazy"
            />
          ) : (
            <div className="card text-center">
              <span className="text-4xl">✋</span>
              <h3 className="mt-3 text-lg font-bold">SignUpGenius</h3>
              <p className="mt-2 text-sm text-brown/80">
                Add your SignUpGenius embed or share URL in{" "}
                <code className="rounded bg-amber/30 px-1">
                  volunteerSignupUrl
                </code>{" "}
                in <code className="rounded bg-amber/30 px-1">event.ts</code>
              </p>
              <ExternalSignupLink
                url={event.volunteerSignupDirectUrl}
                label="Sign Up Directly"
              />
            </div>
          )}
        </div>
      </section>

      <section className="bg-maroon/5 py-10">
        <div className="mx-auto max-w-2xl px-4 text-center md:px-6">
          <h3 className="font-bold text-maroon-deep">Have questions?</h3>
          <p className="mt-2 text-sm text-brown/85">
            Contact the volunteer coordinator at{" "}
            <a
              href={`mailto:${event.emails.volunteer}`}
              className="font-semibold text-maroon underline"
            >
              {event.emails.volunteer}
            </a>{" "}
            or call {event.volunteerPhone}.
          </p>
        </div>
      </section>
    </>
  );
}
