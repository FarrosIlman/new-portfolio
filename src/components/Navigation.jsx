import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t.nav.about, href: '#about' },
    { name: t.nav.journey, href: '#journey' },
    { name: t.nav.experience, href: '#experience' },
    { name: t.nav.education, href: '#education' },
    { name: t.nav.contact, href: '#contact' },
  ];

  return (
    <nav
      aria-label="Main Navigation"
      className={`fixed top-0 w-full z-[100] transition-all duration-300 ${scrolled ? 'py-4 backdrop-blur-lg bg-black/40 border-b border-white/5' : 'py-8 bg-transparent'}`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center max-w-7xl">
        {/* Logo */}
        <a
          href="/"
          aria-label="Home"
          className="flex items-center gap-3 group cursor-pointer"
        >
          <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md flex items-center justify-center shadow-[0_4_20px_rgba(0,0,0,0.3)] group-hover:bg-white/10 transition-all duration-300">
            <span className="font-sans font-black text-gradient-coral text-lg leading-none">
              FI
            </span>
          </div>
          <span className="font-sans font-bold text-lg tracking-tight hidden sm:block text-white/90 group-hover:text-white transition-colors duration-300">
            Farros <span className="text-white/40 font-normal">Ilman</span>
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-8 font-mono text-xs uppercase tracking-widest text-white/70">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-white transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-gradient-coral transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>
          
          <div className="flex items-center gap-4 ml-4 border-l border-white/10 pl-6">
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-all text-white/80 hover:text-white text-xs font-mono font-bold"
              title="Toggle Language"
            >
              <Globe size={14} />
              <span>{language.toUpperCase()}</span>
            </button>
            <a
              href="#contact"
              className="px-6 py-2.5 rounded-full bg-gradient-coral text-white font-sans font-bold text-sm hover:shadow-[0_0_20px_rgba(255,129,88,0.5)] transition-all hover:scale-105 active:scale-95 whitespace-nowrap"
            >
              Hire me
            </a>
          </div>
        </div>

        {/* Mobile Hamburger & Lang */}
        <div className="flex md:hidden items-center gap-4">
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/80 text-xs font-mono font-bold"
          >
            <Globe size={14} />
            <span>{language.toUpperCase()}</span>
          </button>
          <button
            aria-label="Toggle mobile menu"
            className="text-white p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/90 backdrop-blur-xl border-b border-white/10 overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-6 font-mono text-sm uppercase tracking-widest">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-white/80 hover:text-white transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-4 px-6 py-3 rounded-full bg-gradient-coral text-white text-center font-sans font-bold hover:shadow-[0_0_20px_rgba(255,129,88,0.5)] transition-all"
              >
                Hire me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navigation;

