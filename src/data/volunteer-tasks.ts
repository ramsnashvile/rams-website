export type VolunteerTask = {
  icon: string;
  task: string;
  schedule: string;
  slotsOpen: number;
  slotsTotal: number;
  lowSlots?: boolean;
};

export const volunteerTasks: VolunteerTask[] = [
  {
    icon: "🚗",
    task: "Parking & Traffic",
    schedule: "Day of event · 8:30 AM – 11:00 AM",
    slotsOpen: 6,
    slotsTotal: 6,
  },
  {
    icon: "📋",
    task: "Registration / Welcome Desk",
    schedule: "Day of event · 8:45 AM – 11:30 AM",
    slotsOpen: 4,
    slotsTotal: 4,
  },
  {
    icon: "🛠️",
    task: "Setup & Decoration",
    schedule: "Day before · Aug 28 · 5:00 PM – 8:00 PM",
    slotsOpen: 8,
    slotsTotal: 8,
  },
  {
    icon: "🍽️",
    task: "Food Serving",
    schedule: "Day of event · 12:00 PM – 2:00 PM",
    slotsOpen: 2,
    slotsTotal: 10,
    lowSlots: true,
  },
  {
    icon: "🎤",
    task: "AV / Sound",
    schedule: "Day of event · 8:00 AM – 6:00 PM",
    slotsOpen: 3,
    slotsTotal: 3,
  },
  {
    icon: "📸",
    task: "Photography",
    schedule: "Day of event · All day",
    slotsOpen: 2,
    slotsTotal: 2,
  },
  {
    icon: "🧹",
    task: "Cleanup Crew",
    schedule: "Day of event · 5:00 PM – 7:00 PM",
    slotsOpen: 10,
    slotsTotal: 10,
  },
  {
    icon: "👧",
    task: "Children's Activities",
    schedule: "Day of event · 10:00 AM – 4:00 PM",
    slotsOpen: 5,
    slotsTotal: 5,
  },
];
