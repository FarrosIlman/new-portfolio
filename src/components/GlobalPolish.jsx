import React, { useEffect, useState } from 'react';
import { motion as Motion, useScroll, useSpring } from 'framer-motion';
import confetti from 'canvas-confetti';

const GlobalPolish = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const [toastMessage, setToastMessage] = useState('');

  useEffect(() => {
    // Pull to refresh easter egg logic (simple touch delta detection)
    let touchStartY = 0;

    const handleTouchStart = (e) => {
      if (window.scrollY === 0) {
        touchStartY = e.touches[0].clientY;
      }
    };

    const handleTouchEnd = (e) => {
      if (window.scrollY === 0 && touchStartY > 0) {
        const touchEndY = e.changedTouches[0].clientY;
        const delta = touchEndY - touchStartY;

        if (delta > 150) {
          // Pulled down significantly
          // Trigger Easter Egg
          if (navigator.vibrate) navigator.vibrate(50);
          confetti({
            particleCount: 150,
            spread: 100,
            origin: { y: 0.1 },
            colors: ['#0f172a', '#64748b', '#cbd5e1'],
          });
          setToastMessage('Thanks for visiting! 🎉');
          setTimeout(() => setToastMessage(''), 3000);
        }
      }
      touchStartY = 0;
    };

    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });

    return () => {
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, []);

  return (
    <>
      {/* Scroll Progress Bar */}
      <Motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-slate-900 origin-left z-[1000] pointer-events-none"
        style={{ scaleX }}
      />

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-20 left-1/2 -translate-x-1/2 z-[1000] pointer-events-none">
          <Motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="bg-white/95 backdrop-blur-md border border-slate-200 px-6 py-3 rounded-full text-slate-900 font-sans text-sm font-bold shadow-xl"
          >
            {toastMessage}
          </Motion.div>
        </div>
      )}
    </>
  );
};

export default GlobalPolish;
