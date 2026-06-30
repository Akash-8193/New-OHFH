import React from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Heart, Users, Sparkles, Globe, ArrowRight } from 'lucide-react';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { toast } from '@/hooks/use-toast';
import Hero from '@/components/ui/Hero';

const formSchema = z.object({
  firstName: z.string().min(2, "Required"),
  lastName: z.string().min(2, "Required"),
  phoneNo: z.string().min(10, "Valid phone required"),
  email: z.string().email("Valid email required"),
  ageGroup: z.string().min(1, "Please select an age group"),
  address: z.string().min(5, "Address is required"),
  city: z.string().min(2, "City is required"),
  state: z.string().min(2, "State is required"),
  zipCode: z.string().min(4, "Zip code is required"),
  gender: z.enum(["Male", "Female"], { required_error: "Please select a gender" }),
  aadharNo: z.string().min(12, "Valid Aadhar required"),
  courses: z.string().min(2, "Please specify courses/interests"),
  availability: z.string().min(2, "Please specify your availability"),
  commitHours: z.string().min(1, "Please specify your commitment"),
  whyVolunteer: z.string().min(10, "Please briefly explain why you want to join"),
});

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const VolunteerApplication = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "", lastName: "", phoneNo: "", email: "", ageGroup: "",
      address: "", city: "", state: "", zipCode: "", aadharNo: "",
      courses: "", availability: "", commitHours: "", whyVolunteer: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
    toast({ title: "Application Submitted!", description: "Thank you for volunteering. We will review your application." });
    form.reset();
  };

  return (
    <div className="w-full bg-[#f8f9fa] min-h-screen">
      <Hero 
        title="Volunteer With Us" 
        imageSrc="/src/assets/images/team_hero.png" 
        overlayColor="bg-ultra-violet"
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Volunteer' }]} 
      />

      <div className="container mx-auto px-4 max-w-7xl py-24">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Left Sidebar - Sticky */}
          <div className="lg:w-4/12">
            <div className="sticky top-24 bg-[#0c2444] rounded-[40px] p-10 text-white overflow-hidden shadow-2xl">
              {/* Background Decoration */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-orioles-orange rounded-full blur-[100px] opacity-20 -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
              
              <div className="relative z-10">
                <h2 className="text-4xl font-serif font-bold mb-6 leading-tight">
                  Be The <span className="text-orioles-orange">Change</span> You Wish To See
                </h2>
                <p className="text-white/80 mb-10 leading-relaxed">
                  Volunteering is not just about giving your time; it's about building a stronger, more compassionate community. Join our global network of changemakers.
                </p>

                <div className="space-y-6 mb-10">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center shrink-0 text-bright-lime"><Heart size={20} /></div>
                    <div>
                      <h4 className="font-bold text-lg">Direct Impact</h4>
                      <p className="text-white/60 text-sm">Work directly with communities in need.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center shrink-0 text-orioles-orange"><Users size={20} /></div>
                    <div>
                      <h4 className="font-bold text-lg">Global Network</h4>
                      <p className="text-white/60 text-sm">Connect with passionate like-minded individuals.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center shrink-0 text-ultra-violet"><Sparkles size={20} /></div>
                    <div>
                      <h4 className="font-bold text-lg">Skill Building</h4>
                      <p className="text-white/60 text-sm">Gain valuable leadership and field experience.</p>
                    </div>
                  </div>
                </div>

                <div className="h-48 rounded-2xl overflow-hidden border-2 border-white/10 mt-8">
                  <img src="/src/assets/images/community_program.png" alt="Community" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>

          {/* Right Area - Form Application */}
          <div className="lg:w-8/12">
            <motion.div variants={fadeUp} initial="hidden" animate="show" className="bg-white p-8 md:p-12 rounded-[40px] shadow-xl border border-gray-100">
              <div className="mb-10">
                <h2 className="text-3xl font-serif font-bold text-gray-900 mb-2">Volunteer Application Form</h2>
                <p className="text-gray-500">Please provide your details below. All fields are required.</p>
              </div>

              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-10">
                  
                  {/* Section 1: Personal Information */}
                  <div className="space-y-6">
                    <h3 className="text-xl font-bold text-[#0c2444] border-b border-gray-100 pb-2">1. Personal Information</h3>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <FormField control={form.control} name="firstName" render={({ field }) => (
                        <FormItem><FormLabel className="font-semibold">First Name</FormLabel><FormControl><Input {...field} className="bg-gray-50 h-12 rounded-xl" placeholder="John" /></FormControl><FormMessage /></FormItem>
                      )} />
                      <FormField control={form.control} name="lastName" render={({ field }) => (
                        <FormItem><FormLabel className="font-semibold">Last Name</FormLabel><FormControl><Input {...field} className="bg-gray-50 h-12 rounded-xl" placeholder="Doe" /></FormControl><FormMessage /></FormItem>
                      )} />
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <FormField control={form.control} name="ageGroup" render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-semibold">Age Group</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl><SelectTrigger className="bg-gray-50 h-12 rounded-xl"><SelectValue placeholder="Select your age group" /></SelectTrigger></FormControl>
                            <SelectContent>
                              <SelectItem value="Under 18">Under 18</SelectItem>
                              <SelectItem value="18-25">18-25</SelectItem>
                              <SelectItem value="26-40">26-40</SelectItem>
                              <SelectItem value="41-55">41-55</SelectItem>
                              <SelectItem value="Over 55">Over 55</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )} />

                      <FormField control={form.control} name="gender" render={({ field }) => (
                        <FormItem className="space-y-3">
                          <FormLabel className="font-semibold">Gender</FormLabel>
                          <FormControl>
                            <RadioGroup onValueChange={field.onChange} defaultValue={field.value} className="flex gap-6 pt-2">
                              <FormItem className="flex items-center space-x-2 space-y-0">
                                <FormControl><RadioGroupItem value="Male" /></FormControl>
                                <FormLabel className="font-normal cursor-pointer">Male</FormLabel>
                              </FormItem>
                              <FormItem className="flex items-center space-x-2 space-y-0">
                                <FormControl><RadioGroupItem value="Female" /></FormControl>
                                <FormLabel className="font-normal cursor-pointer">Female</FormLabel>
                              </FormItem>
                            </RadioGroup>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )} />
                    </div>
                  </div>

                  {/* Section 2: Contact Details */}
                  <div className="space-y-6">
                    <h3 className="text-xl font-bold text-[#0c2444] border-b border-gray-100 pb-2">2. Contact Details</h3>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <FormField control={form.control} name="email" render={({ field }) => (
                        <FormItem><FormLabel className="font-semibold">Email Address</FormLabel><FormControl><Input {...field} className="bg-gray-50 h-12 rounded-xl" placeholder="john@example.com" /></FormControl><FormMessage /></FormItem>
                      )} />
                      <FormField control={form.control} name="phoneNo" render={({ field }) => (
                        <FormItem><FormLabel className="font-semibold">Phone Number</FormLabel><FormControl><Input {...field} className="bg-gray-50 h-12 rounded-xl" placeholder="+91 9876543210" /></FormControl><FormMessage /></FormItem>
                      )} />
                    </div>

                    <FormField control={form.control} name="address" render={({ field }) => (
                      <FormItem><FormLabel className="font-semibold">Street Address</FormLabel><FormControl><Input {...field} className="bg-gray-50 h-12 rounded-xl" placeholder="123 Main St, Apartment 4B" /></FormControl><FormMessage /></FormItem>
                    )} />

                    <div className="grid md:grid-cols-3 gap-6">
                      <FormField control={form.control} name="city" render={({ field }) => (
                        <FormItem><FormLabel className="font-semibold">City</FormLabel><FormControl><Input {...field} className="bg-gray-50 h-12 rounded-xl" placeholder="Mumbai" /></FormControl><FormMessage /></FormItem>
                      )} />
                      <FormField control={form.control} name="state" render={({ field }) => (
                        <FormItem><FormLabel className="font-semibold">State</FormLabel><FormControl><Input {...field} className="bg-gray-50 h-12 rounded-xl" placeholder="Maharashtra" /></FormControl><FormMessage /></FormItem>
                      )} />
                      <FormField control={form.control} name="zipCode" render={({ field }) => (
                        <FormItem><FormLabel className="font-semibold">Zip Code</FormLabel><FormControl><Input {...field} className="bg-gray-50 h-12 rounded-xl" placeholder="400001" /></FormControl><FormMessage /></FormItem>
                      )} />
                    </div>
                  </div>

                  {/* Section 3: Application Details */}
                  <div className="space-y-6">
                    <h3 className="text-xl font-bold text-[#0c2444] border-b border-gray-100 pb-2">3. Application Details</h3>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <FormField control={form.control} name="aadharNo" render={({ field }) => (
                        <FormItem><FormLabel className="font-semibold">Aadhar Card No.</FormLabel><FormControl><Input {...field} className="bg-gray-50 h-12 rounded-xl" placeholder="XXXX-XXXX-XXXX" /></FormControl><FormMessage /></FormItem>
                      )} />
                      <FormField control={form.control} name="courses" render={({ field }) => (
                        <FormItem><FormLabel className="font-semibold">Areas of Interest</FormLabel><FormControl><Input {...field} className="bg-gray-50 h-12 rounded-xl" placeholder="e.g. Teaching, Mentoring, Events" /></FormControl><FormMessage /></FormItem>
                      )} />
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <FormField control={form.control} name="availability" render={({ field }) => (
                        <FormItem><FormLabel className="font-semibold">Availability</FormLabel><FormControl><Input {...field} className="bg-gray-50 h-12 rounded-xl" placeholder="e.g. Weekends, Evenings" /></FormControl><FormMessage /></FormItem>
                      )} />
                      <FormField control={form.control} name="commitHours" render={({ field }) => (
                        <FormItem><FormLabel className="font-semibold">Hours per week</FormLabel><FormControl><Input {...field} className="bg-gray-50 h-12 rounded-xl" placeholder="e.g. 5-10 hours" /></FormControl><FormMessage /></FormItem>
                      )} />
                    </div>

                    <FormField control={form.control} name="whyVolunteer" render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-semibold">Why do you want to volunteer?</FormLabel>
                        <FormControl>
                          <textarea {...field} className="w-full bg-gray-50 border border-gray-200 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-[#0c2444]/20" rows={4} placeholder="Tell us about your motivation..."></textarea>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                  </div>

                  <div className="pt-8 mt-8 border-t border-gray-100">
                    <Button type="submit" className="w-full bg-orioles-orange hover:bg-orange-600 text-white font-bold py-7 text-xl rounded-full shadow-[0_10px_30px_rgba(249,74,19,0.3)] transition-all flex items-center justify-center gap-2" data-testid="button-submit-volunteer">
                      Submit Application <ArrowRight size={20} />
                    </Button>
                  </div>

                </form>
              </Form>

            </motion.div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default VolunteerApplication;
