import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Users, Globe, ArrowRight, CheckCircle2, Plus, Minus, ArrowLeft, Star } from 'lucide-react';
import { Link } from 'wouter';
import HeroScene from '@/components/3d/HeroScene';
import AnimatedCounter from '@/components/ui/AnimatedCounter';
import MagneticButton from '@/components/ui/MagneticButton';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

import SplitTextReveal from '@/components/ui/SplitTextReveal';
import Antigravity from '@/components/ui/Antigravity';
import CurtainReveal from '@/components/ui/CurtainReveal';
import ScrollReveal from '@/components/ui/ScrollReveal';
import Typewriter from '@/components/ui/Typewriter';

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

const testimonials = [
  {
    quote: "Happy to see how this NGO is Helping out the underprivileged kids by educating them .It is a Great initiative and I am privileged to be one of their helping hands.",
    name: "Rubal Kardam",
    role: "Supporter",
    image: "/images/testimonial-ai.png"
  },
  {
    quote: "It's a Very Nice initiative by Kiran Ma'am, to teach under privileged kids. The best NGO in Noida everybody should visit.",
    name: "Jayesh Bhatia",
    role: "Supporter",
    image: "/images/testimonial-ai.png"
  }
];

const Home = () => {
  const [activeTestimonial, setActiveTestimonial] = React.useState(0);
  return (
    <div className="w-full overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[100vh] pt-[140px] pb-20 w-full flex items-center overflow-hidden font-sans">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img src="/images/program-image-2.jpg" alt="Hero Background" className="w-full h-full object-cover object-[75%_center]" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0c2444] via-[#0c2444]/80 to-transparent w-[80%] md:w-[60%]"></div>
        </div>

        {/* Floating Shapes using Antigravity */}
        <Antigravity className="absolute top-1/4 right-1/4 z-10 hidden md:block" repelStrength={80}>
          <div className="w-16 h-16 rounded-full border-4 border-bright-lime/20" />
        </Antigravity>
        <Antigravity className="absolute bottom-1/4 right-1/3 z-10 hidden md:block" speed={1.5}>
          <div className="w-8 h-8 rotate-45 bg-orioles-orange/30" />
        </Antigravity>

        <div className="w-full relative z-20 pl-2 md:pl-4 lg:pl-6 xl:pl-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-[550px] lg:max-w-[650px]"
          >
            {/* Tag */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6 lg:mb-8 shadow-sm"
            >
              <span className="text-orioles-orange text-lg leading-none font-bold">+</span>
              <span className="text-xs font-bold text-white tracking-widest uppercase"><Typewriter text="Help Us Make a Difference" delay={400} /></span>
            </motion.div>

            {/* Heading with SplitTextReveal */}
            <div className="text-[42px] md:text-[54px] lg:text-[60px] xl:text-[72px] font-serif font-bold text-white mb-4 lg:mb-6 leading-[1.1] tracking-tight text-left drop-shadow-md">
              <SplitTextReveal text="Be the Hand That" className="block" stagger={0.03} />
              <SplitTextReveal text="Brings Happiness" className="text-bright-lime drop-shadow-lg block mt-1 lg:mt-2" stagger={0.03} />
            </div>

            {/* Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-[17px] md:text-[19px] text-white/90 mb-10 max-w-[540px] text-left font-medium leading-relaxed drop-shadow-sm"
            >
              A small act of kindness can change a life. While we have plenty, millions struggle for basic needs. Your support can bring food, shelter, and hope.
            </motion.p>

            {/* Buttons with btn-skew */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-5"
            >
              <MagneticButton>
                <a href="#" onClick={(e) => e.preventDefault()} className="btn-skew bg-[#f94a13] text-white px-8 py-3.5 rounded-full font-bold text-[16px] shadow-[0_4px_14px_rgba(249,74,19,0.4)] hover:shadow-[0_6px_20px_rgba(249,74,19,0.6)] transition-all flex items-center justify-center gap-2 w-full sm:w-auto" data-testid="button-donate-hero">
                  Donate Now <Heart size={18} />
                </a>
              </MagneticButton>
              <MagneticButton>
                <Link href="/about" className="btn-skew bg-white/10 backdrop-blur-md text-white border border-white/30 px-8 py-3.5 rounded-full font-bold text-[16px] hover:border-white transition-all flex items-center justify-center gap-2 w-full sm:w-auto" data-testid="link-about-hero">
                  Join the Mission <ArrowRight size={18} />
                </Link>
              </MagneticButton>
            </motion.div>
          </motion.div>
        </div>

        {/* Premium Scroll Down Icon */}
        <motion.div 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 cursor-pointer flex flex-col items-center gap-3 text-white/70 hover:text-white transition-colors group"
          onClick={() => window.scrollBy({ top: window.innerHeight * 0.9, behavior: 'smooth' })}
        >
          <span className="text-xs font-bold tracking-[0.2em] uppercase">Scroll</span>
          <div className="w-7 h-12 border-2 border-current rounded-full flex justify-center pt-2">
            <motion.div 
              animate={{ y: [0, 15, 0], opacity: [1, 0, 1] }} 
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-1.5 h-3 bg-current rounded-full"
            />
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-[#f8f9fa] relative overflow-hidden">
        <div className="container mx-auto px-4 max-w-7xl">

          <div className="flex flex-col lg:flex-row gap-16 lg:gap-10 items-center">

              <motion.div
                initial="hidden" whileInView="show" viewport={{ once: true, margin: "-50px" }}
                variants={staggerContainer}
                className="flex-1 w-full lg:w-1/2 pr-0 lg:pr-12"
              >

              {/* Heading */}
              <motion.div variants={fadeUp} className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-gray-100 bg-white mb-6 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-orioles-orange"></span>
                <span className="text-[13px] font-bold text-gray-800 tracking-[0.1em] uppercase">About Us</span>
              </motion.div>
              <div className="text-[38px] md:text-[48px] lg:text-[56px] font-serif font-extrabold text-[#0c2444] leading-tight tracking-tight mb-8">
                <SplitTextReveal text="Who" className="inline-block mr-2" />
                <SplitTextReveal text="We Are" className="text-orioles-orange inline-block" stagger={0.05} />
              </div>

              <motion.p variants={fadeUp} className="text-[17px] text-gray-500 mb-12 leading-relaxed font-medium">
                One Hand for Happiness (OHFH) is a community-driven NGO dedicated to breaking the cycle of poverty through education and nourishment. Our holistic approach ensures that every child receives not just academic support but also the essentials for a healthy, fulfilling life
              </motion.p>

              <motion.div variants={fadeUp} className="space-y-10 mb-12">
                <div className="flex gap-6 items-start">
                  <div className="w-14 h-14 rounded-full bg-bright-lime flex items-center justify-center shrink-0 shadow-sm">
                    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-900"><path d="M3 13.5 12 3l9 10.5M12 3v18M12 21h-5a2 2 0 0 1-2-2v-4M12 21h5a2 2 0 0 0 2-2v-4"></path></svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Our Mission</h3>
                    <p className="text-gray-500 text-[15px] leading-[1.8] max-w-[400px]">
                      To empower underprivileged children by providing access to education, wholesome mid-day meals, and community programs that foster self-reliance and lifelong success.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6 items-start">
                  <div className="w-14 h-14 rounded-full bg-bright-lime flex items-center justify-center shrink-0 shadow-sm">
                    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-900"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="4"></circle><line x1="4.93" y1="4.93" x2="9.17" y2="9.17"></line><line x1="14.83" y1="14.83" x2="19.07" y2="19.07"></line><line x1="14.83" y1="9.17" x2="19.07" y2="4.93"></line><line x1="14.83" y1="9.17" x2="18.36" y2="5.64"></line><line x1="4.93" y1="19.07" x2="9.17" y2="14.83"></line></svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Our Vision</h3>
                    <p className="text-gray-500 text-[15px] leading-[1.8] max-w-[400px]">
                      A world where every child, regardless of their socio-economic background, can learn, grow, and achieve their dreams.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={fadeUp}>
                <Link href="/about" className="btn-skew inline-flex items-center gap-6 bg-orioles-orange text-white pl-8 pr-2 py-2 rounded-full text-[17px] font-bold hover:bg-[#e03d0b] transition-all shadow-md">
                  About More
                  <div className="w-12 h-12 rounded-full bg-gray-900 text-white flex items-center justify-center relative z-10">
                    <ArrowRight size={20} strokeWidth={2.5} />
                  </div>
                </Link>
              </motion.div>
            </motion.div>

            {/* Right Column (Visuals) */}
            <div
              className="flex-1 w-full lg:w-1/2 flex flex-col md:flex-row gap-6 lg:gap-8 min-h-[650px]"
            >
              {/* Left: Main Image with CurtainReveal */}
              <motion.div 
                initial={{ opacity: 0, x: -30 }} 
                whileInView={{ opacity: 1, x: 0 }} 
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="w-full md:w-[55%] min-h-[400px] md:min-h-0 rounded-[32px] overflow-hidden shadow-sm relative"
              >
                <div className="absolute inset-0">
                  <img src="/images/ngo_main.png" alt="NGO Volunteer" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                </div>
              </motion.div>

              {/* Right: Stacked Cards */}
              <div className="w-full md:w-[45%] flex flex-col gap-6 lg:gap-8">

                {/* Top Right Card */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.4, duration: 0.6 }}
                  className="flex-[1.2] bg-[#F8F9FA] rounded-[32px] p-6 lg:p-8 relative shadow-[0_5px_30px_rgba(0,0,0,0.03)] border border-gray-100 flex flex-col"
                >
                  <h4 className="text-[20px] lg:text-[22px] font-bold text-gray-900 mb-2 tracking-tight">500+ Children</h4>
                  <p className="text-[14px] text-gray-500 leading-relaxed font-medium relative z-10 max-w-[90%]">
                    Providing access to education and wholesome mid-day meals for a better future.
                  </p>

                  <div className="mt-auto pt-4 flex items-end justify-between relative z-10">
                    <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-bright-lime flex items-center justify-center">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-gray-900"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"></path></svg>
                    </div>
                  </div>

                  <div className="absolute bottom-0 right-0 w-[55%] max-w-[140px]">
                    <img src="/images/ngo_3d.png" alt="3D student" className="w-full h-auto object-contain object-bottom drop-shadow-xl translate-x-2" />
                  </div>
                </motion.div>

                {/* Bottom Right Card */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.6, duration: 0.6 }}
                  className="flex-[0.8] bg-gray-900 rounded-[32px] p-6 lg:p-8 relative shadow-xl overflow-hidden flex flex-col justify-center"
                >
                  {/* Decorative wave pattern in background */}
                  <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'repeating-radial-gradient(circle at 100% 100%, transparent 0, transparent 40px, #ffffff 40px, #ffffff 42px)' }}></div>

                  <div className="relative z-10">
                    <div className="flex items-center gap-1 mb-1">
                      <span className="text-white text-[42px] lg:text-[48px] font-extrabold tracking-tighter leading-none">100</span>
                      <span className="text-orioles-orange text-3xl lg:text-4xl font-extrabold leading-none">+</span>
                    </div>
                    <p className="text-white text-lg font-bold tracking-wide mb-2">Volunteers</p>
                    <p className="text-[#9CA3AF] text-[14px] leading-[1.6] font-medium pr-2">
                      Experienced volunteers trained guide beginners with clarity, confidence, and care.
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Our Programs Section */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <ScrollReveal direction="up" delay={0.1}>
                <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-gray-100 bg-white mb-6 shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-orioles-orange"></span>
                  <span className="text-[13px] font-bold text-gray-800 tracking-[0.1em] uppercase">Our Programs</span>
                </div>
              </ScrollReveal>
              <ScrollReveal direction="up" delay={0.2}>
                <div className="text-[38px] md:text-[48px] lg:text-[56px] font-serif font-extrabold text-[#0c2444] leading-[1.15] tracking-tight">
                  <SplitTextReveal text="Changing Lives" /> <br />
                  <SplitTextReveal text="Through Action" className="text-orioles-orange" stagger={0.03} />
                </div>
              </ScrollReveal>
            </div>
            <ScrollReveal direction="left" delay={0.3} className="max-w-md text-gray-600">
              <p className="mb-6 font-medium">With a commitment to excellence and community care, we offer comprehensive support through our targeted programs.</p>
              <Link href="/contact-us" className="btn-skew inline-flex items-center justify-center bg-orioles-orange text-white px-8 py-3.5 rounded-full font-bold hover:bg-[#e03d0b] transition-all shadow-md">
                Donate Now <ArrowRight size={18} className="ml-2 relative z-10" />
              </Link>
            </ScrollReveal>
          </div>

          <motion.div
            initial="hidden" whileInView="show" viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          >
            {/* Row 1 */}
            <motion.div variants={fadeUp} className="rounded-[32px] overflow-hidden aspect-square md:aspect-auto h-full min-h-[400px]">
              <img src="/images/education_program.png" alt="Education Program" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </motion.div>

            <motion.div variants={fadeUp} className="bg-orioles-orange rounded-[32px] p-8 lg:p-10 text-white flex flex-col justify-between min-h-[400px] shadow-lg">
              <div>
                <h3 className="text-[28px] font-serif font-bold mb-4 leading-tight">Education for Every Child</h3>
                <p className="text-white/90 leading-relaxed font-medium">
                  We provide academic support, scholarships, and learning resources to help children overcome barriers and excel in their studies. Collaborating with local schools, our programs ensure that education is not just a privilege but a right for all.
                </p>
              </div>
              <Link href="/contact-us" className="inline-flex w-fit justify-center bg-white text-orioles-orange px-8 py-3.5 rounded-full font-bold hover:bg-gray-50 transition-colors mt-8">
                Support Now
              </Link>
            </motion.div>

            <motion.div variants={fadeUp} className="rounded-[32px] overflow-hidden aspect-square md:aspect-auto h-full min-h-[400px]">
              <img src="/images/meals_program.png" alt="Meals Program" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </motion.div>

            {/* Row 2 */}
            <motion.div variants={fadeUp} className="bg-[#F8F9FA] border border-gray-100 rounded-[32px] p-8 lg:p-10 text-[#0c2444] flex flex-col justify-between min-h-[400px] shadow-sm">
              <div>
                <h3 className="text-[28px] font-serif font-bold mb-4 leading-tight">Nutritious Mid-Day Meals</h3>
                <p className="text-gray-600 leading-relaxed font-medium">
                  A hungry child cannot learn. Our meal program offers fresh, nutritious food to keep young minds sharp and focused, enhancing both their health and academic performance.
                </p>
              </div>
              <Link href="/contact-us" className="inline-flex w-fit justify-center bg-ultra-violet text-white px-8 py-3.5 rounded-full font-bold hover:bg-[#4a3a6b] transition-colors mt-8">
                Support Now
              </Link>
            </motion.div>

            <motion.div variants={fadeUp} className="rounded-[32px] overflow-hidden aspect-square md:aspect-auto h-full min-h-[400px]">
              <img src="/images/community_program.png" alt="Community Program" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </motion.div>

            <motion.div variants={fadeUp} className="bg-ultra-violet rounded-[32px] p-8 lg:p-10 text-white flex flex-col justify-between min-h-[400px] shadow-lg">
              <div>
                <h3 className="text-[28px] font-serif font-bold mb-4 leading-tight">Community Engagement & Support</h3>
                <p className="text-white/80 leading-relaxed font-medium">
                  We empower families through workshops, events, and local partnerships, fostering a culture of shared responsibility and growth that benefits entire communities.
                </p>
              </div>
              <Link href="/contact-us" className="inline-flex w-fit justify-center bg-bright-lime text-[#0c2444] px-8 py-3.5 rounded-full font-extrabold hover:bg-[#7add00] transition-colors mt-8">
                Support Now
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* How You Can Help Us Section (Kidyard Design) */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 max-w-7xl">

          {/* Centered Heading */}
          <div className="text-center mb-20">
            <motion.h2 variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-[38px] md:text-[48px] lg:text-[56px] font-serif font-extrabold text-[#0c2444] leading-tight tracking-tight">
              How You Can <span className="text-orioles-orange">Help Us?</span>
            </motion.h2>
          </div>

          <div className="flex flex-col lg:flex-row gap-16 lg:gap-12 items-center">

            {/* Left Column (Visuals - Circles) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.8 }}
              className="flex-1 w-full lg:w-1/2 relative flex justify-center lg:justify-start overflow-visible min-h-[500px]"
            >
              {/* Responsive Fluid Layout */}
              <div className="relative w-full max-w-[500px] aspect-square mx-auto lg:mx-0">

                {/* Dashed orange border circle (Offset to Top-Left) */}
                <div className="absolute top-[0%] left-[0%] w-[88%] h-[88%] rounded-full border-[2px] border-dashed border-orioles-orange/80 z-0"></div>

                {/* Large main circular image (Offset slightly Bottom-Right) */}
                <div className="absolute top-[6%] left-[6%] w-[88%] h-[88%] rounded-full overflow-hidden shadow-md z-10 bg-white">
                  <img src="/images/home-about.png" alt="Children learning" className="w-full h-full object-cover" />
                </div>

                {/* Smaller overlapping circular image (Bottom-Right corner) */}
                <div className="absolute bottom-[0%] right-[0%] w-[46%] h-[46%] rounded-full overflow-hidden shadow-2xl border-[8px] border-white z-20 bg-white">
                  <img src="/images/project-education.png" alt="Children playing" className="w-full h-full object-cover" />
                </div>

                {/* Decorative sunburst lines */}
                <div className="absolute bottom-[22%] right-[-6%] w-[12%] h-[12%] z-10 text-orioles-orange">
                  <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round">
                    <path d="M 10 25 L 35 10 M 5 50 L 35 50 M 10 75 L 35 90" />
                  </svg>
                </div>

              </div>
            </motion.div>

            {/* Right Column (Text & Grid) */}
            <motion.div
              initial="hidden" whileInView="show" viewport={{ once: true, margin: "-50px" }}
              variants={staggerContainer}
              className="flex-1 w-full lg:w-1/2 lg:pl-10"
            >
              <motion.div variants={fadeUp} className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-12">

                {/* Feature 1 */}
                <div className="flex flex-col">
                  <div className="w-[60px] h-[60px] rounded-2xl bg-orioles-orange flex items-center justify-center mb-5 text-white">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"></path><path d="M12 18V6"></path></svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 tracking-tight">Donate</h3>
                  <p className="text-[17px] text-gray-500 leading-relaxed font-medium">Your generosity fuels everything we do. A small contribution can mean a child in school, a woman empowered, or a family with a future.</p>
                </div>

                {/* Feature 2 */}
                <div className="flex flex-col">
                  <div className="w-[60px] h-[60px] rounded-2xl bg-orioles-orange flex items-center justify-center mb-5 text-white">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m3 11 18-5v12L3 14v-3z"></path><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"></path></svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 tracking-tight">Spread Awareness</h3>
                  <p className="text-[17px] text-gray-500 leading-relaxed font-medium">Use your voice to amplify ours. Share our mission, tell our stories, and inspire others to stand with us.</p>
                </div>

                {/* Feature 3 */}
                <div className="flex flex-col">
                  <div className="w-[60px] h-[60px] rounded-2xl bg-orioles-orange flex items-center justify-center mb-5 text-white">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 tracking-tight">Volunteer</h3>
                  <p className="text-[17px] text-gray-500 leading-relaxed font-medium">Your time and skills can change lives. Whether teaching, mentoring, or simply lending a helping hand, you can make a real difference.</p>
                </div>

                {/* Feature 4 */}
                <div className="flex flex-col">
                  <div className="w-[60px] h-[60px] rounded-2xl bg-orioles-orange flex items-center justify-center mb-5 text-white">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M8 21h12a2 2 0 0 0 2-2v-2H10v2a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v3h4"></path><path d="M19 17V5a2 2 0 0 0-2-2H4"></path><path d="M15 8h-5"></path><path d="M15 12h-5"></path></svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 tracking-tight">Child Deserves Better Healthy Foods</h3>
                  <p className="text-[17px] text-gray-500 leading-relaxed font-medium">To make sure education of poor children While atever motivates you to host,your participation has the.</p>
                </div>

              </motion.div>
            </motion.div>

          </div>
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
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-[42px] lg:text-[56px] font-serif font-extrabold text-gray-900 mb-6 tracking-tight">Our Projects</h2>
            <p className="text-[17px] text-gray-600 leading-relaxed font-medium max-w-4xl mx-auto">
              We believe in action. Our projects are designed to uplift and empower those in need, <br className="hidden md:block" /> ensuring long-term transformation. Our key initiatives include:
            </p>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {/* Tall Item (Left Column) */}
            <motion.div variants={fadeUp} className="md:row-span-2 group relative overflow-hidden bg-gray-100 h-full min-h-[400px] md:min-h-0 cursor-pointer">
              <Link href="/child-education" className="block w-full h-full">
                <img src="/images/project-education.png" alt="Child with drawing" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-transparent md:bg-orioles-orange/90 bg-gradient-to-t from-black/80 via-black/20 to-transparent md:bg-none opacity-100 md:opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-6 md:p-8 text-white z-10">
                  <span className="text-[14px] md:text-[15px] font-medium mb-1 text-gray-200 md:text-white">Child Education</span>
                  <h3 className="text-[22px] md:text-[26px] font-bold leading-tight tracking-tight">A Future Begins with Learning</h3>
                </div>
                <div className="absolute top-4 right-4 md:top-6 md:right-6 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center opacity-100 md:opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-0 md:translate-y-4 group-hover:translate-y-0 z-20 text-orioles-orange shadow-lg">
                  <ArrowRight size={20} className="block md:hidden" strokeWidth={2.5} />
                  <ArrowRight size={24} className="hidden md:block" strokeWidth={2.5} />
                </div>
              </Link>
            </motion.div>

            {/* Square Item 1 (Top Middle) */}
            <motion.div variants={fadeUp} className="group relative overflow-hidden aspect-square bg-gray-100 cursor-pointer">
              <Link href="/women-empowerment" className="block w-full h-full">
                <img src="/images/project-women.png" alt="Women sewing" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-transparent md:bg-orioles-orange/90 bg-gradient-to-t from-black/80 via-black/20 to-transparent md:bg-none opacity-100 md:opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-6 md:p-8 text-white z-10">
                  <span className="text-[14px] md:text-[15px] font-medium mb-1 text-gray-200 md:text-white">Women Empowerment</span>
                  <h3 className="text-[22px] md:text-[26px] font-bold leading-tight tracking-tight">Strength in Every Woman</h3>
                </div>
                <div className="absolute top-4 right-4 md:top-6 md:right-6 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center opacity-100 md:opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-0 md:translate-y-4 group-hover:translate-y-0 z-20 text-orioles-orange shadow-lg">
                  <ArrowRight size={20} className="block md:hidden" strokeWidth={2.5} />
                  <ArrowRight size={24} className="hidden md:block" strokeWidth={2.5} />
                </div>
              </Link>
            </motion.div>

            {/* Square Item 2 (Top Right) */}
            <motion.div variants={fadeUp} className="group relative overflow-hidden aspect-square bg-gray-100 cursor-pointer">
              <Link href="/exhibitions" className="block w-full h-full">
                <img src="/images/project-exhibition.png" alt="Exhibitions" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-transparent md:bg-orioles-orange/90 bg-gradient-to-t from-black/80 via-black/20 to-transparent md:bg-none opacity-100 md:opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-6 md:p-8 text-white z-10">
                  <span className="text-[14px] md:text-[15px] font-medium mb-1 text-gray-200 md:text-white">Exhibitions</span>
                  <h3 className="text-[22px] md:text-[26px] font-bold leading-tight tracking-tight">Stories That Deserve to Be Seen</h3>
                </div>
                <div className="absolute top-4 right-4 md:top-6 md:right-6 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center opacity-100 md:opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-0 md:translate-y-4 group-hover:translate-y-0 z-20 text-orioles-orange shadow-lg">
                  <ArrowRight size={20} className="block md:hidden" strokeWidth={2.5} />
                  <ArrowRight size={24} className="hidden md:block" strokeWidth={2.5} />
                </div>
              </Link>
            </motion.div>

            {/* Square Item 3 (Bottom Middle) */}
            <motion.div variants={fadeUp} className="group relative overflow-hidden aspect-square bg-gray-100 cursor-pointer">
              <Link href="/skill-development" className="block w-full h-full">
                <img src="/images/project-skill.png" alt="Kids with bags" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-transparent md:bg-orioles-orange/90 bg-gradient-to-t from-black/80 via-black/20 to-transparent md:bg-none opacity-100 md:opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-6 md:p-8 text-white z-10">
                  <span className="text-[14px] md:text-[15px] font-medium mb-1 text-gray-200 md:text-white">Skill Development</span>
                  <h3 className="text-[22px] md:text-[26px] font-bold leading-tight tracking-tight">A Pathway to Dignity</h3>
                </div>
                <div className="absolute top-4 right-4 md:top-6 md:right-6 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center opacity-100 md:opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-0 md:translate-y-4 group-hover:translate-y-0 z-20 text-orioles-orange shadow-lg">
                  <ArrowRight size={20} className="block md:hidden" strokeWidth={2.5} />
                  <ArrowRight size={24} className="hidden md:block" strokeWidth={2.5} />
                </div>
              </Link>
            </motion.div>

            {/* Square Item 4 (Bottom Right) */}
            <motion.div variants={fadeUp} className="group relative overflow-hidden aspect-square bg-gray-100 cursor-pointer">
              <Link href="/projects" className="block w-full h-full">
                <img src="/images/home-about.png" alt="People serving food" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-transparent md:bg-orioles-orange/90 bg-gradient-to-t from-black/80 via-black/20 to-transparent md:bg-none opacity-100 md:opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-6 md:p-8 text-white z-10">
                  <span className="text-[14px] md:text-[15px] font-medium mb-1 text-gray-200 md:text-white">Our Best Projects</span>
                  <h3 className="text-[22px] md:text-[26px] font-bold leading-tight tracking-tight">Event of Shares</h3>
                </div>
                <div className="absolute top-4 right-4 md:top-6 md:right-6 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center opacity-100 md:opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-0 md:translate-y-4 group-hover:translate-y-0 z-20 text-orioles-orange shadow-lg">
                  <ArrowRight size={20} className="block md:hidden" strokeWidth={2.5} />
                  <ArrowRight size={24} className="hidden md:block" strokeWidth={2.5} />
                </div>
              </Link>
            </motion.div>

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

      {/* Expert Team Section (Kidyard Design with Native Typography) */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 max-w-7xl">

          <div className="text-center mb-16 relative">
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="inline-flex items-center justify-center gap-2 px-5 py-2 rounded-full border border-gray-100 bg-white shadow-sm mb-6">
              <span className="text-orioles-orange text-lg leading-none">✦</span>
              <span className="text-sm font-bold text-gray-800 tracking-wide uppercase">EXPERT TEAM</span>
            </motion.div>
            <motion.h2 variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-[42px] lg:text-[56px] font-serif font-extrabold text-gray-900 leading-tight tracking-tight max-w-4xl mx-auto">
              Meet Our Volunteer Team
            </motion.h2>
            <div className="absolute right-[25%] bottom-4 w-2 h-2 rounded-full bg-orioles-orange hidden md:block"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">

            {/* Team Member 1 */}
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="flex flex-col items-center text-center">
              <div className="w-full aspect-[4/5] rounded-[2rem] overflow-hidden shadow-md mb-6 bg-gray-100 relative group">
                <img src="/images/team-1.webp" alt="Kiran Singh" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-ultra-violet/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Kiran Singh</h3>
              <p className="text-[17px] text-gray-500 font-medium">Kiran Singh Founder</p>
            </motion.div>

            {/* Team Member 2 */}
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-50px" }} transition={{ delay: 0.1 }} className="flex flex-col items-center text-center">
              <div className="w-full aspect-[4/5] rounded-[2rem] overflow-hidden shadow-md mb-6 bg-gray-100 relative group">
                <img src="/images/team-2.webp" alt="Anil Kumar Singh" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-ultra-violet/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Anil Kumar Singh</h3>
              <p className="text-[17px] text-gray-500 font-medium">Treasurer</p>
            </motion.div>

            {/* Team Member 3 */}
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-50px" }} transition={{ delay: 0.2 }} className="flex flex-col items-center text-center">
              <div className="w-full aspect-[4/5] rounded-[2rem] overflow-hidden shadow-md mb-6 bg-gray-100 relative group">
                <img src="/images/team-3.webp" alt="Pinky Jain" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-ultra-violet/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Pinky Jain</h3>
              <p className="text-[17px] text-gray-500 font-medium">Team Leader</p>
            </motion.div>

          </div>

        </div>
      </section>

      {/* FAQ Section (Kidyard Design with Native Typography) */}
      <section className="py-24 bg-[#fffdfb] relative overflow-hidden">
        <div className="container mx-auto px-4 max-w-7xl">

          <div className="text-center mb-16 relative">
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="inline-flex items-center justify-center gap-2 px-5 py-2 rounded-full border border-gray-100 bg-white shadow-sm mb-6">
              <span className="text-orioles-orange text-lg leading-none">✦</span>
              <span className="text-sm font-bold text-gray-800 tracking-wide uppercase">Frequently Asked Questions</span>
            </motion.div>
            <motion.h2 variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-[42px] lg:text-[56px] font-serif font-extrabold text-gray-900 leading-tight tracking-tight max-w-4xl mx-auto">
              Answers to your most common questions about our <span className="text-orioles-orange">mission & work</span>
            </motion.h2>
            <div className="absolute right-[15%] bottom-4 w-2 h-2 rounded-full bg-orioles-orange hidden md:block"></div>
          </div>

          <div className="flex flex-col lg:flex-row gap-16 lg:gap-12 items-start">

            {/* Left Column (Images & Contact Box) */}
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="w-full lg:w-[45%] flex gap-4 min-h-[400px] lg:h-[600px]">
              {/* Tall Image */}
              <div className="w-1/2 h-full rounded-2xl overflow-hidden shadow-sm">
                <img src="/images/our-faqs-image-1.jpg" alt="Children playing" className="w-full h-full object-cover" />
              </div>

              <div className="w-1/2 flex flex-col gap-4 h-full">
                {/* Small Top Image */}
                <div className="flex-1 rounded-2xl overflow-hidden shadow-sm">
                  <img src="/images/our-faqs-image-2.jpg" alt="Children with blocks" className="w-full h-full object-cover" />
                </div>
                {/* Dark Purple Box */}
                <div className="flex-1 bg-ultra-violet rounded-2xl p-6 md:p-8 flex flex-col justify-center text-white shadow-sm">
                  <svg className="w-10 h-10 mb-4 text-white/90" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
                  <h3 className="text-2xl font-bold mb-3">24/7 Dedicated Team</h3>
                  <p className="text-white/80 font-medium leading-relaxed text-[17px]">Our team is always here for you - whether it's a quick question or need.</p>
                </div>
              </div>
            </motion.div>

            {/* Right Column (Accordion) */}
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="w-full lg:w-[55%]">
              <Accordion type="single" collapsible defaultValue="item-1" className="w-full flex flex-col gap-4">

                <AccordionItem value="item-1" className="bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.02)] border-none">
                  <AccordionTrigger className="px-6 py-6 md:py-8 text-left text-xl font-bold text-gray-900 hover:no-underline [&>svg]:hidden relative group">
                    <span className="pr-14">1. What is One Hand For Happiness?</span>
                    <div className="absolute right-6 top-1/2 -translate-y-1/2 w-10 h-10 rounded flex items-center justify-center text-white shrink-0 transition-colors group-data-[state=open]:bg-ultra-violet group-data-[state=closed]:bg-orioles-orange">
                      <Plus size={20} className="block group-data-[state=open]:hidden" />
                      <Minus size={20} className="hidden group-data-[state=open]:block" />
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-8 text-gray-600 font-medium text-[17px] leading-relaxed pr-12">
                    One Hand For Happiness is a non-profit organization dedicated to transforming lives through child education, women empowerment, skill development, and community exhibitions. We believe in creating sustainable opportunities for underprivileged communities.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" className="bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.02)] border-none">
                  <AccordionTrigger className="px-6 py-6 md:py-8 text-left text-xl font-bold text-gray-900 hover:no-underline [&>svg]:hidden relative group">
                    <span className="pr-14">2. How can I donate?</span>
                    <div className="absolute right-6 top-1/2 -translate-y-1/2 w-10 h-10 rounded flex items-center justify-center text-white shrink-0 transition-colors group-data-[state=open]:bg-ultra-violet group-data-[state=closed]:bg-orioles-orange">
                      <Plus size={20} className="block group-data-[state=open]:hidden" />
                      <Minus size={20} className="hidden group-data-[state=open]:block" />
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-8 text-gray-600 font-medium text-[17px] leading-relaxed pr-12">
                    You can donate online through our secure payment gateway. We accept one-time and recurring donations. <br /><br />
                    <a href="#" onClick={(e) => e.preventDefault()} className="text-orioles-orange font-bold hover:underline">Donate Now &rarr;</a>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3" className="bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.02)] border-none">
                  <AccordionTrigger className="px-6 py-6 md:py-8 text-left text-xl font-bold text-gray-900 hover:no-underline [&>svg]:hidden relative group">
                    <span className="pr-14">3. Where does my donation go?</span>
                    <div className="absolute right-6 top-1/2 -translate-y-1/2 w-10 h-10 rounded flex items-center justify-center text-white shrink-0 transition-colors group-data-[state=open]:bg-ultra-violet group-data-[state=closed]:bg-orioles-orange">
                      <Plus size={20} className="block group-data-[state=open]:hidden" />
                      <Minus size={20} className="hidden group-data-[state=open]:block" />
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-8 text-gray-600 font-medium text-[17px] leading-relaxed pr-12">
                    Your donation directly funds our programs, including education for children, vocational training for women, and livelihood support for marginalized communities. We maintain full transparency, and impact reports are available.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4" className="bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.02)] border-none">
                  <AccordionTrigger className="px-6 py-6 md:py-8 text-left text-xl font-bold text-gray-900 hover:no-underline [&>svg]:hidden relative group">
                    <span className="pr-14">4. Can I volunteer?</span>
                    <div className="absolute right-6 top-1/2 -translate-y-1/2 w-10 h-10 rounded flex items-center justify-center text-white shrink-0 transition-colors group-data-[state=open]:bg-ultra-violet group-data-[state=closed]:bg-orioles-orange">
                      <Plus size={20} className="block group-data-[state=open]:hidden" />
                      <Minus size={20} className="hidden group-data-[state=open]:block" />
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-8 text-gray-600 font-medium text-[17px] leading-relaxed pr-12">
                    Absolutely! We welcome volunteers for teaching, mentoring, event organization, content creation, fundraising, and more. Check our Volunteer Page for available roles.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5" className="bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.02)] border-none">
                  <AccordionTrigger className="px-6 py-6 md:py-8 text-left text-xl font-bold text-gray-900 hover:no-underline [&>svg]:hidden relative group">
                    <span className="pr-14">5. How can I partner with OHFH?</span>
                    <div className="absolute right-6 top-1/2 -translate-y-1/2 w-10 h-10 rounded flex items-center justify-center text-white shrink-0 transition-colors group-data-[state=open]:bg-ultra-violet group-data-[state=closed]:bg-orioles-orange">
                      <Plus size={20} className="block group-data-[state=open]:hidden" />
                      <Minus size={20} className="hidden group-data-[state=open]:block" />
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-8 text-gray-600 font-medium text-[17px] leading-relaxed pr-12">
                    We collaborate with individuals, businesses, and organizations to expand our impact. If you're interested in a CSR initiative, sponsorship, or fundraising collaboration, contact us at contact@onehandforhappiness.org
                  </AccordionContent>
                </AccordionItem>

              </Accordion>
            </motion.div>

          </div>
        </div>
      </section>
      {/* Testimonials Section (Kidyard Design - Exact Match) */}
      <section className="py-24 bg-[#f4f7f6] relative overflow-hidden font-sans">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

            {/* Left side text */}
            <div className="w-full lg:w-[45%] flex flex-col justify-center">

              {/* Heading */}
              <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-gray-100 bg-white mb-6 shadow-sm w-fit">
                <span className="w-2 h-2 rounded-full bg-orioles-orange"></span>
                <span className="text-[13px] font-bold text-gray-800 tracking-[0.1em] uppercase">Testimonials</span>
              </motion.div>

              <motion.h2 variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-[38px] md:text-[48px] lg:text-[56px] font-serif font-extrabold text-[#0c2444] leading-[1.15] tracking-tight mb-10">
                What Our Customers Are Talking <span className="text-orioles-orange">About Our Services</span>
              </motion.h2>

              <div className="w-full h-px bg-gray-200 max-w-[80%] mb-10"></div>

              {/* Google Rating */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center p-2.5 shrink-0">
                  <svg viewBox="0 0 24 24" className="w-full h-full">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                  </svg>
                </div>
                <div>
                  <div className="flex items-center gap-3">
                    <span className="text-xl font-bold text-gray-900">4.9/5</span>
                    <div className="flex text-orioles-orange">
                      <Star size={16} fill="currentColor" />
                      <Star size={16} fill="currentColor" />
                      <Star size={16} fill="currentColor" />
                      <Star size={16} fill="currentColor" />
                      <Star size={16} fill="currentColor" />
                    </div>
                  </div>
                  <p className="text-[13px] text-gray-500 font-medium mt-0.5">Based on 250 review</p>
                </div>
              </div>
            </div>

            {/* Right side Card with Controls */}
            <div className="w-full lg:w-[55%] relative">

              {/* Stacked background cards effect */}
              <div className="absolute inset-x-8 -bottom-4 h-full bg-white/50 rounded-[2rem] -z-10 shadow-sm"></div>
              <div className="absolute inset-x-4 -bottom-2 h-full bg-white/70 rounded-[2rem] -z-10 shadow-sm"></div>

              {/* Main Card */}
              <motion.div
                key={activeTestimonial}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="bg-white p-6 md:p-8 rounded-[2rem] shadow-xl flex flex-col md:flex-row gap-8 items-stretch relative z-10"
              >
                {/* Image */}
                <div className="w-full md:w-[45%] aspect-[4/5] rounded-[1.5rem] overflow-hidden shrink-0 bg-gray-100">
                  <img src={testimonials[activeTestimonial].image} alt={testimonials[activeTestimonial].name} className="w-full h-full object-cover" />
                </div>

                {/* Content */}
                <div className="w-full md:w-[55%] py-2 flex flex-col justify-between">
                  <div>
                    <div className="flex text-orioles-orange mb-6 gap-1">
                      <Star size={18} fill="currentColor" />
                      <Star size={18} fill="currentColor" />
                      <Star size={18} fill="currentColor" />
                      <Star size={18} fill="currentColor" />
                      <Star size={18} fill="currentColor" />
                    </div>
                    <p className="text-[15px] text-gray-600 font-medium leading-[1.8] mb-8 pr-4">
                      "{testimonials[activeTestimonial].quote}"
                    </p>
                  </div>

                  <div className="relative border-t border-gray-100 pt-6">
                    <h4 className="text-[17px] font-bold text-gray-900 mb-0.5">{testimonials[activeTestimonial].name}</h4>
                    <p className="text-[13px] text-gray-500 font-medium">{testimonials[activeTestimonial].role}</p>

                    {/* Giant quote icon bottom right */}
                    <div className="absolute bottom-2 right-2 text-orioles-orange">
                      <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Carousel controls perfectly positioned on the edges of the card */}
              <button
                onClick={() => setActiveTestimonial(prev => prev === 0 ? testimonials.length - 1 : prev - 1)}
                className="absolute left-[-24px] top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-[0_4px_15px_rgba(0,0,0,0.1)] flex items-center justify-center text-gray-800 hover:text-orioles-orange transition-colors z-20"
              >
                <ArrowLeft size={20} strokeWidth={2.5} />
              </button>

              <button
                onClick={() => setActiveTestimonial(prev => (prev + 1) % testimonials.length)}
                className="absolute right-[-24px] top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-[0_4px_15px_rgba(0,0,0,0.1)] flex items-center justify-center text-gray-800 hover:text-orioles-orange transition-colors z-20"
              >
                <ArrowRight size={20} strokeWidth={2.5} />
              </button>

            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
