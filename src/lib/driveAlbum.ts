import { driveAlbums, isDriveAlbumsConfigured } from "@/data/albums";

export type DriveAlbumFile = {
  id: string;
  name: string;
  mimeType: string;
};

function parseFiles(data: unknown): DriveAlbumFile[] | null {
  if (!data || typeof data !== "object" || !("files" in data)) return null;
  const raw = (data as { files: unknown }).files;
  if (!Array.isArray(raw)) return null;

  const files: DriveAlbumFile[] = [];
  for (const item of raw) {
    if (!item || typeof item !== "object") continue;
    const row = item as Record<string, unknown>;
    const id = String(row.id ?? "").trim();
    const name = String(row.name ?? "").trim();
    const mimeType = String(row.mimeType ?? "").trim();
    if (!id || !mimeType.startsWith("image/")) continue;
    files.push({ id, name, mimeType });
  }
  return files;
}

export async function fetchDriveAlbumFiles(
  folderId: string
): Promise<DriveAlbumFile[] | null> {
  if (!isDriveAlbumsConfigured() || !folderId.trim()) return null;

  try {
    const url = new URL(driveAlbums.scriptUrl);
    url.searchParams.set("folderId", folderId);
    url.searchParams.set("_", String(Date.now()));
    const res = await fetch(url.toString());
    if (!res.ok) return null;
    return parseFiles(await res.json());
  } catch {
    return null;
  }
}
