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
    name: "Committee Chair",
    role: "President",
    description:
      "Leads overall planning for Raayara Aaradhana Mahotsava and coordinates with RAMA Atlanta.",
    imageUrl: "",
  },
  {
    name: "Program Lead",
    role: "Vice President",
    description:
      "Oversees schedule, cultural program, and guest coordination for the annual event.",
    imageUrl: "",
  },
  {
    name: "Sunita Rao",
    role: "Treasurer",
    description:
      "Maintains transparent finance reporting and works with sponsors and donors.",
    imageUrl: "",
  },
  {
    name: "Volunteer Lead",
    role: "Volunteer Coordinator",
    description:
      "Manages SignUpGenius tasks and day-of volunteer assignments.",
    imageUrl: "",
  },
  {
    name: "Communications Lead",
    role: "Secretary",
    description:
      "Handles community emails, website updates, and event announcements.",
    imageUrl: "",
  },
  {
    name: "Youth Representative",
    role: "Youth Committee",
    description:
      "Brings youth voices into planning and helps maintain the website content on GitHub.",
    imageUrl: "",
  },
];
