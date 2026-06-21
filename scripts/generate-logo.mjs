import sharp from "sharp";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const source = join(root, "public/images/rams-logo.png");

const resizeLogo = (size) =>
  sharp(source).resize(size, size, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } });

await resizeLogo(512).png().toFile(join(root, "public/logo.png"));
await resizeLogo(64).png().toFile(join(root, "public/logo-sm.png"));
await resizeLogo(32).png().toFile(join(root, "public/favicon.png"));

console.log("Generated public/logo.png, logo-sm.png, favicon.png");
