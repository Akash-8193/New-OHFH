import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Brain, Heart, Activity, Stethoscope, HeartPulse, ArrowRight, Zap } from 'lucide-react';
import { Link } from 'wouter';
import MagneticButton from '@/components/ui/MagneticButton';
import Hero from '@/components/ui/Hero';
import SplitTextReveal from '@/components/ui/SplitTextReveal';
import ScrollReveal from '@/components/ui/ScrollReveal';
import Typewriter from '@/components/ui/Typewriter';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] } }
};

const Workshop = () => {
  return (
    <div className="w-full bg-[#f8f9fa] overflow-hidden">
      <Hero 
        title="Interactive Workshops" 
        imageSrc="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80&w=2000" 
        overlayColor="bg-ultra-violet"
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Workshop' }]} 
      />

      {/* Manifesto Intro */}
      <section className="py-24 relative">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orioles-orange rounded-full blur-[120px] opacity-10 pointer-events-none"></div>
        <div className="container mx-auto px-4 max-w-5xl text-center relative z-10">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 shadow-sm mb-8">
            <Zap className="text-orioles-orange" size={16} />
            <span className="text-sm font-bold tracking-wide text-[#0c2444] uppercase"><Typewriter text="Empowerment Through Education" delay={300} speed={40} /></span>
          </motion.div>
          <div className="text-4xl md:text-5xl font-serif font-bold text-[#0c2444] leading-tight mb-8">
            <SplitTextReveal text="Nurturing Minds & Bodies for a" /> <br />
            <SplitTextReveal text="Brighter Tomorrow" className="text-transparent bg-clip-text bg-gradient-to-r from-orioles-orange to-[#0c2444]" stagger={0.03} />
          </div>
          <ScrollReveal direction="up" delay={0.2} className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto font-medium">
            At One Hand For Happiness, our workshops are thoughtfully designed to equip children and women with essential skills, knowledge, and awareness—fostering holistic development and complete empowerment.
          </ScrollReveal>
        </div>
      </section>

      {/* Modern Bento Box Grid */}
      <section className="py-12 pb-32">
        <div className="container mx-auto px-4 max-w-7xl">
          
          <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-6 auto-rows-[280px]">
            
            {/* 1. Cryptography (Large Feature Card) */}
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="md:col-span-4 lg:col-span-4 lg:row-span-2 relative rounded-[40px] overflow-hidden group shadow-xl">
              <img src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=1600" alt="Cryptography" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c2444] via-[#0c2444]/60 to-transparent"></div>
              <div className="absolute inset-0 p-10 flex flex-col justify-end">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-md text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg border border-white/30">
                  <Brain size={32} />
                </div>
                <h3 className="text-4xl font-bold text-white mb-4 leading-tight">Cryptography <br/>Workshop</h3>
                <p className="text-white/80 text-lg leading-relaxed max-w-lg">Children dive into secret codes, puzzles, and ciphers to develop mathematical thinking, logical reasoning, and a curiosity in technology and cybersecurity.</p>
              </div>
            </motion.div>

            {/* 2. Self Defense */}
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, delay: 0.1 }} className="md:col-span-2 lg:col-span-2 rounded-[40px] bg-orioles-orange text-white p-8 flex flex-col justify-between shadow-[0_15px_40px_rgba(249,74,19,0.3)] hover:-translate-y-2 transition-transform duration-300">
              <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center">
                <Shield size={28} />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3">Self-Defense & Brain Gym</h3>
                <p className="text-white/90 font-medium">Physical safety combined with mental agility. Self-defense for confidence, and brain gym for memory and focus.</p>
              </div>
            </motion.div>

            {/* 3. Safe Touch */}
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, delay: 0.2 }} className="md:col-span-2 lg:col-span-2 rounded-[40px] bg-white p-8 flex flex-col justify-between shadow-xl border border-gray-100 hover:-translate-y-2 transition-transform duration-300">
              <div className="w-14 h-14 bg-pink-100 text-pink-500 rounded-2xl flex items-center justify-center">
                <Heart size={28} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#0c2444] mb-3">Safe Touch Awareness</h3>
                <p className="text-gray-600 font-medium">Teaching the difference between safe and unsafe interactions, personal boundaries, and body autonomy.</p>
              </div>
            </motion.div>

            {/* 4. Medical Health */}
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, delay: 0.3 }} className="md:col-span-2 lg:col-span-2 rounded-[40px] bg-bright-lime p-8 flex flex-col justify-between shadow-[0_15px_40px_rgba(186,218,85,0.4)] hover:-translate-y-2 transition-transform duration-300 text-[#0c2444]">
              <div className="w-14 h-14 bg-[#0c2444]/10 rounded-2xl flex items-center justify-center">
                <Stethoscope size={28} />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3">Medical Checkup</h3>
                <p className="text-[#0c2444]/80 font-medium">By SRS Hospital. Comprehensive medical checkups for those lacking access to regular healthcare.</p>
              </div>
            </motion.div>

            {/* 5. Health Awareness */}
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, delay: 0.4 }} className="md:col-span-2 lg:col-span-2 rounded-[40px] bg-white p-8 flex flex-col justify-between shadow-xl border border-gray-100 hover:-translate-y-2 transition-transform duration-300">
              <div className="w-14 h-14 bg-blue-100 text-blue-500 rounded-2xl flex items-center justify-center">
                <Activity size={28} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#0c2444] mb-3">Health Awareness</h3>
                <p className="text-gray-600 font-medium">By MyDigiRecords. Learning the importance of tracking health records and proactive wellness.</p>
              </div>
            </motion.div>

            {/* 6. Health Monitoring */}
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, delay: 0.5 }} className="md:col-span-2 lg:col-span-2 rounded-[40px] bg-ultra-violet text-white p-8 flex flex-col justify-between shadow-xl hover:-translate-y-2 transition-transform duration-300">
              <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center">
                <HeartPulse size={28} />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3">Metro Health Camp</h3>
                <p className="text-white/80 font-medium">By Metro Hospital. Routine health monitoring and digital health literacy for children and families.</p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Dark Mode Approach & Impact */}
      <section className="py-32 bg-[#0c2444] relative overflow-hidden">
        {/* Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-orioles-orange rounded-full blur-[200px] opacity-10"></div>
        
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            
            <div className="order-2 lg:order-1">
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-10 rounded-[40px] shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-bright-lime rounded-full blur-[80px] opacity-20"></div>
                
                <h3 className="text-3xl font-bold mb-8 text-white flex items-center gap-4">
                  <span className="w-12 h-12 rounded-full bg-bright-lime text-[#0c2444] flex items-center justify-center"><Activity size={24}/></span>
                  Our Impact
                </h3>
                
                <ul className="space-y-6 relative z-10">
                  {[
                    "Increasing awareness about personal safety and rights",
                    "Improving communication skills and self-expression",
                    "Building confidence and social competence",
                    "Enhancing physical health and digital health literacy"
                  ].map((item, idx) => (
                    <motion.li 
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors"
                    >
                      <div className="mt-1 w-6 h-6 rounded-full bg-bright-lime/20 flex items-center justify-center shrink-0">
                        <div className="w-2 h-2 rounded-full bg-bright-lime shadow-[0_0_10px_rgba(186,218,85,0.8)]"></div>
                      </div>
                      <span className="text-white/90 font-medium text-lg">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="text-4xl md:text-5xl font-serif font-bold text-white mb-8">
                <SplitTextReveal text="A Tailored" /> <SplitTextReveal text="Approach" className="text-bright-lime" stagger={0.05} />
              </div>
              <p className="text-xl text-white/70 leading-relaxed mb-10">
                Each workshop is thoughtfully designed to suit the age, background, and specific needs of the children we serve. Our diverse team of educators, trainers, healthcare professionals, and industry experts bring their skills, compassion, and experience into every session.
              </p>
              <div className="relative pl-8 border-l-4 border-orioles-orange">
                <p className="text-2xl font-bold text-white italic leading-relaxed">
                  "Our workshops are not just sessions—they are small revolutions of change, one child at a time."
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA - Vibrant Gradient */}
      <section className="pt-24 pb-10 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orioles-orange via-[#e03d0b] to-[#0c2444]"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        
        <div className="container mx-auto px-4 max-w-4xl text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-8 drop-shadow-lg">
            Collaborate With Us
          </h2>
          <p className="text-2xl text-white/90 mb-12 font-medium max-w-2xl mx-auto drop-shadow">
            We invite schools, educators, healthcare professionals, and volunteers to collaborate with us.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <MagneticButton>
              <a href="#" onClick={(e) => e.preventDefault()} className="inline-flex w-full sm:w-auto items-center justify-center gap-2 bg-white text-[#0c2444] px-10 py-5 rounded-full font-bold text-lg shadow-[0_10px_30px_rgba(255,255,255,0.3)] hover:bg-gray-100 transition-colors">
                Donate Now <ArrowRight size={20} />
              </a>
            </MagneticButton>
            <MagneticButton>
              <Link href="/contact-us" className="inline-flex w-full sm:w-auto items-center justify-center gap-2 bg-transparent border-2 border-white text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-white/10 transition-colors">
                Contact Us <ArrowRight size={20} />
              </Link>
            </MagneticButton>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Workshop;
