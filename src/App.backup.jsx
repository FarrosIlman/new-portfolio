import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Trophy, Smartphone, Medal, Globe } from 'lucide-react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars, OrbitControls, Icosahedron } from '@react-three/drei';
import { motion } from 'framer-motion';

import sakaImg from './assets/saka.jpg';
import hospassImg from './assets/hospass.jpg';
import sisfoImg from './assets/sisfo.jpg';
import exampelImg from './assets/exampel.jpg';

const tDict = {
  en: {
    navWorks: 'Works',
    navStory: 'Story',
    navAwards: 'Awards',
    navContact: 'Init_Contact()',
    heroRole: 'Software_Engineer v2.0',
    heroTitle1: 'Building',
    heroTitle2: 'Integrated',
    heroTitle3: 'Tech',
    heroTitle4: 'Ecosystems.',
    heroDesc:
      '> Junior Front-End & Android Developer dedicated to creating efficient, stable, and impactful digital solutions.',
    stat1: '5+',
    stat1Desc: 'Projects Built',
    stat2: '5+ YRS',
    stat2Desc: 'Dev Obsession',
    worksHeading: '# Works',
    records: 'DATABASE_RECORDS',
    aboutHeading: '> Execute: Read_Background()',
    techHeading: '> Tech_Stack.json',
    awardsHeading: '> System_Achievements',
    contactHeading: '> Open_Port: 8080',
    contactTitle1: 'Initiate',
    contactTitle2: 'Connection',
    emailBtn: 'SEND_EMAIL',
    linkedinBtn: 'LINKEDIN_PROFILE',
    footerStatus: 'STATUS: ONLINE | SECURITY: ENABLED',
    accessData: 'ACCESS_DATA',
    projects: [
      {
        id: '01',
        tag: 'COMMISSIONED PROJECT',
        title: "SAKA (Smart Application for Kid's Speaking)",
        category: 'Educational Tech Web App',
        image: sakaImg,
        desc: 'A web application commissioned by an English teacher to help students practice speaking English. Built with Next.js and AI coding tools to deliver interactive speaking exercises accessible through any browser.',
        features: ['Next.js', 'React', 'Tailwind CSS', 'AI-Assisted Dev'],
        color: 'text-purple-400',
      },
      {
        id: '02',
        tag: 'FLAGSHIP IMPLEMENTATION',
        title: 'HOS-Pass: Smart Attendance',
        category: 'Android Native Engineering',
        image: hospassImg,
        desc: 'Biometric attendance automation system for SMA Negeri 4 Pekalongan using real-time Face Recognition and Geofencing.',
        features: ['Face Recognition', 'Geofencing', 'Java Native'],
        color: 'text-cyan-400',
      },
      {
        id: '03',
        tag: 'SYSTEM ARCHITECTURE',
        title: 'Integrated School SIS (Sisfo)',
        category: 'Web & Database Management',
        image: sisfoImg,
        desc: 'Development of a school information system that manages academic data centrally with database optimization for administrative efficiency.',
        features: ['Database Optimization', 'Automated Reporting', 'Web SIS'],
        color: 'text-blue-400',
      },
      {
        id: '04',
        tag: 'SECURITY & INTEGRITY',
        title: 'Secured CBT System (Exampel)',
        category: 'Software Security Development',
        image: exampelImg,
        desc: "Development of a computer-based test (CBT) system with advanced protection to maintain students' academic integrity.",
        features: ['Anti-Cheat Logic', 'Session Lockdown', 'Data Integrity'],
        color: 'text-green-400',
      },
      {
        id: '05',
        tag: 'RESEARCH COLLABORATION',
        title: 'Stunting Monitoring System',
        category: 'Web Engineering',
        image:
          'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800',
        desc: 'Child growth data monitoring platform for early detection of stunting in collaboration with a lecturer research team.',
        features: ['Data Tracking', 'UI/UX Research', 'Public Health'],
        color: 'text-orange-400',
      },
    ],
    aboutItems: [
      {
        title: 'Bachelor of Informatics',
        place: 'UMPP',
        year: 'GPA 3.88',
        desc: 'Focus on system architecture and enterprise-scale software engineering.',
      },
      {
        title: 'Bangkit Academy',
        place: 'Mobile Dev',
        year: 'Top 50',
        desc: 'Specialization in Native Android architecture and foundational Machine Learning.',
      },
      {
        title: 'IT Staff & Developer',
        place: 'SMAN 4 Pekalongan',
        year: '2025',
        desc: 'Maintenance of biometric & geofencing systems.',
      },
    ],
    skillCore: 'Core Engine',
    skillDB: 'Database & Ops',
    awards: [
      { title: '2nd Place LKS IT Software', rank: 'Pekalongan City (2021)' },
      { title: '2nd Place Mobile Challenge', rank: 'SMKDEV (2020)' },
      { title: '3rd Place LKS IT App', rank: 'Pekalongan City (2020)' },
    ],
  },
  id: {
    navWorks: 'Karya',
    navStory: 'Kisah',
    navAwards: 'Penghargaan',
    navContact: 'Hubungi()',
    heroRole: 'Software_Engineer v2.0',
    heroTitle1: 'Membangun',
    heroTitle2: 'Ekosistem',
    heroTitle3: 'Teknologi',
    heroTitle4: 'Terpadu.',
    heroDesc:
      '> Junior Front-End & Android Developer yang berdedikasi menciptakan solusi digital yang efisien, stabil, dan berdampak nyata.',
    stat1: '5+',
    stat1Desc: 'Proyek Selesai',
    stat2: '5+ THN',
    stat2Desc: 'Dedikasi Dev',
    worksHeading: '# Karya',
    records: 'DATABASE_RECORDS',
    aboutHeading: '> Execute: Read_Background()',
    techHeading: '> Tech_Stack.json',
    awardsHeading: '> System_Achievements',
    contactHeading: '> Open_Port: 8080',
    contactTitle1: 'Mulai',
    contactTitle2: 'Koneksi',
    emailBtn: 'KIRIM_EMAIL',
    linkedinBtn: 'PROFIL_LINKEDIN',
    footerStatus: 'STATUS: ONLINE | KEAMANAN: AKTIF',
    accessData: 'AKSES_DATA',
    projects: [
      {
        id: '01',
        tag: 'PROYEK PESANAN',
        title: 'SAKA (Aplikasi Pintar Bicara Anak)',
        category: 'Aplikasi Web Edukasi',
        image: sakaImg,
        desc: 'Aplikasi web pesanan guru bahasa Inggris untuk membantu siswa berlatih bicara bahasa Inggris. Dibangun dengan Next.js dan AI untuk latihan bicara interaktif via browser.',
        features: ['Next.js', 'React', 'Tailwind CSS', 'AI-Assisted Dev'],
        color: 'text-purple-400',
      },
      {
        id: '02',
        tag: 'IMPLEMENTASI UNGGULAN',
        title: 'HOS-Pass: Presensi Pintar',
        category: 'Rekayasa Android Native',
        image: hospassImg,
        desc: 'Sistem otomasi presensi biometrik untuk SMA Negeri 4 Pekalongan menggunakan Face Recognition dan Geofencing secara real-time.',
        features: ['Face Recognition', 'Geofencing', 'Java Native'],
        color: 'text-cyan-400',
      },
      {
        id: '03',
        tag: 'ARSITEKTUR SISTEM',
        title: 'Sistem Informasi Sekolah Terpadu',
        category: 'Manajemen Web & Database',
        image: sisfoImg,
        desc: 'Pengembangan sistem informasi sekolah yang mengelola data akademik secara terpusat dengan optimasi database untuk efisiensi administrasi.',
        features: ['Optimasi Database', 'Laporan Otomatis', 'Web SIS'],
        color: 'text-blue-400',
      },
      {
        id: '04',
        tag: 'KEAMANAN & INTEGRITAS',
        title: 'Sistem CBT Terenkripsi (Exampel)',
        category: 'Pengembangan Keamanan',
        image: exampelImg,
        desc: 'Pengembangan sistem ujian berbasis komputer (CBT) dengan proteksi tingkat lanjut untuk menjaga integritas akademik siswa.',
        features: ['Logika Anti-Curang', 'Kunci Sesi', 'Integritas Data'],
        color: 'text-green-400',
      },
      {
        id: '05',
        tag: 'KOLABORASI RISET',
        title: 'Sistem Pemantauan Stunting',
        category: 'Rekayasa Web',
        image:
          'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800',
        desc: 'Platform monitoring data tumbuh kembang anak untuk deteksi dini stunting berkolaborasi dengan tim riset dosen.',
        features: ['Pelacakan Data', 'Riset UI/UX', 'Kesehatan Publik'],
        color: 'text-orange-400',
      },
    ],
    aboutItems: [
      {
        title: 'S1 Informatika',
        place: 'UMPP',
        year: 'IPK 3.88',
        desc: 'Fokus arsitektur sistem dan rekayasa perangkat lunak skala enterprise.',
      },
      {
        title: 'Bangkit Academy',
        place: 'Mobile Dev',
        year: 'Top 50',
        desc: 'Spesialisasi arsitektur Android Native dan Machine Learning dasar.',
      },
      {
        title: 'IT Staff & Developer',
        place: 'SMAN 4 Pekalongan',
        year: '2025',
        desc: 'Maintenance sistem biometrik & geofencing.',
      },
    ],
    skillCore: 'Mesin Utama',
    skillDB: 'Database & Ops',
    awards: [
      { title: 'Juara 2 LKS IT Software', rank: 'Kota Pekalongan (2021)' },
      { title: 'Juara 2 Mobile Challenge', rank: 'SMKDEV (2020)' },
      { title: 'Juara 3 LKS IT App', rank: 'Kota Pekalongan (2020)' },
    ],
  },
};

