import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Users, Hammer, ArrowRight } from 'lucide-react';
import { Link } from 'wouter';

const About = () => {
  return (
    <div className="w-full">
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden mt-[80px]">
        <div className="absolute inset-0">
          <img src="/src/assets/images/about-hero.png" alt="Community hope scene" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-ultra-violet/70 mix-blend-multiply"></div>
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-serif font-bold text-white mb-6"
          >
            About Us
          </motion.h1>
        </div>
      </section>

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
                 <span className="text-xs font-bold text-gray-800 tracking-wide uppercase">Get Started Today</span>
              </motion.div>
              
              {/* Heading */}
              <motion.h1 variants={{hidden: {opacity: 0, y: 20}, show: {opacity: 1, y: 0}}} initial="hidden" animate="show" transition={{duration: 0.5, delay: 0.1}} className="text-[40px] md:text-[50px] lg:text-[56px] font-sans font-extrabold text-[#0c2444] leading-[1.1] tracking-tight mb-6">
                Be the Hand That Brings Happiness
              </motion.h1>

              <motion.p variants={{hidden: {opacity: 0, y: 20}, show: {opacity: 1, y: 0}}} initial="hidden" animate="show" transition={{duration: 0.5, delay: 0.2}} className="text-[17px] text-gray-500 leading-relaxed font-medium mb-12 max-w-[95%]">
                Every day, millions wake up to hunger, struggle, and uncertainty—yet, they also wake up with hope. Hope that someone, somewhere, will reach out and change their story.
              </motion.p>
              
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
              
              <motion.div variants={{hidden: {opacity: 0, y: 20}, show: {opacity: 1, y: 0}}} initial="hidden" animate="show" transition={{duration: 0.5, delay: 0.4}}>
                <Link href="/contact-us" className="inline-flex items-center gap-2 bg-[#f94a13] text-white px-8 py-3.5 rounded-full text-[16px] font-bold hover:bg-[#e03d0b] transition-all shadow-md">
                  Get Started <ArrowRight size={18} />
                </Link>
              </motion.div>
            </div>

            {/* Right Column (Image) */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}
              className="w-full lg:w-[45%] flex justify-center lg:justify-end mt-12 lg:mt-0 relative"
            >
               <div className="relative inline-block w-full max-w-[600px]">
                 <img src="/src/assets/images/cta-box-image.png" alt="Children holding sign" className="w-full h-auto object-contain drop-shadow-2xl" />
                 
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

      {/* Mission */}
      <section className="py-24 bg-ultra-violet text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-serif font-bold mb-6 text-bright-lime">Our Mission</h2>
            <p className="text-xl text-white/90">
              We exist to create lasting change by addressing the root causes of poverty and inequality. We do not believe in just helping people survive; we believe in helping them thrive.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20 text-center"
            >
              <div className="w-16 h-16 bg-bright-lime text-ultra-violet rounded-full flex items-center justify-center mx-auto mb-6">
                <BookOpen size={28} />
              </div>
              <h3 className="text-xl font-bold mb-4">Provide Quality Education</h3>
              <p className="text-white/80">To children who deserve a future, ensuring no one is left behind due to circumstances.</p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
              className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20 text-center"
            >
              <div className="w-16 h-16 bg-orioles-orange text-white rounded-full flex items-center justify-center mx-auto mb-6">
                <Users size={28} />
              </div>
              <h3 className="text-xl font-bold mb-4">Empower Women</h3>
              <p className="text-white/80">With skills and financial independence, transforming them into community leaders.</p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }}
              className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20 text-center"
            >
              <div className="w-16 h-16 bg-persian-blue text-white rounded-full flex items-center justify-center mx-auto mb-6">
                <Hammer size={28} />
              </div>
              <h3 className="text-xl font-bold mb-4">Equip Individuals</h3>
              <p className="text-white/80">With practical tools, mentorship, and training for lasting self-reliance.</p>
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
                <img src="/src/assets/images/about-child.png" alt="Child Education" className="w-full h-full object-cover" />
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
                <img src="/src/assets/images/about-women.png" alt="Women Empowerment" className="w-full h-full object-cover" />
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
                <img src="/src/assets/images/about-skill.png" alt="Skill Development" className="w-full h-full object-cover" />
              </div>
            </motion.div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default About;
