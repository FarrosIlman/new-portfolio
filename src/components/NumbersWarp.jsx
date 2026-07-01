import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useInView, animate } from 'framer-motion';
import confetti from 'canvas-confetti';

const NumbersWarp = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { amount: 0.5 });
  const [displayValue, setDisplayValue] = useState(0);
  const targetValue = 5;

  useEffect(() => {
    let timeout;
    let controls;

    if (isInView) {
      // Delay the confetti and counting until AFTER the "wrap/scale" animation finishes (0.8s)
      timeout = setTimeout(() => {
        // Fire a single large burst of confetti
        const colors = ['#00f2fe', '#4facfe', '#ffffff'];
        confetti({
          particleCount: 150,
          spread: 80,
          origin: { y: 0.6 },
          colors: colors,
        });

        // Count up animation
        controls = animate(0, targetValue, {
          duration: 1.5,
          ease: 'easeOut',
          onUpdate: (value) => {
            setDisplayValue(Math.round(value));
          },
        });
      }, 800);
    } else {
      // Reset when scrolling away so it replays
      setDisplayValue(0);
    }

    return () => {
      clearTimeout(timeout);
      if (controls) controls.stop();
    };
  }, [isInView, targetValue]);

  return (
    <section
      ref={containerRef}
      className="relative w-full py-24 md:py-32 bg-plum-dark overflow-hidden flex items-center justify-center min-h-[60vh]"
    >
      <div className="relative w-full flex items-center justify-center perspective-1000">
        {/* Warp Tunnel Rings */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
          style={{ opacity: 0.5 }}
        >
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-[100vw] h-[100vw] rounded-full border-[1px] border-pink-accent/20"
              initial={{ scale: 0.1, opacity: 0 }}
              animate={{
                scale: [0.1, 2],
                opacity: [0, 1, 0],
                rotate: [0, 90],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.6,
                ease: 'linear',
              }}
              style={{
                boxShadow: '0 0 50px rgba(0, 242, 254, 0.2) inset',
              }}
            />
          ))}
        </motion.div>

        {/* The Giant Number */}
        <motion.div
          className="relative z-10 text-center flex flex-col items-center justify-center"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.5, opacity: 0 }}
          transition={{ duration: 0.8, type: 'spring', bounce: 0.4 }}
        >
          <div className="text-gradient-coral font-sans font-black text-[6rem] sm:text-[10rem] md:text-[14rem] leading-none tracking-tighter drop-shadow-[0_0_40px_rgba(79,172,254,0.5)] py-4 px-8 overflow-visible">
            {displayValue}+
          </div>
          <motion.div
            className="font-mono text-sm sm:text-base md:text-xl text-white/70 uppercase tracking-[0.3em] mt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            Projects Delivered
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default NumbersWarp;
