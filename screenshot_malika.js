import puppeteer from 'puppeteer';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

(async () => {
  const browser = await puppeteer.launch({
    headless: "new",
  });
  
  const page = await browser.newPage();
  
  // Set viewport to a good laptop size
  await page.setViewport({ width: 1280, height: 800, deviceScaleFactor: 2 });
  
  console.log("Navigating to https://www.malikadigital.my.id/...");
  await page.goto('https://www.malikadigital.my.id/', { waitUntil: 'networkidle2' });
  
  const outputPath = path.join(__dirname, 'public', 'malika-preview.jpg');
  console.log(`Saving screenshot to ${outputPath}...`);
  
  await page.screenshot({ path: outputPath, type: 'jpeg', quality: 90 });
  
  await browser.close();
  console.log("Screenshot saved successfully!");
})();
