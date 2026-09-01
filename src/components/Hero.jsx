import React from 'react';
import { motion as Motion } from 'framer-motion';
import farrosImg from '../assets/Farros Ilman.webp';
import { useLanguage } from '../context/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section aria-label="Hero" className="relative w-full min-h-[85svh] h-auto bg-[var(--bg)] flex flex-col justify-center pt-24 pb-8">
      <Motion.div 
        className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10"
      >
        {/* Top: Massive Typography */}
        <Motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8"
        >
          <h1 className="text-[clamp(3.5rem,10vw,7.5rem)] font-sans font-medium text-[var(--text)] leading-[1] tracking-tight">
            Building <br/>
            <span className="text-[var(--subtle)] italic pr-4">digital</span><br/>
            products.
          </h1>
        </Motion.div>

        {/* Bottom: 3-column layout (Intro | Photo | Meta) */}
        <div className="flex flex-col md:flex-row items-end justify-between gap-8 border-t border-[var(--border)] pt-6">
          
          {/* Column 1: Short Introduction */}
          <Motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="w-full md:w-1/3"
          >
            <p className="font-sans text-base md:text-lg text-[var(--text-muted)] leading-relaxed max-w-sm md:max-w-md">
              {t.hero.description}
            </p>
          </Motion.div>

          {/* Column 2: Photo */}
          <Motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="w-full md:w-1/3 flex justify-center md:justify-center order-first md:order-none mb-6 md:mb-0"
          >
            <div className="relative w-full max-w-[320px] aspect-[4/5] overflow-hidden rounded-sm">
              <img 
                src={farrosImg} 
                alt="Muchammad Farros Ilman Haq" 
                className="w-full h-full object-cover grayscale opacity-90"
                fetchPriority="high"
                loading="eager"
              />
            </div>
          </Motion.div>

          {/* Column 3: Meta Data */}
          <Motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="w-full md:w-1/3 flex flex-col md:items-end text-left md:text-right gap-4"
          >
            <div>
              <span className="font-mono text-[10px] text-[var(--subtle)] tracking-widest uppercase block mb-1">Role</span>
              <span className="font-sans font-medium text-[var(--text)]">{t.hero.role || "Software Engineer"}</span>
            </div>
            <div className="hidden md:block">
              <span className="font-mono text-[10px] text-[var(--subtle)] tracking-widest uppercase block mb-1">Location</span>
              <span className="font-sans font-medium text-[var(--text)]">Pekalongan, Indonesia</span>
            </div>
            <div className="hidden md:block">
              <span className="font-mono text-[10px] text-[var(--subtle)] tracking-widest uppercase block mb-1">Availability</span>
              <span className="font-sans font-medium text-[var(--text)] flex items-center gap-2 md:justify-end">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                Open to work
              </span>
            </div>
          </Motion.div>

        </div>
      </Motion.div>
    </section>
  );
};

export default Hero;
