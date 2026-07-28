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
    id: "Ashtottara_Seva",
    name: "Ashtottara Seva",
    price: 25,
    description:
      "Ashtottara Seva is a special pooja where Devotee's family will sponsor ashtottara to Sri Raghavendra Swamy",
    imageUrl: "/sevas/ashtottara_seva.jpg",
    bookingUrl: "https://buy.stripe.com/cNi14n3Ib8EydZwfoJ4Ni00",
  },
  {
    id: "Panchamrutha_Seva",
    name: "Panchamrutha Abhishekha",
    price: 51,
    description:
      "Panchamrutha Seva is a special pooja where Devotee's family will sponsor panchamruta abhishekha to Sri Raghavendra Swamy",
    imageUrl: "/sevas/panchamrutha_seva.jpg",
    bookingUrl: "https://buy.stripe.com/dRmbJ1a6z2ga6x45O94Ni01",
  },
  {
    id: "Paada_Pooja_Seva",
    name: "Paduka Pooja",
    price: 101,
    description:
      "Paduka Pooja  is a special pooja where Devotee's family will sponsor paaduka pooja to Sri Raghavendra Swamy",
    imageUrl: "/sevas/paada_pooja_seva.jpg",
    bookingUrl: "https://buy.stripe.com/dRm8wP5QjbQK6x4ccx4Ni02",
  },
  {
    id: "Sarva_seva",
    name: "Sarva Seva",
    price: 201,
    description:
      "Sarva Seva is a special pooja where Devotee's family will sponsor sarva seva's to Sri Raghavendra Swamy.This includes Ashtottara,Panchamrutha and Pauka Pooja",
    imageUrl: "/sevas/sarva_seva.jpg",
    bookingUrl: "https://buy.stripe.com/14A3cv3Ib1c64oW1xT4Ni03",
  },
  {
    id: "Annadana_Seva",
    name: "Annadana Seva",
    price: 1,
    description:
      "Annadana Seva is a sacred offering that provides devotees and their families the opportunity to sponsor lunch prasada for fellow devotees of Sri Raghavendra Swamy.  Contributions of any amount are accepted.",
    imageUrl: "/sevas/annadana_seva.jpg",
    bookingUrl: "https://buy.stripe.com/dRm9ATemP6wq8Fca4p4Ni04",
  },
  {
    id: "Sponsorships",
    name: "Sponsorships",
    price: 1,
    description:
      "Coming Soon",
    imageUrl: "/sevas/sponsorships.jpg",
    bookingUrl: "https://buy.stripe.com/4gM6oH2E78Ey3kS2BX4Ni05",
  },
];
