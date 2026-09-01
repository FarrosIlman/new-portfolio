import fs from 'fs';
import path from 'path';

const srcDir = path.join(process.cwd(), 'src');

function processDirectory(dir) {
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDirectory(fullPath);
    } else if (fullPath.endsWith('.jsx') || fullPath.endsWith('.js')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      if (content.includes('once: true')) {
        content = content.replace(/once:\s*true/g, 'once: false');
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log(`Updated once:true to once:false in ${fullPath}`);
      }
    }
  }
}

processDirectory(srcDir);
console.log('Done replacing animations to trigger both in and out.');
