import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Users, Globe, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'wouter';
import HeroScene from '@/components/3d/HeroScene';
import AnimatedCounter from '@/components/ui/AnimatedCounter';
import MagneticButton from '@/components/ui/MagneticButton';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

// Animation variants
const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const Home = () => {
  return (
    <div className="w-full overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <HeroScene />
        
        <div className="container relative z-10 mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl mx-auto"
          >
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 leading-tight"
            >
              Be the Hand That <br/>
              <span className="text-bright-lime">Brings Happiness</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl md:text-2xl text-white/90 mb-10 max-w-2xl mx-auto"
            >
              A small act of kindness can change a life. While we have plenty, millions struggle for basic needs. Your support can bring food, shelter, and hope.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <MagneticButton>
                <a href="https://razorpay.me/@onehandforhappiness" target="_blank" rel="noreferrer" className="bg-orioles-orange text-white px-8 py-4 rounded-full font-bold text-lg shadow-[0_0_20px_rgba(249,74,19,0.4)] hover:shadow-[0_0_30px_rgba(249,74,19,0.6)] transition-all flex items-center gap-2" data-testid="button-donate-hero">
                  Donate Now <Heart size={20} />
                </a>
              </MagneticButton>
              <MagneticButton>
                <Link href="/about" className="bg-white/10 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-all flex items-center gap-2" data-testid="link-about-hero">
                  Join the Mission <ArrowRight size={20} />
                </Link>
              </MagneticButton>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-bright-lime rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* About Preview Section */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }}
              variants={fadeUp}
            >
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-ultra-violet mb-6">Changing Lives Through Action</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                One Hand for Happiness (OHFH) is a community-driven NGO dedicated to breaking the cycle of poverty through education and nourishment. Our holistic approach ensures every child receives not just academic support but also the essentials for a healthy, fulfilling life.
              </p>
              
              <div className="space-y-6 mb-8">
                <div className="flex gap-4">
                  <div className="mt-1 w-10 h-10 rounded-full bg-ultra-violet/10 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="text-ultra-violet" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Our Mission</h3>
                    <p className="text-gray-600">To empower underprivileged children by providing access to education, wholesome mid-day meals, and community programs that foster self-reliance and lifelong success.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="mt-1 w-10 h-10 rounded-full bg-bright-lime/20 flex items-center justify-center shrink-0">
                    <Globe className="text-lime-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Our Vision</h3>
                    <p className="text-gray-600">A world where every child, regardless of their socio-economic background, can learn, grow, and achieve their dreams.</p>
                  </div>
                </div>
              </div>
              
              <Link href="/about" className="inline-flex items-center gap-2 text-orioles-orange font-bold text-lg hover:gap-3 transition-all" data-testid="link-about-more">
                About More <ArrowRight size={20} />
              </Link>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl relative">
                <img src="/src/assets/images/home-about.png" alt="Children learning and smiling" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-ultra-violet/80 to-transparent"></div>
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl">
                    <div className="text-3xl font-bold text-ultra-violet mb-1">
                      <AnimatedCounter end={500} suffix="+" />
                    </div>
                    <div className="text-gray-600 font-medium">Children Educated</div>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-bright-lime rounded-full opacity-20 blur-2xl"></div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-orioles-orange rounded-full opacity-20 blur-2xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How You Can Help */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-serif font-bold text-ultra-violet mb-4">How You Can Help</h2>
            <p className="text-lg text-gray-600">Join our movement. Whether through donations, time, or simply spreading the word, your involvement creates ripples of change.</p>
          </div>
          
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              {
                icon: <Heart size={32} />,
                title: "Donate",
                desc: "Your generosity fuels everything we do. A small contribution can mean a child in school, a woman empowered, or a family with a future.",
                color: "bg-orioles-orange",
                link: "https://razorpay.me/@onehandforhappiness",
                isExternal: true
              },
              {
                icon: <Users size={32} />,
                title: "Volunteer",
                desc: "Your time and skills can change lives. Whether teaching, mentoring, or simply lending a helping hand, you can make a real difference.",
                color: "bg-ultra-violet",
                link: "/volunteer-application",
                isExternal: false
              },
              {
                icon: <Globe size={32} />,
                title: "Spread Awareness",
                desc: "Use your voice to amplify ours. Share our mission, tell our stories, and inspire others to stand with us.",
                color: "bg-persian-blue",
                link: "/contact-us",
                isExternal: false
              }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                variants={fadeUp}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all border border-gray-100 group hover:-translate-y-2"
              >
                <div className={`w-16 h-16 rounded-2xl ${item.color} text-white flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-600 mb-8 leading-relaxed">{item.desc}</p>
                {item.isExternal ? (
                  <a href={item.link} target="_blank" rel="noreferrer" className={`inline-flex items-center gap-2 font-bold ${item.color === 'bg-orioles-orange' ? 'text-orioles-orange' : 'text-ultra-violet'} group-hover:gap-3 transition-all`} data-testid={`button-help-${idx}`}>
                    Take Action <ArrowRight size={18} />
                  </a>
                ) : (
                  <Link href={item.link} className={`inline-flex items-center gap-2 font-bold ${item.color === 'bg-orioles-orange' ? 'text-orioles-orange' : 'text-ultra-violet'} group-hover:gap-3 transition-all`} data-testid={`link-help-${idx}`}>
                    Take Action <ArrowRight size={18} />
                  </Link>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Impact Counters */}
      <section className="py-20 bg-ultra-violet text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center">
            <div className="flex flex-col items-center">
              <div className="text-4xl md:text-6xl font-bold text-bright-lime mb-2">
                <AnimatedCounter end={500} suffix="+" />
              </div>
              <div className="text-sm md:text-base text-white/80 font-medium">Children Gaining Access To Education</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-4xl md:text-6xl font-bold text-bright-lime mb-2">
                <AnimatedCounter end={150} suffix="+" />
              </div>
              <div className="text-sm md:text-base text-white/80 font-medium">Women Financially Empowered</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-4xl md:text-6xl font-bold text-bright-lime mb-2">
                <AnimatedCounter end={100} suffix="+" />
              </div>
              <div className="text-sm md:text-base text-white/80 font-medium">Individuals Trained For Self-sufficiency</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-4xl md:text-6xl font-bold text-bright-lime mb-2">
                <AnimatedCounter end={200} suffix="+" />
              </div>
              <div className="text-sm md:text-base text-white/80 font-medium">Families Supported</div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div className="max-w-2xl">
              <h2 className="text-4xl font-serif font-bold text-ultra-violet mb-4">Our Projects</h2>
              <p className="text-lg text-gray-600">We believe in action. Our projects are designed to uplift and empower those in need, ensuring long-term transformation.</p>
            </div>
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              { title: "Child Education", desc: "A Future Begins with Learning", img: "/src/assets/images/project-education.png", link: "/child-education" },
              { title: "Women Empowerment", desc: "Strength in Every Woman", img: "/src/assets/images/project-women.png", link: "/women-empowerment" },
              { title: "Skill Development", desc: "A Pathway to Dignity", img: "/src/assets/images/project-skill.png", link: "/skill-development" },
              { title: "Exhibitions", desc: "Stories That Deserve to Be Seen", img: "/src/assets/images/project-exhibition.png", link: "/exhibitions" },
            ].map((project, idx) => (
              <motion.div key={idx} variants={fadeUp} className="group relative rounded-2xl overflow-hidden shadow-lg h-96 cursor-pointer">
                <Link href={project.link} className="block w-full h-full" data-testid={`link-project-${idx}`}>
                  <img src={project.img} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-ultra-violet via-ultra-violet/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-bright-lime font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">{project.desc}</p>
                  </div>
                  <div className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ArrowRight className="text-white" size={20} />
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-ultra-violet to-orioles-orange"></div>
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">Be the Hand That Brings Happiness</h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">Extend Your Hand, Ignite a Future. Together, We Create Change! Every Life Deserves Hope.</p>
          <MagneticButton>
            <Link href="/volunteer-application" className="bg-white text-ultra-violet px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:bg-gray-100 transition-colors inline-block" data-testid="link-volunteer-cta">
              Become a Volunteer
            </Link>
          </MagneticButton>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-ultra-violet mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600">Learn more about our mission, how we work, and how you can get involved.</p>
          </div>
          
          <Accordion type="single" collapsible className="w-full bg-white rounded-2xl shadow-sm border border-gray-100 p-4">
            <AccordionItem value="item-1" className="border-b border-gray-100">
              <AccordionTrigger className="text-left text-lg font-bold text-gray-900 hover:text-ultra-violet">What is One Hand For Happiness?</AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base leading-relaxed">
                One Hand For Happiness is a non-profit organization dedicated to transforming lives through child education, women empowerment, skill development, and community exhibitions. We believe in creating sustainable opportunities for underprivileged communities.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="border-b border-gray-100">
              <AccordionTrigger className="text-left text-lg font-bold text-gray-900 hover:text-ultra-violet">How can I donate?</AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base leading-relaxed">
                You can donate online through our secure payment gateway. We accept one-time and recurring donations. <br/><br/>
                <a href="https://razorpay.me/@onehandforhappiness" target="_blank" rel="noreferrer" className="text-orioles-orange font-bold hover:underline">Donate Now &rarr;</a>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="border-b border-gray-100">
              <AccordionTrigger className="text-left text-lg font-bold text-gray-900 hover:text-ultra-violet">Where does my donation go?</AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base leading-relaxed">
                Your donation directly funds our programs, including education for children, vocational training for women, and livelihood support for marginalized communities. We maintain full transparency, and impact reports are available.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4" className="border-b border-gray-100">
              <AccordionTrigger className="text-left text-lg font-bold text-gray-900 hover:text-ultra-violet">Can I volunteer?</AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base leading-relaxed">
                Absolutely! We welcome volunteers for teaching, mentoring, event organization, content creation, fundraising, and more. Check our Volunteer Page for available roles.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5" className="border-none">
              <AccordionTrigger className="text-left text-lg font-bold text-gray-900 hover:text-ultra-violet">How can I partner with OHFH?</AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base leading-relaxed">
                We collaborate with individuals, businesses, and organizations to expand our impact. If you're interested in a CSR initiative, sponsorship, or fundraising collaboration, contact us at contact@onehandforhappiness.org
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
    </div>
  );
};

export default Home;
