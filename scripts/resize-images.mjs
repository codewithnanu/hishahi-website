import sharp from 'sharp';
import { readdirSync } from 'fs';
import { join } from 'path';

const INPUT_DIR = './public/products';
const SIZE = 600; // final image: 600x600px

const files = readdirSync(INPUT_DIR).filter(f => /\.(jpe?g|png|webp)$/i.test(f));

console.log(`Processing ${files.length} images → ${SIZE}x${SIZE}px white canvas...`);

for (const file of files) {
  const src = join(INPUT_DIR, file);
  await sharp(src)
    .resize(SIZE, SIZE, {
      fit: 'contain',          // scale to fit, keep aspect ratio
      background: { r: 255, g: 255, b: 255, alpha: 1 }, // white padding
    })
    .jpeg({ quality: 90 })
    .toFile(src + '.tmp.jpeg');

  // overwrite original
  const { rename } = await import('fs/promises');
  await rename(src + '.tmp.jpeg', src);
  console.log(`  ✓ ${file}`);
}

console.log('Done!');
