import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const srcDir = './src/assets';

async function optimizeImages() {
  const files = fs.readdirSync(srcDir).filter(f => f.endsWith('.jpg') || f.endsWith('.jpeg'));
  for (const file of files) {
    const inputPath = path.join(srcDir, file);
    const outputPath = path.join(srcDir, file.replace(/\.jpe?g$/, '.webp'));
    console.log(`Optimizing ${file}...`);
    
    // Most project images are large. Let's resize them to a max width of 1920 to save space,
    // and compress with webp quality 80.
    await sharp(inputPath)
      .resize({ width: 1920, withoutEnlargement: true })
      .webp({ quality: 80, effort: 6 })
      .toFile(outputPath);
      
    const oldSize = fs.statSync(inputPath).size;
    const newSize = fs.statSync(outputPath).size;
    console.log(`  -> Original: ${(oldSize / 1024 / 1024).toFixed(2)} MB, New: ${(newSize / 1024 / 1024).toFixed(2)} MB`);
  }
}

optimizeImages().catch(console.error);
