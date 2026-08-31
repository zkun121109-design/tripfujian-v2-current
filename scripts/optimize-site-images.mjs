import sharp from "sharp";

const hero = "public/hero-fujian-flight-v4.jpg";

await Promise.all([
  sharp(hero).resize({ width: 768, withoutEnlargement: true }).webp({ quality: 78 }).toFile("public/hero-fujian-flight-v4-mobile.webp"),
  sharp(hero).resize({ width: 1280, withoutEnlargement: true }).webp({ quality: 80 }).toFile("public/hero-fujian-flight-v4-tablet.webp"),
  sharp(hero).resize({ width: 1920, withoutEnlargement: true }).webp({ quality: 82 }).toFile("public/hero-fujian-flight-v4-desktop.webp"),
  sharp("public/wechat-qr-yujunyou.png")
    .resize({ width: 512, height: 512, fit: "inside", withoutEnlargement: true, kernel: "nearest" })
    .png({ compressionLevel: 9, palette: true })
    .toFile("public/wechat-qr-yujunyou-optimized.png"),
]);
