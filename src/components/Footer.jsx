import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="py-8 px-6 md:px-12 border-t border-[var(--border)] bg-[var(--bg)]">
      <div className="container mx-auto max-w-7xl flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="font-sans text-sm font-semibold text-[var(--text-muted)]">
          © {new Date().getFullYear()} M. FARROS ILMAN HAQ. {t.footer.rights}
        </div>
        <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--subtle)]">
          {t.footer.madeWith} &bull; Pekalongan, ID
        </div>
      </div>
    </footer>
  );
};

export default Footer;
