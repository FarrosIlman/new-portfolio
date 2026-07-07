import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Calendar, MapPin } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const TimelineItem = ({ item, index }) => {
  const isWork = item.type === 'work';
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative pl-8 md:pl-0"
    >
      {/* Timeline Line (Desktop: Center, Mobile: Left) */}
      <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-white/20 via-white/10 to-transparent -translate-x-1/2"></div>
      <div className="md:hidden absolute left-[15px] top-0 bottom-0 w-px bg-gradient-to-b from-white/20 via-white/10 to-transparent"></div>

      <div className={`md:flex items-center justify-between w-full mb-12 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
        
        {/* Timeline Dot */}
        <div className="absolute left-0 md:left-1/2 w-8 h-8 rounded-full bg-plum-dark border-2 border-pink-accent transform -translate-x-1/2 flex items-center justify-center z-10 shadow-[0_0_15px_rgba(255,77,138,0.5)]">
          {isWork ? <Briefcase size={14} className="text-pink-accent" /> : <GraduationCap size={14} className="text-pink-accent" />}
        </div>

        {/* Content Card */}
        <div className="md:w-[45%]">
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 group">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
              <h3 className="text-xl font-bold font-sans text-white group-hover:text-pink-accent transition-colors">
                {isWork ? item.role : item.degree}
              </h3>
              <div className="flex items-center gap-2 text-white/50 text-xs font-mono bg-white/5 px-3 py-1 rounded-full w-fit">
                <Calendar size={12} />
                <span>{item.period}</span>
              </div>
            </div>

            <div className="flex items-center gap-2 text-white/70 mb-4 font-sans text-sm">
              <span className="font-semibold text-white/90">{isWork ? item.company : item.institution}</span>
              <span>•</span>
              <div className="flex items-center gap-1">
                <MapPin size={12} />
                <span>{item.location}</span>
              </div>
            </div>

            <p className="text-white/60 text-sm leading-relaxed mb-6 font-mono">
              {item.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {item.skills && item.skills.map((skill, i) => (
                <span 
                  key={i} 
                  className="text-xs font-mono px-3 py-1 rounded-full bg-pink-accent/10 text-pink-accent border border-pink-accent/20"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Empty space for the other side on desktop */}
        <div className="hidden md:block md:w-[45%]"></div>
      </div>
    </motion.div>
  );
};

const ExperienceEducation = () => {
  const { t } = useLanguage();

  const experiences = t.experience.jobs.map((job, idx) => ({
    id: idx,
    ...job,
    type: 'work',
    skills: idx === 0 ? ["Database Management", "IT Support", "Networking"] : idx === 1 ? ["HTML/CSS", "JavaScript", "CodeIgniter", "PHP"] : ["Java Swing", "PostgreSQL", "MySQL"]
  }));

  const education = t.experience.schools.map((edu, idx) => ({
    id: idx,
    ...edu,
    type: 'education',
    skills: idx === 0 ? ["Kotlin", "Android Studio", "Mobile Development"] : ["Software Engineering", "Flutter", "Web Design"]
  }));

  return (
    <section id="experience" className="py-24 lg:py-32 px-6 md:px-12 bg-plum-dark relative z-10 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/4 -left-64 w-96 h-96 bg-pink-accent/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 -right-64 w-96 h-96 bg-coral-accent/20 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto max-w-5xl relative z-10">
        
        {/* Work Experience Section */}
        <div className="mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black font-sans mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-accent to-coral-accent">
                {t.experience.workTitle}
              </span>
            </h2>
            <p className="text-white/60 font-mono text-sm max-w-2xl mx-auto">
              {t.experience.workDesc}
            </p>
          </motion.div>

          <div className="relative">
            {experiences.map((exp, index) => (
              <TimelineItem key={exp.id} item={exp} index={index} />
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div id="education">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black font-sans mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-accent to-coral-accent">
                {t.experience.eduTitle}
              </span>
            </h2>
            <p className="text-white/60 font-mono text-sm max-w-2xl mx-auto">
              {t.experience.eduDesc}
            </p>
          </motion.div>

          <div className="relative">
            {education.map((edu, index) => (
              <TimelineItem key={edu.id} item={edu} index={index} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default ExperienceEducation;
