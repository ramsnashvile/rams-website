import Image from "next/image";
import { event } from "@/data/event";

type SwamiPortraitProps = {
  variant?: "hero" | "about";
  className?: string;
};

export function SwamiPortrait({
  variant = "hero",
  className = "",
}: SwamiPortraitProps) {
  if (variant === "hero") {
    return (
      <figure className={`flex flex-col items-center ${className}`}>
        <div className="relative h-48 w-48 overflow-hidden rounded-full border-4 border-saffron/60 shadow-2xl ring-4 ring-maroon-deep/50 md:h-56 md:w-56">
          <Image
            src={event.swamiPortraitUrl}
            alt={event.swamiPortraitAlt}
            fill
            sizes="(max-width: 768px) 192px, 224px"
            className="object-cover object-top"
            priority
          />
        </div>
      </figure>
    );
  }

  return (
    <figure className={`flex flex-col items-center ${className}`}>
      <div className="relative aspect-[3/4] w-full max-w-xs overflow-hidden rounded-2xl border-2 border-saffron/50 bg-amber/20 shadow-xl">
        <Image
          src={event.swamiPortraitUrl}
          alt={event.swamiPortraitAlt}
          fill
          sizes="(max-width: 1024px) 320px, 384px"
          className="object-cover object-top"
        />
      </div>
      <figcaption className="mt-3 text-center text-sm font-medium text-maroon-deep">
        Sri Guru Raghavendra Swami
      </figcaption>
    </figure>
  );
}
