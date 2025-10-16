import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import sharp from 'sharp';
import imagemin from 'imagemin';
import imageminMozjpeg from 'imagemin-mozjpeg';
import imageminPngquant from 'imagemin-pngquant';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PUBLIC_DIR = path.join(__dirname, '../public');
const OUTPUT_DIR = path.join(__dirname, '../public/optimized');

// Create output directory if it doesn't exist
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

// Get all image files from public directory
const imageFiles = fs.readdirSync(PUBLIC_DIR)
  .filter(file => /\.(png|jpe?g)$/i.test(file))
  .map(file => path.join(PUBLIC_DIR, file));

// Process each image
async function optimizeImages() {
  console.log('Starting image optimization...');
  
  // Create WebP versions of all images
  for (const file of imageFiles) {
    const filename = path.basename(file);
    const outputWebP = path.join(OUTPUT_DIR, filename.replace(/\.(png|jpe?g)$/i, '.webp'));
    
    try {
      await sharp(file)
        .resize({ width: 1200, withoutEnlargement: true }) // Limit max width
        .webp({ quality: 80 })
        .toFile(outputWebP);
      
      console.log(`Created WebP: ${outputWebP}`);
    } catch (err) {
      console.error(`Error processing ${file}:`, err);
    }
  }
  
  // Optimize original formats (PNG/JPG)
  await imagemin(imageFiles, {
    destination: OUTPUT_DIR,
    plugins: [
      imageminMozjpeg({ quality: 80 }),
      imageminPngquant({ quality: [0.65, 0.8] })
    ]
  });
  
  console.log('Image optimization complete!');
  console.log(`Optimized images saved to: ${OUTPUT_DIR}`);
}

optimizeImages().catch(console.error);