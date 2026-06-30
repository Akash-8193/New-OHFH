import React from 'react';
import { motion } from 'framer-motion';
import Hero from '@/components/ui/Hero';

const teamMembers = [
  {
    name: "Kiran Singh",
    role: "Founder",
    desc: "With over a decade dedicated to social work, Kiran Singh established One Hand For Happiness to address the pressing needs of underprivileged children. Her passion drives the mission to empower marginalized communities.",
    img: "/images/team-kiran.png"
  },
  {
    name: "Anil Kumar Singh",
    role: "Treasurer",
    desc: "As the Head of Food Court Operations at PVRINOX LTD, Anil brings extensive experience in operations. He ensures financial transparency and oversees critical areas like community meal coordination.",
    img: "/images/team-anil.png"
  },
  {
    name: "Tarun Sharma",
    role: "Teacher",
    desc: "A Telecom Professional and Head of R&D at Frog Cellsat Ltd. Tarun is passionate about educating children, tutoring students in mathematics and language to foster a love for learning.",
    img: "/images/team-tarun.png"
  },
  {
    name: "Ritu Jain",
    role: "Soft Skills Trainer",
    desc: "With 14 years of experience as an Interior Designer, Ritu brings creativity and insight. She teaches communication skills, etiquette, and self-presentation to students.",
    img: "/images/team-ritu.png"
  },
  {
    name: "Pinky Jain",
    role: "Administrator",
    desc: "Serving as an Administrator, Pinky efficiently manages daily operations. She also teaches kindergarten children, focusing on foundational learning and creativity.",
    img: "/images/team-pinky.png"
  },
  {
    name: "Rakhi Karn",
    role: "Teacher",
    desc: "A seasoned stock market portfolio manager, Rakhi applies her analytical skills to education by teaching English, Mathematics, and General Awareness.",
    img: "/images/team-rakhi.png"
  },
  {
    name: "Megha Agarwal",
    role: "Mathematics Teacher",
    desc: "Megha specializes in teaching Mathematics, helping students build strong foundational skills and confidence along with lessons in manners.",
    img: "/images/team-megha.png"
  },
  {
    name: "Anishka Singh",
    role: "Management",
    desc: "A professional actor, Anishka brings creativity to NGO management. She oversees cultural activities and organizes regular dance classes.",
    img: "/images/team-anishka.png"
  },
  {
    name: "Priya Srivastava",
    role: "Extra-Curricular Coordinator",
    desc: "Business Process Consultant at SAP, Priya excels in optimizing workflows. She works with children to enhance confidence through extracurricular activities.",
    img: "/images/team-priya.png"
  }
];

const Team = () => {
  return (
    <div className="w-full bg-white min-h-screen">
      <Hero 
        title="Our Team" 
        imageSrc="/images/team_hero.png" 
        overlayColor="bg-ultra-violet"
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Our Team' }]} 
      />

      {/* Intro */}
      <section className="py-20 text-center px-4">
        <div className="max-w-3xl mx-auto">
          <p className="text-xl text-gray-600">
            Meet the dedicated individuals who make our mission possible.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (idx % 3) * 0.1 }}
                className="bg-gray-50 rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all group"
              >
                <div className="aspect-square bg-gray-200 overflow-hidden relative">
                  <img src={member.img} alt={member.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-orioles-orange font-bold mb-4 text-sm tracking-wide uppercase">{member.role}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{member.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
