import Link from "next/link";
import { event } from "@/data/event";
import { galleryMoreCount, galleryPhotos } from "@/data/gallery";

export function GalleryGrid() {
  return (
    <div>
      <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
        {galleryPhotos.map((photo) => (
          <div
            key={photo.src}
            className="group relative aspect-[4/3] overflow-hidden rounded-xl border border-amber/50 bg-gradient-to-br from-maroon/20 to-amber/40"
          >
            <div className="flex h-full flex-col items-center justify-center p-4 text-center transition group-hover:bg-maroon/10">
              <span className="text-4xl" aria-hidden>
                {photo.emoji}
              </span>
              <p className="mt-2 text-sm font-bold text-maroon-deep">
                {photo.caption}
              </p>
            </div>
          </div>
        ))}
        <Link
          href={event.galleryAlbumUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex aspect-[4/3] flex-col items-center justify-center rounded-xl border-2 border-dashed border-maroon/40 bg-maroon/5 transition hover:border-saffron"
        >
          <span className="font-display text-3xl font-black text-maroon">
            +{galleryMoreCount}
          </span>
          <span className="text-sm font-semibold text-brown/80">more photos</span>
        </Link>
      </div>
      <p className="mt-6 text-center">
        <a
          href={event.galleryAlbumUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-secondary"
        >
          View Full Album on Google Photos →
        </a>
      </p>
    </div>
  );
}
