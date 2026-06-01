export type Sponsor = {
  name: string;
  tier: "gold" | "silver" | "bronze";
  logoUrl?: string;
  website?: string;
};

export const sponsors: Sponsor[] = [
  { name: "Gold Sponsor", tier: "gold" },
  { name: "Gold Sponsor", tier: "gold" },
  { name: "Silver Sponsor", tier: "silver" },
  { name: "Silver Sponsor", tier: "silver" },
  { name: "Bronze Sponsor", tier: "bronze" },
  { name: "Bronze Sponsor", tier: "bronze" },
  { name: "Bronze Sponsor", tier: "bronze" },
  { name: "Bronze Sponsor", tier: "bronze" },
];
