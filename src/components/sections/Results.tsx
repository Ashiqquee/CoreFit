"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { FiArrowRight, FiBarChart2, FiCalendar, FiClock, FiHeart, FiTrendingUp, FiUsers } from "react-icons/fi";

interface ClientResult {
  id: number;
  name: string;
  age: string;
  goal: string;
  achievement: string;
  stats: {
    weightLoss?: string;
    strengthGain?: string;
    muscleGain?: string;
    endurance?: string;
    timeframe: string;
  };
  testimonial: string;
  program: string;
  icon: JSX.Element;
  color: string;
}

const clientResults: ClientResult[] = [
  {
    id: 1,
    name: "Jason Roberts",
    age: "34",
    goal: "Weight Loss",
    achievement: "Lost 45 lbs and reduced body fat from 32% to 15%",
    stats: {
      weightLoss: "45 lbs",
      strengthGain: "Doubled bench press capacity",
      timeframe: "6 months"
    },
    testimonial: "CoreFit changed my entire relationship with fitness. The program was challenging but sustainable, and the nutrition guidance made all the difference. I've maintained my weight loss for over a year now!",
    program: "Fat Loss Focus + Strength Foundation",
    icon: <FiTrendingUp className="w-6 h-6" />,
    color: "from-emerald-500 to-teal-600"
  },
  {
    id: 2,
    name: "Emma Chen",
    age: "28",
    goal: "Toning & Definition",
    achievement: "Lost 22 lbs and competed in her first fitness competition",
    stats: {
      weightLoss: "22 lbs",
      endurance: "Completed first 10K run",
      muscleGain: "Visible muscle definition",
      timeframe: "8 months"
    },
    testimonial: "After years of on-and-off gym attendance with minimal results, having a structured program and accountability made all the difference. I'm amazed by what my body is capable of now!",
    program: "Aesthetic Definition + Cardio Conditioning",
    icon: <FiHeart className="w-6 h-6" />,
    color: "from-rose-500 to-pink-600"
  },
  {
    id: 3,
    name: "Mark Johnson",
    age: "42",
    goal: "Muscle Building",
    achievement: "Gained 18 lbs of lean muscle and overcame chronic back pain",
    stats: {
      muscleGain: "18 lbs of lean mass",
      strengthGain: "+150% in all major lifts",
      timeframe: "12 months"
    },
    testimonial: "At 42, I thought my best fitness days were behind me. I was wrong. Not only did I build more muscle than in my 20s, but my chronic back pain is gone. The training was perfectly tailored to work around my old injuries.",
    program: "Hypertrophy Focus + Corrective Exercise",
    icon: <FiBarChart2 className="w-6 h-6" />,
    color: "from-blue-500 to-indigo-600"
  }
];

export default function Results() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeClient = clientResults[activeIndex];

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
            See the remarkable achievements our clients have made through 
            dedication, consistent effort, and our personalized training programs.
          </p>
        </motion.div>

        {/* Client Tabs */}
        <div className="flex justify-center mb-10">
          <div className="flex flex-wrap space-x-2 p-1 bg-secondary rounded-lg">
            {clientResults.map((client, index) => (
              <button
                key={client.id}
                onClick={() => setActiveIndex(index)}
                className={`px-5 py-2 rounded-md transition-colors ${
                  activeIndex === index ? "bg-primary text-white" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {client.name}
              </button>
            ))}
          </div>
        </div>

        {/* Selected Client Result */}
        <motion.div
          key={activeClient.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="grid md:grid-cols-2 gap-8">
            {/* Stats Card */}
            <div className="bg-secondary rounded-xl overflow-hidden border border-border">
              <div className={`bg-gradient-to-r ${activeClient.color} p-6 text-white`}>
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{activeClient.name}</h3>
                    <div className="flex items-center space-x-2 text-white/80">
                      <span>Age: {activeClient.age}</span>
                      <span>•</span>
                      <span>Goal: {activeClient.goal}</span>
                    </div>
                  </div>
                  <div className="bg-white/20 p-4 rounded-full">
                    {activeClient.icon}
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="mb-6">
                  <div className="text-xl font-bold mb-2">Achievement</div>
                  <div className="text-muted-foreground">{activeClient.achievement}</div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {activeClient.stats.weightLoss && (
                    <div className="bg-muted p-4 rounded-lg">
                      <div className="flex items-center mb-2">
                        <FiTrendingUp className="w-5 h-5 text-primary mr-2" />
                        <div className="font-medium">Weight Loss</div>
                      </div>
                      <div className="text-xl font-bold">{activeClient.stats.weightLoss}</div>
                    </div>
                  )}
                  
                  {activeClient.stats.strengthGain && (
                    <div className="bg-muted p-4 rounded-lg">
                      <div className="flex items-center mb-2">
                        <FiBarChart2 className="w-5 h-5 text-primary mr-2" />
                        <div className="font-medium">Strength</div>
                      </div>
                      <div className="text-l">{activeClient.stats.strengthGain}</div>
                    </div>
                  )}
                  
                  {activeClient.stats.muscleGain && (
                    <div className="bg-muted p-4 rounded-lg">
                      <div className="flex items-center mb-2">
                        <FiUsers className="w-5 h-5 text-primary mr-2" />
                        <div className="font-medium">Muscle</div>
                      </div>
                      <div className="text-l">{activeClient.stats.muscleGain}</div>
                    </div>
                  )}
                  
                  {activeClient.stats.endurance && (
                    <div className="bg-muted p-4 rounded-lg">
                      <div className="flex items-center mb-2">
                        <FiHeart className="w-5 h-5 text-primary mr-2" />
                        <div className="font-medium">Endurance</div>
                      </div>
                      <div className="text-l">{activeClient.stats.endurance}</div>
                    </div>
                  )}
                  
                  <div className="bg-muted p-4 rounded-lg">
                    <div className="flex items-center mb-2">
                      <FiCalendar className="w-5 h-5 text-primary mr-2" />
                      <div className="font-medium">Timeframe</div>
                    </div>
                    <div className="text-l">{activeClient.stats.timeframe}</div>
                  </div>
                </div>
                
                <div>
                  <div className="flex items-center mb-2">
                    <FiClock className="w-5 h-5 text-primary mr-2" />
                    <div className="font-medium">Program</div>
                  </div>
                  <div className="text-muted-foreground">{activeClient.program}</div>
                </div>
              </div>
            </div>
            
            {/* Testimonial Card */}
            <div className="flex flex-col justify-center space-y-6 p-8 bg-secondary rounded-xl border border-border relative">
              <div className="absolute top-4 right-4 text-4xl text-primary/20">"</div>
              
              <h3 className="text-2xl font-bold mb-2">Client Testimonial</h3>
              
              <blockquote className="text-lg italic text-muted-foreground mb-6 relative z-10">
                "{activeClient.testimonial}"
              </blockquote>
              
              <div className="mt-auto pt-6 border-t border-border">
                <div className="flex items-center">
                  <div className="bg-primary/20 p-4 rounded-full text-primary mr-4">
                    <span className="text-lg font-bold">{activeClient.name.split(' ')[0][0]}{activeClient.name.split(' ')[1][0]}</span>
                  </div>
                  <div>
                    <div className="font-bold">{activeClient.name}</div>
                    <div className="text-primary">{activeClient.goal} Program</div>
                  </div>
                </div>
              </div>
              
              <div className="absolute bottom-4 right-4 text-4xl text-primary/20">"</div>
            </div>
          </div>
          
          <div className="flex justify-center mt-10">
            <a href="#contact" className="btn btn-primary">
              Get Similar Results
              <FiArrowRight className="ml-2" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 