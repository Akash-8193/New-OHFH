import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Users, Hammer, ArrowRight, ChevronDown } from 'lucide-react';
import { Link } from 'wouter';
import Hero from '@/components/ui/Hero';
import SplitTextReveal from '@/components/ui/SplitTextReveal';
import CurtainReveal from '@/components/ui/CurtainReveal';
import ScrollReveal from '@/components/ui/ScrollReveal';
import Typewriter from '@/components/ui/Typewriter';

const About = () => {
  return (
    <div className="w-full">
      <Hero 
        title="About Us" 
        imageSrc="/images/about-hero.png" 
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'About Us' }]} 
      />

      {/* Intro / CTA Section (New Design) */}
      {/* Intro / CTA Section (New Design) */}
      <section className="py-24 bg-white relative overflow-hidden font-sans">
        
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-8">
            
            {/* Left side text */}
            <div className="w-full lg:w-[55%]">
              
              {/* Tag */}
              <motion.div variants={{hidden: {opacity: 0, y: 20}, show: {opacity: 1, y: 0}}} initial="hidden" animate="show" transition={{duration: 0.5}} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#f8f9fa] mb-6 shadow-sm border border-gray-100">
                 <span className="text-orioles-orange text-lg leading-none font-bold">+</span> 
                 <span className="text-xs font-bold text-gray-800 tracking-wide uppercase"><Typewriter text="Get Started Today" delay={300} /></span>
              </motion.div>
              
              {/* Heading */}
              <div className="text-[40px] md:text-[50px] lg:text-[56px] font-sans font-extrabold text-[#0c2444] leading-[1.1] tracking-tight mb-6">
                <SplitTextReveal text="Be the Hand That Brings Happiness" stagger={0.03} />
              </div>

              <ScrollReveal direction="up" delay={0.2} className="text-[17px] text-gray-500 leading-relaxed font-medium mb-12 max-w-[95%]">
                Every day, millions wake up to hunger, struggle, and uncertainty—yet, they also wake up with hope. Hope that someone, somewhere, will reach out and change their story.
              </ScrollReveal>
              
              <motion.div variants={{hidden: {opacity: 0, y: 20}, show: {opacity: 1, y: 0}}} initial="hidden" animate="show" transition={{duration: 0.5, delay: 0.3}} className="space-y-10 mb-12">
                <div className="flex gap-6 items-start">
                  <div className="w-14 h-14 rounded-full bg-[#f8f9fa] border border-gray-100 shadow-sm flex items-center justify-center shrink-0">
                     <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-orioles-orange"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#0c2444] mb-2">Real Change & Empowerment</h3>
                    <p className="text-gray-500 text-[15px] leading-relaxed max-w-[95%] font-medium">
                      At One Hand For Happiness, we believe that real change begins with dignity, empowerment, and opportunity—not just charity.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-6 items-start">
                  <div className="w-14 h-14 rounded-full bg-[#f8f9fa] border border-gray-100 shadow-sm flex items-center justify-center shrink-0">
                     <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-orioles-orange"><circle cx="13.5" cy="6.5" r=".5" fill="currentColor"/><circle cx="17.5" cy="10.5" r=".5" fill="currentColor"/><circle cx="8.5" cy="7.5" r=".5" fill="currentColor"/><circle cx="6.5" cy="12.5" r=".5" fill="currentColor"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/></svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#0c2444] mb-2">Long-term Solutions</h3>
                    <p className="text-gray-500 text-[15px] leading-relaxed max-w-[95%] font-medium">
                      We are here to transform lives, not with temporary relief, but with long-term solutions that rebuild futures. Because true impact is not measured by what we give, but by how many lives we help stand on their own.
                    </p>
                  </div>
                </div>
              </motion.div>
              
              <ScrollReveal direction="up" delay={0.4}>
                <Link href="/contact-us" className="btn-skew inline-flex items-center gap-2 bg-[#f94a13] text-white px-8 py-3.5 rounded-full text-[16px] font-bold hover:bg-[#e03d0b] transition-all shadow-md border-0">
                  Get Started <ArrowRight size={18} className="relative z-10" />
                </Link>
              </ScrollReveal>
            </div>

            {/* Right Column (Image) */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}
              className="w-full lg:w-[45%] flex justify-center lg:justify-end mt-12 lg:mt-0 relative"
            >
               <div className="relative inline-block w-full max-w-[600px] min-h-[400px] md:min-h-[500px] lg:min-h-[600px]">
                 <div className="absolute inset-0">
                   <CurtainReveal>
                     <img src="/images/cta-box-image.png" alt="Children holding sign" className="image-anime w-full h-full object-contain drop-shadow-2xl" />
                   </CurtainReveal>
                 </div>
                 
                 {/* Text Overlay on Cardboard (with background patch to hide old text) */}
                 <div className="absolute inset-0 flex items-center justify-center pointer-events-none" style={{ paddingTop: '34%', paddingLeft: '2%' }}>
                   <div className="transform rotate-[2deg] text-center w-[58%] bg-[#e4d3bc] py-2 px-1 rounded-sm" style={{ boxShadow: '0 0 8px 4px #e4d3bc' }}>
                     <h3 className="text-[#102b4e] text-[18px] md:text-[24px] lg:text-[28px] font-extrabold leading-snug font-sans tracking-tight opacity-90 mix-blend-multiply">
                       Your Support Can <br/> Transform a Life!
                     </h3>
                   </div>
                 </div>
               </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Mission - Clean & Cohesive Redesign */}
      <section className="py-24 bg-[#fffdfb] relative overflow-hidden font-sans">
        {/* Subtle decorative background */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#f4f7f6] to-transparent pointer-events-none"></div>
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-bright-lime/10 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-orioles-orange/5 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-20">
            <motion.div 
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-gray-100 bg-white mb-6 shadow-sm"
            >
               <span className="w-2 h-2 rounded-full bg-bright-lime"></span> 
               <span className="text-[13px] font-bold text-gray-800 tracking-[0.15em] uppercase">Core Purpose</span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
              className="text-[42px] lg:text-[56px] font-serif font-extrabold text-[#0c2444] mb-6 leading-tight tracking-tight"
            >
              Our <span className="text-orioles-orange">Mission</span>
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
              className="text-[18px] text-gray-600 leading-relaxed font-medium"
            >
              We exist to create lasting change by addressing the root causes of poverty and inequality. We do not believe in just helping people survive; we believe in helping them thrive.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
            
            {/* Card 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
              className="bg-white rounded-[2.5rem] p-8 lg:p-10 shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-gray-100 hover:-translate-y-2 transition-transform duration-500 group relative overflow-hidden flex flex-col justify-end min-h-[400px]"
            >
              {/* Background Image & Gradient */}
              <div className="absolute inset-0 z-0">
                <img src="/images/mission_education.png" alt="Education" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/70 to-transparent group-hover:via-white/50 transition-colors duration-500"></div>
              </div>
              
              <div className="absolute top-0 right-0 w-32 h-32 bg-bright-lime/10 rounded-full blur-[40px] group-hover:bg-bright-lime/20 transition-colors duration-500 z-0"></div>
              
              <div className="w-16 h-16 bg-bright-lime shadow-md shadow-bright-lime/20 text-gray-900 rounded-[1.25rem] flex items-center justify-center mb-6 relative z-10 group-hover:scale-110 transition-transform duration-500 mt-20">
                <BookOpen size={28} strokeWidth={2} />
              </div>
              <h3 className="text-[22px] font-bold text-gray-900 mb-3 tracking-tight relative z-10">Provide Quality Education</h3>
              <div className="bg-white/50 backdrop-blur-md p-4 rounded-xl border border-white/50 shadow-sm relative z-10">
                <p className="text-gray-900 text-[15px] leading-relaxed font-medium">
                  To children who deserve a future, ensuring no one is left behind due to circumstances.
                </p>
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }}
              className="bg-white rounded-[2.5rem] p-8 lg:p-10 shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-gray-100 hover:-translate-y-2 transition-transform duration-500 group relative overflow-hidden flex flex-col justify-end min-h-[400px]"
            >
              {/* Background Image & Gradient */}
              <div className="absolute inset-0 z-0">
                <img src="/images/mission_women.png" alt="Women Empowerment" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/70 to-transparent group-hover:via-white/50 transition-colors duration-500"></div>
              </div>

              <div className="absolute top-0 right-0 w-32 h-32 bg-orioles-orange/10 rounded-full blur-[40px] group-hover:bg-orioles-orange/20 transition-colors duration-500 z-0"></div>

              <div className="w-16 h-16 bg-orioles-orange shadow-md shadow-orioles-orange/20 text-white rounded-[1.25rem] flex items-center justify-center mb-6 relative z-10 group-hover:scale-110 transition-transform duration-500 mt-20">
                <Users size={28} strokeWidth={2} />
              </div>
              <h3 className="text-[22px] font-bold text-gray-900 mb-3 tracking-tight relative z-10">Empower Women</h3>
              <div className="bg-white/50 backdrop-blur-md p-4 rounded-xl border border-white/50 shadow-sm relative z-10">
                <p className="text-gray-900 text-[15px] leading-relaxed font-medium">
                  With skills and financial independence, transforming them into community leaders.
                </p>
              </div>
            </motion.div>

            {/* Card 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.5 }}
              className="bg-white rounded-[2.5rem] p-8 lg:p-10 shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-gray-100 hover:-translate-y-2 transition-transform duration-500 group relative overflow-hidden flex flex-col justify-end min-h-[400px]"
            >
              {/* Background Image & Gradient */}
              <div className="absolute inset-0 z-0">
                <img src="/images/mission_equip.png" alt="Equip Individuals" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/70 to-transparent group-hover:via-white/50 transition-colors duration-500"></div>
              </div>

              <div className="absolute top-0 right-0 w-32 h-32 bg-persian-blue/10 rounded-full blur-[40px] group-hover:bg-persian-blue/20 transition-colors duration-500 z-0"></div>

              <div className="w-16 h-16 bg-persian-blue shadow-md shadow-persian-blue/20 text-white rounded-[1.25rem] flex items-center justify-center mb-6 relative z-10 group-hover:scale-110 transition-transform duration-500 mt-20">
                <Hammer size={28} strokeWidth={2} />
              </div>
              <h3 className="text-[22px] font-bold text-gray-900 mb-3 tracking-tight relative z-10">Equip Individuals</h3>
              <div className="bg-white/50 backdrop-blur-md p-4 rounded-xl border border-white/50 shadow-sm relative z-10">
                <p className="text-gray-900 text-[15px] leading-relaxed font-medium">
                  With practical tools, mentorship, and training for lasting self-reliance.
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Detailed Pillars */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          
          <div className="space-y-24">
            {/* Child Ed */}
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="flex flex-col md:flex-row gap-12 items-center">
              <div className="flex-1">
                <div className="inline-block px-4 py-1 bg-ultra-violet/10 text-ultra-violet font-bold rounded-full text-sm mb-4">Pillar 01</div>
                <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">Child Education</h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  No child should be denied the right to learn. Education is the most powerful tool to break the cycle of poverty. Free high-quality education, learning materials, digital resources, mentorship, leadership and confidence-building programs.
                </p>
                <p className="text-xl font-medium text-orioles-orange italic">"Because when a child is educated, a whole generation rises with them."</p>
                <Link href="/child-education" className="inline-flex items-center gap-2 mt-6 font-bold text-ultra-violet hover:text-persian-blue">
                  Learn More <ArrowRight size={18} />
                </Link>
              </div>
              <div className="flex-1 w-full aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden shadow-lg">
                <img src="/images/about-child.png" alt="Child Education" className="w-full h-full object-cover" />
              </div>
            </motion.div>

            {/* Women Emp */}
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="flex flex-col md:flex-row-reverse gap-12 items-center">
              <div className="flex-1">
                <div className="inline-block px-4 py-1 bg-orioles-orange/10 text-orioles-orange font-bold rounded-full text-sm mb-4">Pillar 02</div>
                <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">Women Empowerment</h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Women are the backbone of families and communities. Yet, many are denied opportunities. We help women through: Vocational training for employment and entrepreneurship, financial literacy programs, and safe spaces where they can learn, lead, and inspire.
                </p>
                <p className="text-xl font-medium text-ultra-violet italic">"Because when a woman is empowered, she empowers everyone around her."</p>
                <Link href="/women-empowerment" className="inline-flex items-center gap-2 mt-6 font-bold text-orioles-orange hover:text-persian-blue">
                  Learn More <ArrowRight size={18} />
                </Link>
              </div>
              <div className="flex-1 w-full aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden shadow-lg">
                <img src="/images/about-women.png" alt="Women Empowerment" className="w-full h-full object-cover" />
              </div>
            </motion.div>

            {/* Skill Dev */}
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="flex flex-col md:flex-row gap-12 items-center">
              <div className="flex-1">
                <div className="inline-block px-4 py-1 bg-persian-blue/10 text-persian-blue font-bold rounded-full text-sm mb-4">Pillar 03</div>
                <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">Skill Development</h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  A skill is more than just a means to earn—it is the foundation of dignity and self-respect. Practical hands-on training in employable fields, career mentorship and guidance, and entrepreneurship support for self-sufficient futures.
                </p>
                <p className="text-xl font-medium text-bright-lime italic text-lime-700">"Because giving a person the right skills means they never have to depend on anyone again."</p>
                <Link href="/skill-development" className="inline-flex items-center gap-2 mt-6 font-bold text-persian-blue hover:text-ultra-violet">
                  Learn More <ArrowRight size={18} />
                </Link>
              </div>
              <div className="flex-1 w-full aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden shadow-lg">
                <img src="/images/about-skill.png" alt="Skill Development" className="w-full h-full object-cover" />
              </div>
            </motion.div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default About;
