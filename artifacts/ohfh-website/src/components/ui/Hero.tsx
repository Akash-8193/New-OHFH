import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'wouter';

interface HeroProps {
  title: string;
  imageSrc: string;
  overlayColor?: string;
  breadcrumbs?: { label: string; href?: string }[];
}

const Hero: React.FC<HeroProps> = ({ 
  title, 
  imageSrc, 
  overlayColor = "bg-[#0F352E]",
  breadcrumbs 
}) => {
  return (
    <section className={`relative w-full py-40 flex flex-col items-center justify-center overflow-hidden ${overlayColor} min-h-[70vh]`}>
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <img src={imageSrc} alt={`${title} Hero`} className="w-full h-full object-cover opacity-90" />
        <div className={`absolute inset-0 ${overlayColor}/50 mix-blend-multiply`}></div>
      </div>
      
      <div className="relative z-10 text-center px-4 w-full flex flex-col items-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
          className="text-5xl md:text-[80px] font-bold text-white mb-6 tracking-tight leading-none"
        >
          {title}
        </motion.h1>
        
        {breadcrumbs && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-2 text-white/90 text-lg font-medium mb-16"
          >
            {breadcrumbs.map((crumb, idx) => (
              <React.Fragment key={idx}>
                {crumb.href ? (
                  <Link href={crumb.href} className="hover:text-[#FFD166] transition-colors">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-[#FFD166]">{crumb.label}</span>
                )}
                {idx < breadcrumbs.length - 1 && <span>/</span>}
              </React.Fragment>
            ))}
          </motion.div>
        )}
      </div>

      {/* Premium Scroll Down Icon */}
      <motion.div 
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}
        className="absolute bottom-10 z-10 cursor-pointer flex flex-col items-center gap-3 text-white/70 hover:text-white transition-colors group"
        onClick={() => window.scrollBy({ top: window.innerHeight * 0.7, behavior: 'smooth' })}
      >
        <span className="text-xs font-bold tracking-[0.2em] uppercase">Scroll</span>
        <div className="w-7 h-12 border-2 border-current rounded-full flex justify-center pt-2">
          <motion.div 
            animate={{ y: [0, 15, 0], opacity: [1, 0, 1] }} 
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-1.5 h-3 bg-current rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
