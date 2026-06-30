import React from 'react';
import { motion } from 'framer-motion';
import { Scissors, Flame, Palette, Leaf, ArrowRight } from 'lucide-react';
import MagneticButton from '@/components/ui/MagneticButton';
import Hero from '@/components/ui/Hero';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] } }
};

const Exhibitions = () => {
  return (
    <div className="w-full bg-white overflow-hidden">
      <Hero 
        title="Exhibitions" 
        imageSrc="/src/assets/images/hero-exhibition.png" 
        overlayColor="bg-ultra-violet"
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Exhibitions' }]} 
      />

      {/* Intro - Restored Original Text with Premium Split Layout */}
      <section className="py-24 bg-[#f8f9fa] relative overflow-hidden">
        {/* Soft decorative blob */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orioles-orange/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
        
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="w-full lg:w-1/2">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#0c2444] mb-6 leading-tight">
                Where Talent <br /><span className="text-orioles-orange">Meets Opportunity</span>
              </h2>
              <div className="h-1 w-20 bg-orioles-orange rounded-full mb-8"></div>
              <p className="text-xl text-gray-600 leading-relaxed mb-6 font-medium">
                Every stitch, every brushstroke, every handcrafted piece tells a story—of resilience, empowerment, and transformation.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                At One Hand For Happiness, our exhibitions are more than just displays; they are a platform for women and artisans to showcase their talent, gain financial independence, and connect with a wider audience.
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="w-full lg:w-1/2 relative">
              <div className="rounded-[40px] overflow-hidden shadow-2xl border-4 border-white relative aspect-[4/3]">
                <img src="/src/assets/images/hero-exhibition.png" alt="Exhibition Setup" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c2444]/60 to-transparent"></div>
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-ultra-violet rounded-full opacity-20 blur-2xl -z-10"></div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Showcase - Restored Original Items in Premium Card Grid */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#0c2444] mb-4">
              What We <span className="text-orioles-orange">Showcase</span>
            </h2>
            <p className="text-lg text-gray-500">Discover the beautiful craftsmanship of our empowered artisans.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            
            {/* Item 1: Potli Bags */}
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="relative h-[400px] rounded-[32px] overflow-hidden group shadow-lg">
              <img src="/src/assets/images/women_masonry_1.png" alt="Potli Bags" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c2444] via-[#0c2444]/60 to-transparent"></div>
              <div className="absolute inset-0 p-10 flex flex-col justify-end">
                <div className="w-14 h-14 bg-orioles-orange text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <Scissors size={28} />
                </div>
                <h3 className="text-3xl font-bold text-white mb-3">Handcrafted Potli Bags</h3>
                <p className="text-white/80 text-lg leading-relaxed">Beautifully designed from upcycled denim, merging sustainability with artistry.</p>
              </div>
            </motion.div>

            {/* Item 2: Diyas */}
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ delay: 0.1 }} className="relative h-[400px] rounded-[32px] overflow-hidden group shadow-lg">
              <img src="/src/assets/images/project-exhibition.png" alt="Diyas" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c2444] via-[#0c2444]/60 to-transparent"></div>
              <div className="absolute inset-0 p-10 flex flex-col justify-end">
                <div className="w-14 h-14 bg-bright-lime text-[#0c2444] rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <Flame size={28} />
                </div>
                <h3 className="text-3xl font-bold text-white mb-3">Traditional & Artistic Diyas</h3>
                <p className="text-white/80 text-lg leading-relaxed">Handmade decorative lamps that light up lives and homes.</p>
              </div>
            </motion.div>

            {/* Item 3: Textiles */}
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="relative h-[400px] rounded-[32px] overflow-hidden group shadow-lg">
              <img src="/src/assets/images/women_masonry_2.png" alt="Textiles" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c2444] via-[#0c2444]/60 to-transparent"></div>
              <div className="absolute inset-0 p-10 flex flex-col justify-end">
                <div className="w-14 h-14 bg-ultra-violet text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <Palette size={28} />
                </div>
                <h3 className="text-3xl font-bold text-white mb-3">Intricate Textiles & Embroidery</h3>
                <p className="text-white/80 text-lg leading-relaxed">Unique fabrics and designs created by skilled women artisans.</p>
              </div>
            </motion.div>

            {/* Item 4: Eco-Friendly */}
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ delay: 0.1 }} className="relative h-[400px] rounded-[32px] overflow-hidden group shadow-lg">
              <img src="/src/assets/images/women_zigzag_1.png" alt="Eco-Friendly" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c2444] via-[#0c2444]/60 to-transparent"></div>
              <div className="absolute inset-0 p-10 flex flex-col justify-end">
                <div className="w-14 h-14 bg-persian-blue text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <Leaf size={28} />
                </div>
                <h3 className="text-3xl font-bold text-white mb-3">Eco-Friendly Handicrafts</h3>
                <p className="text-white/80 text-lg leading-relaxed">Sustainable products crafted from natural and recycled materials.</p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Help - Restored Original Items in Vibrant Horizontal Banner */}
      <section className="py-24 bg-[#0c2444] relative overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-orioles-orange rounded-full blur-[150px] opacity-20 mix-blend-screen pointer-events-none"></div>

        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
              How You Can <span className="text-orioles-orange">Help</span>
            </h2>
            <p className="text-lg text-white/70">Join hands with us to uplift communities through art and commerce.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-3xl text-center hover:bg-white/20 transition-all shadow-xl">
              <div className="w-16 h-16 border-2 border-ultra-violet bg-ultra-violet/20 text-white rounded-full flex items-center justify-center mx-auto mb-6 font-bold text-2xl shadow-inner">
                1
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Visit Exhibitions</h3>
              <p className="text-white/70 text-lg">Experience craftsmanship firsthand.</p>
            </motion.div>

            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ delay: 0.1 }} className="bg-orioles-orange p-8 rounded-3xl text-center shadow-[0_15px_40px_rgba(249,74,19,0.4)] transform md:-translate-y-4">
              <div className="w-16 h-16 border-2 border-white bg-white/20 text-white rounded-full flex items-center justify-center mx-auto mb-6 font-bold text-2xl shadow-inner">
                2
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Buy Handmade</h3>
              <p className="text-white/90 text-lg font-medium">Every purchase directly empowers a woman.</p>
            </motion.div>

            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ delay: 0.2 }} className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-3xl text-center hover:bg-white/20 transition-all shadow-xl">
              <div className="w-16 h-16 border-2 border-bright-lime bg-bright-lime/20 text-white rounded-full flex items-center justify-center mx-auto mb-6 font-bold text-2xl shadow-inner">
                3
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Sponsor Event</h3>
              <p className="text-white/70 text-lg">Help expand reach and create opportunities.</p>
            </motion.div>

          </div>

          <div className="text-center">
            <MagneticButton>
              <a href="https://razorpay.me/@onehandforhappiness" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-white text-[#0c2444] px-12 py-5 rounded-full font-bold text-lg shadow-[0_10px_30px_rgba(255,255,255,0.2)] hover:bg-gray-100 transition-colors">
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
