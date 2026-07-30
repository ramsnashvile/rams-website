import { PageHeader } from "@/components/PageHeader";

export const metadata = {
  title: "Event Finance Report",
};

export default function FinancePage() {
  return (
    <>
      <PageHeader
        eyebrow="About Us · Full Transparency"
        title="Event Finance Report"
        subtitle="More details coming soon"
      >
        {/* {event.financeSheetPublicUrl && (
          <a
            href={event.financeSheetPublicUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            Open full spreadsheet →
          </a>
        )} */}
      </PageHeader>

      {/* <section className="py-12">
        <div className="mx-auto max-w-5xl px-4 md:px-6">
          <p className="mb-8 text-sm text-brown/85">
            📊 Last updated: {event.financeLastUpdated}. Treasurer:{" "}
            {event.treasurerName} (
            <a
              href={`mailto:${event.emails.treasurer}`}
              className="text-maroon underline"
            >
              {event.emails.treasurer}
            </a>
            )
          </p>
          <FinanceReport />
        </div>
      </section> */}
    </>
  );
}
