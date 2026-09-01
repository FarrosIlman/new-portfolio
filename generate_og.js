import fs from 'fs';
import sharp from 'sharp';

const svg = `
<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <!-- Background Mesh Gradient Orbs -->
    <radialGradient id="orb1" cx="0%" cy="0%" r="70%">
      <stop offset="0%" stop-color="#e2e8f0" stop-opacity="0.8" />
      <stop offset="100%" stop-color="#f8fafc" stop-opacity="0" />
    </radialGradient>
    <radialGradient id="orb2" cx="100%" cy="100%" r="70%">
      <stop offset="0%" stop-color="#cbd5e1" stop-opacity="0.6" />
      <stop offset="100%" stop-color="#f8fafc" stop-opacity="0" />
    </radialGradient>
    <radialGradient id="orb3" cx="100%" cy="0%" r="60%">
      <stop offset="0%" stop-color="#e2e8f0" stop-opacity="0.7" />
      <stop offset="100%" stop-color="#f8fafc" stop-opacity="0" />
    </radialGradient>

    <!-- Grid Pattern -->
    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#cbd5e1" stroke-width="0.5" stroke-opacity="0.3"/>
    </pattern>

    <!-- Elegant Card Shadow -->
    <filter id="card-shadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="25" stdDeviation="35" flood-color="#000000" flood-opacity="0.08"/>
      <feDropShadow dx="0" dy="4" stdDeviation="10" flood-color="#000000" flood-opacity="0.04"/>
    </filter>

    <!-- Glowing Accent -->
    <linearGradient id="glow-line" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#0f172a" />
      <stop offset="50%" stop-color="#334155" />
      <stop offset="100%" stop-color="#0f172a" stop-opacity="0.1" />
    </linearGradient>
  </defs>

  <!-- Base Background -->
  <rect width="1200" height="630" fill="#f8fafc" />
  <rect width="1200" height="630" fill="url(#orb1)" />
  <rect width="1200" height="630" fill="url(#orb2)" />
  <rect width="1200" height="630" fill="url(#orb3)" />
  <rect width="1200" height="630" fill="url(#grid)" />

  <!-- Main Card -->
  <rect x="80" y="80" width="1040" height="470" rx="36" fill="#ffffff" filter="url(#card-shadow)" />
  
  <!-- Content Group -->
  <g transform="translate(150, 150)">
    
    <!-- Header: Logo / Tag -->
    <rect x="0" y="-10" width="120" height="36" rx="18" fill="#f1f5f9" />
    <text x="60" y="14" font-family="system-ui, sans-serif" font-size="14" font-weight="700" fill="#475569" text-anchor="middle" letter-spacing="2">PORTFOLIO</text>
    <text x="890" y="16" font-family="system-ui, sans-serif" font-size="24" font-weight="600" fill="#0f172a" text-anchor="end" letter-spacing="-1">farros.</text>

    <!-- Main Typography -->
    <text x="0" y="110" font-family="system-ui, -apple-system, sans-serif" font-size="76" font-weight="800" fill="#0f172a" letter-spacing="-2">M. Farros Ilman Haq</text>
    <text x="0" y="180" font-family="system-ui, -apple-system, sans-serif" font-size="40" font-weight="500" fill="#334155" letter-spacing="-1">Building digital products.</text>
    
    <!-- Gradient Line Accent -->
    <rect x="0" y="240" width="100" height="6" rx="3" fill="url(#glow-line)" />
    <rect x="0" y="243" width="900" height="1" fill="#e2e8f0" />
    
    <!-- Contact Info Grid (Bottom Left) -->
    <g transform="translate(0, 310)" font-family="system-ui, sans-serif" font-size="20" fill="#0f172a">
      <text x="0" y="0" font-weight="600">Software Engineer &amp; Front-End Developer</text>
      
      <g transform="translate(0, 50)" font-family="ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace" font-size="18" fill="#475569">
        <text x="0" y="0" font-weight="600" fill="#94a3b8">EMAIL</text>
        <text x="90" y="0">rosilman000@gmail.com</text>
        
        <text x="440" y="0" font-weight="600" fill="#94a3b8">LINKEDIN</text>
        <text x="550" y="0">Muchammad Farros Ilman Haq</text>
        
        <text x="0" y="45" font-weight="600" fill="#94a3b8">TEL</text>
        <text x="90" y="45">+62 819 0341 1015</text>
        
        <text x="440" y="45" font-weight="600" fill="#94a3b8">GITHUB</text>
        <text x="550" y="45">FarrosIlman</text>
      </g>
    </g>
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
