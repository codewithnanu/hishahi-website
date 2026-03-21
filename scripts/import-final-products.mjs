import sharp from 'sharp';
import { readdirSync, mkdirSync } from 'fs';
import { join } from 'path';

const SRC = 'C:/Users/gaura/Downloads/final_named_products';
const DEST = './public/products';
const SIZE = 600;

// Map Product_XX.png → product image filename (in PDF order matching products.ts order)
const mapping = {
  'Product_01.png': 'triangular.jpeg',
  'Product_02.png': 'imida.jpeg',
  'Product_03.png': 'monocrotophos.jpeg',
  'Product_04.png': 'mono-shriram.jpeg',
  'Product_05.png': 'square-popular.jpeg',
  'Product_06.png': 'rectangle-fastmix.jpeg',
  'Product_07.png': 'round-glory.jpeg',
  'Product_08.png': 'round-dow.jpeg',
  'Product_09.png': 'glyphosate-shriram.jpeg',
  'Product_10.png': 'glyphosate.jpeg',
  'Product_11.png': 'solid-imida.jpeg',
  'Product_12.png': 'paraquat-design.jpeg',
  'Product_13.png': 'surfactant.jpeg',
  'Product_14.png': 'jerry-can-dow.jpeg',
  'Product_15.png': 'dow-pesticides.jpeg',
  'Product_16.png': 'dow-handle.jpeg',
  'Product_17.png': 'jerry-can.jpeg',
  'Product_18.png': 'paraquat.jpeg',
  'Product_19.png': 'lubricant-handle.jpeg',
  'Product_20.png': 'lubricant-large.jpeg',
  'Product_21.png': 'lubricant-small.jpeg',
  'Product_22.png': 'edible-oil.jpeg',
  'Product_23.png': 'extra-23.jpeg',
  'Product_24.png': 'extra-24.jpeg',
  'Product_25.png': 'extra-25.jpeg',
  'Product_26.png': 'extra-26.jpeg',
  'Product_27.png': 'extra-27.jpeg',
  'Product_28.png': 'extra-28.jpeg',
};

const files = readdirSync(SRC).filter(f => /\.png$/i.test(f)).sort();
console.log(`Found ${files.length} files`);

for (const file of files) {
  const destName = mapping[file];
  if (!destName) { console.log(`  ? skipping ${file}`); continue; }
  const src = join(SRC, file);
  const dest = join(DEST, destName);
  await sharp(src)
    .resize(SIZE, SIZE, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 1 } })
    .jpeg({ quality: 92 })
    .toFile(dest);
  console.log(`  ✓ ${file} → ${destName}`);
}
console.log('Done!');
