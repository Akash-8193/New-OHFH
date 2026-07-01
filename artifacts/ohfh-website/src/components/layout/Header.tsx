import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { MapPin, Mail, Phone, Facebook, Twitter, Github, Menu, X, HeartHandshake, ChevronDown } from 'lucide-react';
import { SiBitbucket } from 'react-icons/si';
import { motion, AnimatePresence } from 'framer-motion';
import MagneticButton from '@/components/ui/MagneticButton';

const Header = () => {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => {
    setMobileMenuOpen(false);
    setServicesOpen(false);
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Contact Us', path: '/contact-us' },
    { name: 'Reviews', path: '/review' },
  ];

  const serviceLinks = [
    { name: 'Child Education', path: '/child-education' },
    { name: 'Women Empowerment', path: '/women-empowerment' },
    { name: 'Skill Development', path: '/skill-development' },
    { name: 'Exhibitions', path: '/exhibitions' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'shadow-md' : ''}`}>
      {/* Top Bar */}
      <div className="hidden md:flex bg-ultra-violet text-white text-xs py-2 px-4 md:px-8 flex-col md:flex-row justify-between items-center z-50 relative">
        <div className="flex flex-col md:flex-row gap-2 md:gap-6 items-center mb-2 md:mb-0">
          <span className="flex items-center gap-1"><MapPin size={12} /> Area: Noida, Uttar Pradesh</span>
          <span className="flex items-center gap-1"><Mail size={12} /> onehandforhappiness@gmail.com</span>
          <span className="flex items-center gap-1"><Phone size={12} /> +91-9650010447</span>
        </div>
        <div className="flex gap-4 items-center">
          <a href="#" className="hover:text-bright-lime transition-colors"><Facebook size={14} /></a>
          <a href="#" className="hover:text-bright-lime transition-colors"><Twitter size={14} /></a>
          <a href="#" className="hover:text-bright-lime transition-colors"><Github size={14} /></a>
          <a href="#" className="hover:text-bright-lime transition-colors"><SiBitbucket size={14} /></a>
        </div>
      </div>

      {/* Main Nav */}
      <div className={`bg-white transition-all duration-300 ${isScrolled ? 'py-3' : 'py-5'} px-4 md:px-8 flex justify-between items-center relative z-40`}>
        <Link href="/" onClick={closeMenu} className="flex items-center gap-2 text-ultra-violet font-serif font-bold text-xl md:text-2xl z-50">
          <HeartHandshake className="text-orioles-orange" size={32} />
          <span>One Hand for Happiness</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          <Link href="/" className={`font-medium transition-colors hover:text-persian-blue ${location === '/' ? 'text-persian-blue' : 'text-foreground'}`}>Home</Link>
          <Link href="/about" className={`font-medium transition-colors hover:text-persian-blue ${location === '/about' ? 'text-persian-blue' : 'text-foreground'}`}>About</Link>
          
          <div 
            className="relative group"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button className="flex items-center gap-1 font-medium text-foreground hover:text-persian-blue transition-colors">
              Our Services <ChevronDown size={16} />
            </button>
            <AnimatePresence>
              {servicesOpen && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-0 mt-2 w-56 bg-white shadow-xl rounded-lg overflow-hidden border border-gray-100 flex flex-col py-2"
                >
                  {serviceLinks.map(link => (
                    <Link key={link.path} href={link.path} className="px-4 py-2 hover:bg-gray-50 hover:text-persian-blue transition-colors text-sm font-medium">
                      {link.name}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link href="/contact-us" className={`font-medium transition-colors hover:text-persian-blue ${location === '/contact-us' ? 'text-persian-blue' : 'text-foreground'}`}>Contact Us</Link>
          <Link href="/review" className={`font-medium transition-colors hover:text-persian-blue ${location === '/review' ? 'text-persian-blue' : 'text-foreground'}`}>Reviews</Link>
        </nav>

        <div className="hidden lg:block">
          <MagneticButton>
            <a href="#" onClick={(e) => e.preventDefault()} className="bg-orioles-orange text-white px-6 py-3 rounded-full font-bold shadow-lg hover:bg-orange-600 transition-colors inline-block">
              DONATE NOW
            </a>
          </MagneticButton>
        </div>

        {/* Mobile Toggle */}
        <button className="lg:hidden text-ultra-violet z-50 relative" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 20 }}
              className="fixed inset-0 bg-white z-40 pt-32 md:pt-48 px-6 pb-6 flex flex-col gap-6 lg:hidden overflow-y-auto"
            >
              {navLinks.slice(0, 2).map(link => (
                <Link key={link.path} href={link.path} onClick={closeMenu} className="text-2xl font-serif text-ultra-violet border-b border-gray-100 pb-4">
                  {link.name}
                </Link>
              ))}
              
              <div className="border-b border-gray-100 pb-4">
                <span className="text-2xl font-serif text-ultra-violet mb-4 block">Our Services</span>
                <div className="flex flex-col gap-3 pl-4">
                  {serviceLinks.map(link => (
                    <Link key={link.path} href={link.path} onClick={closeMenu} className="text-lg text-gray-600">
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>
              
              {navLinks.slice(2).map(link => (
                <Link key={link.path} href={link.path} onClick={closeMenu} className="text-2xl font-serif text-ultra-violet border-b border-gray-100 pb-4">
                  {link.name}
                </Link>
              ))}

              <a href="#" onClick={(e) => e.preventDefault()} className="bg-orioles-orange text-white text-center px-6 py-4 rounded-full font-bold shadow-lg mt-4 text-xl">
                DONATE NOW
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