// --- 3D BACKGROUND ---
const CyberCore = () => {
  const coreRef = useRef();
  const ring1Ref = useRef();
  const ring2Ref = useRef();
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useFrame((state) => {
    if (coreRef.current) {
      const time = state.clock.elapsedTime;

      const targetRotX = mouse.current.y * 2;
      const targetRotY = mouse.current.x * 2;

      coreRef.current.rotation.x += (targetRotX + time * 0.2 - coreRef.current.rotation.x) * 0.1;
      coreRef.current.rotation.y += (targetRotY + time * 0.3 - coreRef.current.rotation.y) * 0.1;

      const dist = Math.sqrt(mouse.current.x ** 2 + mouse.current.y ** 2);
      const targetScale = 2.0 + dist * 1.5 + Math.sin(time * 5) * 0.1;
      coreRef.current.scale.lerp({ x: targetScale, y: targetScale, z: targetScale }, 0.1);

      if (ring1Ref.current && ring2Ref.current) {
        ring1Ref.current.rotation.x = time * 0.5 + mouse.current.y * 3;
        ring1Ref.current.rotation.y = time * 0.8 + mouse.current.x * 3;

        ring2Ref.current.rotation.x = -time * 0.3 + mouse.current.x * 2;
        ring2Ref.current.rotation.z = time * 0.6 + mouse.current.y * 2;
      }
    }
  });

  return (
    <group>
      <Icosahedron ref={coreRef} args={[1, 1]} scale={2.0}>
        <meshStandardMaterial
          color="#00f3ff"
          wireframe={true}
          emissive="#00f3ff"
          emissiveIntensity={1.5}
        />
      </Icosahedron>

      <mesh ref={ring1Ref}>
        <torusGeometry args={[3.5, 0.05, 16, 100]} />
        <meshStandardMaterial color="#bc13fe" emissive="#bc13fe" emissiveIntensity={2} />
      </mesh>

      <mesh ref={ring2Ref}>
        <torusGeometry args={[4.5, 0.02, 16, 100]} />
        <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={1} />
      </mesh>
    </group>
  );
};

