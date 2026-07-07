import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import farrosImg from '../assets/Farros Ilman.jpg';
import exampelImg from '../assets/exampel.jpg';
import sisfoImg from '../assets/sisfo.jpg';
import hospassImg from '../assets/hospass.jpg';
import sakaImg from '../assets/saka.jpg';
import { useLanguage } from '../context/LanguageContext';

const MilestoneCard = ({ item, index, scrollYProgress }) => {
  // We divide the scroll space so all 5 items finish by 0.75
  const startProgress = index * 0.12;
  const hitProgress = startProgress + 0.15;
  const passProgress = hitProgress + 0.1; // Time it takes to fly past the camera

  // Z goes from background, flies smoothly through the center, and past the camera (1200)
  const zTransform = useTransform(scrollYProgress, [startProgress, passProgress], [item.z, 1200]);

  // X moves from the side to the center, and stays there as it flies past
  const xTransform = useTransform(
    scrollYProgress,
    [startProgress, hitProgress, passProgress],
    [`${item.x}vw`, '0vw', '0vw']
  );

  // Keep scale at 1, let perspective handle depth, or slightly scale down to avoid getting too big
  const scaleTransform = useTransform(
    scrollYProgress,
    [startProgress, hitProgress, passProgress],
    [1, 0.9, 0.9]
  );

  // Opacity stays 1 until it hits the center, then fades out smoothly as it flies past
  const opacityTransform = useTransform(
    scrollYProgress,
    [startProgress, hitProgress, passProgress],
    [1, 1, 0]
  );

  return (
    <motion.div
      className="absolute preserve-3d"
      style={{
        x: xTransform,
        z: zTransform,
        scale: scaleTransform,
        opacity: opacityTransform,
      }}
    >
      <div className="bg-white p-3 pb-16 rounded-xl shadow-2xl rotate-y-[-10deg] rotate-x-[5deg] hover:rotate-0 transition-transform duration-700 cursor-pointer group">
        <div className="overflow-hidden rounded-lg">
          <img
            src={item.img}
            alt={item.year}
            className="w-48 h-48 sm:w-64 sm:h-64 object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
          />
        </div>
        <div className="absolute bottom-0 left-0 w-full h-16 flex flex-col items-center justify-center pointer-events-none">
          <span className="font-sans font-black text-black text-lg sm:text-xl leading-none mb-1 opacity-70 group-hover:opacity-100 transition-opacity duration-300">
            {item.title}
          </span>
          <span className="font-mono text-black/50 text-[10px] sm:text-xs uppercase tracking-widest">
            {item.year}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

const TimeTunnel = () => {
  const containerRef = useRef(null);
  const { t } = useLanguage();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Title fades and scales in right as the last item flies past
  const titleOpacity = useTransform(scrollYProgress, [0.65, 0.8], [0, 1]);
  const titleScale = useTransform(scrollYProgress, [0.65, 0.8], [0.5, 1]);
  const titleZ = useTransform(scrollYProgress, [0.65, 0.8], [-2000, 0]);

  const milestones = [
    {
      year: '2024-2025',
      z: -500,
      x: -35,
      img: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800',
      title: t.journey.projects.stunting.shortTitle,
    },
    { year: '2025', z: -1000, x: 35, img: sakaImg, title: t.journey.projects.saka.shortTitle },
    { year: '2025', z: -1500, x: -35, img: exampelImg, title: t.journey.projects.exampel.shortTitle },
    { year: '2025', z: -2000, x: 35, img: hospassImg, title: t.journey.projects.hospass.shortTitle },
    { year: '2025-Now', z: -2500, x: -35, img: sisfoImg, title: t.journey.projects.sisfo.shortTitle },
  ];

  return (
    <section id="journey" ref={containerRef} className="relative w-full h-[400vh] bg-plum-dark">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center perspective-1000 bg-plum-dark">
        {/* Perspective World Container (STATIC WORLD) */}
        <div className="absolute w-full h-full preserve-3d flex items-center justify-center">
          {/* Rails / Floor grid to give sense of movement */}
          <div
            className="absolute bottom-0 left-0 w-full h-[200vh] origin-bottom rotate-x-[80deg] bg-[linear-gradient(rgba(0,242,254,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(0,242,254,0.2)_1px,transparent_1px)] bg-[size:40px_40px] translate-y-1/2 translate-z-[-500px]"
            style={{
              transformStyle: 'preserve-3d',
              transform: 'rotateX(80deg) translateZ(-200px) translateY(50%)',
            }}
          ></div>

          {/* Floating Polaroids */}
          {milestones.map((item, idx) => (
            <MilestoneCard key={idx} index={idx} item={item} scrollYProgress={scrollYProgress} />
          ))}

          {/* Destination Title */}
          <motion.div
            className="absolute preserve-3d flex flex-col items-center"
            style={{
              z: titleZ,
              opacity: titleOpacity,
              scale: titleScale,
            }}
          >
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-sans font-black text-white uppercase tracking-tighter text-glow-cyan text-center">
              {t.journey.titlePrefix && <>{t.journey.titlePrefix} <br /></>}
              <span className="text-gradient-coral">{t.journey.title}</span>
            </h2>
            <p className="mt-8 text-white/60 font-mono text-sm sm:text-base tracking-[0.3em] uppercase">
              {t.tunnel.text}
            </p>
          </motion.div>
        </div>

        {/* Fog overlay to hide clipping */}
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(transparent_20%,#0a0810_80%)]"></div>
      </div>
    </section>
  );
};

export default TimeTunnel;
