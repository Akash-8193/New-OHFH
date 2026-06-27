import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

const Reviews = () => {
  return (
    <div className="w-full bg-gray-50 min-h-screen">
      <section className="py-20 bg-ultra-violet text-center">
        <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-4">Reviews</h1>
        <p className="text-xl text-bright-lime font-medium">What our community says about us</p>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4 max-w-6xl">
          
          {/* Featured Text Reviews */}
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            <motion.div 
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-3xl p-10 shadow-xl border border-gray-100 relative"
            >
              <div className="absolute top-8 right-8 text-orioles-orange/20">
                <Quote size={60} />
              </div>
              <div className="flex gap-1 text-orioles-orange mb-6">
                <Star fill="currentColor" />
                <Star fill="currentColor" />
                <Star fill="currentColor" />
                <Star fill="currentColor" />
                <Star fill="currentColor" />
              </div>
              <p className="text-xl text-gray-700 leading-relaxed mb-8 relative z-10 italic">
                "Happy to see how this NGO is Helping out the underprivileged kids by educating them. It is a Great initiative and I am privileged to be one of their helping hands."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-ultra-violet text-white flex items-center justify-center font-bold text-xl">
                  RK
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg">Rubal Kardam</h4>
                  <p className="text-sm text-gray-500">Community Member</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
              className="bg-white rounded-3xl p-10 shadow-xl border border-gray-100 relative"
            >
              <div className="absolute top-8 right-8 text-persian-blue/20">
                <Quote size={60} />
              </div>
              <div className="flex gap-1 text-orioles-orange mb-6">
                <Star fill="currentColor" />
                <Star fill="currentColor" />
                <Star fill="currentColor" />
                <Star fill="currentColor" />
                <Star fill="currentColor" />
              </div>
              <p className="text-xl text-gray-700 leading-relaxed mb-8 relative z-10 italic">
                "It's a Very Nice initiative by Kiran Ma'am, to teach under privileged kids. The best NGO in Noida everybody should visit."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-persian-blue text-white flex items-center justify-center font-bold text-xl">
                  JB
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg">Jayesh Bhatia</h4>
                  <p className="text-sm text-gray-500">Community Member</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Screenshot placeholders */}
          <h3 className="text-3xl font-serif font-bold text-center text-ultra-violet mb-12">More Community Feedback</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((item) => (
              <motion.div 
                key={item}
                initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
                className="bg-white rounded-2xl p-4 shadow-md border border-gray-200"
              >
                <div className="aspect-[9/16] bg-gray-100 rounded-xl overflow-hidden relative mb-4">
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-400">
                    <img src={`/src/assets/images/review-${item}.png`} alt={`Community Review ${item}`} className="w-full h-full object-cover opacity-50" />
                    <div className="absolute inset-0 flex items-center justify-center font-bold bg-black/10 backdrop-blur-sm">
                      Community Review {item}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
};

export default Reviews;
