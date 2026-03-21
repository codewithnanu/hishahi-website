import sharp from 'sharp';
import { rename } from 'fs/promises';

const files = [
  ['./public/products/triangular shape container.png', './public/products/triangular.jpeg'],
  ['./public/products/imidia container.png',           './public/products/imida.jpeg'],
  ['./public/products/edible oil container.png',       './public/products/edible-oil.jpeg'],
  ['./public/products/rectangle shape fast mix.png',   './public/products/rectangle-fastmix.jpeg'],
];

for (const [src, dest] of files) {
  const tmp = dest + '.tmp';
  await sharp(src)
    .resize(600, 600, { fit: 'contain', background: { r:255, g:255, b:255, alpha:1 } })
    .jpeg({ quality: 90 })
    .toFile(tmp);
  await rename(tmp, dest);
  console.log('✓', dest);
}
console.log('Done!');
