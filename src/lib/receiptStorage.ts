import type { ReceiptRecord } from "@/types/receipt";

const STORAGE_KEY = "rams-receipts-v1";

function canUseStorage(): boolean {
  return typeof window !== "undefined" && typeof localStorage !== "undefined";
}

function readRaw(): ReceiptRecord[] {
  if (!canUseStorage()) return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed: unknown = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed as ReceiptRecord[];
  } catch {
    return [];
  }
}

function writeRaw(records: ReceiptRecord[]): void {
  if (!canUseStorage()) return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(records));
}

export function getReceipts(): ReceiptRecord[] {
  return readRaw().sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );
}

export function saveReceipt(record: ReceiptRecord): void {
  const existing = readRaw();
  writeRaw([record, ...existing.filter((r) => r.id !== record.id)]);
}

export function nextReceiptNumber(date = new Date()): string {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  const dayKey = `${y}${m}${d}`;
  const prefix = `RAMS-${dayKey}-`;

  const sameDay = readRaw().filter((r) => r.id.startsWith(prefix));
  let maxSeq = 0;
  for (const r of sameDay) {
    const seq = Number.parseInt(r.id.slice(prefix.length), 10);
    if (!Number.isNaN(seq) && seq > maxSeq) maxSeq = seq;
  }

  return `${prefix}${String(maxSeq + 1).padStart(4, "0")}`;
}

export function clearReceipts(): void {
  if (!canUseStorage()) return;
  localStorage.removeItem(STORAGE_KEY);
}

function csvEscape(value: string): string {
  if (/[",\n\r]/.test(value)) {
    return `"${value.replace(/"/g, '""')}"`;
  }
  return value;
}

export function buildReceiptsCsv(records: ReceiptRecord[] = getReceipts()): string {
  const headers = [
    "id",
    "donorName",
    "donorEmail",
    "amount",
    "date",
    "purpose",
    "paymentMethod",
    "reference",
    "notes",
    "issuedBy",
    "createdAt",
  ];

  const rows = records.map((r) =>
    [
      r.id,
      r.donorName,
      r.donorEmail ?? "",
      r.amount.toFixed(2),
      r.date,
      r.purpose,
      r.paymentMethod,
      r.reference ?? "",
      r.notes ?? "",
      r.issuedBy ?? "",
      r.createdAt,
    ]
      .map((cell) => csvEscape(String(cell)))
      .join(",")
  );

  return [headers.join(","), ...rows].join("\n");
}

export function downloadReceiptsCsv(
  records: ReceiptRecord[] = getReceipts(),
  filename = "rams-receipts.csv"
): void {
  if (typeof window === "undefined") return;
  const csv = buildReceiptsCsv(records);
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}
