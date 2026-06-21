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
    id: "Panchamrutha_Seva",
    name: "Panchamrutha Seva",
    price: 25,
    description:
      "Panchamrutha Seva is a special pooja where Devotees family will sponsor panchaamruta abhishekha to Sri Raghavendra Swamy",
    imageUrl: "/sevas/panchamrutha_seva.jpg",
    bookingUrl: "",
  },
  {
    id: "Ashtottara_Seva",
    name: "Ashtottara Seva",
    price: 51,
    description:
      "Ashtottara Seva is a special pooja where Devotees family will sponsor ashtottara abhishekha to Sri Raghavendra Swamy",
    imageUrl: "/sevas/ashtottara_seva.jpg",
    bookingUrl: "",
  },
  {
    id: "Annadana_Seva",
    name: "Annadana Seva",
    price: 75,
    description:
      "Annadana Seva is a special pooja where Devotees family will sponsor annadana abhishekha to Sri Raghavendra Swamy",
    imageUrl: "/sevas/annadana_seva.jpg",
    bookingUrl: "",
  },
  {
    id: "Paada_Pooja_Seva",
    name: "Paada Pooja Seva",
    price: 101,
    description:
      "Paada Pooja Seva is a special pooja where Devotees family will sponsor paada pooja to Sri Raghavendra Swamy",
    imageUrl: "/sevas/paada_pooja_seva.jpg",
    bookingUrl: "",
  },
  {
    id: "Pushpa_seva",
    name: "Pushpa Seva- Rayara Aaradhane",
    price: 251,
    description:
      "Pushpa Seva is a special pooja where Devotees family will sponsor pushpa abhishekha to Sri Raghavendra Swamy",
    imageUrl: "/sevas/pushpa_seva.jpg",
    bookingUrl: "",
  },
  {
    id: "Sarva_seva",
    name: "Sarva Seva",
    price: 501,
    description:
      "Sarva Seva is a special pooja where Devotees family will sponsor sarva abhishekha to Sri Raghavendra Swamy",
    imageUrl: "/sevas/sarva_seva.jpg",
    bookingUrl: "",
  },
];
