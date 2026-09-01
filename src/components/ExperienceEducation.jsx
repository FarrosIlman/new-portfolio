import React from 'react';
import { motion as Motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const ExperienceEducation = () => {
  const { t } = useLanguage();

  const jobs = t.experience.jobs || [];
  const schools = t.experience.schools || [];

  return (
    <section id="experience" className="py-32 bg-[var(--bg)]">
      <div className="container mx-auto px-6 md:px-12 max-w-6xl">
        
        <div className="flex flex-col gap-24">
          
          {/* EXPERIENCE SECTION */}
          <div>
            <div className="mb-16">
              <h2 className="text-2xl font-mono font-medium text-[var(--text)] tracking-widest uppercase">
                {t.nav.experience || "EXPERIENCE"}
              </h2>
            </div>
            <div className="flex flex-col gap-8 md:gap-12">
              {jobs.map((item, index) => (
                <Motion.div 
                  key={`job-${index}`} 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="flex flex-col md:flex-row gap-2 md:gap-16 items-start md:items-baseline pb-8 md:pb-12 border-b border-[var(--border)] last:border-b-0"
                >
                  <div className="w-full md:w-1/4 shrink-0">
                    <span className="font-mono text-xs md:text-sm tracking-widest text-[var(--subtle)] uppercase">{item.period}</span>
                  </div>
                  
                  <div className="w-full md:w-3/4 flex flex-col">
                    <h3 className="text-lg md:text-3xl font-sans font-semibold text-[var(--text)] tracking-tight mb-1 md:mb-2 uppercase">{item.role}</h3>
                    <h4 className="font-mono text-[13px] md:text-base text-[var(--text-muted)] mb-4 md:mb-6">{item.company}</h4>
                    <p className="font-sans text-[14px] md:text-lg text-[var(--text-muted)] leading-relaxed max-w-2xl">{item.description}</p>
                  </div>
                </Motion.div>
              ))}
            </div>
          </div>

          {/* EDUCATION SECTION */}
          <div>
            <div className="mb-16">
              <h2 className="text-2xl font-mono font-medium text-[var(--text)] tracking-widest uppercase">
                {t.nav.education || "EDUCATION"}
              </h2>
            </div>
            <div className="flex flex-col gap-8 md:gap-12">
              {schools.map((item, index) => (
                <Motion.div 
                  key={`edu-${index}`} 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="flex flex-col md:flex-row gap-2 md:gap-16 items-start md:items-baseline pb-8 md:pb-12 border-b border-[var(--border)] last:border-b-0"
                >
                  <div className="w-full md:w-1/4 shrink-0">
                    <span className="font-mono text-xs md:text-sm tracking-widest text-[var(--subtle)] uppercase">{item.period}</span>
                  </div>
                  
                  <div className="w-full md:w-3/4 flex flex-col">
                    <h3 className="text-lg md:text-3xl font-sans font-semibold text-[var(--text)] tracking-tight mb-1 md:mb-2 uppercase">{item.degree}</h3>
                    <h4 className="font-mono text-[13px] md:text-base text-[var(--text-muted)] mb-4 md:mb-6">{item.institution}</h4>
                    <p className="font-sans text-[14px] md:text-lg text-[var(--text-muted)] leading-relaxed max-w-2xl">{item.description}</p>
                  </div>
                </Motion.div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default ExperienceEducation;
