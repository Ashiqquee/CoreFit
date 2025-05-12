"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FiActivity, FiAward, FiUsers } from "react-icons/fi";

const services = [
  {
    id: 1,
    title: "Personal Training",
    description: "One-on-one customized workouts designed to meet your specific goals and fitness level.",
    icon: <FiUsers className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Group Sessions",
    description: "High-energy group workouts that combine strength, cardio, and functional training.",
    icon: <FiActivity className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Nutrition Planning",
    description: "Custom nutrition plans to complement your training and maximize your results.",
    icon: <FiAward className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?q=80&w=1000&auto=format&fit=crop"
  }
];

export default function Services() {
  return (
    <section id="services" className="section bg-muted">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="mb-4">Our <span className="text-primary">Services</span></h2>
          <p className="text-muted-foreground">
            Comprehensive fitness solutions tailored to help you achieve your goals, whether it's building strength, 
            losing weight, or improving athletic performance.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group overflow-hidden"
            >
              <div className="relative h-64 mb-6 overflow-hidden rounded-lg">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="bg-primary/20 p-3 rounded-full text-primary">
                      {service.icon}
                    </div>
                    <h3 className="text-xl">{service.title}</h3>
                  </div>
                </div>
              </div>
              <p className="text-muted-foreground">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 