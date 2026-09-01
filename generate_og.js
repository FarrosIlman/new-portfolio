import fs from 'fs';
import sharp from 'sharp';

const svg = `
<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
  <!-- Background -->
  <rect width="1200" height="630" fill="#fafafa" />
  
  <!-- Content Container -->
  <g transform="translate(100, 100)">
    
    <!-- Title Area -->
    <text x="0" y="80" font-family="system-ui, -apple-system, sans-serif" font-size="80" font-weight="800" fill="#111111" letter-spacing="-2">M. Farros Ilman Haq</text>
    
    <text x="0" y="160" font-family="system-ui, -apple-system, sans-serif" font-size="48" font-weight="500" fill="#111111" letter-spacing="-1">Building digital products.</text>
    
    <text x="0" y="240" font-family="system-ui, -apple-system, sans-serif" font-size="32" font-weight="400" fill="#555555">Software Engineer &amp; Front-End Developer</text>
    
    <!-- Accent Line -->
    <line x1="0" y1="300" x2="1000" y2="300" stroke="#eaeaea" stroke-width="2" />
    
    <!-- Contact Info (Bottom) -->
    <g transform="translate(0, 380)" font-family="ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace" font-size="24" fill="#555555">
      <text x="0" y="0">Email: rosilman000@gmail.com</text>
      <text x="0" y="45">Tel: +62 819 0341 1015</text>
      
      <text x="500" y="0">LinkedIn: Muchammad Farros Ilman Haq</text>
      <text x="500" y="45">GitHub: FarrosIlman</text>
    </g>
    
    <!-- Subtle branding at bottom right -->
    <text x="1000" y="450" font-family="system-ui, -apple-system, sans-serif" font-size="20" font-weight="600" fill="#cccccc" text-anchor="end" letter-spacing="4">FARROS.</text>
  </g>
</svg>
`;

fs.writeFileSync('temp.svg', svg);

sharp('temp.svg')
  .jpeg({ quality: 100 })
  .toFile('public/og-image.jpg')
  .then(() => {
    console.log('Successfully generated og-image.jpg');
    fs.unlinkSync('temp.svg');
  })
  .catch(err => {
    console.error('Error generating image:', err);
  });
