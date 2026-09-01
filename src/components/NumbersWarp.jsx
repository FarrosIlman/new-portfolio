import React, { useRef, useState, useEffect } from 'react';
import { motion as Motion, useInView, animate } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const NumbersWarp = () => {
  const { t } = useLanguage();
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { amount: 0.5, once: false });
  const [displayValue, setDisplayValue] = useState(0);
  const targetValue = 5;

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, targetValue, {
        duration: 2.5,
        ease: [0.16, 1, 0.3, 1],
        onUpdate: (value) => {
          setDisplayValue(Math.round(value));
        },
      });
      return () => controls.stop();
    }
  }, [isInView, targetValue]);

  return (
    <section
      ref={containerRef}
      className="w-full py-32 bg-[var(--bg)] flex items-center justify-center border-t border-[var(--border)]"
    >
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-12 max-w-5xl">
        <Motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="w-full md:w-1/2"
        >
          <h2 className="font-sans text-3xl md:text-4xl font-medium text-[var(--text)] leading-tight tracking-tight mb-4">
            Engineering robust systems from the ground up.
          </h2>
          <p className="font-mono text-sm text-[var(--subtle)] leading-relaxed">
            {'>'} Scalable architectures<br/>
            {'>'} Performance optimization<br/>
            {'>'} Seamless integrations
          </p>
        </Motion.div>

        <Motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 1.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="w-full md:w-1/2 flex flex-col items-start md:items-end"
        >
          <div className="font-sans font-medium text-[6rem] md:text-[10rem] leading-[0.8] tracking-tighter text-[var(--text)]">
            {displayValue}+
          </div>
          <div className="font-sans text-lg md:text-xl text-[var(--subtle)] mt-6 italic">
            {t.numbers.projects}
          </div>
        </Motion.div>
      </div>
    </section>
  );
};

export default NumbersWarp;
