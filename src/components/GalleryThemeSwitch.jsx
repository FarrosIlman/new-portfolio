import React from 'react';
import { motion as Motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const PhotoCard = ({ photo, className, index }) => {
  return (
    <Motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, margin: "-50px" }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className={`relative overflow-hidden rounded-xl shadow-sm bg-[var(--bg-secondary)] ${className}`}
    >
      <img
        src={photo.src}
        alt={photo.caption}
        className="w-full h-full object-cover"
      />
      <div className="absolute bottom-4 left-4 right-4 text-xs font-sans text-white drop-shadow-md font-medium">
        {photo.caption}
      </div>
    </Motion.div>
  );
};

const GalleryThemeSwitch = () => {
  const { t } = useLanguage();

  const photos = [
    {
      id: 1,
      src: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1200',
      caption: t.gallery.photos["1"],
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=800',
      caption: t.gallery.photos["2"],
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800',
      caption: t.gallery.photos["3"],
    },
    {
      id: 4,
      src: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=1200',
      caption: t.gallery.photos["4"],
    },
  ];

  return (
    <section className="py-32 bg-[var(--bg)]">
      <div className="container mx-auto px-6 md:px-12 max-w-6xl">
        <div className="mb-20 text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-sans font-medium tracking-tight text-[var(--text)] mb-4">
            Behind the screen
          </h2>
          <p className="font-sans text-lg text-[var(--text-muted)] leading-relaxed">
            {t.gallery.desc}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-12 auto-rows-[200px] md:auto-rows-[300px] gap-4 md:gap-8 p-4 md:p-8 bg-[var(--bg-secondary)] rounded-3xl border border-[var(--border)]">
          {photos.map((photo, index) => {
             // Warm, personal, slightly padded asymmetrical layout
             let spanClass = "";
             if (index === 0) spanClass = "col-span-2 md:col-span-7 md:row-span-2"; 
             else if (index === 1) spanClass = "col-span-1 md:col-span-5 md:row-span-1"; 
             else if (index === 2) spanClass = "col-span-1 md:col-span-5 md:row-span-1"; 
             else spanClass = "col-span-2 md:col-span-12 md:row-span-1"; 

             return <PhotoCard key={photo.id} photo={photo} index={index} className={spanClass} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default GalleryThemeSwitch;
