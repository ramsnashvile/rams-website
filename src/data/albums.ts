export type AlbumVideo = {
  title: string;
  youtubeId: string;
  duration?: string;
};

export type Album = {
  slug: string;
  title: string;
  year: number;
  description: string;
  published: boolean;
  driveFolderId: string;
  photosAlbumUrl?: string;
  coverFileId?: string;
  featuredFileIds?: string[];
  videos: AlbumVideo[];
};

/** Paste the Drive Apps Script web app URL after deployment. */
export const driveAlbums = {
  scriptUrl: "",
};

export const albums: Album[] = [
  {
    slug: "aaradhane-2026",
    title: "Raayara Aaradhana Mahothsava 2026",
    year: 2026,
    description:
      "Devotional moments from pooja, cultural programs, and community prasadam in Nashville.",
    published: true,
    driveFolderId: "",
    photosAlbumUrl: "https://photos.app.goo.gl/EB65sbKJxz3N1kCg8",
    coverFileId: "",
    featuredFileIds: [],
    videos: [
      {
        title: "Event highlights",
        youtubeId: "KOHeSpsD5I4",
      },
    ],
  },
];

export function isDriveAlbumsConfigured(): boolean {
  return Boolean(driveAlbums.scriptUrl.trim());
}

export function getPublishedAlbums(): Album[] {
  return albums.filter((album) => album.published);
}

export function getAlbumBySlug(slug: string): Album | undefined {
  return albums.find((album) => album.slug === slug);
}

export function getDriveFolderUrl(folderId: string): string {
  if (!folderId.trim()) {
    return "https://drive.google.com/drive/folders/";
  }
  return `https://drive.google.com/drive/folders/${folderId}`;
}

export function getAlbumUrl(album: Album): string {
  if (album.photosAlbumUrl?.trim()) {
    return album.photosAlbumUrl.trim();
  }
  return getDriveFolderUrl(album.driveFolderId);
}

export function getDriveThumbnailUrl(fileId: string, size = "w1200"): string {
  return `https://drive.google.com/thumbnail?id=${encodeURIComponent(fileId)}&sz=${size}`;
}

export function getDriveImageUrl(fileId: string): string {
  return `https://lh3.googleusercontent.com/d/${encodeURIComponent(fileId)}`;
}

export function getYouTubeEmbedUrl(videoId: string): string {
  return `https://www.youtube.com/embed/${encodeURIComponent(videoId)}`;
}

export type FeaturedAlbumPhoto = {
  albumSlug: string;
  albumTitle: string;
  fileId: string;
};

export function getFeaturedAlbumPhotos(limit = 6): FeaturedAlbumPhoto[] {
  const featured: FeaturedAlbumPhoto[] = [];
  for (const album of getPublishedAlbums()) {
    const ids = album.featuredFileIds ?? [];
    for (const fileId of ids) {
      if (!fileId.trim()) continue;
      featured.push({
        albumSlug: album.slug,
        albumTitle: album.title,
        fileId,
      });
      if (featured.length >= limit) {
        return featured;
      }
    }
  }
  return featured;
}
