import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Sparkles, Users, Briefcase, ArrowRight } from 'lucide-react';
import MagneticButton from '@/components/ui/MagneticButton';
import Hero from '@/components/ui/Hero';

const WomenEmpowerment = () => {
  return (
    <div className="w-full bg-white">
      <Hero 
        title="Women Empowerment" 
        imageSrc="/src/assets/images/hero-women.png" 
        overlayColor="bg-ultra-violet"
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Women Empowerment' }]} 
      />

      {/* Intro */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">Empower a Woman, Empower a Generation</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            When a woman is empowered, she uplifts her family, strengthens her community, and transforms society. Yet, many women face barriers to education, financial independence, and basic rights. At One Hand For Happiness, we are committed to breaking these barriers by providing women with the tools, resources, and support they need to thrive.
          </p>
        </div>
      </section>

      {/* Approach */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-ultra-violet mb-4">Our Approach</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Creating sustainable pathways for independence and leadership.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Briefcase />, title: "Skill & Livelihood", desc: "Vocational training, financial literacy, entrepreneurial skills for self-sustaining careers." },
              { icon: <Shield />, title: "Education & Awareness", desc: "Workshops on health, legal rights, gender equality for informed decision-making." },
              { icon: <Users />, title: "Self-Help & Mentorship", desc: "Networks of support where women uplift and guide each other." },
              { icon: <Sparkles />, title: "Market Linkages", desc: "Connecting women to fair-trade markets, job opportunities, sustainable income." }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl hover:border-orioles-orange transition-all group"
              >
                <div className="w-14 h-14 bg-orioles-orange/10 text-orioles-orange rounded-2xl flex items-center justify-center mb-6 group-hover:bg-orioles-orange group-hover:text-white transition-colors">
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
      <section className="py-20 bg-orioles-orange text-white">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h2 className="text-3xl font-serif font-bold mb-12 text-white">Our Impact</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6">
              <div className="text-5xl font-bold mb-4 text-ultra-violet">150+</div>
              <p className="text-white font-medium">Trained women achieving independence</p>
            </div>
            <div className="p-6 border-y md:border-y-0 md:border-x border-white/20">
              <div className="text-5xl font-bold mb-4 text-ultra-violet">100%</div>
              <p className="text-white font-medium">Increased awareness about rights & healthcare</p>
            </div>
            <div className="p-6">
              <div className="text-5xl font-bold mb-4 text-ultra-violet">&infin;</div>
              <p className="text-white font-medium">Stronger community networks supporting women</p>
            </div>
          </div>
        </div>
      </section>

      {/* Help */}
      <section className="py-24">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-4xl font-serif font-bold text-center text-gray-900 mb-16">How You Can Help</h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-purple-50 rounded-3xl p-8 border border-purple-100 text-center">
              <h3 className="text-xl font-bold text-ultra-violet mb-4">Sponsor a Training</h3>
              <p className="text-gray-600">Help gain skills for sustainable livelihood.</p>
            </div>
            <div className="bg-blue-50 rounded-3xl p-8 border border-blue-100 text-center">
              <h3 className="text-xl font-bold text-persian-blue mb-4">Become a Mentor</h3>
              <p className="text-gray-600">Share expertise to shape aspiring women entrepreneurs.</p>
            </div>
            <div className="bg-orange-50 rounded-3xl p-8 border border-orange-100 text-center">
              <h3 className="text-xl font-bold text-orioles-orange mb-4">Support Businesses</h3>
              <p className="text-gray-600">Purchase and promote handmade products.</p>
            </div>
          </div>

          <div className="text-center">
            <MagneticButton>
              <a href="https://razorpay.me/@onehandforhappiness" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-ultra-violet text-white px-10 py-4 rounded-full font-bold text-lg shadow-xl hover:bg-purple-900 transition-colors">
                Donate Now <ArrowRight size={20} />
              </a>
            </MagneticButton>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WomenEmpowerment;
