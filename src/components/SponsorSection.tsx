import Link from "next/link";
import { event } from "@/data/event";
import type { Sponsor } from "@/data/sponsors";

const tierStyles = {
  gold: "border-saffron bg-gradient-to-br from-amber/40 to-parchment",
  silver: "border-gray-400 bg-gradient-to-br from-gray-100 to-white",
  bronze: "border-amber bg-gradient-to-br from-amber/20 to-parchment",
};

export function SponsorTierCards() {
  const tiers = [
    {
      key: "gold" as const,
      label: "Gold Sponsor",
      data: event.sponsorshipTiers.gold,
      url: event.stripe.gold,
    },
    {
      key: "silver" as const,
      label: "Silver Sponsor",
      data: event.sponsorshipTiers.silver,
      url: event.stripe.silver,
    },
    {
      key: "bronze" as const,
      label: "Bronze Sponsor",
      data: event.sponsorshipTiers.bronze,
      url: event.stripe.bronze,
    },
  ];

  return (
    <div className="grid gap-6 lg:grid-cols-3">
      {tiers.map((tier) => (
        <div
          key={tier.key}
          className={`card flex flex-col border-2 ${tierStyles[tier.key]}`}
        >
          <p className="eyebrow">{tier.label}</p>
          <p className="mt-2 font-display text-4xl font-black text-maroon-deep">
            ${tier.data.amount}
          </p>
          <ul className="mt-4 flex-1 space-y-2 text-sm text-brown/90">
            {tier.data.benefits.map((b) => (
              <li key={b} className="flex gap-2">
                <span className="text-saffron">•</span>
                {b}
              </li>
            ))}
          </ul>
          {tier.url && tier.url !== "#" ? (
            <a
              href={tier.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-6 w-full text-center"
            >
              Become {tier.label} →
            </a>
          ) : (
            <span className="btn-primary mt-6 w-full cursor-not-allowed opacity-60">
              Add Stripe link in event.ts
            </span>
          )}
          <p className="mt-2 text-center text-xs text-brown/60">
            Stripe checkout · Receipt emailed automatically
          </p>
        </div>
      ))}
    </div>
  );
}

export function SponsorLogos({ sponsors }: { sponsors: Sponsor[] }) {
  const byTier = {
    gold: sponsors.filter((s) => s.tier === "gold"),
    silver: sponsors.filter((s) => s.tier === "silver"),
    bronze: sponsors.filter((s) => s.tier === "bronze"),
  };

  return (
    <div className="space-y-8">
      {(["gold", "silver", "bronze"] as const).map((tier) => {
        const list = byTier[tier];
        if (list.length === 0) return null;
        return (
          <div key={tier}>
            <p className="eyebrow mb-4 capitalize">{tier} sponsors</p>
            <div className="flex flex-wrap justify-center gap-6">
              {list.map((s, i) => (
                <div
                  key={`${s.name}-${i}`}
                  className="flex h-24 w-40 items-center justify-center rounded-lg border border-amber/50 bg-white/90 px-4 text-center text-sm font-semibold text-maroon-deep"
                >
                  {s.logoUrl ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={s.logoUrl}
                      alt={s.name}
                      className="max-h-full max-w-full object-contain"
                    />
                  ) : (
                    s.name
                  )}
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export function GeneralDonation() {
  const url = event.stripe.donation;
  return (
    <div className="card mt-10 border-2 border-saffron/50 bg-gradient-to-r from-saffron/10 to-parchment text-center">
      <h3 className="text-2xl font-bold text-maroon-deep">💛 General Donation</h3>
      <p className="mx-auto mt-3 max-w-lg text-sm text-brown/85">
        Give any amount you&apos;d like. Every contribution helps cover venue,
        decorations, and food costs.
      </p>
      {url && url !== "#" ? (
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-saffron mt-6"
        >
          Donate Any Amount →
        </a>
      ) : (
        <span className="btn-saffron mt-6 inline-block cursor-not-allowed opacity-60">
          Add donation Stripe link in event.ts
        </span>
      )}
      <p className="mt-4 text-xs text-brown/70">
        Processed securely via Stripe · Receipt emailed to you · All income
        publicly reported on our{" "}
        <Link href="/about/finance" className="font-semibold text-maroon underline">
          Finance
        </Link>{" "}
        page
      </p>
    </div>
  );
}
