import { PageHeader } from "@/components/PageHeader";
import { TeamGrid } from "@/components/TeamGrid";
import { executiveCommittee } from "@/data/executive-committee";

export const metadata = {
  title: "Executive Committee",
};

export default function ExecutiveCommitteePage() {
  return (
    <>
      <PageHeader
        eyebrow="About Us"
        title="Executive Committee"
        subtitle="Volunteer leaders who serve our community. Photos and bios are editable in src/data/executive-committee.ts."
      />

      <section className="py-12">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <p className="mb-8 rounded-lg bg-amber/25 px-4 py-3 text-sm text-brown/85">
            To add a photo: upload to{" "}
            <code className="rounded bg-white/60 px-1">public/team/</code> and set{" "}
            <code className="rounded bg-white/60 px-1">imageUrl</code> (e.g.{" "}
            <code className="rounded bg-white/60 px-1">/team/president.jpg</code>
            ) for each member in{" "}
            <code className="rounded bg-white/60 px-1">
              src/data/executive-committee.ts
            </code>
            .
          </p>
          <TeamGrid members={executiveCommittee} />
        </div>
      </section>
    </>
  );
}
