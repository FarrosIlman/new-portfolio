import React, { useRef } from 'react';
import { motion as Motion, useScroll, useTransform } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import SplitText from './ReactBits/SplitText/SplitText';

const KineticWord = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0.2, 1]);
  return (
    <Motion.span className="inline-block mr-[0.25em]" style={{ opacity }}>
      {children}
    </Motion.span>
  );
};

const Manifesto = () => {
  const containerRef = useRef(null);
  const { t } = useLanguage();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 90%', 'center center'],
  });

  const paragraph1 = t.manifesto.p1;
  const paragraph2 = t.manifesto.p2;

  const words1 = paragraph1.split(' ');
  const words2 = paragraph2.split(' ');
  const totalWords = words1.length + words2.length;

  return (
    <section
      ref={containerRef}
      id="about"
      className="py-24 px-6 md:px-12 bg-[#FAFAFA] relative z-10"
    >
      <div className="container mx-auto max-w-6xl flex flex-col md:flex-row gap-12 lg:gap-24 items-start">
        <div className="w-full md:w-1/4">
          <h3 className="font-sans text-[#111111] font-medium text-xl md:text-2xl tracking-tight leading-tight">
            from the <br/> ground up.
          </h3>
        </div>

        <div className="w-full md:w-3/4 font-sans text-[clamp(14px,2vw,1.5rem)] leading-[1.6] text-[#555555]">
          <p className="mb-8 md:mb-12">
            {words1.map((word, i) => {
              const start = i / totalWords;
              const end = start + 1 / totalWords;
              return (
                <KineticWord key={i} progress={scrollYProgress} range={[start, end]}>
                  {word}
                </KineticWord>
              );
            })}
          </p>
          <p className="mb-12">
            {words2.map((word, i) => {
              const start = (words1.length + i) / totalWords;
              const end = start + 1 / totalWords;
              return (
                <KineticWord key={i} progress={scrollYProgress} range={[start, end]}>
                  {word}
                </KineticWord>
              );
            })}
          </p>

          <div className="text-xl sm:text-2xl font-sans font-medium tracking-tight text-[#111111]">
            <SplitText text="Stay hungry." delay={30} textAlign="left" />
            <div className="text-[#888888] italic mt-1">
              <SplitText text="Stay foolish." delay={30} textAlign="left" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Manifesto;
