import React from 'react';
import { motion as Motion } from 'framer-motion';
import sakaImg from '../assets/saka.webp';
import hospassImg from '../assets/hospass.webp';
import sisfoImg from '../assets/sisfo.webp';
import exampelImg from '../assets/exampel.webp';
import { useLanguage } from '../context/LanguageContext';

const ProjectLinks = ({ project }) => {
  if (!project.demo && !project.repo && !project.caseStudy) return null;
  
  return (
    <div className="flex flex-wrap gap-6 mt-4 md:mt-2">
      {project.demo && (
        <a href={project.demo} target="_blank" rel="noreferrer" className="font-mono text-[10px] md:text-[11px] uppercase tracking-widest text-[var(--text)] hover:text-[var(--subtle)] transition-colors border-b border-[var(--text)] hover:border-[var(--subtle)] pb-1">
          Live Demo ↗
        </a>
      )}
      {project.repo && (
        <a href={project.repo} target="_blank" rel="noreferrer" className="font-mono text-[10px] md:text-[11px] uppercase tracking-widest text-[var(--text)] hover:text-[var(--subtle)] transition-colors border-b border-[var(--text)] hover:border-[var(--subtle)] pb-1">
          Repository ↗
        </a>
      )}
      {project.caseStudy && (
        <a href={project.caseStudy} target="_blank" rel="noreferrer" className="font-mono text-[10px] md:text-[11px] uppercase tracking-widest text-[var(--text)] hover:text-[var(--subtle)] transition-colors border-b border-[var(--text)] hover:border-[var(--subtle)] pb-1">
          Case Study ↗
        </a>
      )}
    </div>
  );
};

const ProjectCardPatternA = ({ project, index }) => {
  return (
    <div className="mb-16 md:mb-32">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 md:gap-6 mb-6 md:mb-8">
        <div>
          <span className="font-mono text-[10px] md:text-sm text-[var(--subtle)] tracking-widest uppercase block mb-1 md:mb-2">
            0{index + 1}
          </span>
          <h3 className="font-sans font-medium text-lg md:text-5xl lg:text-6xl text-[var(--text)] leading-tight tracking-tight">
            {project.title}
          </h3>
        </div>
      </div>

      <Motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="w-full relative aspect-[16/9] md:aspect-[21/9] bg-[var(--border)] mb-8 md:mb-12"
      >
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover" 
          loading="lazy"
        />
      </Motion.div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12">
        <div className="md:col-span-8">
          <p className="font-sans text-[14px] md:text-xl text-[var(--text-muted)] leading-relaxed">
            {project.desc}
          </p>
        </div>
        
        {/* Mobile Combined Metadata */}
        <div className="block md:hidden mt-2 border-t border-[var(--border)] pt-4">
          <span className="font-mono text-[11px] text-[var(--subtle)] tracking-widest uppercase leading-loose block mb-2">
            {project.tag} · React · Node.js · {project.year}
          </span>
          <ProjectLinks project={project} />
        </div>

        {/* Desktop Metadata */}
        <div className="hidden md:flex md:col-span-4 flex-col gap-6">
          <div>
            <span className="font-mono text-[10px] md:text-xs text-[var(--text-muted)] tracking-widest uppercase block mb-1">Role & Outcome</span>
            <span className="font-sans text-sm md:text-base font-semibold text-[var(--text)]">{project.tag} / {project.result}</span>
          </div>
          <div>
            <span className="font-mono text-[10px] md:text-xs text-[var(--text-muted)] tracking-widest uppercase block mb-2">Tech Stack</span>
            <div className="flex flex-wrap gap-2">
              <span className="font-mono text-[10px] md:text-xs font-medium bg-[var(--bg-secondary)] border border-[var(--border)] text-[var(--text)] px-2 py-1 uppercase">React</span>
              <span className="font-mono text-[10px] md:text-xs font-medium bg-[var(--bg-secondary)] border border-[var(--border)] text-[var(--text)] px-2 py-1 uppercase">Node.js</span>
              <span className="font-mono text-[10px] md:text-xs font-medium bg-[var(--bg-secondary)] border border-[var(--border)] text-[var(--text)] px-2 py-1 uppercase">Database</span>
            </div>
          </div>
          <div>
            <span className="font-mono text-[10px] md:text-xs text-[var(--text-muted)] tracking-widest uppercase block mb-1">Year</span>
            <span className="font-sans text-sm md:text-base font-semibold text-[var(--text)]">{project.year}</span>
          </div>
          <ProjectLinks project={project} />
        </div>
      </div>
    </div>
  );
};

