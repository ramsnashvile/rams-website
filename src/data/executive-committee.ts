export type CommitteeMember = {
  name: string;
  role: string;
  description: string;
  /** Path under public/, e.g. /team/president.jpg — leave empty for placeholder */
  imageUrl?: string;
};

/**
 * Youth committee: add photos to public/team/ and set imageUrl for each member.
 */
export const executiveCommittee: CommitteeMember[] = [
  {
    name: "Madduri Gopala Shankar",
    role: "President",
    description:
      "Leads overall planning for Raayara Aaradhana Mahotsava and coordinates with RAMA Atlanta.",
    imageUrl: "",
  },
  {
    name: "Sushma Prahlad Navaratna",
    role: "Vice President",
    description:
      "Oversees schedule, cultural program, and guest coordination for the annual event.",
    imageUrl: "",
  },
  {
    name: "Nataraj Sreelakshmi",
    role: "Secretary",
    description:
      "Handles community emails, website updates, and event announcements.",
    imageUrl: "",
  },
  {
    name: "Guruprasad Anginthayya",
    role: "Treasurer",
    description:
      "Maintains transparent finance reporting and works with sponsors and donors.",
    imageUrl: "",
  },
  {
    name: "Suma Srinivas",
    role: "Trustee",
    description:
      "Supports the organization's mission and helps with fundraising efforts.",
    imageUrl: "",
  },
  {
    name: "Hemanth Rangarajan ",
    role: "Trustee",
    description:
      "Supports the organization's mission and helps with fundraising efforts.",
    imageUrl: "",
  },
];
