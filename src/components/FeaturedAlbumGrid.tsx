import Link from "next/link";
import {
  getAlbumUrl,
  getDriveThumbnailUrl,
  getFeaturedAlbumPhotos,
  getPublishedAlbums,
} from "@/data/albums";

export function FeaturedAlbumGrid() {
  const featuredPhotos = getFeaturedAlbumPhotos(8);

  if (featuredPhotos.length === 0) {
    const thisYearAlbum = getPublishedAlbums()[0];
    const albumUrl = thisYearAlbum ? getAlbumUrl(thisYearAlbum) : "/gallery";
    return (
      <a
        href={albumUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="card flex min-h-[180px] flex-col items-center justify-center text-center transition hover:border-saffron hover:shadow-md"
      >
        <span className="text-4xl" aria-hidden>
          📸
        </span>
        <h3 className="mt-3 text-xl font-bold text-maroon-deep">
          2026 Photo Album
        </h3>
        <p className="mt-2 text-sm text-brown/85">
          View memories from this year&apos;s Aaradhana.
        </p>
        <p className="mt-4 text-sm font-bold text-saffron">Open album →</p>
      </a>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
      {featuredPhotos.map((photo) => (
        <Link
          key={`${photo.albumSlug}-${photo.fileId}`}
          href={`/gallery/${photo.albumSlug}`}
          className="group overflow-hidden rounded-xl border border-amber/40"
        >
          {/* Drive thumbnails are remote and intentionally rendered as native img tags. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={getDriveThumbnailUrl(photo.fileId, "w900")}
            alt={`${photo.albumTitle} preview`}
            className="aspect-[4/3] w-full object-cover transition group-hover:scale-[1.02]"
            loading="lazy"
          />
        </Link>
      ))}
    </div>
  );
}
