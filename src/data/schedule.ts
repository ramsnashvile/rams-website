export type ScheduleItem = {
  time: string;
  title: string;
  description?: string;
  tags?: string[];
  period?: "morning" | "afternoon";
};

export const schedule: ScheduleItem[] = [
  {
    time: "9:00 AM",
    title: "Doors Open",
    description: "Registration & welcome desk open · refreshments available",
    tags: ["All attendees"],
    period: "morning",
  },
  {
    time: "9:30 AM",
    title: "Morning Pooja",
    description: "Collective prayers and traditional rituals · Main hall",
    tags: ["Main hall"],
    period: "morning",
  },
  {
    time: "10:30 AM",
    title: "Pravachana",
    description: "Religious discourse by guest pandit",
    tags: ["Main hall"],
    period: "morning",
  },
  {
    time: "11:15 AM",
    title: "Cultural Program — Part 1",
    description:
      "Classical music and devotional songs by community members",
    tags: ["Cultural"],
    period: "morning",
  },
  {
    time: "12:30 PM",
    title: "Prasadam / Community Lunch",
    description:
      "Vegetarian meal served in the dining hall — children first",
    tags: ["Food", "All welcome"],
    period: "morning",
  },
  {
    time: "2:00 PM",
    title: "Cultural Program — Part 2",
    description: "Dance performances, skits, and youth talent showcase",
    tags: ["Cultural"],
    period: "afternoon",
  },
  {
    time: "3:30 PM",
    title: "Panel Discussion",
    description: "Community leaders and elders share reflections",
    tags: ["Main hall"],
    period: "afternoon",
  },
  {
    time: "4:15 PM",
    title: "Tea & Snacks",
    description: "Light refreshments · networking time",
    tags: ["Food"],
    period: "afternoon",
  },
  {
    time: "5:00 PM",
    title: "Evening Aarti",
    description: "Closing prayers together as a community",
    tags: ["Main hall"],
    period: "afternoon",
  },
  {
    time: "5:30 PM",
    title: "Farewell & Cleanup",
    description: "Volunteer cleanup crew — see signup for slots",
    tags: ["Volunteers needed"],
    period: "afternoon",
  },
];
