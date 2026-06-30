import React from 'react';
import { motion } from 'framer-motion';
import { Settings, Briefcase, Laptop, ArrowRight } from 'lucide-react';
import MagneticButton from '@/components/ui/MagneticButton';
import Hero from '@/components/ui/Hero';

const SkillDevelopment = () => {
  return (
    <div className="w-full bg-white">
      <Hero 
        title="Skill Development" 
        imageSrc="/src/assets/images/hero-skill.png" 
        overlayColor="bg-ultra-violet"
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Skill Development' }]} 
      />

      {/* Intro */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">Skills That Build Independence</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            A skill is more than a tool for employment—it is a pathway to self-reliance, dignity, and lasting change. Millions struggle to break free from poverty due to lack of opportunities. At One Hand For Happiness, we bridge this gap by equipping individuals with the skills they need to build a better future.
          </p>
        </div>
      </section>

      {/* Approach */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-ultra-violet mb-4">Our Approach</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <Settings />, title: "Vocational Training", desc: "Tailoring, handicrafts, carpentry, digital literacy through hands-on training." },
              { icon: <Briefcase />, title: "Job Readiness", desc: "Resume building, interview preparation, workplace skills for stable employment." },
              { icon: <Laptop />, title: "Technology & Innovation", desc: "Computer literacy, online marketing, e-commerce bridging the digital divide." }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl hover:border-persian-blue transition-all group text-center"
              >
                <div className="w-16 h-16 bg-persian-blue/10 text-persian-blue rounded-full flex items-center justify-center mb-6 mx-auto group-hover:bg-persian-blue group-hover:text-white transition-colors">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="py-20 bg-persian-blue text-white">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h2 className="text-3xl font-serif font-bold mb-12 text-bright-lime">Our Impact</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-white/10 rounded-2xl backdrop-blur-sm">
              <div className="text-4xl font-bold mb-4">100+</div>
              <p className="text-white/90">Trained in employable skills</p>
            </div>
            <div className="p-6 bg-white/10 rounded-2xl backdrop-blur-sm">
              <div className="text-4xl font-bold mb-4">&uarr;</div>
              <p className="text-white/90">Increased access to stable jobs</p>
            </div>
            <div className="p-6 bg-white/10 rounded-2xl backdrop-blur-sm">
              <div className="text-4xl font-bold mb-4">&#10003;</div>
              <p className="text-white/90">Empowered local economies</p>
            </div>
          </div>
        </div>
      </section>

      {/* Help */}
      <section className="py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-serif font-bold text-gray-900 mb-10">Give the Gift of Independence</h2>
          <MagneticButton>
            <a href="https://razorpay.me/@onehandforhappiness" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-orioles-orange text-white px-10 py-4 rounded-full font-bold text-lg shadow-xl hover:bg-orange-600 transition-colors">
              Donate Now <ArrowRight size={20} />
            </a>
          </MagneticButton>
        </div>
      </section>
    </div>
  );
};

export default SkillDevelopment;
