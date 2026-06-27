import React from 'react';
import { Link } from 'wouter';
import { Instagram, Youtube, MapPin, Mail, Phone, HeartHandshake } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-ultra-violet text-white/90 pt-16 pb-8 border-t-[8px] border-orioles-orange">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Column 1: Follow Us */}
          <div>
            <div className="flex items-center gap-2 text-white font-serif font-bold text-2xl mb-6">
              <HeartHandshake className="text-orioles-orange" size={28} />
              <span>OHFH</span>
            </div>
            <p className="mb-6 text-white/80">Be the Hand That Brings Happiness. Together, we can create change that lasts.</p>
            <h4 className="text-xl font-serif mb-4 text-white">Follow Us</h4>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/one_handforhappiness" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-orioles-orange transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://youtube.com/@onehandforhappiness" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-orioles-orange transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-xl font-serif mb-6 text-white border-b-2 border-orioles-orange inline-block pb-1">Quick Links</h4>
            <ul className="flex flex-col gap-3">
              <li><Link href="/" className="hover:text-bright-lime transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-bright-lime transition-colors">About Us</Link></li>
              <li><Link href="/contact-us" className="hover:text-bright-lime transition-colors">Contact Us</Link></li>
              <li><Link href="/volunteer-application" className="hover:text-bright-lime transition-colors">Volunteer</Link></li>
              <li><Link href="/review" className="hover:text-bright-lime transition-colors">Reviews</Link></li>
              <li><Link href="/team" className="hover:text-bright-lime transition-colors">Team</Link></li>
            </ul>
          </div>

          {/* Column 3: Our Services */}
          <div>
            <h4 className="text-xl font-serif mb-6 text-white border-b-2 border-orioles-orange inline-block pb-1">Our Services</h4>
            <ul className="flex flex-col gap-3">
              <li><Link href="/child-education" className="hover:text-bright-lime transition-colors">Child Education</Link></li>
              <li><Link href="/women-empowerment" className="hover:text-bright-lime transition-colors">Women Empowerment</Link></li>
              <li><Link href="/skill-development" className="hover:text-bright-lime transition-colors">Skill Development</Link></li>
              <li><Link href="/exhibitions" className="hover:text-bright-lime transition-colors">Exhibitions</Link></li>
              <li><Link href="/workshop" className="hover:text-bright-lime transition-colors">Workshop</Link></li>
              <li><Link href="/midday-meals" className="hover:text-bright-lime transition-colors">Midday Meals</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h4 className="text-xl font-serif mb-6 text-white border-b-2 border-orioles-orange inline-block pb-1">Contact Info</h4>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-orioles-orange mt-1 shrink-0" size={20} />
                <span>Plot No.-76, Gali No.-1, Vill: Garhi Chaukhandi, Dhanni Colony, Near Sai Medical Store, Sector-68, Noida-201301</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-orioles-orange shrink-0" size={20} />
                <a href="mailto:onehandforhappiness@gmail.com" className="hover:text-bright-lime transition-colors">onehandforhappiness@gmail.com</a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-orioles-orange shrink-0" size={20} />
                <a href="tel:+919650010447" className="hover:text-bright-lime transition-colors">+91-9650010447</a>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/20 pt-8 mt-8 text-center text-white/60 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
          <p>Copyright 2025 One Hand for Happiness. All rights reserved.</p>
          <p>Designed By Sprint Digitech</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
