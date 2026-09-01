import fs from 'fs';
import path from 'path';

const srcDir = path.join(process.cwd(), 'src');

const replacements = [
  { regex: /#FAFAFA/g, replace: 'var(--bg)' },
  { regex: /#111111/g, replace: 'var(--text)' },
  { regex: /#888888/g, replace: 'var(--subtle)' },
  { regex: /#555555/g, replace: 'var(--text-muted)' },
  { regex: /#EAEAEA/g, replace: 'var(--border)' },
  { regex: /bg-\[#f8fafc\]/g, replace: 'bg-[var(--bg-secondary)]' } // From TimeTunnel radial gradient
];

function processDirectory(dir) {
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDirectory(fullPath);
    } else if (fullPath.endsWith('.jsx') || fullPath.endsWith('.js')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let originalContent = content;
      
      for (const { regex, replace } of replacements) {
        content = content.replace(regex, replace);
      }
      
      if (content !== originalContent) {
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log(`Updated ${fullPath}`);
      }
    }
  }
}

processDirectory(srcDir);
console.log('Done replacing colors.');
