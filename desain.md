# Panduan Desain Portofolio (desain.md)

Dokumen ini adalah fondasi desain web modern untuk proyek `parrosz-portfolio-main`, yang disusun berdasarkan referensi dari 5 Design Kit teratas di `designmd` (Genesis, CreateSpace, RawBlock, StudioBlank, dan Crypto Blue).

Sebagai asisten, saya akan selalu menggunakan panduan ini setiap kali membuat atau memodifikasi komponen antarmuka pengguna (UI) di dalam proyek ini.

## 1. Prinsip Estetika Utama (Core Aesthetics)
Karena ini adalah portofolio developer, kita akan menggabungkan keunggulan dari berbagai *design kit* untuk menciptakan tampilan yang **profesional, ekspresif, namun tetap minimalis dan berfokus pada konten**.

- **Editorial Precision (Genesis):** Tipografi yang tegas, tebal (*bold display*), dan margin/jarak (*whitespace*) yang proporsional untuk kesan profesional dan bersih.
- **Dynamic Layouts (CreateSpace):** Penggunaan warna-warna aksen yang cerah, elemen *glassmorphism* (panel kaca buram), dan susunan asimetris untuk menonjolkan karya kreatif.
- **Whitespace Focus (StudioBlank):** UI yang tidak bising (*ultra-minimal*), di mana karya atau konten utama menjadi bintangnya. Elemen kontrol (tombol, input) dibuat sekunder secara visual.
- **Modern & Trusted (Crypto Blue):** Presisi piksel dan penggunaan warna *neutral/dark* yang memberikan kesan teknis, aman, dan mutakhir.

## 2. Palet Warna (Color Palette)
Gunakan pendekatan palet gelap (*dark mode*) atau palet terang yang berani (*bold light*) sesuai tema.
- **Background Utama:** Warna solid ekstrem (seperti `#0A0A0A` untuk gelap atau `#FAFAFA` untuk terang) agar teks lebih kontras.
- **Warna Aksen / Brand:** Gunakan warna yang berani (misal Biru `#2563EB` atau Merah Muda `#E11D48`) khusus untuk tombol CTA utama, tautan, dan elemen interaktif penting.
- **Surface / Cards:** Gunakan *Glassmorphism* (misalnya putih transparan dengan efek `backdrop-filter: blur(16px)`) untuk kartu, navbar, atau elemen melayang (*floating*).

## 3. Tipografi
- **Headline/Judul:** Gunakan font Sans-serif yang berani (seperti *Poppins* atau *Inter* varian Bold/ExtraBold) dengan *line-height* rapat (1.1 - 1.2).
- **Body Text:** Gunakan font yang mudah dibaca (seperti *DM Sans* atau *Roboto* varian Regular/Medium) dengan *line-height* yang lebih longgar (1.5 - 1.6).
- **Kode / Teknis:** Gunakan font *Monospace* (seperti *Fira Code*) untuk tag, chip, atau cuplikan kode.

## 4. Efek & Interaksi
- **Glassmorphism:** Kartu portofolio dan *header* akan menggunakan efek kaca (lapisan transparan dengan *blur* dan garis batas/border yang sangat tipis).
- **Shadow:** Gunakan bayangan yang halus (*soft shadow*) dengan warna sedikit ditekankan (misal bayangan aksen biru untuk tombol yang difokuskan).
- **Animasi:** Transisi harus halus (150ms - 300ms) tanpa berlebihan. Gunakan efek *hover* yang memberikan *feedback* instan (misal kartu sedikit terangkat, atau tombol berubah opasitas).
- **Border Radius:** Fleksibel. Gunakan `8px` untuk tombol, dan `16px` hingga `24px` untuk kartu konten dan modal.

## 5. Do's and Don'ts (Aturan Wajib)
- **DO:** Berikan ruang kosong (*whitespace*) yang berlimpah di antara setiap bagian halaman. Biarkan setiap elemen bernapas.
- **DO:** Selalu berikan kontras warna yang cukup agar teks tetap mudah dibaca (*accessible*).
- **DO:** Gunakan desain berbasis *grid* yang konsisten namun jangan ragu menggunakan tata letak asimetris untuk *hero section* atau galeri portofolio.
- **DON'T:** Jangan menggunakan bayangan (*drop-shadow*) gaya lama yang gelap dan tebal; gunakan cahaya berwarna (*glow*) atau bayangan *diffused*.
- **DON'T:** Jangan memenuhi layar dengan banyak teks. Gunakan ikon dan ringkasan teks.
