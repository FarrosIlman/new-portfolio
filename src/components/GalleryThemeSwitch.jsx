import React, { useRef, useEffect } from 'react';
import { motion, useInView, useMotionValue, useSpring, useTransform } from 'framer-motion';

const PhotoCard = ({ photo, index }) => {
  const cardRef = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['7deg', '-7deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-7deg', '7deg']);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseXRel = (e.clientX - rect.left) / width - 0.5;
    const mouseYRel = (e.clientY - rect.top) / height - 0.5;
    x.set(mouseXRel);
    y.set(mouseYRel);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      style={{ rotateX, rotateY }}
      className="relative group rounded-3xl aspect-square perspective-1000 shadow-xl cursor-pointer"
    >
      <div
        className="w-full h-full rounded-3xl overflow-hidden relative bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5 [transform:translateZ(0)]"
        style={{ WebkitMaskImage: '-webkit-radial-gradient(white, black)' }}
      >
        <img
          src={photo.src}
          alt={photo.caption}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 [transform:translateZ(0)]"
        />
        {/* Overlay gradient for caption readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

        {/* Caption Pill */}
        <div className="absolute bottom-6 left-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
          <div className="px-4 py-2 rounded-full bg-white/90 dark:bg-black/80 backdrop-blur-md text-black dark:text-white font-mono text-xs shadow-lg border border-white/20">
            {photo.caption}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const GalleryThemeSwitch = () => {
  const containerRef = useRef(null);

  // Trigger when the section is somewhat in the viewport
  const isInView = useInView(containerRef, { amount: 0.1, margin: '-10% 0px -10% 0px' });

  useEffect(() => {
    if (isInView) {
      document.body.classList.add('light-theme');
    } else {
      document.body.classList.remove('light-theme');
    }

    // Cleanup on unmount just in case
    return () => document.body.classList.remove('light-theme');
  }, [isInView]);

  const photos = [
    {
      id: 1,
      src: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800',
      caption: 'Building SAKA Architecture',
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=800',
      caption: 'HOS-Pass Testing Phase',
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800',
      caption: 'Late Night Bug Fixing',
    },
    {
      id: 4,
      src: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800',
      caption: 'Exampel 3D Deployment',
    },
  ];

  return (
    <section
      ref={containerRef}
      className="py-32 px-6 md:px-12 relative transition-colors duration-700"
    >
      <div className="container mx-auto max-w-5xl">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 font-mono text-[10px] uppercase tracking-[0.3em] mb-4">
            Behind the Scenes
          </span>
          <h2 className="font-sans font-black text-4xl md:text-6xl tracking-tight mb-2">
            The <span className="text-gradient-coral">Moments</span>
          </h2>
          <p className="font-sans italic text-lg opacity-70 max-w-xl mx-auto">
            Not just lines of code, but people, places, and milestones that shape the journey.
          </p>
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {photos.map((photo, index) => (
            <PhotoCard key={photo.id} photo={photo} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GalleryThemeSwitch;
