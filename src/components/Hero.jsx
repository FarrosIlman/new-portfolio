import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { ArrowRight, Trophy, Users } from 'lucide-react';
import farrosImg from '../assets/Farros Ilman.jpg';

const Hero = () => {
  const containerRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      const normalizedX = e.clientX / innerWidth - 0.5;
      const normalizedY = e.clientY / innerHeight - 0.5;
      setMousePosition({ x: normalizedX, y: normalizedY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // We want to track scroll within this container to flip the card
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const flipAngleRaw = useTransform(scrollYProgress, [0, 0.4], [0, 180]);
  const flipAngle = useSpring(flipAngleRaw, { stiffness: 100, damping: 20 });

  return (
    <section ref={containerRef} className="relative w-full h-[200vh]">
      <div className="sticky top-0 h-[100dvh] w-full flex items-start lg:items-center justify-center overflow-hidden pt-28 sm:pt-32 pb-10 lg:pt-20 lg:pb-0">
        <div className="container mx-auto px-6 md:px-12 max-w-6xl h-full flex flex-col justify-start lg:justify-center mt-2 sm:mt-8 lg:mt-0">
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-8 items-center justify-center">
            {/* Left Column: Text Content */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="flex flex-col items-start z-10"
            >
              <div className="inline-flex items-center gap-3 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-4 sm:mb-8 mt-2 sm:mt-0">
                <div className="w-2 h-2 rounded-full bg-gradient-coral animate-pulse"></div>
                <span className="font-mono text-[9px] sm:text-[10px] md:text-xs uppercase tracking-widest text-white/80">
                  Street-tested · Battle-proven
                </span>
              </div>

              {/* Clamp title size for responsiveness, large and bold as requested */}
              <h1 className="font-sans font-black text-white leading-[1.05] tracking-tight mb-2 sm:mb-8 uppercase text-3xl sm:text-5xl lg:text-[56px] xl:text-[64px]">
                Building Integrated <br className="hidden sm:block" />
                Tech <span className="text-gradient-coral">Ecosystems.</span>
              </h1>

              <p className="font-mono text-white/60 text-xs sm:text-sm md:text-base max-w-md mb-4 sm:mb-10 leading-relaxed">
                Junior Front-End & Android Developer dedicated to creating efficient, stable, and
                impactful digital solutions.
              </p>

              <a
                href="#journey"
                className="group flex items-center gap-2 sm:gap-4 px-6 py-3 sm:px-8 sm:py-4 rounded-full bg-gradient-coral text-white font-sans font-bold hover:shadow-[0_0_30px_rgba(255,77,138,0.4)] transition-all text-sm sm:text-base mx-auto lg:mx-0"
              >
                <span>Follow my journey</span>
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform sm:w-[18px] sm:h-[18px]"
                />
              </a>
            </motion.div>

            {/* Right Column: 3D Flip Card */}
            <div className="relative w-full flex items-center justify-center lg:justify-end z-20 mt-4 sm:mt-8 lg:mt-0">
              <div className="relative w-[80vw] max-w-[300px] sm:max-w-[340px] lg:w-auto lg:h-[65vh] lg:max-h-[420px] aspect-[4/5] perspective-1000">
                {/* Floating Stat 1 */}
                <motion.div
                  className="absolute -top-4 -left-4 lg:-top-6 lg:-left-12 z-30 hud-panel p-2 sm:p-4 rounded-xl sm:rounded-2xl shadow-2xl flex items-center gap-2 sm:gap-4 scale-75 lg:scale-100 origin-top-left"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-pink-500/20 flex items-center justify-center text-pink-400">
                    <Trophy size={20} />
                  </div>
                  <div>
                    <div className="font-black text-xl text-white">5+</div>
                    <div className="font-mono text-[9px] text-white/50 uppercase">
                      Projects Built
                    </div>
                  </div>
                </motion.div>

                {/* Floating Stat 2 */}
                <motion.div
                  className="absolute -bottom-4 -right-4 lg:-bottom-6 lg:-right-12 z-30 hud-panel p-2 sm:p-4 rounded-xl sm:rounded-2xl shadow-2xl flex items-center gap-2 sm:gap-4 scale-75 lg:scale-100 origin-bottom-right"
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                >
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400">
                    <Users size={20} />
                  </div>
                  <div>
                    <div className="font-black text-xl text-white">5+ YRS</div>
                    <div className="font-mono text-[9px] text-white/50 uppercase">
                      Dev Obsession
                    </div>
                  </div>
                </motion.div>

                {/* The Flipping Card */}
                <motion.div
                  className="w-full h-full relative preserve-3d"
                  style={{ rotateY: flipAngle }}
                >
                  {/* Front: Gradient Stats / SCROLL */}
                  <div className="absolute inset-0 backface-hidden rounded-[32px] overflow-hidden border border-white/20 shadow-2xl bg-gradient-to-br from-[#00f2fe] via-[#4facfe] to-plum-dark">
                    {/* Endless Spinning Spotlight (Conic) */}
                    <motion.div
                      className="absolute top-1/2 left-1/2 w-[2000px] h-[2000px] blur-2xl opacity-100 pointer-events-none mix-blend-overlay"
                      style={{
                        x: '-50%',
                        y: '-50%',
                        background:
                          'conic-gradient(from 0deg, transparent 0%, rgba(255,255,255,0.3) 30%, rgba(255,255,255,1) 50%, rgba(255,255,255,0.3) 70%, transparent 100%)',
                      }}
                      animate={{ rotate: [0, 36000] }}
                      transition={{ duration: 800, repeat: Infinity, ease: 'linear' }}
                    />

                    <div className="absolute inset-0 flex flex-col items-center justify-center p-6 sm:p-8 text-center text-white drop-shadow-xl z-10">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-[1.5px] border-white/60 flex items-center justify-center mb-6 sm:mb-8 shadow-[0_0_30px_rgba(255,255,255,0.3)] backdrop-blur-md bg-white/10">
                        <motion.div
                          animate={{ y: [0, 8, 0] }}
                          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                        >
                          <ArrowRight
                            size={24}
                            className="rotate-90 text-white sm:w-[28px] sm:h-[28px]"
                            strokeWidth={1.5}
                          />
                        </motion.div>
                      </div>
                      <h3 className="font-sans font-black text-3xl sm:text-4xl tracking-[0.2em] mb-2 drop-shadow-lg">
                        SCROLL
                      </h3>
                      <p className="font-mono text-xs opacity-90 uppercase tracking-[0.4em] drop-shadow-md">
                        To Reveal
                      </p>
                    </div>
                  </div>

                  {/* Back: Photo */}
                  <div
                    className="absolute inset-0 backface-hidden rounded-[32px] overflow-hidden border border-white/20 shadow-2xl bg-black"
                    style={{ transform: 'rotateY(180deg)' }}
                  >
                    <img src={farrosImg} alt="Portrait" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent flex flex-col justify-end p-4 sm:p-6 md:p-8">
                      <h3 className="font-sans font-black text-white text-xl sm:text-2xl md:text-3xl leading-tight">
                        M. Farros <br /> Ilman Haq
                      </h3>
                      <p className="font-mono text-cyan-400 mt-1 sm:mt-2 tracking-widest text-[10px] sm:text-xs md:text-sm">
                        SOFTWARE <br /> ENGINEER
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
