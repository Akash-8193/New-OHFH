import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';
import Hero from '@/components/ui/Hero';

const reviewsData = [
  {
    id: 1,
    name: "Ritika Kapuria",
    initials: "RK",
    color: "bg-ultra-violet",
    quoteColor: "text-ultra-violet/20",
    text: "It's very nice initiative to help underprivileged children and women. OHFH' team is really hard workings. I have visited personally. They are genuinely doing their job towards upliftment of underprivileged children and women. They work to help underprivileged children by rescuing them from begging & human trafficking and educate them. They work for women empowerment and help indigent women. They provide food, clothes, daily essentials, education and medical help to underprivileged children and women for their betterment."
  },
  {
    id: 2,
    name: "Rubal Kardam",
    initials: "RK",
    color: "bg-orioles-orange",
    quoteColor: "text-orioles-orange/20",
    text: "Happy to see how this NGO is helping out the underprivileged kids by educating them. It is a Great initiative and I am privileged to be one of their helping hands."
  },
  {
    id: 3,
    name: "Aayush Singh",
    initials: "AS",
    color: "bg-bright-lime",
    quoteColor: "text-bright-lime/20",
    text: "This NGO is dedicated to promoting education and has a significant impact on the lives of individuals and communities. Their commitment to education reflects a recognition of its transformative power and its ability to break the cycle of poverty. Overall, this NGO's commitment to education and its focus on marginalized communities makes it an important force for positive change. By empowering individuals through education, the NGO has the potential to create lasting impacts that benefit not only individuals but also the wider community."
  },
  {
    id: 4,
    name: "Jayesh Bhatia",
    initials: "JB",
    color: "bg-persian-blue",
    quoteColor: "text-persian-blue/20",
    text: "It's a very nice initiative by Kiran ma'am, to teach under privileged kids. The best NGO in noida everybody should visit."
  }
];

const Reviews = () => {
  return (
    <div className="w-full bg-gray-50 min-h-screen">
      <Hero 
        title="Reviews" 
        imageSrc="/src/assets/images/reviews_hero.png" 
        overlayColor="bg-ultra-violet"
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Reviews' }]} 
      />

      <section className="py-24">
        <div className="container mx-auto px-4 max-w-6xl">
          
          {/* Featured Text Reviews */}
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {reviewsData.map((review, index) => (
              <motion.div 
                key={review.id}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}
                className="bg-white rounded-3xl p-10 shadow-xl border border-gray-100 relative flex flex-col h-full"
              >
                <div className={`absolute top-8 right-8 ${review.quoteColor}`}>
                  <Quote size={60} />
                </div>
                <div className="flex gap-1 text-orioles-orange mb-6">
                  <Star fill="currentColor" />
                  <Star fill="currentColor" />
                  <Star fill="currentColor" />
                  <Star fill="currentColor" />
                  <Star fill="currentColor" />
                </div>
                <p className="text-lg text-gray-700 leading-relaxed mb-8 relative z-10 italic">
                  "{review.text}"
                </p>
                <div className="flex items-center gap-4 mt-auto">
                  <div className={`w-12 h-12 rounded-full ${review.color} text-white flex items-center justify-center font-bold text-xl shrink-0`}>
                    {review.initials}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">{review.name}</h4>
                    <p className="text-sm text-gray-500">Community Member</p>
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
