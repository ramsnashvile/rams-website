import { PageHeader } from "@/components/PageHeader";
import { event } from "@/data/event";

export const metadata = {
  title: "Volunteer Signup",
};

export default function VolunteerPage() {
  return (
    <>
      <PageHeader
        eyebrow="Give Back · Be Part of It"
        title="Volunteer Signup"
        subtitle=""
      />

      {/* <section className="py-12">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <p className="eyebrow mb-4">Task slots</p>
          <VolunteerList tasks={volunteerTasks} />
          <p className="mt-6 text-sm text-brown/75">
            Slot counts are defined in{" "}
            <code className="rounded bg-amber/30 px-1">volunteer-tasks.ts</code>.
            Live availability is tracked in SignUpGenius.
          </p>
        </div>
      </section> */}

      {/* <section className="border-t border-amber/40 py-12">
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
      </section> */}

      <section className="flex min-h-[calc(100vh-14rem)] items-center justify-center bg-maroon/5 py-10">
        <div className="mx-auto max-w-2xl px-4 text-center md:px-6">
          <h3 className="font-bold text-maroon-deep">Have questions?</h3>
          <p className="mt-2 text-sm text-brown/85">
            Contact{" "}
            <a
              href={`mailto:${event.emails.volunteer}`}
              className="inline-flex items-center gap-1 font-semibold text-maroon underline"
            >
              {event.emails.volunteer.replace(/\s*\(Whatsapp\)\s*/i, "")}
              <svg
                viewBox="0 0 24 24"
                className="h-4 w-4 shrink-0 text-[#25D366]"
                fill="currentColor"
                aria-label="WhatsApp"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884M20.52 3.449C18.24 1.245 15.24 0 12.045 0 5.463 0 .104 5.36.101 11.943c0 2.104.548 4.157 1.588 5.967L0 24l6.235-1.634a11.882 11.882 0 0 0 5.71 1.454h.005c6.583 0 11.943-5.361 11.946-11.944a11.86 11.86 0 0 0-3.376-8.427" />
              </svg>
            </a>{" "}
            or call {event.volunteerPhone}.
          </p>
        </div>
      </section>
    </>
  );
}
