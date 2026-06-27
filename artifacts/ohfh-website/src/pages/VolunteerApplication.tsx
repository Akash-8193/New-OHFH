import React from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { toast } from '@/hooks/use-toast';

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
});

const VolunteerApplication = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      phoneNo: "",
      email: "",
      address: "",
      city: "",
      state: "",
      zipCode: "",
      aadharNo: "",
      courses: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
    toast({
      title: "Application Submitted!",
      description: "Thank you for volunteering. We will review your application.",
    });
    form.reset();
  };

  return (
    <div className="w-full bg-gray-50 min-h-screen pb-24">
      {/* Hero */}
      <section className="relative py-24 bg-ultra-violet text-center mb-12">
        <div className="container mx-auto px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-serif font-bold text-white mb-4"
          >
            Be the Change
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="text-xl text-bright-lime font-medium"
          >
            Volunteer & Become a Member
          </motion.p>
        </div>
      </section>

      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-2">Volunteer Application</h2>
            <p className="text-gray-500">Please fill out the form below to join our mission.</p>
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              
              <div className="grid md:grid-cols-2 gap-6">
                <FormField control={form.control} name="firstName" render={({ field }) => (
                  <FormItem><FormLabel>First Name</FormLabel><FormControl><Input {...field} className="bg-gray-50" /></FormControl><FormMessage /></FormItem>
                )} />
                <FormField control={form.control} name="lastName" render={({ field }) => (
                  <FormItem><FormLabel>Last Name</FormLabel><FormControl><Input {...field} className="bg-gray-50" /></FormControl><FormMessage /></FormItem>
                )} />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <FormField control={form.control} name="phoneNo" render={({ field }) => (
                  <FormItem><FormLabel>Phone No</FormLabel><FormControl><Input {...field} className="bg-gray-50" /></FormControl><FormMessage /></FormItem>
                )} />
                <FormField control={form.control} name="email" render={({ field }) => (
                  <FormItem><FormLabel>Email</FormLabel><FormControl><Input {...field} className="bg-gray-50" /></FormControl><FormMessage /></FormItem>
                )} />
              </div>

              <FormField control={form.control} name="ageGroup" render={({ field }) => (
                <FormItem>
                  <FormLabel>Age Group</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="bg-gray-50">
                        <SelectValue placeholder="Select your age group" />
                      </SelectTrigger>
                    </FormControl>
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

              <FormField control={form.control} name="address" render={({ field }) => (
                <FormItem><FormLabel>Address</FormLabel><FormControl><Input {...field} className="bg-gray-50" /></FormControl><FormMessage /></FormItem>
              )} />

              <div className="grid md:grid-cols-3 gap-6">
                <FormField control={form.control} name="city" render={({ field }) => (
                  <FormItem><FormLabel>City</FormLabel><FormControl><Input {...field} className="bg-gray-50" /></FormControl><FormMessage /></FormItem>
                )} />
                <FormField control={form.control} name="state" render={({ field }) => (
                  <FormItem><FormLabel>State</FormLabel><FormControl><Input {...field} className="bg-gray-50" /></FormControl><FormMessage /></FormItem>
                )} />
                <FormField control={form.control} name="zipCode" render={({ field }) => (
                  <FormItem><FormLabel>Zip Code</FormLabel><FormControl><Input {...field} className="bg-gray-50" /></FormControl><FormMessage /></FormItem>
                )} />
              </div>

              <FormField control={form.control} name="gender" render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormLabel>Gender</FormLabel>
                  <FormControl>
                    <RadioGroup onValueChange={field.onChange} defaultValue={field.value} className="flex gap-6">
                      <FormItem className="flex items-center space-x-2 space-y-0">
                        <FormControl><RadioGroupItem value="Male" /></FormControl>
                        <FormLabel className="font-normal">Male</FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-2 space-y-0">
                        <FormControl><RadioGroupItem value="Female" /></FormControl>
                        <FormLabel className="font-normal">Female</FormLabel>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )} />

              <div className="grid md:grid-cols-2 gap-6">
                <FormField control={form.control} name="aadharNo" render={({ field }) => (
                  <FormItem><FormLabel>Aadhar Card No.</FormLabel><FormControl><Input {...field} className="bg-gray-50" /></FormControl><FormMessage /></FormItem>
                )} />
                <FormField control={form.control} name="courses" render={({ field }) => (
                  <FormItem><FormLabel>Courses / Interests</FormLabel><FormControl><Input {...field} className="bg-gray-50" placeholder="e.g. Teaching, Mentoring" /></FormControl><FormMessage /></FormItem>
                )} />
              </div>

              <div className="pt-6">
                <Button type="submit" className="w-full bg-orioles-orange hover:bg-orange-600 text-white font-bold py-6 text-lg rounded-full shadow-lg" data-testid="button-submit-volunteer">
                  Submit Form
                </Button>
              </div>

            </form>
          </Form>

        </div>
      </div>
    </div>
  );
};

export default VolunteerApplication;
