"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FiChevronLeft, FiChevronRight, FiStar } from "react-icons/fi";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Lost 30 lbs in 6 months",
    quote: "CoreFit completely changed my approach to fitness. The personalized training program was exactly what I needed to stay motivated and see real results.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Gained 15 lbs of muscle",
    quote: "As someone who struggled to build muscle, the guidance I received was invaluable. The nutrition plan alongside my training made all the difference.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    role: "Marathon runner",
    quote: "The strength training program designed for me improved my marathon time by 15 minutes. I'm now in the best shape of my life at 42!",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 4,
    name: "James Wilson",
    role: "Former athlete, now 50+",
    quote: "After my sports career ended, I let myself go. CoreFit helped me regain my fitness and confidence. The trainers understand how to work with former athletes.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop"
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const next = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section id="testimonials" className="section">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="mb-4">Success <span className="text-primary">Stories</span></h2>
          <p className="text-muted-foreground">
            Hear from our clients who have transformed their bodies and lives 
            through dedication and our expert guidance.
          </p>
        </motion.div>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Main testimonial */}
          <motion.div
            key={testimonials[currentIndex].id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-secondary rounded-2xl p-8 md:p-12 border border-border"
          >
            <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
              <div className="relative w-20 h-20 md:w-32 md:h-32 rounded-full overflow-hidden flex-shrink-0 mx-auto md:mx-0">
                <Image
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  fill
                  className="object-cover"
                />
              </div>
              
              <div className="flex-1">
                <div className="flex items-center text-accent mb-4">
                  {[...Array(5)].map((_, i) => (
                    <FiStar key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                
                <blockquote className="text-lg md:text-xl italic mb-6">
                  "{testimonials[currentIndex].quote}"
                </blockquote>
                
                <div>
                  <div className="font-bold text-lg">{testimonials[currentIndex].name}</div>
                  <div className="text-primary">{testimonials[currentIndex].role}</div>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Navigation buttons */}
          <div className="flex justify-center mt-8 gap-4">
            <button
              onClick={prev}
              className="p-3 rounded-full bg-secondary border border-border hover:bg-muted transition-colors"
              aria-label="Previous testimonial"
            >
              <FiChevronLeft className="w-6 h-6" />
            </button>
            
            <button
              onClick={next}
              className="p-3 rounded-full bg-secondary border border-border hover:bg-muted transition-colors"
              aria-label="Next testimonial"
            >
              <FiChevronRight className="w-6 h-6" />
            </button>
          </div>
          
          {/* Indicators */}
          <div className="flex justify-center mt-6 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? "bg-primary" : "bg-muted-foreground/30"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 