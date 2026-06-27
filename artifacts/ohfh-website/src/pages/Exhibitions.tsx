import React from 'react';
import { motion } from 'framer-motion';
import { Palette, Flame, Scissors, Leaf, ArrowRight } from 'lucide-react';
import MagneticButton from '@/components/ui/MagneticButton';

const Exhibitions = () => {
  return (
    <div className="w-full bg-white">
      {/* Hero */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden bg-ultra-violet">
        <div className="absolute inset-0">
          <img src="/src/assets/images/hero-exhibition.png" alt="Exhibitions" className="w-full h-full object-cover opacity-40 mix-blend-overlay" />
        </div>
        <div className="relative z-10 text-center px-4">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }}>
            <span className="text-bright-lime font-bold tracking-widest uppercase text-sm mb-4 block">Our Projects</span>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">Exhibitions</h1>
            <p className="text-xl text-white/90 font-medium">Showcasing Skills, Celebrating Creativity</p>
          </motion.div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl font-serif font-bold text-ultra-violet mb-6">Where Talent Meets Opportunity</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Every stitch, every brushstroke, every handcrafted piece tells a story—of resilience, empowerment, and transformation. At One Hand For Happiness, our exhibitions are more than just displays; they are a platform for women and artisans to showcase their talent, gain financial independence, and connect with a wider audience.
          </p>
        </div>
      </section>

      {/* Showcase */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">What We Showcase</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              { icon: <Scissors size={32}/>, title: "Handcrafted Potli Bags", desc: "Beautifully designed from upcycled denim, merging sustainability with artistry." },
              { icon: <Flame size={32}/>, title: "Traditional & Artistic Diyas", desc: "Handmade decorative lamps that light up lives and homes." },
              { icon: <Palette size={32}/>, title: "Intricate Textiles & Embroidery", desc: "Unique fabrics and designs created by skilled women artisans." },
              { icon: <Leaf size={32}/>, title: "Eco-Friendly Handicrafts", desc: "Sustainable products crafted from natural and recycled materials." }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 flex items-center p-6 group hover:shadow-xl transition-all"
              >
                <div className="w-20 h-20 bg-bright-lime/20 text-lime-700 rounded-full flex items-center justify-center shrink-0 mr-6 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Help */}
      <section className="py-24">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-4xl font-serif font-bold text-center text-ultra-violet mb-12">How You Can Help</h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="w-16 h-16 border-2 border-ultra-violet text-ultra-violet rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">1</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Visit Exhibitions</h3>
              <p className="text-gray-600">Experience craftsmanship firsthand.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 border-2 border-orioles-orange text-orioles-orange rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">2</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Buy Handmade</h3>
              <p className="text-gray-600">Every purchase directly empowers a woman.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 border-2 border-persian-blue text-persian-blue rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">3</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Sponsor Event</h3>
              <p className="text-gray-600">Help expand reach and create opportunities.</p>
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

export default Exhibitions;
