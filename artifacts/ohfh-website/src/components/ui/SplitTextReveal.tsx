import React from 'react';
import { motion } from 'framer-motion';

interface SplitTextRevealProps {
  text: string;
  className?: string;
  el?: keyof JSX.IntrinsicElements;
  stagger?: number;
}

const SplitTextReveal = ({ 
  text, 
  className = "", 
  el: Wrapper = "div",
  stagger = 0.02
}: SplitTextRevealProps) => {
  // Split text into words, then words into characters for wrapping
  const words = text.split(" ");
  
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: stagger,
      }
    }
  };

  const childVariants = {
    hidden: { 
      opacity: 0, 
      y: 20, 
      x: 20,
      rotateX: -45,
    },
    visible: { 
      opacity: 1, 
      y: 0, 
      x: 0,
      rotateX: 0,
      transition: {
        type: "spring",
        damping: 10,
        stiffness: 100,
        mass: 0.5,
      }
    }
  };

  return (
    <Wrapper className={`${className}`} style={{ perspective: "400px" }}>
      <motion.span
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-10%" }}
        className="inline-block"
      >
        {words.map((word, wordIndex) => (
          <span key={wordIndex} className="inline-block whitespace-nowrap mr-[0.25em]">
            {word.split("").map((char, charIndex) => (
              <motion.span 
                key={charIndex} 
                variants={childVariants}
                className="inline-block"
              >
                {char}
              </motion.span>
            ))}
          </span>
        ))}
      </motion.span>
    </Wrapper>
  );
};

export default SplitTextReveal;
