import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'JOURNEY', href: '#journey' },
    { name: 'ABOUT', href: '#about' },
    { name: 'CONTACT', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-[100] transition-all duration-300 ${scrolled ? 'py-4 backdrop-blur-lg bg-black/40 border-b border-white/5' : 'py-8 bg-transparent'}`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center max-w-7xl">
        {/* Logo */}
        <div
          className="flex items-center gap-3 group cursor-pointer"
          onClick={() => window.scrollTo(0, 0)}
        >
          <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md flex items-center justify-center shadow-[0_4_20px_rgba(0,0,0,0.3)] group-hover:bg-white/10 transition-all duration-300">
            <span className="font-sans font-black text-gradient-coral text-lg leading-none">
              FI
            </span>
          </div>
          <span className="font-sans font-bold text-lg tracking-tight hidden sm:block text-white/90 group-hover:text-white transition-colors duration-300">
            Farros <span className="text-white/40 font-normal">Ilman</span>
          </span>
        </div>

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
          <a
            href="#contact"
            className="ml-4 px-6 py-2.5 rounded-full bg-gradient-coral text-white font-sans font-bold text-sm hover:shadow-[0_0_20px_rgba(255,129,88,0.5)] transition-all hover:scale-105 active:scale-95"
          >
            Hire me
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
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
