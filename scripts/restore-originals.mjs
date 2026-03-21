import sharp from 'sharp';
import { createWriteStream, mkdirSync } from 'fs';
import { join } from 'path';
import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);

// Extract zip first
await execAsync('unzip -o "C:/Users/gaura/Downloads/resized_product_images.zip" -d "C:/Users/gaura/Downloads/orig_extracted"');

const SRC = 'C:/Users/gaura/Downloads/orig_extracted';
const DEST = 'C:/Users/gaura/Downloads/Website Generation/public/products';
const SIZE = 600;

// Map page images → product filenames (in PDF order)
const mapping = [
  ['page1_img1.jpg', 'triangular.jpeg'],
  ['page1_img2.jpg', 'imida.jpeg'],
  ['page2_img1.jpg', 'monocrotophos.jpeg'],
  ['page2_img2.jpg', 'mono-shriram.jpeg'],
  ['page2_img3.jpg', 'square-popular.jpeg'],
  ['page3_img1.jpg', 'rectangle-fastmix.jpeg'],
  ['page3_img2.jpg', 'round-glory.jpeg'],
  ['page3_img3.jpg', 'round-dow.jpeg'],
  ['page4_img1.jpg', 'glyphosate-shriram.jpeg'],
  ['page4_img2.jpg', 'glyphosate.jpeg'],
  ['page4_img3.jpg', 'solid-imida.jpeg'],
  ['page5_img1.jpg', 'paraquat-design.jpeg'],
  ['page5_img2.jpg', 'surfactant.jpeg'],
  ['page5_img3.jpg', 'jerry-can-dow.jpeg'],
  ['page6_img1.jpg', 'dow-pesticides.jpeg'],
  ['page6_img2.jpg', 'dow-handle.jpeg'],
  ['page6_img3.jpg', 'jerry-can.jpeg'],
  ['page7_img1.jpg', 'paraquat.jpeg'],
  ['page7_img2.jpg', 'lubricant-handle.jpeg'],
  ['page7_img3.jpg', 'lubricant-large.jpeg'],
  ['page8_img1.jpg', 'lubricant-small.jpeg'],
  ['page8_img2.jpg', 'edible-oil.jpeg'],
];

console.log('Restoring original product images...');
for (const [src, dest] of mapping) {
  await sharp(join(SRC, src))
    .resize(SIZE, SIZE, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 1 } })
    .jpeg({ quality: 92 })
    .toFile(join(DEST, dest));
  console.log(`  ✓ ${src} → ${dest}`);
}
console.log('Done!');
