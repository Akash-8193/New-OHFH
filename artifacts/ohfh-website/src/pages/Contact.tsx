import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Send } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { toast } from '@/hooks/use-toast';

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

const Contact = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
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

  return (
    <div className="w-full bg-white">
      {/* Hero */}
      <section className="relative py-24 bg-ultra-violet text-center">
        <div className="container mx-auto px-4 relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-serif font-bold text-white mb-6"
          >
            Let's Create Change <span className="text-bright-lime">Together</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="text-xl text-white/90 max-w-3xl mx-auto"
          >
            At One Hand For Happiness, every voice matters, every question is important, and every partnership can create a lasting impact. Whether you want to volunteer, donate, collaborate, or simply learn more about our work, we are here to connect with you.
          </motion.p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-3 gap-12">
            
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-6">
              <h2 className="text-3xl font-serif font-bold text-ultra-violet mb-8">Contact Information</h2>
              
              <div className="bg-gray-50 p-6 rounded-2xl flex items-start gap-4 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-orioles-orange/10 text-orioles-orange rounded-full flex items-center justify-center shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Our Location</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Plot No.-76, Gali No.-1, Vill: Garhi Chaukhandi, Dhanni Colony, Near Sai Medical Store, Sector-68, Noida-201301 (Opp. Cleo Street Market, Sector-121)
                  </p>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-2xl flex items-start gap-4 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-persian-blue/10 text-persian-blue rounded-full flex items-center justify-center shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Phone Number</h4>
                  <a href="tel:+919650010447" className="text-gray-600 text-sm hover:text-persian-blue transition-colors">+91-9650010447</a>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-2xl flex items-start gap-4 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-bright-lime/20 text-lime-700 rounded-full flex items-center justify-center shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Email Address</h4>
                  <a href="mailto:onehandforhappiness@gmail.com" className="text-gray-600 text-sm hover:text-lime-700 transition-colors">onehandforhappiness@gmail.com</a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2 bg-white rounded-3xl shadow-xl border border-gray-100 p-8 md:p-12">
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-8">Send Us a Message</h2>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-gray-700">Your Name</FormLabel>
                          <FormControl>
                            <Input placeholder="John Doe" {...field} className="bg-gray-50 border-transparent focus:bg-white text-lg py-6" data-testid="input-name" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-gray-700">Email Address</FormLabel>
                          <FormControl>
                            <Input placeholder="john@example.com" {...field} className="bg-gray-50 border-transparent focus:bg-white text-lg py-6" data-testid="input-email" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-700">Subject</FormLabel>
                        <FormControl>
                          <Input placeholder="How can we help?" {...field} className="bg-gray-50 border-transparent focus:bg-white text-lg py-6" data-testid="input-subject" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-700">Your Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Write your message here..." 
                            className="min-h-[150px] bg-gray-50 border-transparent focus:bg-white text-lg resize-none"
                            {...field} 
                            data-testid="input-message"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button type="submit" className="w-full md:w-auto bg-ultra-violet hover:bg-purple-900 text-white font-bold py-6 px-10 rounded-full text-lg shadow-lg flex items-center gap-2" data-testid="button-submit">
                    Send Message <Send size={18} />
                  </Button>
                </form>
              </Form>
            </div>
            
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
