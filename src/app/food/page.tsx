import { FoodNeedsTable } from "@/components/FoodNeedsTable";
import { PageHeader } from "@/components/PageHeader";
import { TallyEmbed } from "@/components/TallyEmbed";
import { event } from "@/data/event";
import { foodNeeds } from "@/data/food-needs";

export const metadata = {
  title: "Food Contributions",
};

export default function FoodPage() {
  return (
    <>
      <PageHeader
        eyebrow="Community Potluck"
        title="Food Contributions"
        subtitle="Sign up to bring a dish — see what's already been committed below."
      />

      <section className="py-12">
        <div className="mx-auto max-w-4xl px-4 md:px-6">
          <h2 className="text-xl font-bold text-maroon-deep">
            What&apos;s Still Needed
          </h2>
          <p className="mt-2 text-sm text-brown/75">
            Sample table below. For a live list, embed a public Google Sheet or
            update <code className="rounded bg-amber/30 px-1">food-needs.ts</code>.
          </p>
          <div className="mt-6">
            <FoodNeedsTable items={foodNeeds} />
          </div>
        </div>
      </section>

      <section className="border-t border-amber/40 bg-amber/15 py-12">
        <div className="mx-auto max-w-2xl px-4 md:px-6">
          <h2 className="section-title text-center">Sign Up to Bring Something</h2>
          <div className="mt-8">
            <TallyEmbed url={event.foodTallyUrl} title="Food Signup Form" />
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto max-w-2xl px-4 md:px-6">
          <div className="card">
            <h3 className="font-bold text-maroon-deep">📌 Food Guidelines</h3>
            <ul className="mt-4 list-inside list-disc space-y-2 text-sm text-brown/90">
              <li>All food must be vegetarian (no meat, eggs, or fish)</li>
              <li>Label allergens: nuts, dairy, gluten</li>
              <li>Bring in covered, oven-safe containers if possible</li>
              <li>Arrive by 11:30 AM to set up in the kitchen</li>
              <li>
                Questions?{" "}
                <a
                  href={`mailto:${event.emails.food}`}
                  className="font-semibold text-maroon underline"
                >
                  {event.emails.food}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