const RotatingStars = () => {
  const starsRef = useRef();
  useFrame(() => {
    if (starsRef.current) {
      starsRef.current.rotation.y += 0.0008;
      starsRef.current.rotation.x += 0.0004;
    }
  });
  return (
    <group ref={starsRef}>
      <Stars radius={100} depth={50} count={5000} factor={6} saturation={1} fade speed={2} />
    </group>
  );
};

const Background3D = () => {
  return (
    <div className="fixed inset-0 z-0 bg-[#030305] pointer-events-none">
      <div className="cyber-grid"></div>
      <Canvas camera={{ position: [0, 0, 6] }}>
        <ambientLight intensity={0.2} />
        <directionalLight position={[10, 10, 5]} intensity={2} color="#00f3ff" />
        <directionalLight position={[-10, -10, -5]} intensity={2} color="#bc13fe" />
        <RotatingStars />
        <CyberCore />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate={false} />
      </Canvas>
      <div className="absolute inset-0 bg-gradient-to-b from-[#030305]/80 via-transparent to-[#030305]/90"></div>
    </div>
  );
};

const App = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [lang, setLang] = useState('en');

  useEffect(() => {
    document.documentElement.classList.add('dark');

    // Set language from navigator language
    const browserLang = navigator.language || navigator.userLanguage;
    if (browserLang && browserLang.toLowerCase().includes('id')) {
      setLang('id');
    }

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLang = () => {
    setLang(lang === 'en' ? 'id' : 'en');
  };

  const t = tDict[lang] || tDict.en;

  return (
    <div className="relative min-h-screen text-slate-200 font-sans selection:bg-[#00f3ff]/30 overflow-x-hidden">
      <Background3D />

      <div className="relative z-10">
        {/* NAVIGATION */}
        <nav
          className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'py-3 hud-panel border-b-0' : 'py-6 bg-transparent'}`}
        >
          <div className="container mx-auto px-6 md:px-16 flex justify-between items-center max-w-7xl">
            <div
              className="text-sm font-black tracking-[0.3em] font-mono glitch-effect text-glow-cyan"
              data-text="FARROS_ILMAN"
            >
              FARROS_ILMAN
            </div>

            <div className="hidden md:flex items-center gap-10 font-mono text-xs uppercase tracking-[0.2em]">
              <a href="#work" className="hover:text-[#00f3ff] transition-colors">
                {t.navWorks}
              </a>
              <a href="#about" className="hover:text-[#bc13fe] transition-colors">
                {t.navStory}
              </a>
              <a href="#awards" className="hover:text-[#00f3ff] transition-colors">
                {t.navAwards}
              </a>
              <a href="#contact" className="hover:text-[#bc13fe] transition-colors">
                {t.navContact}
              </a>

              <button
                onClick={toggleLang}
                className="flex items-center gap-2 hover:text-white transition-colors border border-white/20 px-3 py-1 bg-black/20"
              >
                <Globe size={14} /> {lang.toUpperCase()}
              </button>
            </div>

            <div className="md:hidden flex items-center gap-4">
              <button
                onClick={toggleLang}
                className="flex items-center gap-1 text-[#00f3ff] hover:text-white transition-colors font-mono text-xs border border-white/20 px-2 py-1"
              >
                <Globe size={12} /> {lang.toUpperCase()}
              </button>
              <button
                className="text-[#00f3ff] hover:text-white transition-colors"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>

          {/* Mobile Dropdown */}
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute top-full left-0 w-full bg-[#030305]/95 backdrop-blur-md border-b border-[#00f3ff]/20 py-6 px-6 flex flex-col gap-6 font-mono text-xs uppercase tracking-[0.2em] md:hidden shadow-[0_10px_30px_rgba(0,0,0,0.8)]"
            >
              <a
                href="#work"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#00f3ff] transition-colors"
              >
                {t.navWorks}
              </a>
              <a
                href="#about"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#bc13fe] transition-colors"
              >
                {t.navStory}
              </a>
              <a
                href="#awards"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#00f3ff] transition-colors"
              >
                {t.navAwards}
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#bc13fe] transition-colors"
              >
                {t.navContact}
              </a>
            </motion.div>
          )}
        </nav>

        {/* HERO SECTION */}
        <section className="pt-32 pb-20 md:pt-48 md:pb-32 flex flex-col justify-center px-6 md:px-16 min-h-screen max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="container mx-auto max-w-6xl"
          >
            <div className="inline-flex items-center gap-4 mb-6 text-[#00f3ff] font-mono text-xs uppercase tracking-[0.4em]">
              <span className="w-10 h-[2px] bg-[#00f3ff] shadow-[0_0_10px_#00f3ff]"></span>
              <span>{t.heroRole}</span>
            </div>

            <h1 className="text-5xl sm:text-7xl md:text-[6rem] font-black leading-[1.1] tracking-tighter mb-8 text-white uppercase">
              {t.heroTitle1}{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f3ff] to-[#bc13fe]">
                {t.heroTitle2}
              </span>
              <br /> {t.heroTitle3}{' '}
              <span className="font-mono font-light text-[#00f3ff] lowercase">{t.heroTitle4}</span>
            </h1>

            <p className="text-lg md:text-xl text-slate-400 max-w-2xl leading-relaxed font-mono font-light mb-12 border-l-2 border-[#bc13fe] pl-6">
              {t.heroDesc}
            </p>

            <div className="flex gap-10 font-mono">
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                className="hud-panel p-4 px-6 text-center transition-all cursor-pointer"
              >
                <div className="text-2xl font-bold text-glow-cyan">{t.stat1}</div>
                <div className="text-[10px] text-slate-500 mt-1 uppercase">{t.stat1Desc}</div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                className="hud-panel p-4 px-6 text-center border-[#bc13fe] shadow-[0_0_15px_rgba(188,19,254,0.05),inset_0_0_20px_rgba(188,19,254,0.02)] transition-all cursor-pointer"
              >
                <div className="text-2xl font-bold text-glow-purple">{t.stat2}</div>
                <div className="text-[10px] text-slate-500 mt-1 uppercase">{t.stat2Desc}</div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* WORKS SECTION */}
        <section id="work" className="py-24 border-t border-white/5 relative">
          <div className="container mx-auto px-6 md:px-16 max-w-6xl">
            <div className="flex items-baseline justify-between mb-20">
              <h2 className="text-3xl font-black text-white tracking-widest uppercase">
                <span className="text-[#00f3ff]">#</span> {t.worksHeading.replace('# ', '')}
              </h2>
              <span className="font-mono text-xs text-slate-500">
                {t.records} : {t.projects.length}
              </span>
            </div>

            <div className="space-y-32">
              {t.projects.map((proj, i) => (
                <ProjectItem key={i} proj={proj} index={i} accessDataStr={t.accessData} />
              ))}
            </div>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section
          id="about"
          className="py-24 border-y border-white/5 relative bg-[#030305]/80 backdrop-blur-md"
        >
          <div className="container mx-auto px-6 md:px-16 max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
              <div className="lg:col-span-7 space-y-12">
                <h3 className="text-xs font-mono text-[#bc13fe] uppercase tracking-[0.4em] mb-8">
                  {t.aboutHeading}
                </h3>
                <div className="space-y-10 border-l border-white/10 pl-6 md:pl-10 relative">
                  <div className="absolute left-[-4px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#00f3ff] via-[#bc13fe] to-transparent"></div>
                  {t.aboutItems.map((item, i) => (
                    <AboutItem
                      key={i}
                      title={item.title}
                      place={item.place}
                      year={item.year}
                      desc={item.desc}
                    />
                  ))}
                </div>
              </div>

              <div className="lg:col-span-5 h-fit">
                <div className="hud-panel p-10">
                  <h3 className="text-xs font-mono text-[#00f3ff] uppercase tracking-[0.4em] mb-8">
                    {t.techHeading}
                  </h3>
                  <div className="space-y-8">
                    <SkillBlock
                      title={t.skillCore}
                      skills={['React', 'Next.js', 'Tailwind', 'Java', 'Kotlin']}
                      color="border-[#00f3ff] text-[#00f3ff]"
                    />
                    <SkillBlock
                      title={t.skillDB}
                      skills={['PostgreSQL', 'MySQL', 'Firebase', 'Git', 'Vercel']}
                      color="border-[#bc13fe] text-[#bc13fe]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* AWARDS SECTION */}
        <section id="awards" className="py-24 border-b border-white/5 px-6 md:px-16">
          <div className="container mx-auto max-w-6xl">
            <h3 className="text-xs font-mono text-center text-[#00f3ff] uppercase tracking-[0.5em] mb-16">
              {t.awardsHeading}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              <Award
                icon={
                  <Trophy
                    size={48}
                    className="text-[#00f3ff] drop-shadow-[0_0_15px_rgba(0,243,255,0.5)]"
                  />
                }
                title={t.awards[0].title}
                rank={t.awards[0].rank}
              />
              <Award
                icon={
                  <Smartphone
                    size={48}
                    className="text-[#bc13fe] drop-shadow-[0_0_15px_rgba(188,19,254,0.5)]"
                  />
                }
                title={t.awards[1].title}
                rank={t.awards[1].rank}
              />
              <Award
                icon={
                  <Medal
                    size={48}
                    className="text-[#00f3ff] drop-shadow-[0_0_15px_rgba(0,243,255,0.5)]"
                  />
                }
                title={t.awards[2].title}
                rank={t.awards[2].rank}
              />
            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="py-32 text-center px-6 relative">
          <p className="text-xs font-mono text-[#bc13fe] uppercase tracking-[0.5em] mb-6">
            {t.contactPort}
          </p>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-16 uppercase">
            {t.contactTitle1} <span className="text-glow-cyan">{t.contactTitle2}</span>
          </h2>
          <div className="flex flex-col sm:flex-row justify-center gap-10 font-mono text-sm">
            <a
              href="mailto:rosilman000@gmail.com"
              className="hud-panel px-8 py-4 hover:bg-[#00f3ff]/10 transition-colors border-[#00f3ff]"
            >
              {t.emailBtn}
            </a>
            <a
              href="https://linkedin.com/in/farrosilman"
              target="_blank"
              rel="noreferrer"
              className="hud-panel px-8 py-4 hover:bg-[#bc13fe]/10 transition-colors border-[#bc13fe] shadow-[0_0_15px_rgba(188,19,254,0.05),inset_0_0_20px_rgba(188,19,254,0.02)]"
            >
              {t.linkedinBtn}
            </a>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="py-8 border-t border-white/5 px-6 bg-[#030305]">
          <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4 max-w-7xl font-mono text-[10px] text-slate-600">
            <div>© {new Date().getFullYear()} M. FARROS ILMAN HAQ_</div>
            <div>{t.footerStatus}</div>
          </div>
        </footer>
      </div>
    </div>
  );
};

// HELPERS
const AboutItem = ({ title, place, year, desc }) => (
  <div className="relative group">
    <div className="absolute -left-[31px] md:-left-[47px] top-1 w-3 h-3 bg-[#030305] border-2 border-[#00f3ff] rounded-full group-hover:bg-[#00f3ff] group-hover:shadow-[0_0_10px_#00f3ff] transition-all"></div>
    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 gap-2">
      <h4 className="text-xl font-bold text-white">{title}</h4>
      <span className="font-mono text-[10px] text-[#bc13fe] bg-[#bc13fe]/10 border border-[#bc13fe]/30 px-2 py-1 rounded">
        {year}
      </span>
    </div>
    <p className="text-xs font-mono text-[#00f3ff] uppercase mb-3">{place}</p>
    <p className="text-sm text-slate-400 max-w-md">{desc}</p>
  </div>
);

const SkillBlock = ({ title, skills, color }) => (
  <div>
    <h5 className="text-[10px] font-mono text-slate-500 uppercase tracking-widest mb-4">{title}</h5>
    <div className="flex flex-wrap gap-3">
      {skills.map((s) => (
        <motion.span
          whileHover={{ scale: 1.1, backgroundColor: 'rgba(255,255,255,0.2)' }}
          key={s}
          className={`px-3 py-1 bg-white/5 text-xs font-mono border ${color} hover:bg-white/10 transition-colors cursor-pointer`}
        >
          {s}
        </motion.span>
      ))}
    </div>
  </div>
);

const Award = ({ icon, title, rank }) => (
  <div className="hud-panel p-8 text-center transition-transform hover:-translate-y-2 flex flex-col items-center">
    <div className="mb-6">{icon}</div>
    <h4 className="text-lg font-bold text-white mb-2">{title}</h4>
    <p className="text-[10px] font-mono text-[#00f3ff]">{rank}</p>
  </div>
);

const ProjectItem = ({ proj, index, accessDataStr }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.8 }}
      className={`flex flex-col lg:grid lg:grid-cols-12 gap-8 md:gap-16 items-center`}
    >
      <div className={`w-full lg:col-span-7 ${index % 2 !== 0 ? 'lg:order-2' : ''}`}>
        <div className="hud-panel overflow-hidden aspect-[16/10] group cursor-pointer p-2">
          <div className="absolute inset-0 bg-[#00f3ff]/5 z-10 pointer-events-none group-hover:bg-transparent transition-colors duration-500"></div>
          {/* Scanline overlay for image */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0)_50%,rgba(0,243,255,0.05)_50%)] bg-[length:100%_4px] z-20 pointer-events-none"></div>
          <img
            src={proj.image}
            alt={proj.title}
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
          />
        </div>
      </div>
      <div className="lg:col-span-5 px-2 md:px-0">
        <div className="font-mono text-[10px] text-slate-500 uppercase tracking-widest mb-4 border-l-2 border-[#00f3ff] pl-3">
          {proj.tag}
        </div>
        <h3 className="text-3xl font-black text-white mb-6 uppercase tracking-tight">
          {proj.title}
        </h3>
        <p className="text-sm text-slate-400 font-mono mb-8 leading-relaxed border-l border-white/10 pl-4">
          {proj.desc}
        </p>

        <div className="flex flex-wrap gap-2 mb-8">
          {proj.features.map((f) => (
            <motion.span
              whileHover={{ scale: 1.1 }}
              key={f}
              className={`text-[10px] font-mono border border-white/20 px-2 py-1 cursor-pointer hover:border-[#00f3ff] transition-colors ${proj.color}`}
            >
              {f}
            </motion.span>
          ))}
        </div>

        <button className="font-mono text-xs text-white border border-white/20 px-6 py-3 hover:bg-[#00f3ff]/20 hover:border-[#00f3ff] hover:shadow-[0_0_15px_rgba(0,243,255,0.4)] transition-all duration-300 flex items-center gap-3 group">
          {accessDataStr}
          <span className="w-4 h-[1px] bg-[#00f3ff] group-hover:w-12 group-hover:bg-white transition-all duration-300"></span>
        </button>
      </div>
    </motion.div>
  );
};

export default App;
