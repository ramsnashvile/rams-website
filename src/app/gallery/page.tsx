import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import {
  getDriveThumbnailUrl,
  getPublishedAlbums,
} from "@/data/albums";

export const metadata = {
  title: "Gallery",
  description: "Photo and video albums from Raayara Aaradhana events.",
};

function getAlbumCoverUrl(album: ReturnType<typeof getPublishedAlbums>[number]): string | null {
  if (album.coverFileId?.trim()) {
    return getDriveThumbnailUrl(album.coverFileId, "w1200");
  }
  if (album.videos[0]?.youtubeId) {
    return `https://img.youtube.com/vi/${encodeURIComponent(album.videos[0].youtubeId)}/hqdefault.jpg`;
  }
  return null;
}

export default function GalleryIndexPage() {
  const publishedAlbums = getPublishedAlbums();

  return (
    <>
      <PageHeader
        eyebrow="Resources"
        title="Photo & Video Gallery"
        subtitle="Browse devotional memories from past Aaradhana events."
      />

      <section className="pb-16 pt-12">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 sm:grid-cols-2 md:px-6 lg:grid-cols-3">
          {publishedAlbums.map((album) => {
            const coverUrl = getAlbumCoverUrl(album);
            return (
              <article key={album.slug} className="card flex flex-col">
                {coverUrl ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={coverUrl}
                    alt={`${album.title} cover`}
                    className="aspect-video w-full rounded-lg border border-amber/40 object-cover"
                    loading="lazy"
                  />
                ) : (
                  <div className="flex aspect-video items-center justify-center rounded-lg border border-dashed border-amber/40 bg-maroon/5">
                    <span className="text-sm font-semibold text-brown/75">
                      Add coverFileId in albums.ts
                    </span>
                  </div>
                )}
                <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-saffron">
                  {album.year}
                </p>
                <h2 className="mt-1 text-xl font-bold text-maroon-deep">{album.title}</h2>
                <p className="mt-3 flex-1 text-sm text-brown/85">{album.description}</p>
                <p className="mt-4 text-xs font-semibold text-brown/70">
                  {album.videos.length} highlight video{album.videos.length === 1 ? "" : "s"}
                </p>
                <Link href={`/gallery/${album.slug}`} className="btn-primary mt-4 w-full">
                  Open album
                </Link>
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
}
