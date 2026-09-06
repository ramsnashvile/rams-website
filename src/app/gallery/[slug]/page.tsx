import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AlbumPhotoGallery } from "@/components/AlbumPhotoGallery";
import { PageHeader } from "@/components/PageHeader";
import {
  getAlbumBySlug,
  getAlbumUrl,
  getPublishedAlbums,
  getYouTubeEmbedUrl,
} from "@/data/albums";

export const dynamicParams = false;

export async function generateStaticParams() {
  return getPublishedAlbums().map((album) => ({ slug: album.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const album = getAlbumBySlug(params.slug);
  return {
    title: album ? `${album.year} Gallery` : "Gallery",
    description: album?.description,
  };
}

export default function GalleryAlbumPage({
  params,
}: {
  params: { slug: string };
}) {
  const album = getAlbumBySlug(params.slug);
  if (!album || !album.published) {
    notFound();
  }

  const albumUrl = getAlbumUrl(album);

  return (
    <>
      <PageHeader
        eyebrow="Resources · Gallery"
        title={album.title}
        subtitle={album.description}
      >
        <a
          href={albumUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-secondary"
        >
          Open full album
        </a>
      </PageHeader>

      <section className="pb-8 pt-10">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <h2 className="section-title">Highlight Videos</h2>
          {album.videos.length === 0 ? (
            <div className="card mt-5 text-sm text-brown/85">
              No videos added yet. Add YouTube IDs in <code>src/data/albums.ts</code>.
            </div>
          ) : (
            <div className="mt-6 grid gap-6 lg:grid-cols-2">
              {album.videos.map((video) => (
                <article key={video.youtubeId} className="card">
                  <div className="aspect-video overflow-hidden rounded-lg border border-amber/40">
                    <iframe
                      src={getYouTubeEmbedUrl(video.youtubeId)}
                      title={`${album.title} - ${video.title}`}
                      className="h-full w-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-maroon-deep">{video.title}</h3>
                  {video.duration && (
                    <p className="mt-1 text-sm text-brown/75">{video.duration}</p>
                  )}
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="pb-16 pt-8">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <h2 className="section-title">Photos</h2>
          <p className="mt-3 text-sm text-brown/85">
            Click any photo to open a larger view.
          </p>
          <div className="mt-6">
            <AlbumPhotoGallery album={album} />
          </div>
        </div>
      </section>
    </>
  );
}
