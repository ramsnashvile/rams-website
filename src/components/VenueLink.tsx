import { event } from "@/data/event";

type VenueLinkProps = {
  className?: string;
  showAddress?: boolean;
};

export function VenueLink({ className = "", showAddress = false }: VenueLinkProps) {
  return (
    <span className={className}>
      📍{" "}
      <a
        href={event.directionsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="underline decoration-saffron/60 underline-offset-2 transition hover:text-saffron"
      >
        {event.venue}
      </a>
      {showAddress && (
        <span className="mt-1 block text-sm opacity-90">{event.venueAddress}</span>
      )}
    </span>
  );
}
