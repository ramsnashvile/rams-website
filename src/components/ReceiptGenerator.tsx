"use client";

import Link from "next/link";
import { useEffect, useMemo, useState, type FormEvent } from "react";
import { event } from "@/data/event";
import { sevas } from "@/data/sevas";
import { generateReceiptPdf } from "@/lib/generateReceiptPdf";
import {
  clearReceipts,
  downloadReceiptsCsv,
  getReceipts,
  nextReceiptNumber,
  saveReceipt,
} from "@/lib/receiptStorage";
import {
  PAYMENT_METHODS,
  type PaymentMethod,
  type ReceiptRecord,
} from "@/types/receipt";

type PurposeOption = {
  label: string;
  amount?: number;
};

function todayIsoDate(): string {
  const d = new Date();
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

function formatUsd(amount: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(amount);
}

function buildPurposeOptions(): PurposeOption[] {
  const sevaOptions = sevas.map((s) => ({
    label: s.name,
    amount: s.price > 1 ? s.price : undefined,
  }));

  const sponsorshipOptions = (
    Object.entries(event.sponsorshipTiers) as [
      keyof typeof event.sponsorshipTiers,
      (typeof event.sponsorshipTiers)[keyof typeof event.sponsorshipTiers],
    ][]
  ).map(([key, tier]) => ({
    label: `${key.charAt(0).toUpperCase()}${key.slice(1)} Sponsorship`,
    amount: tier.amount,
  }));

  return [
    { label: "General Donation" },
    ...sevaOptions,
    ...sponsorshipOptions,
    { label: "Other" },
  ];
}

const inputClass =
  "mt-1 w-full rounded-lg border border-amber/60 bg-white px-3 py-2 text-sm text-brown outline-none focus:border-maroon focus:ring-1 focus:ring-maroon";

export function ReceiptGenerator() {
  const purposeOptions = useMemo(() => buildPurposeOptions(), []);
  const [receipts, setReceipts] = useState<ReceiptRecord[]>([]);
  const [donorName, setDonorName] = useState("");
  const [donorEmail, setDonorEmail] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState(todayIsoDate);
  const [purposeKey, setPurposeKey] = useState(purposeOptions[0]?.label ?? "General Donation");
  const [otherPurpose, setOtherPurpose] = useState("");
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>("Cash");
  const [reference, setReference] = useState("");
  const [notes, setNotes] = useState("");
  const [issuedBy, setIssuedBy] = useState("");
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setReceipts(getReceipts());
  }, []);

  function refresh() {
    setReceipts(getReceipts());
  }

  function onPurposeChange(label: string) {
    setPurposeKey(label);
    const match = purposeOptions.find((p) => p.label === label);
    if (match?.amount != null) {
      setAmount(String(match.amount));
    }
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError(null);
    setMessage(null);

    const parsedAmount = Number.parseFloat(amount);
    if (!donorName.trim()) {
      setError("Donor name is required.");
      return;
    }
    if (!Number.isFinite(parsedAmount) || parsedAmount <= 0) {
      setError("Enter a valid amount greater than zero.");
      return;
    }

    const purpose =
      purposeKey === "Other"
        ? otherPurpose.trim() || "Other"
        : purposeKey;

    const record: ReceiptRecord = {
      id: nextReceiptNumber(),
      donorName: donorName.trim(),
      donorEmail: donorEmail.trim() || undefined,
      amount: Math.round(parsedAmount * 100) / 100,
      date,
      purpose,
      paymentMethod,
      reference: reference.trim() || undefined,
      notes: notes.trim() || undefined,
      issuedBy: issuedBy.trim() || undefined,
      createdAt: new Date().toISOString(),
    };

    setBusy(true);
    try {
      saveReceipt(record);
      await generateReceiptPdf(record);
      refresh();
      setMessage(`Receipt ${record.id} saved and downloaded.`);
      setDonorName("");
      setDonorEmail("");
      setAmount("");
      setReference("");
      setNotes("");
      setOtherPurpose("");
      setDate(todayIsoDate());
      setPurposeKey(purposeOptions[0]?.label ?? "General Donation");
      setPaymentMethod("Cash");
    } catch {
      setError("Could not generate the PDF. Please try again.");
    } finally {
      setBusy(false);
    }
  }

  async function handleRedownload(record: ReceiptRecord) {
    setError(null);
    setMessage(null);
    setBusy(true);
    try {
      await generateReceiptPdf(record);
      setMessage(`Re-downloaded ${record.id}.`);
    } catch {
      setError("Could not re-download the PDF.");
    } finally {
      setBusy(false);
    }
  }

  function handleClear() {
    if (
      !window.confirm(
        "Clear all locally stored receipts on this device? This cannot be undone."
      )
    ) {
      return;
    }
    clearReceipts();
    refresh();
    setMessage("Local receipt log cleared.");
  }

  const showReference =
    paymentMethod === "Check" ||
    paymentMethod === "Zelle" ||
    paymentMethod === "Stripe" ||
    paymentMethod === "Other";

  return (
    <div className="space-y-10">
      <div className="rounded-lg bg-amber/25 px-4 py-3 text-sm text-brown/85">
        Receipts are generated and stored only in this browser (
        <code className="rounded bg-white/50 px-1">localStorage</code>
        ). Export the CSV log to archive records. This is a donation
        acknowledgment tool — not a shared multi-user ledger.
      </div>

      {!event.is501c3 && (
        <p className="text-sm text-brown/85">
          <strong>Note:</strong> {event.orgShort} is not yet a registered
          501(c)(3); status is pending approval. Contributions are not
          tax-deductible. Questions?{" "}
          <a
            href={`mailto:${event.emails.treasurer}`}
            className="font-semibold text-maroon underline"
          >
            {event.emails.treasurer}
          </a>
        </p>
      )}

      <form onSubmit={handleSubmit} className="card max-w-2xl space-y-4">
        <h2 className="text-xl font-bold text-maroon-deep">Issue a receipt</h2>

        <label className="block text-sm font-semibold text-maroon-deep">
          Donor name *
          <input
            className={inputClass}
            value={donorName}
            onChange={(e) => setDonorName(e.target.value)}
            required
            autoComplete="name"
          />
        </label>

        <label className="block text-sm font-semibold text-maroon-deep">
          Email
          <input
            type="email"
            className={inputClass}
            value={donorEmail}
            onChange={(e) => setDonorEmail(e.target.value)}
            autoComplete="email"
          />
        </label>

        <div className="grid gap-4 sm:grid-cols-2">
          <label className="block text-sm font-semibold text-maroon-deep">
            Amount (USD) *
            <input
              type="number"
              min="0.01"
              step="0.01"
              className={inputClass}
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              required
            />
          </label>
          <label className="block text-sm font-semibold text-maroon-deep">
            Date *
            <input
              type="date"
              className={inputClass}
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </label>
        </div>

        <label className="block text-sm font-semibold text-maroon-deep">
          Purpose *
          <select
            className={inputClass}
            value={purposeKey}
            onChange={(e) => onPurposeChange(e.target.value)}
          >
            {purposeOptions.map((p) => (
              <option key={p.label} value={p.label}>
                {p.label}
                {p.amount != null ? ` ($${p.amount})` : ""}
              </option>
            ))}
          </select>
        </label>

        {purposeKey === "Other" && (
          <label className="block text-sm font-semibold text-maroon-deep">
            Describe purpose
            <input
              className={inputClass}
              value={otherPurpose}
              onChange={(e) => setOtherPurpose(e.target.value)}
              placeholder="e.g. Flower decoration"
            />
          </label>
        )}

        <div className="grid gap-4 sm:grid-cols-2">
          <label className="block text-sm font-semibold text-maroon-deep">
            Payment method *
            <select
              className={inputClass}
              value={paymentMethod}
              onChange={(e) =>
                setPaymentMethod(e.target.value as PaymentMethod)
              }
            >
              {PAYMENT_METHODS.map((m) => (
                <option key={m} value={m}>
                  {m}
                </option>
              ))}
            </select>
          </label>

          {showReference && (
            <label className="block text-sm font-semibold text-maroon-deep">
              {paymentMethod === "Check"
                ? "Check number"
                : "Reference / confirmation"}
              <input
                className={inputClass}
                value={reference}
                onChange={(e) => setReference(e.target.value)}
                placeholder={
                  paymentMethod === "Check"
                    ? "e.g. 1042"
                    : "Confirmation or last 4"
                }
              />
            </label>
          )}
        </div>

        <label className="block text-sm font-semibold text-maroon-deep">
          Notes
          <textarea
            className={`${inputClass} min-h-[80px]`}
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          />
        </label>

        <label className="block text-sm font-semibold text-maroon-deep">
          Issued by
          <input
            className={inputClass}
            value={issuedBy}
            onChange={(e) => setIssuedBy(e.target.value)}
            placeholder="Committee member name"
          />
        </label>

        {error && (
          <p className="text-sm font-semibold text-red-800" role="alert">
            {error}
          </p>
        )}
        {message && (
          <p className="text-sm font-semibold text-maroon" role="status">
            {message}
          </p>
        )}

        <button type="submit" className="btn-primary" disabled={busy}>
          {busy ? "Working…" : "Generate PDF receipt"}
        </button>
      </form>

      <section className="space-y-4">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="eyebrow">This device</p>
            <h2 className="mt-1 text-xl font-bold text-maroon-deep">
              Receipt history
            </h2>
          </div>
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              className="btn-secondary text-sm"
              onClick={() => downloadReceiptsCsv()}
              disabled={receipts.length === 0}
            >
              Download CSV log
            </button>
            <button
              type="button"
              className="btn-secondary text-sm"
              onClick={handleClear}
              disabled={receipts.length === 0}
            >
              Clear log
            </button>
          </div>
        </div>

        {receipts.length === 0 ? (
          <p className="text-sm text-brown/70">
            No receipts issued on this browser yet.
          </p>
        ) : (
          <div className="overflow-x-auto rounded-xl border border-amber/50 bg-white/80">
            <table className="min-w-full text-left text-sm">
              <thead className="border-b border-amber/40 bg-amber/20 text-xs uppercase tracking-wide text-brown/80">
                <tr>
                  <th className="px-4 py-3">Receipt #</th>
                  <th className="px-4 py-3">Donor</th>
                  <th className="px-4 py-3">Amount</th>
                  <th className="px-4 py-3">Date</th>
                  <th className="px-4 py-3">Purpose</th>
                  <th className="px-4 py-3">Actions</th>
                </tr>
              </thead>
              <tbody>
                {receipts.map((r) => (
                  <tr key={r.id} className="border-b border-amber/20 last:border-0">
                    <td className="px-4 py-3 font-mono text-xs">{r.id}</td>
                    <td className="px-4 py-3">{r.donorName}</td>
                    <td className="px-4 py-3">{formatUsd(r.amount)}</td>
                    <td className="px-4 py-3">{r.date}</td>
                    <td className="px-4 py-3">{r.purpose}</td>
                    <td className="px-4 py-3">
                      <button
                        type="button"
                        className="font-semibold text-maroon underline"
                        onClick={() => handleRedownload(r)}
                        disabled={busy}
                      >
                        Re-download PDF
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        <p className="text-xs text-brown/70">
          Prefer a public finance view? See the{" "}
          <Link href="/about/finance" className="font-semibold text-maroon underline">
            Finance report
          </Link>
          .
        </p>
      </section>
    </div>
  );
}
