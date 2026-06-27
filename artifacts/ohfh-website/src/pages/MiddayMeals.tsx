import React from 'react';
import { motion } from 'framer-motion';
import { Utensils, BookOpen, Users, Heart, ArrowRight } from 'lucide-react';
import MagneticButton from '@/components/ui/MagneticButton';
import AnimatedCounter from '@/components/ui/AnimatedCounter';

const MiddayMeals = () => {
  return (
    <div className="w-full bg-white">
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-ultra-violet">
        <div className="absolute inset-0">
          <img src="/src/assets/images/hero-meals.png" alt="Midday Meals" className="w-full h-full object-cover opacity-40 mix-blend-overlay" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6">Midday Meals</h1>
            <p className="text-2xl text-bright-lime font-medium italic">"Be the reason someone smiles, learns, eats, and rises."</p>
          </motion.div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-5xl space-y-24">
          
          {/* Section 1 */}
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="flex-1">
              <div className="w-16 h-16 bg-orioles-orange/10 text-orioles-orange rounded-2xl flex items-center justify-center mb-6">
                <Utensils size={32} />
              </div>
              <h2 className="text-3xl font-serif font-bold text-ultra-violet mb-4">Midday Meals in Schools</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                For many children, the meal they receive at school is not just lunch—it is their only meal of the day. At One Hand For Happiness, we provide nutritious midday meals during recess, ensuring hunger does not hinder learning.
              </p>
              <p className="text-gray-600 leading-relaxed font-medium">
                These meals have been instrumental in improving school attendance, reducing dropout rates, and enhancing academic performance.
              </p>
              <div className="mt-6 inline-block bg-ultra-violet text-white px-6 py-3 rounded-xl font-bold text-xl shadow-lg">
                <AnimatedCounter end={100000} suffix="+" /> Meals Served
              </div>
            </motion.div>
            <div className="flex-1 w-full aspect-video rounded-3xl overflow-hidden shadow-xl">
              <img src="/src/assets/images/meals-1.png" alt="Children eating" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Section 2 */}
          <div className="flex flex-col md:flex-row-reverse gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="flex-1">
              <div className="w-16 h-16 bg-persian-blue/10 text-persian-blue rounded-2xl flex items-center justify-center mb-6">
                <BookOpen size={32} />
              </div>
              <h2 className="text-3xl font-serif font-bold text-ultra-violet mb-4">Educating Children</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Imagine a world where a child's dreams end because of an empty stomach or a torn uniform. For many of the 500+ children we have supported, that was once their reality.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We provide not just education, but the support children need to stay in school — midday meals so they can learn without hunger, uniforms so they feel equal, encouragement so they believe they matter. Let us make sure no child is left behind simply because they were born into hardship.
              </p>
            </motion.div>
            <div className="flex-1 w-full aspect-video rounded-3xl overflow-hidden shadow-xl">
              <img src="/src/assets/images/meals-2.png" alt="Children studying" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Section 3 */}
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="flex-1">
              <div className="w-16 h-16 bg-bright-lime/20 text-lime-700 rounded-2xl flex items-center justify-center mb-6">
                <Users size={32} />
              </div>
              <h2 className="text-3xl font-serif font-bold text-ultra-violet mb-4">Empowering Women</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                We have trained and uplifted over 150 women who once felt invisible, unskilled, and voiceless. Through skill development in tailoring, handicrafts, and other sustainable trades, these women are now earning with dignity, feeding their families, and walking with confidence.
              </p>
              <p className="text-gray-600 leading-relaxed font-medium">
                Your donation helps fund training programs, raw materials, and exhibition opportunities that turn silent suffering into proud independence. Give a woman the tools, and she will rebuild her world.
              </p>
            </motion.div>
            <div className="flex-1 w-full aspect-video rounded-3xl overflow-hidden shadow-xl">
              <img src="/src/assets/images/meals-3.png" alt="Women working" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Section 4 */}
          <div className="flex flex-col md:flex-row-reverse gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="flex-1">
              <div className="w-16 h-16 bg-red-100 text-red-500 rounded-2xl flex items-center justify-center mb-6">
                <Heart size={32} />
              </div>
              <h2 className="text-3xl font-serif font-bold text-ultra-violet mb-4">Nourishing Lives</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Hunger is not just about food, it is about survival, dignity, and hope. Over 100,000 meals have been served through our efforts. We feed children in schools, families in slums, and those forgotten in society's corners.
              </p>
              <p className="text-gray-600 leading-relaxed">
                One warm meal can mean the difference between despair and a reason to keep going. With your support, we can expand our reach, ensuring more people sleep with full stomachs and lighter hearts.
              </p>
            </motion.div>
            <div className="flex-1 w-full aspect-video rounded-3xl overflow-hidden shadow-xl">
              <img src="/src/assets/images/meals-4.png" alt="Nourishing lives" className="w-full h-full object-cover" />
            </div>
          </div>

        </div>
      </section>

      {/* Donation Grid */}
      <section className="py-24 bg-ultra-violet text-white text-center">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-4xl font-serif font-bold mb-6 text-bright-lime">Make an Impact Today</h2>
          <p className="text-xl text-white/90 mb-16 max-w-2xl mx-auto">Choose an amount to donate and directly fund our midday meal program.</p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <a href="https://payu.in/web/71BA0B5FD4AF73520DCFF0DE3AE2899C" target="_blank" rel="noreferrer" className="bg-orioles-orange text-white py-8 rounded-3xl font-bold text-2xl shadow-lg hover:-translate-y-2 transition-transform hover:shadow-2xl">
              Rs 100
            </a>
            <a href="https://payu.in/web/69A31AC60C2A20BC631A1C5659E810B2" target="_blank" rel="noreferrer" className="bg-orioles-orange text-white py-8 rounded-3xl font-bold text-2xl shadow-lg hover:-translate-y-2 transition-transform hover:shadow-2xl">
              Rs 200
            </a>
            <a href="https://payu.in/web/A3853A96D0B533F1921987736B5567A4" target="_blank" rel="noreferrer" className="bg-orioles-orange text-white py-8 rounded-3xl font-bold text-2xl shadow-lg hover:-translate-y-2 transition-transform hover:shadow-2xl">
              Rs 500
            </a>
            <a href="https://payu.in/web/8E1D1BEA3191C515ABAE239FD430C652" target="_blank" rel="noreferrer" className="bg-orioles-orange text-white py-8 rounded-3xl font-bold text-2xl shadow-lg hover:-translate-y-2 transition-transform hover:shadow-2xl">
              Rs 1000
            </a>
          </div>

          <div className="pt-8 border-t border-white/20">
            <p className="text-white/80 mb-6">Or make a custom donation:</p>
            <MagneticButton>
              <a href="https://razorpay.me/@onehandforhappiness" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-white text-ultra-violet px-10 py-4 rounded-full font-bold text-lg shadow-xl hover:bg-gray-100 transition-colors">
                Custom Donation <ArrowRight size={20} />
              </a>
            </MagneticButton>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MiddayMeals;
