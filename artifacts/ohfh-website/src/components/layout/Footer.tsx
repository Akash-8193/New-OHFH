import React from 'react';
import { Link } from 'wouter';
import { Instagram, Youtube, MapPin, Mail, Phone, HeartHandshake } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="font-sans border-t border-gray-100">
      
      {/* Top White Section */}
      <div className="bg-white text-[#0c2444] pt-8 pb-12">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 items-start">
            
            {/* Column 1: Brand (Left side) */}
            <div className="flex flex-col items-start lg:items-center text-center lg:pr-8">
              <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mb-6 shadow-sm border border-gray-100">
                <HeartHandshake className="text-orioles-orange" size={40} />
              </div>
              <h3 className="text-2xl font-serif font-bold text-ultra-violet mb-2 uppercase tracking-wide">
                One Hand For <br/> Happiness
              </h3>
              <p className="text-gray-500 font-medium text-sm mt-4 italic">
                "Be the Hand That Brings Happiness."
              </p>
            </div>

            {/* Column 2: Quick Links */}
            <div>
              <ul className="flex flex-col gap-5">
                {['Home', 'About Us', 'Contact Us', 'Volunteer', 'Reviews', 'Team'].map((item, idx) => {
                  const path = item === 'Home' ? '/' : item === 'About Us' ? '/about' : item === 'Reviews' ? '/review' : `/${item.toLowerCase().replace(' ', '-')}`;
                  return (
                    <li key={idx}>
                      <Link href={path} className="text-ultra-violet hover:text-orioles-orange font-bold text-lg transition-colors flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-bright-lime"></span> {item}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Column 3: Services */}
            <div>
              <ul className="flex flex-col gap-5">
                {['Child Education', 'Women Empowerment', 'Skill Development', 'Exhibitions', 'Workshop', 'Midday Meals'].map((item, idx) => {
                  const path = `/${item.toLowerCase().replace(' ', '-')}`;
                  return (
                    <li key={idx}>
                      <Link href={path} className="text-ultra-violet hover:text-orioles-orange font-bold text-lg transition-colors flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-bright-lime"></span> {item}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Column 4: Contact Info (Right side with teardrops) */}
            <div className="flex flex-col gap-8">
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 bg-ultra-violet text-white rounded-r-full rounded-b-full rounded-tl-sm flex items-center justify-center shrink-0 shadow-md">
                  <Phone size={20} />
                </div>
                <a href="tel:+919650010447" className="text-ultra-violet font-bold text-lg hover:text-orioles-orange transition-colors">
                  +91-9650010447
                </a>
              </div>
              
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 bg-ultra-violet text-white rounded-r-full rounded-b-full rounded-tl-sm flex items-center justify-center shrink-0 shadow-md">
                  <Mail size={20} />
                </div>
                <a href="mailto:onehandforhappiness@gmail.com" className="text-ultra-violet font-bold text-[15px] hover:text-orioles-orange transition-colors break-all">
                  onehandforhappiness<br/>@gmail.com
                </a>
              </div>

              <div className="flex items-center gap-6">
                <div className="w-12 h-12 bg-ultra-violet text-white rounded-r-full rounded-b-full rounded-tl-sm flex items-center justify-center shrink-0 shadow-md">
                  <MapPin size={20} />
                </div>
                <p className="text-ultra-violet font-bold leading-snug">
                  Sector-68, Noida-201301<br/>
                  <span className="font-medium text-sm text-gray-500">Garhi Chaukhandi, Dhanni</span>
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Layered Wavy Divider */}
      <div className="w-full leading-[0] relative -mt-1 bg-ultra-violet">
        <svg viewBox="0 0 1440 220" preserveAspectRatio="none" className="block w-full h-[60px] md:h-[100px]">
          {/* Layer 1: Bright Lime / Accent */}
          <path fill="#bada55" d="M0,160L48,144C96,128,192,96,288,96C384,96,480,128,576,138.7C672,149,768,139,864,117.3C960,96,1056,64,1152,58.7C1248,53,1344,75,1392,85.3L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
          {/* Layer 2: Orioles Orange */}
          <path fill="#f94a13" d="M0,192L48,181.3C96,171,192,149,288,149.3C384,149,480,171,576,170.7C672,171,768,149,864,128C960,107,1056,85,1152,90.7C1248,96,1344,128,1392,144L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
          {/* Layer 3: White background mask (top part of svg) */}
          <path fill="#ffffff" d="M0,128L48,112C96,96,192,64,288,64C384,64,480,96,576,112C672,128,768,128,864,106.7C960,85,1056,43,1152,32C1248,21,1344,43,1392,53.3L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
        </svg>
      </div>

      {/* Solid Dark Bottom Section */}
      <div className="bg-ultra-violet text-white pt-4 pb-16">
        <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row justify-between items-center md:items-end gap-8">
          
          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-5xl font-bold tracking-wide mb-3 text-white">
              ONE HAND FOR HAPPINESS
            </h2>
            <p className="text-white/60 font-medium">
              &copy; 2025 All rights reserved.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end gap-6">
            <div className="flex gap-4">
              <a href="https://www.instagram.com/one_handforhappiness" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-orioles-orange transition-colors">
                <Instagram size={18} />
              </a>
              <a href="https://youtube.com/@onehandforhappiness" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-orioles-orange transition-colors">
                <Youtube size={18} />
              </a>
            </div>
            <div className="flex items-center gap-4 text-white font-bold text-lg md:text-xl tracking-wide">
              <div className="w-8 h-[3px] bg-bright-lime rounded-full hidden md:block"></div>
              <span>Designed By Sprint Digitech</span>
            </div>
          </div>

        </div>
      </div>
      
    </footer>
  );
};

export default Footer;
