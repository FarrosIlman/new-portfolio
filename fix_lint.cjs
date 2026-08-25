const fs = require('fs');
const path = require('path');

// Fix LanguageContext.jsx: remove useEffect
let langFile = fs.readFileSync('src/context/LanguageContext.jsx', 'utf8');
langFile = langFile.replace(/, useEffect/, '');
fs.writeFileSync('src/context/LanguageContext.jsx', langFile);

// Fix ContactCTA.jsx: remove useLanguage
let contactFile = fs.readFileSync('src/components/ContactCTA.jsx', 'utf8');
contactFile = contactFile.replace(/import \{ useLanguage \} from '\.\.\/context\/LanguageContext';\r?\n?/, '');
fs.writeFileSync('src/components/ContactCTA.jsx', contactFile);

// Rename motion to Motion
function processDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDir(fullPath);
    } else if (fullPath.endsWith('.jsx')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      if (content.includes("import { motion }") || content.includes("import { motion,")) {
        content = content.replace(/import \{ motion(,| \})/, 'import { motion as Motion$1');
        content = content.replace(/<motion\./g, '<Motion.');
        content = content.replace(/<\/motion\./g, '</Motion.');
        fs.writeFileSync(fullPath, content);
      }
    }
  }
}
processDir('src');
console.log('done');
