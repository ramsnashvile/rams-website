import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { ReceiptAccessGate } from "@/components/ReceiptAccessGate";
import { ReceiptGenerator } from "@/components/ReceiptGenerator";

export const metadata: Metadata = {
  title: "Donation Receipt",
  robots: {
    index: false,
    follow: false,
  },
};

export default function ReceiptPage() {
  return (
    <>
      <PageHeader
        eyebrow="Private · Treasurer tools"
        title="Donation Receipt"
        subtitle="Generate a branded donation acknowledgment for online or offline contributions. Download a PDF and keep a local log on this device."
      />

      <section className="py-12">
        <div className="mx-auto max-w-5xl px-4 md:px-6">
          <ReceiptAccessGate>
            <ReceiptGenerator />
          </ReceiptAccessGate>
        </div>
      </section>
    </>
  );
}
