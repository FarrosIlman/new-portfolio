import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

// Helper component for individual kinetic words
const KineticWord = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0.1, 1]);
  // We use filter for blur. We can map it from 10px down to 0px.
  const blurValue = useTransform(progress, range, [10, 0]);
  const filter = useTransform(blurValue, (v) => `blur(${v}px)`);

  return (
    <motion.span className="inline-block mr-[0.25em] mt-[0.1em]" style={{ opacity, filter }}>
      {children}
    </motion.span>
  );
};

const Manifesto = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 80%', 'end 60%'], // Triggers while scrolling through the section
  });

  const paragraph1 =
    "Hi, I'm Farros Ilman. I am a passionate software engineer dedicated to building robust, scalable web and mobile applications.";
  const paragraph2 =
    'I love solving complex problems, from developing anti-cheat systems to integrating modern technology like face recognition into real-world environments.';

  const words1 = paragraph1.split(' ');
  const words2 = paragraph2.split(' ');
  const totalWords = words1.length + words2.length;

  return (
    <section
      ref={containerRef}
      id="about"
      className="py-40 px-6 md:px-12 bg-plum-dark relative z-10"
    >
      <div className="container mx-auto max-w-4xl">
        <h3 className="font-mono text-pink-accent uppercase tracking-[0.4em] text-xs mb-12">
          About Me
        </h3>

        <div className="font-sans font-black text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-[1.4] text-white">
          <p className="mb-8">
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
          <p className="mb-16">
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

          <motion.div
            className="text-3xl sm:text-4xl md:text-5xl mt-20"
            initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, margin: '-20%' }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Stay hungry.
            <br />
            <span className="text-gradient-coral drop-shadow-[0_0_30px_rgba(255,77,138,0.5)]">
              Stay foolish.
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Manifesto;
