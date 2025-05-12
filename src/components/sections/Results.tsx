"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

const transformations = [
  {
    id: 1,
    name: "Jason",
    stats: "Lost 45 lbs in 4 months",
    before: "https://images.unsplash.com/photo-1584467541268-b040f83be3fd?q=80&w=800&auto=format&fit=crop",
    after: "https://images.unsplash.com/photo-1590507621108-433608c97823?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Lisa",
    stats: "Lost 30 lbs, gained muscle definition",
    before: "https://images.unsplash.com/photo-1566241362334-b2727aff8b34?q=80&w=800&auto=format&fit=crop",
    after: "https://images.unsplash.com/photo-1609899424411-32dee9435551?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Mark",
    stats: "Gained 20 lbs of muscle",
    before: "https://images.unsplash.com/photo-1520307893022-e2f72b0b1573?q=80&w=800&auto=format&fit=crop",
    after: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800&auto=format&fit=crop",
  }
];

export default function Results() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [showAfter, setShowAfter] = useState({});

  const toggleImage = (id) => {
    setShowAfter((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <section id="results" className="section bg-muted">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="mb-4">Real <span className="text-primary">Results</span></h2>
          <p className="text-muted-foreground">
            See the incredible transformations our clients have achieved through 
            dedication, hard work, and our personalized training programs.
          </p>
        </motion.div>

        {/* Transformation Tabs */}
        <div className="flex justify-center mb-10">
          <div className="flex space-x-2 p-1 bg-secondary rounded-lg">
            {transformations.map((item, index) => (
              <button
                key={item.id}
                onClick={() => setActiveIndex(index)}
                className={`px-5 py-2 rounded-md transition-colors ${
                  activeIndex === index ? "bg-primary text-white" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>

        {/* Selected Transformation */}
        <motion.div
          key={transformations[activeIndex].id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="grid md:grid-cols-2 gap-8">
            <div 
              className="group relative h-[500px] rounded-xl overflow-hidden cursor-pointer"
              onClick={() => toggleImage(transformations[activeIndex].id)}
            >
              <Image
                src={showAfter[transformations[activeIndex].id] ? 
                  transformations[activeIndex].after : 
                  transformations[activeIndex].before}
                alt={`${transformations[activeIndex].name} transformation`}
                fill
                className="object-cover transition-all duration-500"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
              
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-primary/80 px-5 py-3 rounded-full text-white font-bold">
                  {showAfter[transformations[activeIndex].id] ? "AFTER" : "BEFORE"}
                </div>
              </div>
              
              <div className="absolute bottom-0 left-0 p-6">
                <div className="text-2xl font-bold">{transformations[activeIndex].name}</div>
                <div className="text-primary">{transformations[activeIndex].stats}</div>
              </div>
              
              <div className="absolute top-4 right-4 text-sm bg-secondary/80 px-3 py-1 rounded-full">
                Click to toggle
              </div>
            </div>
            
            <div className="flex flex-col justify-center space-y-6 p-6 bg-secondary rounded-xl border border-border">
              <h3 className="text-2xl font-bold">{transformations[activeIndex].name}'s Journey</h3>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="bg-primary/20 p-3 rounded-full text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="font-medium">12-Week Program</div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="bg-primary/20 p-3 rounded-full text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </div>
                  <div className="font-medium">Custom Nutrition Plan</div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="bg-primary/20 p-3 rounded-full text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div className="font-medium">5 Training Sessions Per Week</div>
                </div>
              </div>
              
              <div className="mt-4 p-4 bg-muted rounded-lg border border-border">
                <p className="italic">
                  "I never thought I could achieve these results. The personalized approach made all 
                  the difference in helping me stay consistent and push through plateaus."
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 