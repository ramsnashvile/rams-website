export const PAYMENT_METHODS = [
  "Cash",
  "Check",
  "Zelle",
  "Stripe",
  "Other",
] as const;

export type PaymentMethod = (typeof PAYMENT_METHODS)[number];

export type ReceiptRecord = {
  id: string;
  donorName: string;
  donorEmail?: string;
  amount: number;
  date: string;
  purpose: string;
  paymentMethod: PaymentMethod;
  /** Check number, Zelle confirmation, Stripe last4, etc. */
  reference?: string;
  notes?: string;
  issuedBy?: string;
  createdAt: string;
};
