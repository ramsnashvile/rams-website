import { PageHeader } from "@/components/PageHeader";
import {
  GeneralDonation,
  SponsorTierCards,
} from "@/components/SponsorSection";
import { event } from "@/data/event";

export const metadata = {
  title: "Sponsorship & Donations",
};

export default function SponsorPage() {
  return (
    <>
      <PageHeader
        eyebrow="Support Our Community"
        title="Sponsorship & Donations"
        subtitle="Your generosity makes this event possible. All sponsorships are publicly recognized. Finance is fully transparent."
      />

      <section className="py-12">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <p className="mb-8 rounded-lg bg-amber/25 px-4 py-3 text-sm text-brown/85">
            Stripe Payment Links are plain URLs — update them in{" "}
            <code className="rounded bg-white/50 px-1">src/data/event.ts</code>{" "}
            under <code className="rounded bg-white/50 px-1">stripe</code>. No
            backend required.
          </p>
          <SponsorTierCards />
          <GeneralDonation />
        </div>
      </section>

      {!event.is501c3 && (
        <section className="border-t border-amber/40 py-10">
          <div className="mx-auto max-w-3xl px-4 text-center text-sm text-brown/85 md:px-6">
            <p>
              <strong>Note on tax deductions:</strong> Our organization is not
              yet a 501(c)(3) nonprofit. Donations are not tax-deductible at
              this time. We are working toward 501(c)(3) status — once approved,
              we will notify all donors.
            </p>
            <p className="mt-4">
              Questions?{" "}
              <a
                href={`mailto:${event.emails.sponsor}`}
                className="font-semibold text-maroon underline"
              >
                {event.emails.sponsor}
              </a>
            </p>
          </div>
        </section>
      )}
    </>
  );
}
