export type Sponsor = {
  name: string;
  tier: "gold" | "silver" | "bronze";
  logoUrl?: string;
  website?: string;
};

/** Placeholder logos until real sponsor names are added. Keys: gold=Guru Pada, silver=Brindavana, bronze=Bhakti. */
export const sponsors: Sponsor[] = [
  { name: "Guru Pada Seva Sponsor", tier: "gold" },
  { name: "Guru Pada Seva Sponsor", tier: "gold" },
  { name: "Brindavana Seva Sponsor", tier: "silver" },
  { name: "Brindavana Seva Sponsor", tier: "silver" },
  { name: "Bhakti Seva Sponsor", tier: "bronze" },
  { name: "Bhakti Seva Sponsor", tier: "bronze" },
  { name: "Bhakti Seva Sponsor", tier: "bronze" },
  { name: "Bhakti Seva Sponsor", tier: "bronze" },
];
