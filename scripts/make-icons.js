const sharp = require("sharp");
const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="180" height="180">
  <rect width="180" height="180" rx="36" fill="#1f6b5c"/>
  <text x="90" y="118" text-anchor="middle" font-family="Georgia, serif" font-size="72" font-weight="700" fill="#f7fbf9">RH</text>
</svg>`;

sharp(Buffer.from(svg))
  .png()
  .toFile("public/apple-touch-icon.png")
  .then((info) => console.log(info))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
