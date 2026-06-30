import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Sparkles, Users, Briefcase, ArrowRight, Heart, Star, CheckCircle } from 'lucide-react';
import { Link } from 'wouter';
import MagneticButton from '@/components/ui/MagneticButton';
import Hero from '@/components/ui/Hero';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] } }
};

const slideInLeft = {
  hidden: { opacity: 0, x: -50 },
  show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] } }
};

const slideInRight = {
  hidden: { opacity: 0, x: 50 },
  show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] } }
};

const WomenEmpowerment = () => {
  return (
    <div className="w-full bg-white overflow-hidden">
      <Hero 
        title="Women Empowerment" 
        imageSrc="/src/assets/images/hero-women.png" 
        overlayColor="bg-ultra-violet"
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Women Empowerment' }]} 
      />

      {/* Intro Section - Editorial Masonry Layout */}
      <section className="py-24 bg-gray-50 relative overflow-hidden">
        {/* Soft background blob */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orioles-orange/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
        
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            
            {/* Left Column: Masonry Image Collage */}
            <div className="w-full lg:w-1/2 relative min-h-[500px]">
              <motion.div 
                initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
                className="absolute top-0 left-0 w-2/3 h-[350px] rounded-[32px] overflow-hidden shadow-2xl z-20"
              >
                <img src="/src/assets/images/women_emp_intro.png" alt="Women learning" className="w-full h-full object-cover" />
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }}
                className="absolute bottom-0 right-0 w-3/5 h-[300px] rounded-[32px] overflow-hidden shadow-xl z-30 border-4 border-white"
              >
                <img src="/src/assets/images/women_masonry_1.png" alt="Woman small business" className="w-full h-full object-cover" />
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.4 }}
                className="absolute top-1/2 -left-8 w-40 h-40 rounded-full overflow-hidden shadow-lg z-40 border-4 border-white hidden md:block"
              >
                <img src="/src/assets/images/women_masonry_2.png" alt="Woman sewing" className="w-full h-full object-cover" />
              </motion.div>
            </div>

            {/* Right Column: Text */}
            <motion.div 
              variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
              className="w-full lg:w-1/2 lg:pl-10 mt-12 lg:mt-0"
            >
              <h2 className="text-4xl lg:text-5xl font-serif font-bold text-[#0c2444] leading-snug mb-5">
                Empower a Woman, <span className="text-orioles-orange">Empower a Generation</span>
              </h2>
              <div className="h-1 w-20 bg-orioles-orange mb-6 rounded-full"></div>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                When a woman is empowered, she uplifts her family, strengthens her community, and transforms society. Yet, many women face barriers to education, financial independence, and basic rights. At One Hand For Happiness, we are committed to breaking these barriers by providing women with the tools, resources, and support they need to thrive.
              </p>
              <MagneticButton>
                <a href="https://razorpay.me/@onehandforhappiness" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-[#0c2444] text-white px-8 py-4 rounded-full font-bold text-base hover:bg-[#081a33] transition-all shadow-xl">
                  Support the Cause <ArrowRight size={18} />
                </a>
              </MagneticButton>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Approach Section - Zig-Zag Editorial Layout */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="text-center mb-24 max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#0c2444] mb-6">
              Our <span className="text-orioles-orange">Approach</span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">Creating sustainable pathways for independence and leadership through targeted, high-impact initiatives.</p>
          </div>

          <div className="space-y-32">
            {/* Zig-Zag Row 1 */}
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <motion.div variants={slideInLeft} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} className="w-full lg:w-1/2">
                <div className="rounded-[40px] overflow-hidden shadow-2xl aspect-[4/3] relative group">
                  <img src="/src/assets/images/women_zigzag_1.png" alt="Financial Literacy Workshop" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-tr from-ultra-violet/40 to-transparent"></div>
                </div>
              </motion.div>
              <motion.div variants={slideInRight} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} className="w-full lg:w-1/2">
                <div className="w-16 h-16 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6">
                  <Briefcase size={32} />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Skill & Livelihood</h3>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">We provide extensive vocational training, financial literacy workshops, and entrepreneurial skills development. Our goal is to equip women with the hard skills necessary to build self-sustaining careers and independent businesses.</p>
                <ul className="space-y-3">
                  {["Computer Literacy", "Tailoring & Crafting", "Business Management"].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-700 font-medium">
                      <CheckCircle className="text-bright-lime" size={20} /> {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Zig-Zag Row 2 */}
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <motion.div variants={slideInLeft} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} className="w-full lg:w-1/2 order-2 lg:order-1">
                <div className="w-16 h-16 rounded-2xl bg-orange-50 text-orioles-orange flex items-center justify-center mb-6">
                  <Users size={32} />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Self-Help & Mentorship</h3>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">True empowerment happens in community. We build strong networks of support where women can uplift, inspire, and guide each other through shared challenges and collective triumphs.</p>
                <ul className="space-y-3">
                  {["Peer Support Groups", "Leadership Mentoring", "Community Saving Circles"].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-700 font-medium">
                      <CheckCircle className="text-bright-lime" size={20} /> {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
              <motion.div variants={slideInRight} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} className="w-full lg:w-1/2 order-1 lg:order-2">
                <div className="rounded-[40px] overflow-hidden shadow-2xl aspect-[4/3] relative group">
                  <img src="/src/assets/images/women_zigzag_2.png" alt="Women Mentorship" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-bl from-orioles-orange/30 to-transparent"></div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section - Modern Bento Box Grid */}
      <section className="py-24 bg-gray-100">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#0c2444] mb-4">
              Our <span className="text-orioles-orange">Impact</span> So Far
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px]">
            {/* Box 1: Large Number */}
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="bg-white rounded-[32px] p-8 shadow-sm flex flex-col justify-center border border-gray-200">
              <div className="text-6xl font-extrabold text-[#0c2444] mb-2">150+</div>
              <p className="text-lg font-medium text-gray-600">Trained women achieving total financial independence</p>
            </motion.div>
            
            {/* Box 2: Image Tile */}
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, delay: 0.1 }} className="md:col-span-2 rounded-[32px] overflow-hidden relative shadow-sm">
              <img src="/src/assets/images/women_emp_impact.png" alt="Impact" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0c2444]/90 to-transparent flex items-center p-10">
                <div className="max-w-xs">
                  <Star className="text-bright-lime mb-4" size={32} />
                  <h3 className="text-2xl font-bold text-white mb-2">Confidence & Growth</h3>
                  <p className="text-white/80">Witnessing the transformation from hesitation to bold leadership.</p>
                </div>
              </div>
            </motion.div>

            {/* Box 3: Dark Tile */}
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, delay: 0.2 }} className="md:col-span-2 bg-[#0c2444] rounded-[32px] p-10 shadow-sm flex flex-col justify-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-orioles-orange rounded-full blur-[100px] opacity-20"></div>
              <div className="text-6xl font-extrabold text-white mb-2 relative z-10">100%</div>
              <p className="text-xl font-medium text-white/80 relative z-10">Increased awareness about legal rights, health, and gender equality in our target communities.</p>
            </motion.div>
            
            {/* Box 4: Small Tile */}
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, delay: 0.3 }} className="bg-white rounded-[32px] p-8 shadow-sm flex flex-col justify-center border border-gray-200">
              <div className="w-12 h-12 rounded-full bg-orange-100 text-orioles-orange flex items-center justify-center mb-4">
                <Sparkles size={24} />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Strong Networks</h4>
              <p className="text-sm font-medium text-gray-600">Building lifelong supportive communities.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Help Section - High Contrast Dark Theme */}
      <section className="pt-32 pb-10 bg-[#0c2444] relative overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
        <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-orioles-orange rounded-full blur-[150px] opacity-20 translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-ultra-violet rounded-full blur-[120px] opacity-20 -translate-y-1/2 -translate-x-1/4"></div>

        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            
            <div className="w-full lg:w-5/12">
              <div className="relative rounded-[40px] overflow-hidden shadow-[0_0_50px_rgba(249,74,19,0.2)] border-2 border-white/10">
                <img src="/src/assets/images/women_emp_help.png" alt="Women Support Group" className="w-full h-full object-cover" />
              </div>
            </div>
            
            <div className="w-full lg:w-7/12 lg:pl-12">
              <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">
                How You Can <span className="text-orioles-orange">Help Us?</span>
              </h2>
              <p className="text-xl text-white/70 mb-12 leading-relaxed">Your support acts as a catalyst. Help us provide the necessary tools and environment for women to become the architects of their own future.</p>
              
              <div className="grid sm:grid-cols-2 gap-6 mb-12">
                <div className="bg-white/5 backdrop-blur-md p-6 rounded-3xl border border-white/10 hover:border-orioles-orange/50 transition-colors group">
                  <div className="w-12 h-12 rounded-full bg-orioles-orange/20 text-orioles-orange flex items-center justify-center mb-4 group-hover:bg-orioles-orange group-hover:text-white transition-colors">
                    <Shield size={20} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Sponsor Training</h3>
                  <p className="text-white/60 text-sm">Fund a woman's vocational training program.</p>
                </div>
                
                <div className="bg-white/5 backdrop-blur-md p-6 rounded-3xl border border-white/10 hover:border-bright-lime/50 transition-colors group">
                  <div className="w-12 h-12 rounded-full bg-bright-lime/20 text-bright-lime flex items-center justify-center mb-4 group-hover:bg-bright-lime group-hover:text-[#0c2444] transition-colors">
                    <Users size={20} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Become a Mentor</h3>
                  <p className="text-white/60 text-sm">Share your expertise and guide young entrepreneurs.</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <MagneticButton>
                  <a href="https://razorpay.me/@onehandforhappiness" target="_blank" rel="noreferrer" className="inline-flex w-full sm:w-auto justify-center items-center gap-2 bg-orioles-orange text-white px-8 py-4 rounded-full font-bold text-lg shadow-[0_4px_20px_rgba(249,74,19,0.5)] hover:bg-[#e03d0b] transition-colors">
                    Donate Now <Heart size={20} />
                  </a>
                </MagneticButton>
                <MagneticButton>
                  <Link href="/contact-us" className="inline-flex w-full sm:w-auto justify-center items-center gap-2 bg-transparent text-white border-2 border-white/20 px-8 py-4 rounded-full font-bold text-lg hover:border-white transition-colors">
                    Contact Us <ArrowRight size={20} />
                  </Link>
                </MagneticButton>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default WomenEmpowerment;
