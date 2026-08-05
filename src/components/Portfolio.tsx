import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: "Corporate Identity",
    client: "Profit Enterprises",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=1000",
    color: "bg-slate-100"
  },
  {
    title: "Community Portal",
    client: "Non-Profit Organization",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000",
    color: "bg-rose-50"
  },
  {
    title: "E-Commerce Setup",
    client: "Local Business",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000",
    color: "bg-blue-50"
  },
  {
    title: "Personal Portfolio",
    client: "Individual",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=1000",
    color: "bg-slate-50"
  }
];

export default function Portfolio() {
  return (
    <section id="sample-sites" className="py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-rose-600 font-serif italic text-xl mb-4"
          >
            Sample Sites
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold text-slate-900 tracking-tighter"
          >
            Recent Work
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10, scale: 1.01 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                scale: { duration: 0.3 },
                y: { duration: 0.3 }
              }}
              className={`group relative aspect-[4/3] rounded-3xl overflow-hidden ${project.color} border border-slate-200 shadow-sm hover:shadow-2xl hover:shadow-slate-200 flex flex-col justify-end p-8`}
            >
              {/* Background Image */}
              <div className="absolute inset-0 w-full h-full">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
                />
              </div>

              {/* Gradient Overlay to make text readable */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent"></div>
              
              <div className="relative z-10 translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                <p className="text-rose-400 font-medium mb-2 drop-shadow-md">{project.client}</p>
                <h4 className="text-3xl font-bold text-white mb-6 drop-shadow-md">{project.title}</h4>
                
                <motion.a 
                  whileHover={{ x: 5 }}
                  href="#" 
                  className="inline-flex items-center gap-2 text-white font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 hover:text-rose-400 drop-shadow-md"
                >
                  <span>View Project</span>
                  <ExternalLink size={16} />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
