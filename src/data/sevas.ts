export type Seva = {
  id: string;
  name: string;
  price: number;
  description: string;
  /** Optional path under public/, e.g. /sevas/gopooja.jpg */
  imageUrl?: string;
  /** Optional URL for booking/payment (Stripe, Tally, etc.) */
  bookingUrl?: string;
};

/**
 * Update this list to edit seva offerings shown on /sevas.
 * Add images in public/sevas and reference with imageUrl.
 */
export const sevas: Seva[] = [
  {
    id: "maha-pooja",
    name: "Maha Pooja Seva",
    price: 101,
    description:
      "Special pooja sankalpa offered in your family name during the main aradhane.",
    imageUrl: "",
    bookingUrl: "",
  },
  {
    id: "annadana",
    name: "Annadana Seva",
    price: 51,
    description:
      "Support prasadam and community lunch service for devotees attending the event.",
    imageUrl: "",
    bookingUrl: "",
  },
  {
    id: "deepa-seva",
    name: "Deepa Seva",
    price: 31,
    description:
      "Contribute to sacred lamps and puja materials used during the day-long program.",
    imageUrl: "",
    bookingUrl: "",
  },
];
