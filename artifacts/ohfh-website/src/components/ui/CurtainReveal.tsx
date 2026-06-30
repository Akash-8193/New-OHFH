import React from 'react';
import { motion } from 'framer-motion';

interface CurtainRevealProps {
  children: React.ReactNode;
  className?: string;
}

const CurtainReveal = ({ children, className = "" }: CurtainRevealProps) => {
  return (
    <div className={`overflow-hidden relative w-full h-full ${className}`}>
      {/* The Masking Container */}
      <motion.div
        initial={{ x: "-100%", opacity: 0 }}
        whileInView={{ x: "0%", opacity: 1 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 1.2, ease: [0.2, 0.8, 0.2, 1] }}
        className="w-full h-full relative"
      >
        {/* The Inner Image/Content */}
        <motion.div
          initial={{ x: "100%", scale: 1.1 }}
          whileInView={{ x: "0%", scale: 1 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 1.2, ease: [0.2, 0.8, 0.2, 1] }}
          className="w-full h-full"
        >
          {children}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default CurtainReveal;
