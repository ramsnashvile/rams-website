"use client";

import { useEffect, useMemo, useState } from "react";
import type { Album } from "@/data/albums";
import {
  getAlbumUrl,
  getDriveImageUrl,
  getDriveThumbnailUrl,
  isDriveAlbumsConfigured,
} from "@/data/albums";
import { fetchDriveAlbumFiles, type DriveAlbumFile } from "@/lib/driveAlbum";

type AlbumPhotoGalleryProps = {
  album: Album;
};

export function AlbumPhotoGallery({ album }: AlbumPhotoGalleryProps) {
  const [files, setFiles] = useState<DriveAlbumFile[] | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const isConfigured = isDriveAlbumsConfigured() && Boolean(album.driveFolderId.trim());
  const albumUrl = getAlbumUrl(album);

  useEffect(() => {
    if (!isConfigured) return;
    let active = true;

    void fetchDriveAlbumFiles(album.driveFolderId).then((nextFiles) => {
      if (!active) return;
      setFiles(nextFiles);
    });

    return () => {
      active = false;
    };
  }, [album.driveFolderId, isConfigured]);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setLightboxIndex(null);
      }
      if (event.key === "ArrowRight") {
        setLightboxIndex((current) => {
          if (current === null || !files || files.length === 0) return current;
          return (current + 1) % files.length;
        });
      }
      if (event.key === "ArrowLeft") {
        setLightboxIndex((current) => {
          if (current === null || !files || files.length === 0) return current;
          return (current - 1 + files.length) % files.length;
        });
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [files, lightboxIndex]);

  const selectedFile = useMemo(() => {
    if (lightboxIndex === null || !files || files.length === 0) return null;
    return files[lightboxIndex] ?? null;
  }, [files, lightboxIndex]);

  if (!isConfigured) {
    return (
      <div className="card text-sm text-brown/90">
        <p className="font-semibold text-maroon-deep">Album not connected yet.</p>
        <p className="mt-2">
          Add the Drive Apps Script URL in <code>src/data/albums.ts</code> and this
          album&apos;s folder ID to load photos directly on the site.
        </p>
        <a
          href={albumUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex font-bold text-maroon underline"
        >
          Open full album →
        </a>
      </div>
    );
  }

  return (
    <>
      <div className="card">
        {!files && <p className="text-sm text-brown/85">Loading photos...</p>}

        {files && files.length === 0 && (
          <p className="text-sm text-brown/85">
            No images found in this folder. Check sharing permissions and file types.
          </p>
        )}

        {files && files.length > 0 && (
          <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
            {files.map((file, index) => (
              <button
                type="button"
                key={file.id}
                onClick={() => setLightboxIndex(index)}
                className="group overflow-hidden rounded-lg border border-amber/40"
              >
                {/* Drive thumbnails are remote and intentionally rendered as native img tags. */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={getDriveThumbnailUrl(file.id, "w900")}
                  alt={file.name || `${album.title} photo ${index + 1}`}
                  className="aspect-[4/3] w-full object-cover transition group-hover:scale-[1.02]"
                  loading="lazy"
                />
              </button>
            ))}
          </div>
        )}

        <a
          href={albumUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex font-bold text-maroon underline"
        >
          Open full album →
        </a>
      </div>

      {selectedFile && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Photo viewer"
          onClick={() => setLightboxIndex(null)}
        >
          <button
            type="button"
            className="absolute right-4 top-4 rounded bg-white/15 px-3 py-1 text-sm font-bold text-white"
            onClick={() => setLightboxIndex(null)}
          >
            Close
          </button>
          <button
            type="button"
            className="absolute left-4 rounded bg-white/15 px-3 py-2 text-xl text-white"
            onClick={(event) => {
              event.stopPropagation();
              setLightboxIndex((current) => {
                if (current === null || !files || files.length === 0) return current;
                return (current - 1 + files.length) % files.length;
              });
            }}
          >
            ‹
          </button>
          {/* Drive full-size image is remote and intentionally rendered as native img tag. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={getDriveImageUrl(selectedFile.id)}
            alt={selectedFile.name || "Album photo"}
            className="max-h-[85vh] max-w-[95vw] rounded-lg object-contain"
            onClick={(event) => event.stopPropagation()}
          />
          <button
            type="button"
            className="absolute right-4 rounded bg-white/15 px-3 py-2 text-xl text-white"
            onClick={(event) => {
              event.stopPropagation();
              setLightboxIndex((current) => {
                if (current === null || !files || files.length === 0) return current;
                return (current + 1) % files.length;
              });
            }}
          >
            ›
          </button>
        </div>
      )}
    </>
  );
}
