import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Target, GraduationCap, HeartHandshake, ArrowRight } from 'lucide-react';
import MagneticButton from '@/components/ui/MagneticButton';
import Hero from '@/components/ui/Hero';

const ChildEducation = () => {
  return (
    <div className="w-full bg-white">
      <Hero 
        title="Child Education" 
        imageSrc="/src/assets/images/hero-child.png" 
        overlayColor="bg-ultra-violet"
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Child Education' }]} 
      />

      {/* Intro */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">Education: A Right, Not a Privilege</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Every child deserves the opportunity to learn, grow, and dream. Yet, millions of children are denied this basic right due to poverty and lack of resources. At One Hand For Happiness, we believe that education is the key to breaking the cycle of poverty and creating a future filled with possibilities.
          </p>
        </div>
      </section>

      {/* Approach */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-ultra-violet mb-4">Our Approach</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">We provide comprehensive support ensuring education reaches those who need it most.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <BookOpen />, title: "Community-Based Learning", desc: "Educational centers in underserved areas, bringing education closer to children." },
              { icon: <Target />, title: "Holistic Development", desc: "Life skills, creative learning, emotional well-being beyond just academics." },
              { icon: <GraduationCap />, title: "Scholarships & Resources", desc: "Books, uniforms, financial aid to ensure no child is left behind." },
              { icon: <HeartHandshake />, title: "Mentorship & Guidance", desc: "Connecting children with mentors who inspire and guide their future." }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl hover:border-bright-lime transition-all group"
              >
                <div className="w-14 h-14 bg-ultra-violet/5 text-ultra-violet rounded-2xl flex items-center justify-center mb-6 group-hover:bg-bright-lime group-hover:text-ultra-violet transition-colors">
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
      <section className="py-20 bg-ultra-violet text-white">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h2 className="text-3xl font-serif font-bold mb-12 text-bright-lime">Our Impact</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6">
              <div className="text-4xl font-bold mb-4">500+</div>
              <p className="text-white/80">Enrolled in quality programs</p>
            </div>
            <div className="p-6 border-y md:border-y-0 md:border-x border-white/20">
              <div className="text-4xl font-bold mb-4">&uarr;</div>
              <p className="text-white/80">Improved literacy rates in marginalized communities</p>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold mb-4">100%</div>
              <p className="text-white/80">Empowered young minds with confidence</p>
            </div>
          </div>
        </div>
      </section>

      {/* Help */}
      <section className="py-24">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-4xl font-serif font-bold text-center text-gray-900 mb-16">How You Can Help</h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-orange-50 rounded-3xl p-8 border border-orange-100 text-center">
              <h3 className="text-xl font-bold text-orioles-orange mb-4">Sponsor a Child's Education</h3>
              <p className="text-gray-600">Cover school fees, books, and basic needs.</p>
            </div>
            <div className="bg-purple-50 rounded-3xl p-8 border border-purple-100 text-center">
              <h3 className="text-xl font-bold text-ultra-violet mb-4">Volunteer as a Teacher</h3>
              <p className="text-gray-600">Share your knowledge and time to mentor young minds.</p>
            </div>
            <div className="bg-blue-50 rounded-3xl p-8 border border-blue-100 text-center">
              <h3 className="text-xl font-bold text-persian-blue mb-4">Donate Learning Materials</h3>
              <p className="text-gray-600">Provide books, stationery, and technology.</p>
            </div>
          </div>

          <div className="text-center">
            <MagneticButton>
              <a href="https://razorpay.me/@onehandforhappiness" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-orioles-orange text-white px-10 py-4 rounded-full font-bold text-lg shadow-xl hover:bg-orange-600 transition-colors">
                Donate Now <ArrowRight size={20} />
              </a>
            </MagneticButton>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ChildEducation;