const ProjectCardPatternB = ({ project, index }) => {
  return (
    <div className="mb-16 md:mb-32 flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-24 items-start">
      <Motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="w-full md:w-3/5 relative aspect-[4/3] bg-[var(--border)]"
      >
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover" 
          loading="lazy"
        />
      </Motion.div>

      <div className="w-full md:w-2/5 flex flex-col">
        <span className="font-mono text-[10px] md:text-sm text-[var(--subtle)] tracking-widest uppercase block mb-2 md:mb-6">
          0{index + 1}
        </span>
        <h3 className="font-sans font-medium text-lg md:text-5xl text-[var(--text)] leading-tight tracking-tight mb-4 md:mb-8">
          {project.title}
        </h3>
        <p className="font-sans text-[14px] md:text-lg text-[var(--text-muted)] leading-relaxed mb-6 md:mb-10">
          {project.desc}
        </p>

        {/* Mobile Combined Metadata */}
        <div className="block md:hidden border-t border-[var(--border)] pt-4">
          <span className="font-mono text-[11px] text-[var(--subtle)] tracking-widest uppercase leading-loose block mb-2">
            {project.tag} · React · Node.js · {project.year}
          </span>
          <ProjectLinks project={project} />
        </div>

        {/* Desktop Metadata */}
        <div className="hidden md:flex flex-col gap-6 pt-6 md:pt-8 border-t border-[var(--border)]">
          <div>
            <span className="font-mono text-[10px] md:text-xs text-[var(--text-muted)] tracking-widest uppercase block mb-1">Role & Outcome</span>
            <span className="font-sans text-sm md:text-base font-semibold text-[var(--text)]">{project.tag} / {project.result}</span>
          </div>
          <div>
            <span className="font-mono text-[10px] md:text-xs text-[var(--text-muted)] tracking-widest uppercase block mb-2">Stack</span>
            <div className="flex flex-wrap gap-2">
              <span className="font-mono text-[10px] md:text-xs font-medium bg-[var(--bg-secondary)] border border-[var(--border)] text-[var(--text)] px-2 py-1 uppercase">React</span>
              <span className="font-mono text-[10px] md:text-xs font-medium bg-[var(--bg-secondary)] border border-[var(--border)] text-[var(--text)] px-2 py-1 uppercase">Node.js</span>
            </div>
          </div>
          <div>
            <span className="font-mono text-[10px] md:text-xs text-[var(--text-muted)] tracking-widest uppercase block mb-1">Year</span>
            <span className="font-sans text-sm md:text-base font-semibold text-[var(--text)]">{project.year}</span>
          </div>
          <ProjectLinks project={project} />
        </div>
      </div>
    </div>
  );
};

const JourneyTimeline = () => {
  const { t } = useLanguage();

  const projects = [
    {
      year: '2024',
      tag: t.journey.projects.stunting.tag,
      title: t.journey.projects.stunting.title,
      desc: t.journey.projects.stunting.desc,
      result: t.journey.projects.stunting.result,
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1200',
      demo: '',
      repo: '',
      caseStudy: '',
    },
    {
      year: '2025',
      tag: t.journey.projects.saka.tag,
      title: t.journey.projects.saka.title,
      desc: t.journey.projects.saka.desc,
      result: t.journey.projects.saka.result,
      image: sakaImg,
      demo: 'https://saka.malikadigital.my.id',
      repo: '',
      caseStudy: '',
    },
    {
      year: '2025',
      tag: t.journey.projects.exampel.tag,
      title: t.journey.projects.exampel.title,
      desc: t.journey.projects.exampel.desc,
      result: t.journey.projects.exampel.result,
      image: exampelImg,
      demo: '',
      repo: '',
      caseStudy: '',
    },
    {
      year: '2025',
      tag: t.journey.projects.hospass.tag,
      title: t.journey.projects.hospass.title,
      desc: t.journey.projects.hospass.desc,
      result: t.journey.projects.hospass.result,
      image: hospassImg,
      demo: '',
      repo: '',
      caseStudy: '',
    },
    {
      year: '2025-Now',
      tag: t.journey.projects.sisfo.tag,
      title: t.journey.projects.sisfo.title,
      desc: t.journey.projects.sisfo.desc,
      result: t.journey.projects.sisfo.result,
      image: sisfoImg,
      demo: '',
      repo: '',
      caseStudy: '',
    },
  ];

  return (
    <section id="journey" className="py-32 px-6 md:px-12 bg-[var(--bg)]">
      <div className="container mx-auto max-w-7xl">
        <div className="mb-24 flex flex-col items-start border-b border-[var(--text)] pb-8">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-sans font-medium tracking-tight text-[var(--text)]">
            Selected Work
          </h2>
        </div>

        <div>
          {projects.map((proj, i) => {
            // Pattern A for evens, Pattern B for odds
            const isPatternA = i % 2 === 0;
            return isPatternA ? (
              <ProjectCardPatternA key={i} project={proj} index={i} />
            ) : (
              <ProjectCardPatternB key={i} project={proj} index={i} />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default JourneyTimeline;
