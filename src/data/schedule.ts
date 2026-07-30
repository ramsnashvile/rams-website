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
    title: "Aradhana Pooja",
    description: "Begin with Aradhana Rituals in the main hall.",
    tags: ["Main Hall"],
    period: "morning",
  },
  
  {
    time: "09:00 AM Onwards",
    title: "Light Refreshments",
    description: "",
    tags: ["Dining hall"],
    period: "morning",
  },
  {
    time: "11:15 AM",
    title: "Cultural Program ",
    description:
      "Classical music and devotional songs by community members",
    tags: ["Main Hall"],
    period: "morning",
  },
  {
    time: "2:00 PM",
    title: "Prasadam ",
    description:
      "Prasadam served for everyone. Volunteer-prepared vegetarian meal (No Onion, No Garlic) — children first",
    tags: ["Dining Hall"],
    period: "morning",
  },
 
  
  

];
