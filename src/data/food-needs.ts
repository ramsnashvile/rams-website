export type FoodNeed = {
  dish: string;
  detail: string;
  serves: string;
  status: "filled" | "open" | "needed";
};

export const foodNeeds: FoodNeed[] = [
  {
    dish: "Rice / Pulao",
    detail: "Large pot (50+ servings)",
    serves: "50+",
    status: "filled",
  },
  {
    dish: "Sambar / Dal",
    detail: "Large pot (50+ servings)",
    serves: "50+",
    status: "filled",
  },
  {
    dish: "Vegetable Curry",
    detail: "2 dishes needed",
    serves: "30+",
    status: "open",
  },
  {
    dish: "Dessert / Payasam",
    detail: "Sweets for ~100",
    serves: "100",
    status: "needed",
  },
  {
    dish: "Chutney / Sides",
    detail: "3 varieties needed",
    serves: "50+",
    status: "needed",
  },
  {
    dish: "Drinks / Juice",
    detail: "Non-alcoholic only",
    serves: "All",
    status: "needed",
  },
];
