import sharp from 'sharp';
import { rename } from 'fs/promises';
import { existsSync } from 'fs';

const DIR = './public/products';
const SIZE = 600;

// Map: source filename → target filename
const MAP = {
  'monocrotophos.png':                      'monocrotophos.jpeg',
  'monocontainer.png':                      'mono-shriram.jpeg',
  'square container (popular shape).png':   'square-popular.jpeg',
  'rectangle shape fastest mix.png':        'rectangle-fastmix.jpeg',
  'round shape(glory shape).png':           'round-glory.jpeg',
  'round shape(dow design).png':            'round-dow.jpeg',
  'glyphosate container(srriram design).png': 'glyphosate-shriram.jpeg',
  'glyphosate container.png':               'glyphosate.jpeg',
  'solid imidia container.png':             'diamond.jpeg',
  'paraquat design container.png':          'paraquat-design.jpeg',
  'surfacant.png':                          'surfactant.jpeg',
  'jerry can dow design.png':               'jerry-can-dow.jpeg',
  'dow shape pesticide container.png':      'dow-pesticides.jpeg',
  'dow shape handle design.png':            'dow-handle.jpeg',
  'jerry can 5 lts.png':                    'jerry-can.jpeg',
  'paraquat container.png':                 'paraquat.jpeg',
  'lubricant container 1.png':              'lubricant-handle.jpeg',
  'lubricant container 2.png':              'lubricant-large.jpeg',
  'lubricant container 3.png':              'lubricant-small.jpeg',
};

console.log(`Converting & resizing ${Object.keys(MAP).length} images → ${SIZE}x${SIZE}px...\n`);

for (const [src, dest] of Object.entries(MAP)) {
  const srcPath  = `${DIR}/${src}`;
  const destPath = `${DIR}/${dest}`;
  const tmpPath  = `${DIR}/_tmp_${dest}`;

  if (!existsSync(srcPath)) {
    console.log(`  ⚠ MISSING: ${src}`);
    continue;
  }

  await sharp(srcPath)
    .resize(SIZE, SIZE, { fit: 'contain', background: { r:255, g:255, b:255, alpha:1 } })
    .jpeg({ quality: 90 })
    .toFile(tmpPath);

  await rename(tmpPath, destPath);
  console.log(`  ✓ ${src}  →  ${dest}`);
}

console.log('\nDone!');
