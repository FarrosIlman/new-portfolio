import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Mail, ArrowUpRight } from 'lucide-react';
import confetti from 'canvas-confetti';

const LinkedinIcon = ({ size = 24, className = '' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const ContactCTA = () => {
  const triggerConfetti = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (rect.left + rect.width / 2) / window.innerWidth;
    const y = (rect.top + rect.height / 2) / window.innerHeight;

    confetti({
      particleCount: 100,
      spread: 70,
      origin: { x, y },
      colors: ['#ff4d8a', '#ff8158', '#ffffff'],
    });
  };

  const socialLinks = [
    {
      id: 'ig',
      title: 'Instagram',
      label: '@who.fars',
      href: 'https://instagram.com/who.fars',
      icon: <Camera size={24} />,
      colorClass: 'text-pink-500 bg-pink-500/10 border-pink-500/20 hover:border-pink-500/50',
      isPrimary: false,
    },
    {
      id: 'email',
      title: 'Email Me',
      label: 'rosilman000@gmail.com',
      href: 'mailto:rosilman000@gmail.com',
      icon: <Mail size={24} />,
      colorClass:
        'text-white bg-gradient-coral border-transparent shadow-[0_0_30px_rgba(255,77,138,0.4)] hover:shadow-[0_0_50px_rgba(255,129,88,0.6)]',
      isPrimary: true,
    },
    {
      id: 'linkedin',
      title: 'LinkedIn',
      label: 'Connect with me',
      href: 'https://linkedin.com/in/farrosilman',
      icon: <LinkedinIcon size={24} />,
      colorClass: 'text-blue-400 bg-blue-500/10 border-blue-500/20 hover:border-blue-500/50',
      isPrimary: false,
    },
  ];

  return (
    <section id="contact" className="py-32 px-6 md:px-12 relative overflow-hidden bg-plum-dark">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-pink-accent/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-sans font-black uppercase tracking-tight text-white mb-4"
          >
            Let's <span className="text-gradient-coral">Connect</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-mono text-white/60 uppercase tracking-widest text-sm"
          >
            Follow the journey or start a new one together
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {socialLinks.map((link, i) => (
            <motion.a
              key={link.id}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              onClick={link.isPrimary ? triggerConfetti : undefined}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 + 0.2 }}
              className={`group relative p-8 rounded-3xl border flex flex-col items-start transition-all duration-300 hover:-translate-y-2 ${link.colorClass} ${!link.isPrimary && 'bg-black/40 backdrop-blur-md'}`}
            >
              <div
                className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-16 ${link.isPrimary ? 'bg-white/20 text-white' : 'bg-current/10'}`}
              >
                {link.icon}
              </div>

              <h4 className="font-sans font-bold text-2xl mb-1 mt-auto">{link.title}</h4>
              <p
                className={`font-mono text-xs ${link.isPrimary ? 'text-white/80' : 'text-white/50'}`}
              >
                {link.label}
              </p>

              <div
                className={`absolute top-8 right-8 w-10 h-10 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 ${link.isPrimary ? 'bg-white/20' : 'bg-white/5 border border-white/10'}`}
              >
                <ArrowUpRight
                  size={18}
                  className={link.isPrimary ? 'text-white' : 'text-white/50'}
                />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
