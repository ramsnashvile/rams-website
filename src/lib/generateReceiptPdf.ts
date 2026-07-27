import { event } from "@/data/event";
import type { ReceiptRecord } from "@/types/receipt";

function formatUsd(amount: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(amount);
}

function loadLogoDataUrl(): Promise<string | null> {
  return new Promise((resolve) => {
    if (typeof window === "undefined") {
      resolve(null);
      return;
    }

    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = () => {
      try {
        const canvas = document.createElement("canvas");
        canvas.width = img.naturalWidth;
        canvas.height = img.naturalHeight;
        const ctx = canvas.getContext("2d");
        if (!ctx) {
          resolve(null);
          return;
        }
        ctx.drawImage(img, 0, 0);
        resolve(canvas.toDataURL("image/png"));
      } catch {
        resolve(null);
      }
    };
    img.onerror = () => resolve(null);
    img.src = event.logoUrl;
  });
}

function taxDisclaimer(): string {
  if (event.is501c3) {
    return `${event.orgShort} is a registered 501(c)(3) organization. Please retain this receipt for your records.`;
  }
  return `${event.orgShort} is not yet a registered 501(c)(3) organization; 501(c)(3) status is pending approval. This contribution is not tax-deductible. This document is a donation acknowledgment only.`;
}

export async function generateReceiptPdf(record: ReceiptRecord): Promise<void> {
  const { jsPDF } = await import("jspdf");
  const doc = new jsPDF({ unit: "pt", format: "letter" });
  const pageWidth = doc.internal.pageSize.getWidth();
  const margin = 48;
  let y = margin;

  const logoData = await loadLogoDataUrl();
  if (logoData) {
    doc.addImage(logoData, "PNG", margin, y, 56, 56);
  }

  const headerX = logoData ? margin + 72 : margin;
  doc.setFont("helvetica", "bold");
  doc.setFontSize(14);
  doc.setTextColor(80, 20, 20);
  doc.text(event.orgName, headerX, y + 18);

  doc.setFont("helvetica", "normal");
  doc.setFontSize(10);
  doc.setTextColor(60, 40, 20);
  doc.text("Nashville, TN", headerX, y + 34);

  y += 80;
  doc.setDrawColor(200, 150, 60);
  doc.setLineWidth(1);
  doc.line(margin, y, pageWidth - margin, y);
  y += 28;

  doc.setFont("helvetica", "bold");
  doc.setFontSize(20);
  doc.setTextColor(80, 20, 20);
  doc.text("Donation Receipt", margin, y);
  y += 28;

  doc.setFont("helvetica", "normal");
  doc.setFontSize(11);
  doc.setTextColor(40, 30, 20);

  const rows: [string, string][] = [
    ["Receipt #", record.id],
    ["Date", record.date],
    ["Donor", record.donorName],
    ...(record.donorEmail ? ([["Email", record.donorEmail]] as [string, string][]) : []),
    ["Amount", formatUsd(record.amount)],
    ["Purpose", record.purpose],
    ["Payment method", record.paymentMethod],
    ...(record.reference
      ? ([["Reference", record.reference]] as [string, string][])
      : []),
    ...(record.notes ? ([["Notes", record.notes]] as [string, string][]) : []),
    ...(record.issuedBy
      ? ([["Issued by", record.issuedBy]] as [string, string][])
      : []),
  ];

  const labelWidth = 120;
  for (const [label, value] of rows) {
    doc.setFont("helvetica", "bold");
    doc.text(`${label}:`, margin, y);
    doc.setFont("helvetica", "normal");
    const lines = doc.splitTextToSize(value, pageWidth - margin * 2 - labelWidth);
    doc.text(lines, margin + labelWidth, y);
    y += Math.max(18, lines.length * 14);
  }

  y += 24;
  doc.setDrawColor(200, 150, 60);
  doc.line(margin, y, pageWidth - margin, y);
  y += 24;

  doc.setFontSize(9);
  doc.setTextColor(90, 70, 40);
  const disclaimerLines = doc.splitTextToSize(
    taxDisclaimer(),
    pageWidth - margin * 2
  );
  doc.text(disclaimerLines, margin, y);
  y += disclaimerLines.length * 12 + 16;

  doc.setFontSize(10);
  doc.setTextColor(60, 40, 20);
  doc.text(`Questions? Contact ${event.treasurerName}`, margin, y);
  y += 14;
  doc.text(event.emails.treasurer, margin, y);
  y += 20;
  doc.setFontSize(9);
  doc.setTextColor(120, 100, 70);
  doc.text(event.dedication.replace(/🙏/g, "").trim(), margin, y);

  doc.save(`${record.id}.pdf`);
}
