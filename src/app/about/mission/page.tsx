import { PageHeader } from "@/components/PageHeader";
import { mission } from "@/data/mission";

export const metadata = {
  title: "Our Mission",
};

export default function MissionPage() {
  return (
    <>
      <PageHeader
        eyebrow="About Us"
        title={mission.title}
        subtitle={mission.intro}
      />

      <section className="py-12">
        <div className="mx-auto max-w-3xl px-4 md:px-6">
          <div className="grid gap-6">
            {mission.pillars.map((pillar) => (
              <div key={pillar.title} className="card">
                <h2 className="text-xl font-bold text-maroon-deep">
                  {pillar.title}
                </h2>
                <p className="mt-3 text-brown/90">{pillar.description}</p>
              </div>
            ))}
          </div>
          <p className="mt-10 text-center font-medium text-maroon">
            {mission.closing}
          </p>
        </div>
      </section>
    </>
  );
}
