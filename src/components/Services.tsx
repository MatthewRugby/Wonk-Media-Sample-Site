import React from 'react';
import { motion } from 'motion/react';
import { Server, MonitorSmartphone, Code, Mail } from 'lucide-react';

const services = [
  {
    icon: <Server size={24} className="text-rose-600" />,
    title: "Web Hosting",
    description: "Reliable, high-performance hosting solutions for individuals, non-profits, and growing businesses. Ensuring 100% uptime with our dedicated monitoring.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800&h=400",
  },
  {
    icon: <MonitorSmartphone size={24} className="text-rose-600" />,
    title: "Web Design",
    description: "Clean, responsive, and accessible web design tailored to your brand. We build sites that look great on any device and drive results.",
    image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&q=80&w=800&h=400",
  },
  {
    icon: <Code size={24} className="text-rose-600" />,
    title: "Development",
    description: "Custom web development services. From simple landing pages to complex web applications, we provide the technical foundation you need.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800&h=400",
  },
  {
    icon: <Mail size={24} className="text-rose-600" />,
    title: "Email Configuration",
    description: "Professional email setup and troubleshooting. We help you configure your accounts and ensure reliable communication.",
    image: "https://images.unsplash.com/photo-1557200134-90327ee9fafa?auto=format&fit=crop&q=80&w=800&h=400",
  }
];

export default function Services() {
  return (
    <section id="our-services" className="py-32 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <h2 className="text-rose-600 font-serif italic text-xl mb-4">Our Services</h2>
            <h3 className="text-5xl md:text-7xl font-bold text-slate-900 tracking-tighter">Capabilities</h3>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-slate-600 max-w-md text-lg"
          >
            We are poised to offer good work at reasonable prices to other small non-profit and profit enterprises.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5, scale: 1.02 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1, 
                scale: { duration: 0.2 }, 
                y: { duration: 0.2 } 
              }}
              className="group flex flex-col p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm hover:border-rose-200 hover:shadow-xl hover:shadow-slate-200/60 overflow-hidden relative"
            >
              <div className="w-full h-48 mb-8 rounded-2xl overflow-hidden relative bg-slate-100">
                <div className="absolute top-4 left-4 z-10 w-12 h-12 rounded-xl bg-white/90 backdrop-blur-md border border-white/50 flex items-center justify-center shadow-sm">
                  {service.icon}
                </div>
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                />
              </div>
              <h4 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h4>
              <p className="text-slate-600 leading-relaxed flex-1">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
