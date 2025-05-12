"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1536922246289-88c42f957773?q=80&w=2000&auto=format&fit=crop"
          alt="Fitness training background"
          fill
          priority
          className="object-cover brightness-50"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
      </div>

      <div className="container relative z-10 pt-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <span className="inline-block py-1 px-3 bg-primary/10 border border-primary/30 text-primary rounded-full text-sm font-semibold">
              Transform Your Body, Transform Your Life
            </span>
            <h1>
              Take Your Fitness to the <span className="text-gradient">Next Level</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Personalized training programs designed to help you reach your fitness goals, 
              whether you're just starting out or looking to push your limits.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="#contact" className="btn btn-primary">
                Start Your Journey
              </Link>
              <Link href="#services" className="btn btn-outline">
                Explore Programs
              </Link>
            </div>
            
            <div className="flex items-center gap-6 pt-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-background overflow-hidden">
                    <Image 
                      src={`https://randomuser.me/api/portraits/${i % 2 === 0 ? 'women' : 'men'}/${i + 30}.jpg`}
                      alt={`Client ${i}`}
                      width={40}
                      height={40}
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
              <div>
                <div className="font-bold text-accent">100+ Happy Clients</div>
                <div className="text-sm text-muted-foreground">Join our success stories</div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative h-[500px] hidden md:block"
          >
            <Image 
              src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1000&auto=format&fit=crop"
              alt="Personal trainer"
              fill
              className="object-cover rounded-xl"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute -bottom-6 -left-6 bg-secondary p-6 rounded-lg shadow-lg">
              <div className="text-primary text-5xl font-bold">10+</div>
              <div className="uppercase tracking-wider text-sm">Years Experience</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 