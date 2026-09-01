import React from 'react';
import { motion as Motion } from 'framer-motion';

const SplitText = ({
  text,
  className = '',
  delay = 50,
  duration = 0.5,
  
  tag = 'p',
  textAlign = 'center'
}) => {
  const words = text.split(' ');

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: delay / 1000, delayChildren: 0.1 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
        duration: duration
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
  };

  const Tag = tag;

  return (
    <Tag className={className} style={{ textAlign, display: 'flex', flexWrap: 'wrap', justifyContent: textAlign === 'center' ? 'center' : 'flex-start' }}>
      <Motion.span
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, margin: '-50px' }}
        style={{ display: 'flex', flexWrap: 'wrap' }}
      >
        {words.map((word, index) => (
          <Motion.span variants={child} key={index} style={{ marginRight: '0.25em', display: 'inline-block' }}>
            {word}
          </Motion.span>
        ))}
      </Motion.span>
    </Tag>
  );
};

export default SplitText;
