import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function About() {
  return (
    <section id="about-wonk" className="py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-rose-600 font-serif italic text-xl mb-4">About Wonk</h2>
            <h3 className="text-5xl md:text-7xl font-bold text-slate-900 tracking-tighter mb-8 leading-[1.1]">
              A Small<br/>
              <span className="text-slate-400">Massachusetts</span><br/>
              Based Business.
            </h3>
            
            <p className="text-slate-600 text-lg md:text-xl leading-relaxed mb-8 max-w-xl">
              Our aim is to provide a high level of service and capabilities to our clients. We offer good work at reasonable prices, focusing on the core needs of businesses, non-profits, and individuals.
            </p>

            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#" 
              className="inline-flex items-center gap-3 text-slate-900 font-bold text-lg group"
            >
              <span className="group-hover:text-rose-600 transition-colors">More information about our services</span>
              <div className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center group-hover:bg-rose-600 group-hover:border-rose-600 group-hover:text-white transition-all shadow-sm">
                <ArrowRight size={18} />
              </div>
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-[40px] overflow-hidden relative bg-slate-50 border border-slate-200 shadow-xl flex items-center justify-center">
               <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(225,29,72,0.05),transparent_70%)]"></div>
               {/* Abstract visual instead of image */}
               <div className="relative w-64 h-64">
                 <div className="absolute inset-0 border-4 border-dashed border-rose-600/30 rounded-full animate-[spin_20s_linear_infinite]"></div>
                 <div className="absolute inset-8 border-4 border-slate-200 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
                 <div className="absolute inset-16 bg-white/50 backdrop-blur-xl rounded-full shadow-[0_0_50px_rgba(225,29,72,0.1)] border border-slate-100 flex items-center justify-center">
                    <span className="text-slate-900 font-black text-4xl tracking-tighter">W</span>
                 </div>
               </div>
            </div>
            
            <div className="absolute -bottom-10 -left-10 bg-rose-600 p-8 rounded-3xl shadow-2xl hidden md:block">
              <div className="text-white font-bold text-4xl mb-1">100%</div>
              <div className="text-white/90 font-medium text-sm">Uptime Target</div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
