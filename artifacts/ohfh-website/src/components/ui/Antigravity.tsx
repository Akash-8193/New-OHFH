import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useSpring, useMotionValue } from 'framer-motion';

interface AntigravityProps {
  children: React.ReactNode;
  className?: string;
  speed?: number; // Floating speed multiplier
  repelRadius?: number; // How close mouse needs to be
  repelStrength?: number; // How far it pushes away
}

const Antigravity = ({ 
  children, 
  className = "", 
  speed = 1,
  repelRadius = 150,
  repelStrength = 60
}: AntigravityProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  
  // Motion values for the repel offset
  const repelX = useMotionValue(0);
  const repelY = useMotionValue(0);
  
  // Spring physics for smooth repel and return
  const springConfig = { damping: 15, stiffness: 100, mass: 0.5 };
  const smoothX = useSpring(repelX, springConfig);
  const smoothY = useSpring(repelY, springConfig);

  useEffect(() => {
    // 1. Setup continuous random floating (GSAP-style)
    const floatAnimation = async () => {
      while (true) {
        await controls.start({
          y: Math.random() * 40 - 20, // -20 to 20
          x: Math.random() * 20 - 10, // -10 to 10
          rotate: Math.random() * 10 - 5, // -5 to 5
          transition: {
            duration: (Math.random() * 2 + 2) / speed, // 2 to 4 seconds
            ease: "easeInOut",
          }
        });
      }
    };
    
    // Only run floating animation if not on mobile
    if (window.innerWidth > 991) {
      floatAnimation();
    }
  }, [controls, speed]);

  useEffect(() => {
    // 2. Setup Mouse Repel
    if (window.innerWidth <= 991) return; // Disable on mobile

    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      // Center of the element
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      
      // Distance from mouse to center
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < repelRadius) {
        // Calculate repel force (stronger when closer)
        const force = (repelRadius - dist) / repelRadius;
        
        // Push in opposite direction of mouse
        repelX.set(-(dx * force * (repelStrength / 100)));
        repelY.set(-(dy * force * (repelStrength / 100)));
      } else {
        // Return to 0 if mouse is far away
        repelX.set(0);
        repelY.set(0);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [repelRadius, repelStrength, repelX, repelY]);

  return (
    <motion.div 
      ref={containerRef}
      className={`inline-block ${className}`}
      animate={controls}
      style={{
        x: smoothX,
        y: smoothY,
        willChange: "transform"
      }}
    >
      {children}
    </motion.div>
  );
};

export default Antigravity;
