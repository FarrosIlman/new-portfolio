import fs from 'fs';
import puppeteer from 'puppeteer';

const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>OG Image</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <style>
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }
    body {
      width: 1200px;
      height: 630px;
      font-family: 'Plus Jakarta Sans', sans-serif;
      background-color: #FAFAFA;
      background-image: radial-gradient(#d1d5db 1px, transparent 1px);
      background-size: 20px 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
    }
    .card {
      width: 1040px;
      height: 480px;
      background: white;
      border-radius: 24px;
      padding: 64px;
      box-shadow: 0 20px 40px rgba(0,0,0,0.05), 0 1px 3px rgba(0,0,0,0.02);
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      position: relative;
    }
    .badge {
      position: absolute;
      top: -18px;
      left: 64px;
      background: #f1f5f9;
      color: #475569;
      padding: 8px 16px;
      border-radius: 99px;
      font-weight: 700;
      font-size: 14px;
      letter-spacing: 2px;
    }
    .logo {
      position: absolute;
      top: 64px;
      right: 64px;
      font-weight: 700;
      font-size: 24px;
      color: #0f172a;
      letter-spacing: -1px;
    }
    .header h1 {
      font-size: 72px;
      font-weight: 800;
      color: #0f172a;
      letter-spacing: -2px;
      margin-bottom: 8px;
      margin-top: 10px;
    }
    .header p.tagline {
      font-size: 36px;
      font-weight: 500;
      color: #475569;
      letter-spacing: -1px;
    }
    .divider {
      width: 100%;
      height: 1px;
      background: #e2e8f0;
      margin: 32px 0;
      position: relative;
    }
    .divider::before {
      content: '';
      position: absolute;
      top: -2px;
      left: 0;
      width: 100px;
      height: 5px;
      background: #0f172a;
      border-radius: 3px;
    }
    .content-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 16px;
    }
    .role {
      font-size: 24px;
      font-weight: 700;
      color: #0f172a;
      margin-bottom: 16px;
    }
    .contact-info {
      display: grid;
      grid-template-columns: auto 1fr auto 1fr;
      gap: 16px 24px;
      font-size: 18px;
      align-items: center;
    }
    .label {
      font-weight: 700;
      color: #94a3b8;
      font-size: 14px;
      letter-spacing: 1px;
    }
    .value {
      font-weight: 500;
      color: #334155;
    }
  </style>
</head>
<body>
  <div class="card">
    <div class="badge">PORTFOLIO</div>
    <div class="logo">farros.</div>
    
    <div class="header">
      <h1>M. Farros Ilman Haq</h1>
      <p class="tagline">Building digital products.</p>
    </div>
    
    <div class="divider"></div>
    
    <div class="content-grid">
      <div class="role">Software Engineer & Front-End Developer</div>
      <div class="contact-info">
        <div class="label">EMAIL</div>
        <div class="value">rosilman000@gmail.com</div>
        <div class="label">LINKEDIN</div>
        <div class="value">Muchammad Farros Ilman Haq</div>
        
        <div class="label">TEL</div>
        <div class="value">+62 819 0341 1015</div>
        <div class="label">GITHUB</div>
        <div class="value">FarrosIlman</div>
      </div>
    </div>
  </div>
</body>
</html>
`;

(async () => {
  console.log('Launching puppeteer...');
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  
  await page.setViewport({ width: 1200, height: 630 });
  await page.setContent(html, { waitUntil: 'networkidle0' });
  
  await page.screenshot({ path: 'public/og-image.jpg', type: 'jpeg', quality: 100 });
  
  await browser.close();
  console.log('Successfully generated pixel-perfect og-image.jpg!');
})();
