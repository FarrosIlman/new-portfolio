import React, { useState } from 'react';
import { motion as Motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Globe, Sun, Moon } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  const navLinks = [
    { name: t.nav.about, href: '#about' },
    { name: t.nav.work, href: '#journey' },
    { name: t.nav.experience, href: '#experience' },
    { name: t.nav.contact, href: '#contact' },
  ];

  const handleScrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Desktop Header */}
      <header className="fixed top-0 left-0 right-0 z-[100] w-full bg-[var(--bg)]/90 backdrop-blur-sm hidden md:block pt-[env(safe-area-inset-top,0px)]">
        <div className="container mx-auto px-6 md:px-12 max-w-7xl flex justify-between items-center py-8">
          
          {/* Logo */}
          <a href="#" onClick={handleScrollToTop} aria-label="Home" className="flex items-center font-sans font-medium text-[var(--text)] tracking-tight text-xl">
            farros.
          </a>

          {/* Nav Links */}
          <nav className="flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-sans text-sm text-[var(--text-muted)] hover:text-[var(--text)] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>
          
          {/* Actions */}
          <div className="flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="font-mono text-xs text-[var(--subtle)] hover:text-[var(--text)] transition-colors flex items-center justify-center"
              title="Toggle Theme"
            >
              {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
            </button>
            <button
              onClick={toggleLanguage}
              className="font-mono text-xs uppercase tracking-widest text-[var(--subtle)] hover:text-[var(--text)] transition-colors flex items-center gap-2"
              title="Toggle Language"
            >
              <Globe size={14} />
              <span>{language}</span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Header */}
      <header className="fixed top-0 left-0 right-0 z-[100] w-full bg-[var(--bg)]/90 backdrop-blur-sm md:hidden flex justify-between items-center px-6 pb-6 pt-[calc(env(safe-area-inset-top,0px)+1.5rem)]">
        <a href="#" onClick={handleScrollToTop} aria-label="Home" className="font-sans font-medium text-[var(--text)] tracking-tight text-xl">
          farros.
        </a>
        
        <div className="flex items-center gap-6">
          <button
            onClick={toggleTheme}
            className="text-[var(--subtle)] hover:text-[var(--text)] transition-colors flex items-center justify-center"
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            onClick={toggleLanguage}
            className="text-[var(--subtle)] hover:text-[var(--text)] transition-colors font-mono text-xs uppercase tracking-widest flex items-center gap-1"
          >
            <Globe size={16} />
            {language}
          </button>
          <button
            aria-label="Toggle mobile menu"
            className="text-[var(--text)]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <Motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[90] bg-[var(--bg)] text-[var(--text)] pt-32 px-6 md:hidden flex flex-col"
          >
            <nav className="flex flex-col gap-6">
              {navLinks.map((link, index) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-sans text-3xl md:text-4xl font-medium tracking-tight flex items-baseline gap-4"
                >
                  <span className="font-mono text-sm text-[var(--subtle)]">0{index + 1}</span>
                  {link.name}
                </a>
              ))}
            </nav>
          </Motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
