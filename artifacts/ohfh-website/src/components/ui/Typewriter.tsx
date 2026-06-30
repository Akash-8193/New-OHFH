import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface TypewriterProps {
  text: string;
  speed?: number;
  className?: string;
  delay?: number;
}

export default function Typewriter({ text, speed = 50, className = '', delay = 0 }: TypewriterProps) {
  const [displayedText, setDisplayedText] = useState('');
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  useEffect(() => {
    if (!inView) return;

    let timeoutId: NodeJS.Timeout;
    
    // Initial delay
    timeoutId = setTimeout(() => {
      let currentIndex = 0;
      
      const intervalId = setInterval(() => {
        if (currentIndex <= text.length) {
          setDisplayedText(text.slice(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(intervalId);
        }
      }, speed);

      return () => clearInterval(intervalId);
    }, delay);

    return () => clearTimeout(timeoutId);
  }, [inView, text, speed, delay]);

  return (
    <span ref={ref} className={className}>
      {displayedText}
      <motion.span
        animate={{ opacity: [0, 1, 0] }}
        transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
        className="inline-block w-[2px] h-[1em] bg-current ml-1 align-middle"
      />
    </span>
  );
}
