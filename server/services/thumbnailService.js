const sharp = require('sharp');

const addTextToImage = async (imageBuffer, title) => {
  // Create an SVG overlay for the text
  const svgText = `
    <svg width="1280" height="720">
      <style>
        .title { 
          fill: white; 
          font-size: 70px; 
          font-weight: 900; 
          font-family: sans-serif; 
          text-anchor: middle;
          stroke: black;
          stroke-width: 2px;
        }
      </style>
      <text x="50%" y="85%" class="title">${title}</text>
    </svg>`;

  // Composite the SVG onto the image buffer
  return await sharp(imageBuffer)
    .resize(1280, 720)
    .composite([{ input: Buffer.from(svgText), top: 0, left: 0 }])
    .toBuffer();
};

module.exports = { addTextToImage };