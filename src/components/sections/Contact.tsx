"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";

export default function Contact() {
  return (
    <section id="contact" className="section relative overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=2000&auto=format&fit=crop"
          alt="Gym equipment"
          fill
          priority
          className="object-cover brightness-25"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/50"></div>
      </div>
      
      <div className="container relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="mb-4">Start Your <span className="text-primary">Journey</span></h2>
          <p className="text-white">
            Ready to transform your body and life? Get in touch today and let's create 
            a personalized fitness plan that works for you.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="flex items-start gap-4">
              <div className="bg-primary/20 p-3 rounded-full text-primary mt-1">
                <FiPhone className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl mb-2">Call Us</h3>
                <p className="text-white font-bold">(555) 123-4567</p>
                <p className="text-sm text-white font-bold">Mon-Fri: 6am-9pm, Sat-Sun: 8am-7pm</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="bg-primary/20 p-3 rounded-full text-primary mt-1">
                <FiMail className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl mb-2">Email Us</h3>
                <p className="text-white font-bold">info@corefit.example.com</p>
                <p className="text-sm text-white font-bold">We'll respond within 24 hours</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="bg-primary/20 p-3 rounded-full text-primary mt-1">
                <FiMapPin className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl mb-2">Visit Us</h3>
                <p className="text-white font-bold">123 Fitness Street</p>
                <p className="text-white font-bold">Kannur, Kerala 670141</p>
              </div>
            </div>
            
            <div className="py-6">
              <div className="relative w-full h-64 rounded-lg overflow-hidden">
                <Image 
                  src="https://images.unsplash.com/photo-1534258936925-c58bed479fcb?q=80&w=1000&auto=format&fit=crop"
                  alt="Our gym"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-4">
                  <div className="font-bold text-lg">Our Premium Facility</div>
                  <div className="text-sm text-white">State-of-the-art equipment</div>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form className="bg-secondary p-8 rounded-xl border border-border">
              <h3 className="text-2xl mb-6">Get Your Free Consultation</h3>
              
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 bg-muted border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 bg-muted border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="john@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 bg-muted border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="(555) 123-4567"
                  />
                </div>
                
                <div>
                  <label htmlFor="goals" className="block text-sm font-medium mb-2">
                    Your Fitness Goals
                  </label>
                  <select 
                    id="goals"
                    className="w-full px-4 py-3 bg-muted border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="">Select your primary goal</option>
                    <option value="weight-loss">Weight Loss</option>
                    <option value="muscle-gain">Muscle Gain</option>
                    <option value="strength">Strength Training</option>
                    <option value="endurance">Endurance</option>
                    <option value="flexibility">Flexibility</option>
                    <option value="general">General Fitness</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Additional Information
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 bg-muted border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                    placeholder="Tell us about your fitness background and any specific challenges..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full btn btn-primary mt-4"
                >
                  Request Consultation
                </button>
                
                <p className="text-sm text-white text-center mt-4">
                  By submitting this form, you agree to our privacy policy.
                </p>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 