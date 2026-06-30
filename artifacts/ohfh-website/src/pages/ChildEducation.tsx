import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Target, GraduationCap, HeartHandshake, ArrowRight, Heart } from 'lucide-react';
import { Link } from 'wouter';
import MagneticButton from '@/components/ui/MagneticButton';
import Hero from '@/components/ui/Hero';

const staggerContainer = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.15 } }
};
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] } }
};

const ChildEducation = () => {
  return (
    <div className="w-full bg-white overflow-hidden">
      <Hero 
        title="Child Education" 
        imageSrc="/src/assets/images/hero-child.png" 
        overlayColor="bg-ultra-violet"
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Child Education' }]} 
      />

      {/* Intro Section - Premium Split Layout */}
      <section className="py-24 bg-white relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#f4f7f6] rounded-bl-[100px] z-0 opacity-50"></div>
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            {/* Left Column: Image with offset border */}
            <motion.div 
              initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8 }}
              className="w-full lg:w-1/2 relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] z-10">
                <img src="/src/assets/images/child_edu_intro.png" alt="Children studying happily" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              </div>
              {/* Decorative offset box */}
              <div className="absolute -bottom-6 -left-6 w-full h-full rounded-3xl border-2 border-ultra-violet/20 z-0"></div>
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-bright-lime rounded-full blur-3xl opacity-30 z-0"></div>
            </motion.div>

            {/* Right Column: Text Content */}
            <motion.div 
              variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true }}
              className="w-full lg:w-1/2"
            >
              <motion.div variants={fadeUp} className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-gray-100 bg-white mb-6 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-bright-lime"></span>
                <span className="text-[13px] font-bold text-gray-800 tracking-[0.1em] uppercase">Core Mission</span>
              </motion.div>
              <motion.h2 variants={fadeUp} className="text-4xl lg:text-5xl font-serif font-extrabold text-[#0c2444] leading-tight mb-6">
                Education: A Right, <br /><span className="text-orioles-orange">Not a Privilege</span>
              </motion.h2>
              <motion.p variants={fadeUp} className="text-lg text-gray-600 leading-relaxed mb-8">
                Every child deserves the opportunity to learn, grow, and dream. Yet, millions of children are denied this basic right due to poverty and lack of resources. At One Hand For Happiness, we believe that education is the ultimate key to breaking the cycle of poverty and creating a future filled with endless possibilities.
              </motion.p>
              <motion.div variants={fadeUp}>
                <MagneticButton>
                  <a href="#" onClick={(e) => e.preventDefault()} className="inline-flex items-center gap-2 bg-ultra-violet text-white px-8 py-3.5 rounded-full font-bold text-base hover:bg-opacity-90 transition-all shadow-[0_4px_14px_rgba(72,50,133,0.3)]">
                    Support Our Mission <ArrowRight size={18} />
                  </a>
                </MagneticButton>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Approach Section - Modern Cards */}
      <section className="py-24 bg-gray-50 relative overflow-hidden">
        {/* Decorative Background Blob */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-bright-lime/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-ultra-violet/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="text-center mb-20 max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#0c2444] mb-6">
              Our <span className="text-orioles-orange">Approach</span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">We provide comprehensive support ensuring education reaches those who need it most, through a carefully structured 4-pillar methodology.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <BookOpen size={28} />, title: "Community Learning", desc: "Setting up educational centers directly in underserved areas, bringing education closer to children.", color: "text-blue-500", bg: "bg-blue-50" },
              { icon: <Target size={28} />, title: "Holistic Growth", desc: "Teaching life skills, creative learning, and emotional well-being beyond just basic academics.", color: "text-purple-500", bg: "bg-purple-50" },
              { icon: <GraduationCap size={28} />, title: "Scholarships", desc: "Providing books, uniforms, and financial aid to ensure absolutely no child is left behind.", color: "text-green-500", bg: "bg-green-50" },
              { icon: <HeartHandshake size={28} />, title: "Mentorship", desc: "Connecting vulnerable children with mentors who inspire and guide their future career paths.", color: "text-orange-500", bg: "bg-orange-50" }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15, duration: 0.6 }}
                className="bg-white p-8 rounded-[32px] shadow-sm border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group"
              >
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 ${item.bg} ${item.color} group-hover:scale-110 transition-transform duration-300`}>
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section - Cinematic Parallax */}
      <section className="relative py-32 overflow-hidden flex items-center justify-center min-h-[60vh]">
        <div className="absolute inset-0 z-0">
          <img src="/src/assets/images/child_edu_impact.png" alt="Impact" className="w-full h-full object-cover scale-105" />
          <div className="absolute inset-0 bg-ultra-violet/80 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center max-w-5xl">
          <motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-serif font-bold text-white mb-16">
              Our <span className="text-orioles-orange">Impact</span> So Far
            </motion.h2>
            
            <div className="grid md:grid-cols-3 gap-6 lg:gap-10">
              <motion.div variants={fadeUp} className="bg-white/10 backdrop-blur-md p-10 rounded-3xl border border-white/20 hover:bg-white/20 transition-all">
                <div className="text-6xl font-bold text-white mb-4">500+</div>
                <p className="text-white/90 text-lg font-medium">Children enrolled in our quality learning programs</p>
              </motion.div>
              <motion.div variants={fadeUp} className="bg-white/10 backdrop-blur-md p-10 rounded-3xl border border-white/20 hover:bg-white/20 transition-all">
                <div className="text-6xl font-bold text-bright-lime mb-4">60%</div>
                <p className="text-white/90 text-lg font-medium">Increase in literacy rates within marginalized communities</p>
              </motion.div>
              <motion.div variants={fadeUp} className="bg-white/10 backdrop-blur-md p-10 rounded-3xl border border-white/20 hover:bg-white/20 transition-all">
                <div className="text-6xl font-bold text-white mb-4">100%</div>
                <p className="text-white/90 text-lg font-medium">Commitment to empowering young minds with confidence</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Help Section - Modern Call to Action */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            
            <div className="w-full lg:w-1/2 order-2 lg:order-1">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#0c2444] mb-6">
                How You Can <span className="text-orioles-orange">Help Us?</span>
              </h2>
              <p className="text-lg text-gray-600 mb-10 leading-relaxed">It takes a village to raise a child. Join our community of changemakers and help us provide the gift of education to those who need it the most.</p>
              
              <div className="space-y-6 mb-10">
                <div className="flex items-start gap-4 p-6 rounded-2xl bg-orange-50 border border-orange-100 hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 rounded-full bg-orioles-orange text-white flex items-center justify-center shrink-0">
                    <Heart size={20} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Sponsor a Child</h3>
                    <p className="text-gray-600">Cover school fees, books, and basic needs for a full academic year.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-6 rounded-2xl bg-purple-50 border border-purple-100 hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 rounded-full bg-ultra-violet text-white flex items-center justify-center shrink-0">
                    <BookOpen size={20} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Volunteer as a Teacher</h3>
                    <p className="text-gray-600">Share your knowledge and time to mentor young minds at our centers.</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <MagneticButton>
                  <a href="#" onClick={(e) => e.preventDefault()} className="inline-flex w-full sm:w-auto justify-center items-center gap-2 bg-orioles-orange text-white px-8 py-4 rounded-full font-bold text-lg shadow-[0_4px_14px_rgba(249,74,19,0.4)] hover:shadow-[0_6px_20px_rgba(249,74,19,0.6)] hover:bg-[#e03d0b] transition-all">
                    Donate Now <Heart size={20} />
                  </a>
                </MagneticButton>
                <MagneticButton>
                  <Link href="/volunteer" className="inline-flex w-full sm:w-auto justify-center items-center gap-2 bg-white text-gray-900 border-2 border-gray-200 px-8 py-4 rounded-full font-bold text-lg hover:border-gray-900 transition-all">
                    Join as Volunteer <ArrowRight size={20} />
                  </Link>
                </MagneticButton>
              </div>
            </div>

            <div className="w-full lg:w-1/2 order-1 lg:order-2">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img src="/src/assets/images/child_edu_help.png" alt="Volunteer teaching" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default ChildEducation;
