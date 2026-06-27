import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Brain, Heart, Activity, Stethoscope, HeartPulse, ArrowRight } from 'lucide-react';
import { Link } from 'wouter';
import MagneticButton from '@/components/ui/MagneticButton';

const Workshop = () => {
  return (
    <div className="w-full bg-white">
      {/* Hero */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden bg-ultra-violet">
        <div className="absolute inset-0">
          <img src="/src/assets/images/hero-workshop.png" alt="Workshops" className="w-full h-full object-cover opacity-40 mix-blend-overlay" />
        </div>
        <div className="relative z-10 text-center px-4">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }}>
            <span className="text-bright-lime font-bold tracking-widest uppercase text-sm mb-4 block">Our Projects</span>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">Workshop</h1>
            <p className="text-xl text-white/90 font-medium">Empowering Through Workshops</p>
          </motion.div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <p className="text-lg text-gray-600 leading-relaxed">
            At One Hand For Happiness, we believe in nurturing the minds and bodies of our community members. Our workshops are thoughtfully designed to equip children and women with essential skills, knowledge, and awareness, fostering holistic development and empowerment.
          </p>
        </div>
      </section>

      {/* Workshop Cards */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: <Brain size={32}/>, title: "Cryptography Workshop", desc: "Children dive into secret codes, puzzles, ciphers; mathematical thinking, logical reasoning; curiosity in technology and cybersecurity." },
              { icon: <Shield size={32}/>, title: "Self-Defense and Brain Gym", desc: "Physical safety + mental agility; self-defense techniques for confidence; brain gym exercises enhance memory, focus, coordination." },
              { icon: <Heart size={32}/>, title: "Safe Touch and Unsafe Touch", desc: "Teaching difference between safe/unsafe physical interactions; personal boundaries and body autonomy; open discussion." },
              { icon: <Stethoscope size={32}/>, title: "Medical Health Checkup Camp", desc: "By SRS Hospital, Noida. Comprehensive medical checkups for children and women lacking access to regular healthcare." },
              { icon: <Activity size={32}/>, title: "Health Awareness Camp", desc: "By MyDigiRecords. Importance of tracking health records; digital tools for proactive wellness." },
              { icon: <HeartPulse size={32}/>, title: "Health Checkup Camp", desc: "By Metro Hospital. Health monitoring, digital health literacy, routine health awareness for children and families." }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 hover:-translate-y-2 transition-transform duration-300"
              >
                <div className="w-16 h-16 bg-ultra-violet/10 text-ultra-violet rounded-2xl flex items-center justify-center mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach & Impact */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-serif font-bold text-ultra-violet mb-6">Our Approach</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Each workshop is thoughtfully designed to suit the age, background, and specific needs of the children we serve. Our diverse team of educators, trainers, healthcare professionals, and industry experts bring their skills, compassion, and experience into every session.
              </p>
              <p className="text-lg font-bold text-orioles-orange italic">
                "Our workshops are not just sessions—they are small revolutions of change, one child at a time."
              </p>
            </div>
            <div className="bg-ultra-violet text-white p-10 rounded-3xl">
              <h3 className="text-2xl font-bold mb-6 text-bright-lime">Impact</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="mt-1 w-6 h-6 rounded-full bg-bright-lime/20 flex items-center justify-center shrink-0">
                    <div className="w-2 h-2 rounded-full bg-bright-lime"></div>
                  </div>
                  <span className="text-white/90">Increasing awareness about personal safety and rights</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 w-6 h-6 rounded-full bg-bright-lime/20 flex items-center justify-center shrink-0">
                    <div className="w-2 h-2 rounded-full bg-bright-lime"></div>
                  </div>
                  <span className="text-white/90">Improving communication skills and self-expression</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 w-6 h-6 rounded-full bg-bright-lime/20 flex items-center justify-center shrink-0">
                    <div className="w-2 h-2 rounded-full bg-bright-lime"></div>
                  </div>
                  <span className="text-white/90">Building confidence and social competence</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 w-6 h-6 rounded-full bg-bright-lime/20 flex items-center justify-center shrink-0">
                    <div className="w-2 h-2 rounded-full bg-bright-lime"></div>
                  </div>
                  <span className="text-white/90">Enhancing physical health and digital health literacy</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gray-50 text-center">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">Join Us</h2>
          <p className="text-lg text-gray-600 mb-10">
            We invite schools, educators, healthcare professionals, and volunteers to collaborate with us. Together, we can create a safer, healthier, and more empowering environment.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <MagneticButton>
              <a href="https://razorpay.me/@onehandforhappiness" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-orioles-orange text-white px-8 py-4 rounded-full font-bold shadow-lg hover:bg-orange-600 transition-colors">
                Donate Now <ArrowRight size={20} />
              </a>
            </MagneticButton>
            <MagneticButton>
              <Link href="/contact-us" className="inline-flex items-center gap-2 bg-ultra-violet text-white px-8 py-4 rounded-full font-bold shadow-lg hover:bg-purple-900 transition-colors">
                Contact Now <ArrowRight size={20} />
              </Link>
            </MagneticButton>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Workshop;
