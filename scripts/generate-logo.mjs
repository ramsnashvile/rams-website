import sharp from "sharp";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const source = join(root, "public/images/raghavendra-swami.png");

await sharp(source)
  .resize(512, 512, { fit: "cover", position: "top" })
  .png({ quality: 90 })
  .toFile(join(root, "public/logo.png"));

await sharp(source)
  .resize(64, 64, { fit: "cover", position: "top" })
  .png({ quality: 90 })
  .toFile(join(root, "public/logo-sm.png"));

await sharp(source)
  .resize(32, 32, { fit: "cover", position: "top" })
  .png()
  .toFile(join(root, "public/favicon.png"));

console.log("Generated public/logo.png, logo-sm.png, favicon.png");
