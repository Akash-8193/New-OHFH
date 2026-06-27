import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Users, Hammer, ArrowRight } from 'lucide-react';
import { Link } from 'wouter';

const About = () => {
  return (
    <div className="w-full">
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
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
            Be the Hand That <br/> Brings Happiness
          </motion.h1>
        </div>
      </section>

      {/* Intro */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl text-gray-700 leading-relaxed font-serif italic mb-8"
          >
            "Every day, millions wake up to hunger, struggle, and uncertainty—yet, they also wake up with hope. Hope that someone, somewhere, will reach out and change their story."
          </motion.p>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-600 leading-relaxed"
          >
            At One Hand For Happiness, we believe that real change begins with dignity, empowerment, and opportunity—not just charity. We are here to transform lives, not with temporary relief, but with long-term solutions that rebuild futures. Because true impact is not measured by what we give, but by how many lives we help stand on their own.
          </motion.p>
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
