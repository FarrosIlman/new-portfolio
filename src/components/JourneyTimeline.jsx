import React, { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform, useInView } from 'framer-motion';
import { Briefcase, Code, Rocket, Target, Zap } from 'lucide-react';
import sakaImg from '../assets/saka.jpg';
import hospassImg from '../assets/hospass.jpg';
import sisfoImg from '../assets/sisfo.jpg';
import exampelImg from '../assets/exampel.jpg';

// Reusable Tilt Card Component with Cursor Spotlight
const JourneyCard = ({ project, isFeatured, onInView }) => {
  const cardRef = useRef(null);

  // Track visibility for scrubber
  const isInView = useInView(cardRef, { margin: '-40% 0px -40% 0px' });

  useEffect(() => {
    if (isInView && onInView) {
      onInView(project.year);
    }
  }, [isInView, onInView, project.year]);

  // 3D Tilt Logic
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['5deg', '-5deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-5deg', '5deg']);

  // Spotlight Logic
  const mouseX = useMotionValue(-1000);
  const mouseY = useMotionValue(-1000);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    // For Tilt
    const mouseXRel = (e.clientX - rect.left) / width - 0.5;
    const mouseYRel = (e.clientY - rect.top) / height - 0.5;
    x.set(mouseXRel);
    y.set(mouseYRel);

    // For Spotlight
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    mouseX.set(-1000);
    mouseY.set(-1000);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY }}
      className={`relative rounded-3xl p-[1px] overflow-hidden preserve-3d h-full ${isFeatured ? 'md:col-span-2' : 'col-span-1'}`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-10%' }}
    >
      {/* Rotating Gradient Border */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-pink-accent via-coral-accent to-pink-accent opacity-50 animate-[spin_4s_linear_infinite] scale-[2.5]"
        style={{ transformOrigin: 'center' }}
      ></div>

      {/* Main Card Content */}
      <div
        className={`relative h-full rounded-3xl p-6 md:p-8 backface-hidden ${isFeatured ? 'bg-gradient-coral text-white' : 'bg-plum-dark/95 backdrop-blur-xl text-white'}`}
      >
        {/* Cursor Spotlight Effect (Only on non-featured) */}
        {!isFeatured && (
          <motion.div
            className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-300 group-hover:opacity-100"
            style={{
              background: useTransform(
                [mouseX, mouseY],
                ([x, y]) =>
                  `radial-gradient(600px circle at ${x}px ${y}px, rgba(255, 77, 138, 0.15), transparent 40%)`
              ),
            }}
          />
        )}

        <div className="flex justify-between items-start mb-8">
          <span
            className={`font-mono text-[10px] uppercase tracking-widest px-3 py-1 rounded-full ${isFeatured ? 'bg-white/20' : 'bg-white/5 border border-white/10'}`}
          >
            {project.tag}
          </span>
          <span className="font-sans font-black text-2xl md:text-3xl opacity-20 whitespace-nowrap">
            {project.year}
          </span>
        </div>

        <div className="mb-6 z-10 relative">
          <div className="w-full aspect-video mb-6 rounded-2xl overflow-hidden shadow-2xl border border-white/10 group relative bg-[#f8f9fa]">
            {project.image ? (
              <>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60"></div>
              </>
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-black/50">
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center ${isFeatured ? 'bg-white/20 text-white' : 'bg-pink-accent/10 text-pink-accent'}`}
                >
                  {project.icon}
                </div>
              </div>
            )}
          </div>

          <h4 className="font-sans font-bold text-lg md:text-xl mb-2">{project.title}</h4>
          <p
            className={`font-mono text-sm leading-relaxed ${isFeatured ? 'text-white/90' : 'text-white/60'}`}
          >
            {project.desc}
          </p>
        </div>

        <div
          className={`mt-auto pt-6 border-t ${isFeatured ? 'border-white/20' : 'border-white/10'} flex flex-col gap-1`}
        >
          <span className="font-mono text-[10px] uppercase opacity-50">Result / Lesson</span>
          <span
            className={`font-sans text-sm font-semibold ${project.resultType === 'success' ? (isFeatured ? 'text-white' : 'text-green-400') : project.resultType === 'lesson' ? 'italic text-coral-accent' : 'text-red-400'}`}
          >
            {project.result}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

const JourneyTimeline = () => {
  const [activeYear, setActiveYear] = useState('2024-2025');

  const projects = [
    {
      year: '2024-2025',
      tag: 'KOLABORASI RISET',
      title: 'Sistem Pemantauan Stunting',
      desc: 'Platform monitoring data tumbuh kembang anak untuk deteksi dini stunting berkolaborasi dengan tim riset dosen.',
      result: 'Riset UI/UX',
      resultType: 'lesson',
      icon: <Zap size={24} />,
      image:
        'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800',
    },
    {
      year: '2025',
      tag: 'PROYEK PESANAN',
      title: 'SAKA (Aplikasi Pintar Bicara Anak)',
      desc: 'Aplikasi web pesanan guru bahasa Inggris untuk membantu siswa berlatih bicara bahasa Inggris. Dibangun dengan Next.js dan AI untuk latihan bicara interaktif via browser.',
      result: 'Succesfully Deployed',
      resultType: 'success',
      icon: <Code size={24} />,
      image: sakaImg,
    },
    {
      year: '2025',
      tag: 'KEAMANAN & INTEGRITAS',
      title: 'Sistem CBT Terenkripsi (Exampel)',
      desc: 'Pengembangan sistem ujian berbasis komputer (CBT) dengan proteksi tingkat lanjut untuk menjaga integritas akademik siswa.',
      result: 'Anti-Cheat Logic',
      resultType: 'lesson',
      icon: <Briefcase size={24} />,
      image: exampelImg,
    },
    {
      year: '2025',
      tag: 'IMPLEMENTASI UNGGULAN',
      title: 'HOS-Pass: Presensi Pintar',
      desc: 'Sistem otomasi presensi biometrik untuk SMA Negeri 4 Pekalongan menggunakan Face Recognition dan Geofencing secara real-time.',
      result: 'Java Native & Face Recognition',
      resultType: 'success',
      icon: <Rocket size={24} />,
      image: hospassImg,
      featured: true,
    },
    {
      year: '2025-Now',
      tag: 'ARSITEKTUR SISTEM',
      title: 'Sistem Informasi Sekolah Terpadu',
      desc: 'Pengembangan sistem informasi sekolah yang mengelola data akademik secara terpusat dengan optimasi database untuk efisiensi administrasi.',
      result: 'Web SIS',
      resultType: 'success',
      icon: <Target size={24} />,
      image: sisfoImg,
    },
  ];

  const years = ['2024-2025', '2025', '2025-Now'];

  return (
    <section className="py-24 lg:py-32 px-6 md:px-12 bg-plum-dark relative z-10">
      {/* Sticky Scrubber */}
      <div className="sticky top-24 z-50 py-4 mb-12 flex justify-center pointer-events-none">
        <div className="bg-black/60 backdrop-blur-md border border-white/10 rounded-full px-6 py-2 flex gap-6 pointer-events-auto shadow-2xl transition-all duration-300">
          {years.map((y) => (
            <span
              key={y}
              className={`font-mono text-xs cursor-pointer transition-all duration-300 whitespace-nowrap ${activeYear === y
                  ? 'text-white font-bold scale-110 drop-shadow-[0_0_12px_rgba(255,255,255,0.8)]'
                  : 'text-white/40 hover:text-white/80'
                }`}
            >
              {y}
            </span>
          ))}
        </div>
      </div>

      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((proj, i) => (
            <JourneyCard
              key={i}
              project={proj}
              isFeatured={proj.featured}
              onInView={setActiveYear}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default JourneyTimeline;
