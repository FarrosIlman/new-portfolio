import React from 'react';

const Footer = () => {
  return (
    <footer className="py-8 px-6 md:px-12 border-t border-white/5 bg-plum-dark">
      <div className="container mx-auto max-w-7xl flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="font-sans text-sm font-semibold text-white/50">
          © {new Date().getFullYear()} M. FARROS ILMAN HAQ
        </div>
        <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/30">
          Built with care &bull; Pekalongan, ID
        </div>
      </div>
    </footer>
  );
};

export default Footer;
