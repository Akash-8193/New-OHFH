import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, Briefcase, Compass, ShieldCheck, Heart } from 'lucide-react';
import { Link } from 'wouter';
import MagneticButton from '@/components/ui/MagneticButton';
import Hero from '@/components/ui/Hero';
import SplitTextReveal from '@/components/ui/SplitTextReveal';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] } }
};

const SkillDevelopment = () => {
  return (
    <div className="w-full bg-white overflow-hidden">
      <Hero 
        title="Skill Development" 
        imageSrc="/src/assets/images/hero-skill.png" 
        overlayColor="bg-ultra-violet"
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Skill Development' }]} 
      />

      {/* Intro Section - Floating Cards */}
      <section className="py-32 bg-gray-50 relative flex items-center justify-center min-h-[600px] overflow-hidden">
        {/* Decorative Floating Images */}
        <motion.div 
          animate={{ y: [0, -20, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-10 left-10 md:left-20 w-48 h-64 md:w-64 md:h-80 rounded-[32px] overflow-hidden shadow-2xl opacity-60 z-0 rotate-[-8deg]"
        >
          <img src="/src/assets/images/skill_intro_1.png" alt="Tech skills" className="w-full h-full object-cover" />
        </motion.div>
        
        <motion.div 
          animate={{ y: [0, 20, 0] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-10 right-10 md:right-32 w-56 h-56 md:w-72 md:h-72 rounded-[40px] overflow-hidden shadow-2xl opacity-50 z-0 rotate-[12deg]"
        >
          <img src="/src/assets/images/skill_intro_2.png" alt="Vocational skills" className="w-full h-full object-cover" />
        </motion.div>

        <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl backdrop-blur-sm bg-white/60 p-12 rounded-[40px] border border-white/50 shadow-xl">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}>
            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-gray-200 bg-white mb-6">
              <span className="w-2 h-2 rounded-full bg-bright-lime"></span>
              <span className="text-[13px] font-bold text-gray-800 tracking-[0.1em] uppercase">Vocational Training</span>
            </div>
            <div className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[#0c2444] leading-tight mb-8">
              <SplitTextReveal text="Skills That Build" /> <SplitTextReveal text="Independence" className="text-orioles-orange" stagger={0.03} />
            </div>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-10 max-w-3xl mx-auto">
              A skill is more than just a tool for employment—it is a pathway to self-reliance, dignity, and lasting change. Millions struggle to break free from poverty due to a lack of practical opportunities. We bridge this gap by equipping individuals with the hard skills they need to build a better future.
            </p>
            <MagneticButton>
              <a href="#" onClick={(e) => e.preventDefault()} className="btn-skew inline-flex items-center gap-2 bg-[#0c2444] text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-[#081a33] transition-all shadow-xl">
                Fund a Student <ArrowRight size={20} />
              </a>
            </MagneticButton>
          </motion.div>
        </div>
      </section>

      {/* Approach Section - Vertical Roadmap Timeline */}
      <section className="py-32 bg-white relative">
        <div className="container mx-auto px-4 max-w-6xl relative">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#0c2444] mb-4">
              The Learning <span className="text-orioles-orange">Journey</span>
            </h2>
            <p className="text-xl text-gray-600">Our structured, step-by-step roadmap to sustainable employment.</p>
          </div>

          <div className="relative">
            {/* Center Line */}
            <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-orioles-orange via-ultra-violet to-bright-lime rounded-full -translate-x-1/2 opacity-20 hidden md:block"></div>
            
            <div className="space-y-24 relative">
              {/* Step 1 */}
              <div className="flex flex-col md:flex-row items-center justify-between w-full">
                <div className="w-full md:w-[45%] md:text-right pr-0 md:pr-12 mb-8 md:mb-0">
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">1. Skill Assessment</h3>
                  <p className="text-lg text-gray-600 leading-relaxed">We evaluate each individual's interests, educational background, and local market demand to match them with the most viable vocational training path.</p>
                </div>
                <div className="absolute left-[28px] md:left-1/2 w-12 h-12 bg-white border-4 border-orioles-orange rounded-full -translate-x-1/2 flex items-center justify-center text-orioles-orange shadow-lg z-10 hidden md:flex">
                  <Compass size={20} />
                </div>
                <div className="w-full md:w-[45%] pl-0 md:pl-12">
                  <div className="h-64 rounded-3xl overflow-hidden shadow-lg border border-gray-100">
                    <img src="/src/assets/images/skill_roadmap_0.png" alt="Skill Assessment" className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex flex-col md:flex-row items-center justify-between w-full flex-col-reverse md:flex-row">
                <div className="w-full md:w-[45%] pr-0 md:pr-12 mt-8 md:mt-0">
                  <div className="h-64 rounded-3xl overflow-hidden shadow-lg border border-gray-100">
                    <img src="/src/assets/images/skill_intro_2.png" alt="Training" className="w-full h-full object-cover" />
                  </div>
                </div>
                <div className="absolute left-[28px] md:left-1/2 w-12 h-12 bg-white border-4 border-ultra-violet rounded-full -translate-x-1/2 flex items-center justify-center text-ultra-violet shadow-lg z-10 hidden md:flex">
                  <BookOpen size={20} />
                </div>
                <div className="w-full md:w-[45%] pl-0 md:pl-12 md:text-left">
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">2. Hands-on Training</h3>
                  <p className="text-lg text-gray-600 leading-relaxed">Through dedicated workshops and tech centers, our students spend 3 to 6 months receiving rigorous, hands-on practical training in their chosen trade.</p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex flex-col md:flex-row items-center justify-between w-full">
                <div className="w-full md:w-[45%] md:text-right pr-0 md:pr-12 mb-8 md:mb-0">
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">3. Job Readiness</h3>
                  <p className="text-lg text-gray-600 leading-relaxed">Beyond technical skills, we provide essential soft-skills training: resume building, interview preparation, and workplace etiquette.</p>
                </div>
                <div className="absolute left-[28px] md:left-1/2 w-12 h-12 bg-white border-4 border-blue-500 rounded-full -translate-x-1/2 flex items-center justify-center text-blue-500 shadow-lg z-10 hidden md:flex">
                  <Briefcase size={20} />
                </div>
                <div className="w-full md:w-[45%] pl-0 md:pl-12">
                  <div className="h-64 rounded-3xl overflow-hidden shadow-lg border border-gray-100">
                    <img src="/src/assets/images/skill_roadmap_1.png" alt="Job Readiness" className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>

              {/* Step 4 */}
              <div className="flex flex-col md:flex-row items-center justify-between w-full flex-col-reverse md:flex-row">
                <div className="w-full md:w-[45%] pr-0 md:pr-12 mt-8 md:mt-0">
                  <div className="h-64 rounded-3xl overflow-hidden shadow-lg border border-gray-100">
                    <img src="/src/assets/images/women_masonry_1.png" alt="Placement & Support" className="w-full h-full object-cover" />
                  </div>
                </div>
                <div className="absolute left-[28px] md:left-1/2 w-12 h-12 bg-white border-4 border-bright-lime rounded-full -translate-x-1/2 flex items-center justify-center text-green-600 shadow-lg z-10 hidden md:flex">
                  <ShieldCheck size={20} />
                </div>
                <div className="w-full md:w-[45%] pl-0 md:pl-12 md:text-left">
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">4. Placement & Support</h3>
                  <p className="text-lg text-gray-600 leading-relaxed">We bridge the final gap by connecting graduates with local businesses and industries, ensuring they secure safe, stable, and fairly paid employment.</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Impact Section - Circular Progress Rings */}
      <section className="py-24 bg-[#0c2444] text-white relative overflow-hidden">
        <div className="container mx-auto px-4 max-w-7xl relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-20">
            Measurable <span className="text-orioles-orange">Impact</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-12 lg:gap-20 max-w-5xl mx-auto">
            {/* Ring 1 */}
            <div className="flex flex-col items-center">
              <div className="relative w-48 h-48 mb-8">
                <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="45" fill="transparent" stroke="rgba(255,255,255,0.1)" strokeWidth="4" />
                  <motion.circle cx="50" cy="50" r="45" fill="transparent" stroke="#f94a13" strokeWidth="8" strokeDasharray="283" strokeDashoffset="0" strokeLinecap="round" 
                    initial={{ strokeDashoffset: 283 }} whileInView={{ strokeDashoffset: 0 }} viewport={{ once: true }} transition={{ duration: 1.5, ease: "easeOut" }}
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-4xl font-bold text-white">100+</span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-orioles-orange mb-2">Graduates</h3>
              <p className="text-white/70 text-center">Trained and fully certified in highly employable vocational skills.</p>
            </div>

            {/* Ring 2 */}
            <div className="flex flex-col items-center">
              <div className="relative w-48 h-48 mb-8">
                <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="45" fill="transparent" stroke="rgba(255,255,255,0.1)" strokeWidth="4" />
                  <motion.circle cx="50" cy="50" r="45" fill="transparent" stroke="#BADA55" strokeWidth="8" strokeDasharray="283" strokeDashoffset="0" strokeLinecap="round" 
                    initial={{ strokeDashoffset: 283 }} whileInView={{ strokeDashoffset: 28 }} viewport={{ once: true }} transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-4xl font-bold text-white">90%</span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-bright-lime mb-2">Job Placement</h3>
              <p className="text-white/70 text-center">Successfully transitioned into full-time roles within 3 months.</p>
            </div>

            {/* Ring 3 */}
            <div className="flex flex-col items-center">
              <div className="relative w-48 h-48 mb-8">
                <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="45" fill="transparent" stroke="rgba(255,255,255,0.1)" strokeWidth="4" />
                  <motion.circle cx="50" cy="50" r="45" fill="transparent" stroke="#483285" strokeWidth="8" strokeDasharray="283" strokeDashoffset="0" strokeLinecap="round" 
                    initial={{ strokeDashoffset: 283 }} whileInView={{ strokeDashoffset: 0 }} viewport={{ once: true }} transition={{ duration: 1.5, ease: "easeOut", delay: 0.4 }}
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-4xl font-bold text-white">30+</span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-ultra-violet mb-2">New Businesses</h3>
              <p className="text-white/70 text-center">Micro-enterprises successfully launched by our program alumni.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Help Section - Dopamine High Contrast Blocks */}
      <section className="pt-24 pb-10 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#0c2444] mb-6">
              How You Can <span className="text-orioles-orange">Help Us?</span>
            </h2>
            <p className="text-xl text-gray-600">Invest in the future workforce. Your contribution creates a ripple effect of empowerment.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            
            <div className="bg-orioles-orange p-10 rounded-[32px] text-white flex flex-col justify-between hover:-translate-y-2 transition-transform duration-300">
              <div>
                <h3 className="text-3xl font-bold mb-4">Sponsor a Skill</h3>
                <p className="text-white/90 text-lg mb-8">Cover the cost of a 3-month vocational training course for one individual.</p>
              </div>
              <a href="#" onClick={(e) => e.preventDefault()} className="w-full bg-white text-orioles-orange py-4 rounded-full font-bold text-center hover:bg-gray-100 transition-colors">Donate Now</a>
            </div>

            <div className="bg-[#0c2444] p-10 rounded-[32px] text-white flex flex-col justify-between hover:-translate-y-2 transition-transform duration-300">
              <div>
                <h3 className="text-3xl font-bold mb-4">Provide Tools</h3>
                <p className="text-white/90 text-lg mb-8">Donate laptops, sewing machines, or tools for our practical workshops.</p>
              </div>
              <a href="#" onClick={(e) => e.preventDefault()} className="w-full border-2 border-white text-white py-4 rounded-full font-bold text-center hover:bg-white hover:text-[#0c2444] transition-colors">Contribute Tools</a>
            </div>

            <div className="bg-ultra-violet p-10 rounded-[32px] text-white flex flex-col justify-between hover:-translate-y-2 transition-transform duration-300">
              <div>
                <h3 className="text-3xl font-bold mb-4">Hire Alumni</h3>
                <p className="text-white/90 text-lg mb-8">Partner with us to provide internships or full-time jobs for our graduates.</p>
              </div>
              <Link href="/volunteer" className="w-full bg-white text-ultra-violet py-4 rounded-full font-bold text-center hover:bg-gray-100 transition-colors">Partner With Us</Link>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default SkillDevelopment;
