import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { toast } from '@/hooks/use-toast';
import { Link } from 'wouter';
import Hero from '@/components/ui/Hero';
import SplitTextReveal from '@/components/ui/SplitTextReveal';
import CurtainReveal from '@/components/ui/CurtainReveal';
import ScrollReveal from '@/components/ui/ScrollReveal';
import Typewriter from '@/components/ui/Typewriter';

const formSchema = z.object({
  firstName: z.string().min(2, "Required"),
  lastName: z.string().min(2, "Required"),
  phone: z.string().min(10, "Required"),
  email: z.string().email("Invalid email"),
  message: z.string().optional(),
});

const Contact = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. We will get back to you soon.",
    });
    form.reset();
  };

  const tickerItems = [
    "Volunteer Impact", "Future Ready", "Community Support", "Health Support",
    "Volunteer Impact", "Future Ready", "Community Support", "Health Support",
    "Volunteer Impact", "Future Ready", "Community Support", "Health Support"
  ];

  return (
    <div className="w-full bg-white font-sans">
      
      <Hero 
        title="Contact us" 
        imageSrc="/src/assets/images/contact_hero.png" 
        overlayColor="bg-[#0c2444]"
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Contact Us' }]} 
      />

      {/* Yellow Ticker */}
      <div className="w-full bg-[#f94a13] overflow-hidden flex py-4 border-b-4 border-[#e03d0b]">
        <motion.div 
          animate={{ x: [0, -1000] }} 
          transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
          className="flex whitespace-nowrap items-center gap-8 px-4"
        >
          {tickerItems.map((item, idx) => (
            <div key={idx} className="flex items-center gap-8 shrink-0">
              <span className="text-[#0c2444] text-2xl font-bold tracking-tight">{item}</span>
              <svg className="w-6 h-6 text-[#0c2444]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L15 9H22L16 14L18 21L12 17L6 21L8 14L2 9H9L12 2Z" />
              </svg>
            </div>
          ))}
        </motion.div>
      </div>

      {/* 2. Information Cards Section */}
      <section className="py-24 bg-[#FAFAFA]">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid md:grid-cols-3 gap-8">
            
            {/* Phone Card */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white rounded-[2rem] p-10 shadow-[0_8px_30px_rgba(0,0,0,0.04)] flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-[#f94a13] rounded-full flex items-center justify-center mb-6">
                <Phone className="text-[#0c2444]" size={28} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-[#0c2444] mb-4">Phone Number</h3>
              <p className="text-gray-500 mb-6 text-[15px] leading-relaxed">
                We work closely with communities to identify real needs.
              </p>
              <div className="w-full h-[1px] bg-gray-100 mb-6"></div>
              <a href="tel:+919650010447" className="text-[#0c2444] font-bold text-lg hover:text-[#f94a13] transition-colors">
                Call Us: +91-9650010447
              </a>
            </motion.div>

            {/* Email Card */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="bg-white rounded-[2rem] p-10 shadow-[0_8px_30px_rgba(0,0,0,0.04)] flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-[#f94a13] rounded-full flex items-center justify-center mb-6">
                <Mail className="text-[#0c2444]" size={28} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-[#0c2444] mb-4">Email Address</h3>
              <p className="text-gray-500 mb-6 text-[15px] leading-relaxed">
                We work closely with communities to identify real needs.
              </p>
              <div className="w-full h-[1px] bg-gray-100 mb-6"></div>
              <a href="mailto:onehandforhappiness@gmail.com" className="text-[#0c2444] font-bold text-base hover:text-[#f94a13] transition-colors">
                Email: onehandforhappiness@gmail.com
              </a>
            </motion.div>

            {/* Location Card */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="bg-white rounded-[2rem] p-10 shadow-[0_8px_30px_rgba(0,0,0,0.04)] flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-[#f94a13] rounded-full flex items-center justify-center mb-6 relative">
                <MapPin className="text-[#0c2444]" size={28} strokeWidth={1.5} />
                <div className="absolute top-1 left-2 w-1.5 h-1.5 bg-orange-600 rounded-full"></div>
              </div>
              <h3 className="text-xl font-bold text-[#0c2444] mb-4">Our Location</h3>
              <p className="text-gray-500 mb-6 text-[15px] leading-relaxed">
                We work closely with communities to identify real needs.
              </p>
              <div className="w-full h-[1px] bg-gray-100 mb-6"></div>
              <p className="text-[#0c2444] font-bold text-sm leading-snug max-w-[200px]">
                Plot No.-76, Gali No.-1, Garhi Chaukhandi, Sector-68, Noida
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 3. Form & Image Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            
            {/* Left Image */}
            <div className="w-full lg:w-5/12 h-[600px] rounded-[2rem] overflow-hidden">
              <CurtainReveal>
                <img src="/src/assets/images/contact_form.png" alt="Volunteer" className="image-anime w-full h-full object-cover" />
              </CurtainReveal>
            </div>

            {/* Right Form */}
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="w-full lg:w-7/12">
              <h2 className="text-[17px] text-gray-700 font-medium leading-relaxed mb-10 max-w-2xl min-h-[50px]">
                <Typewriter text="We'd love to hear from you! Whether you want to volunteer, support our programs, or learn more about our initiatives." speed={30} delay={300} />
              </h2>

              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField control={form.control} name="firstName" render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[#0c2444] font-bold text-[15px]">First Name *</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter First Name*" className="bg-[#F9FAFB] border-0 h-14 rounded-xl px-5 text-gray-700 focus-visible:ring-1 focus-visible:ring-[#0c2444]" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                    <FormField control={form.control} name="lastName" render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[#0c2444] font-bold text-[15px]">Last Name *</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter Last Name" className="bg-[#F9FAFB] border-0 h-14 rounded-xl px-5 text-gray-700 focus-visible:ring-1 focus-visible:ring-[#0c2444]" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField control={form.control} name="phone" render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[#0c2444] font-bold text-[15px]">Phone Number *</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter Phone Number" className="bg-[#F9FAFB] border-0 h-14 rounded-xl px-5 text-gray-700 focus-visible:ring-1 focus-visible:ring-[#0c2444]" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                    <FormField control={form.control} name="email" render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[#0c2444] font-bold text-[15px]">Email Address *</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter Email Address" className="bg-[#F9FAFB] border-0 h-14 rounded-xl px-5 text-gray-700 focus-visible:ring-1 focus-visible:ring-[#0c2444]" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                  </div>

                  <FormField control={form.control} name="message" render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-[#0c2444] font-bold text-[15px]">Message</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Any Message..." className="bg-[#F9FAFB] border-0 min-h-[150px] rounded-xl p-5 text-gray-700 focus-visible:ring-1 focus-visible:ring-[#0c2444] resize-none" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />

                  <div className="pt-2">
                    <Button type="submit" className="btn-skew bg-[#f94a13] hover:bg-[#e03d0b] text-white font-bold text-[16px] px-8 py-7 rounded-xl transition-all shadow-lg border-0">
                      Submit Message
                    </Button>
                  </div>
                </form>
              </Form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. Map Section */}
      <section className="py-24 bg-white flex flex-col items-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center px-4 mb-16 max-w-3xl flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gray-200 mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-[#f94a13]"></div>
            <span className="text-[13px] font-bold tracking-wide text-[#0c2444]">Our Location</span>
          </div>
          <div className="text-4xl md:text-5xl font-bold text-[#0c2444] mb-6 tracking-tight">
            <SplitTextReveal text="Where We Make an Impact" stagger={0.03} />
          </div>
          <p className="text-gray-500 text-lg leading-relaxed min-h-[60px]">
            <Typewriter text="Our offices and outreach centers are located across key regions, allowing us to connect directly with communities and deliver programs efficiently and effectively." speed={20} delay={400} />
          </p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="w-full max-w-[1400px] px-4 md:px-8">
          <div className="w-full h-[500px] rounded-[2rem] overflow-hidden shadow-lg relative">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112108.97495066804!2d77.30310899388836!3d28.5878438257007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5a43173357b%3A0x37ffce30c8720fac!2sSector%2068%2C%20Noida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1714589324032!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale-[0.3] contrast-[1.1] opacity-90"
            ></iframe>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Contact;
