import React from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'motion/react';
import { useEffect } from 'react';

export default function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 300]);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 40;
      const y = (e.clientY / innerHeight - 0.5) * 40;
      mouseX.set(x);
      mouseY.set(y);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section className="relative min-h-screen w-full flex flex-col justify-center overflow-hidden bg-white pt-32 pb-20">
      {/* Background with abstract grid and subtle glow */}
      <motion.div 
        className="absolute inset-0 z-0 opacity-40"
        style={{ y }}
      >
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0000000a_1px,transparent_1px),linear-gradient(to_bottom,#0000000a_1px,transparent_1px)] bg-[size:64px_64px]"></div>
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-rose-200 opacity-40 blur-[100px]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/80 to-white"></div>
      </motion.div>

      <div className="relative z-10 w-full px-6 md:px-12 mt-12 flex flex-col">
        
        <div className="flex flex-col w-full max-w-7xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[100px] md:text-[140px] lg:text-[200px] font-bold text-slate-900 leading-[0.85] tracking-tighter"
          >
            Design.
          </motion.h1>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mt-4 relative">
            <motion.h1 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-[100px] md:text-[140px] lg:text-[200px] font-bold text-slate-900 leading-[0.85] tracking-tighter md:ml-32 lg:ml-64 relative z-10"
            >
              Hosting.
            </motion.h1>
            
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-8 md:mt-0 md:w-[350px] md:absolute right-0 top-[-60px] lg:top-[-100px] text-slate-600 text-sm md:text-base font-medium leading-relaxed"
            >
              <span className="text-rose-600 font-bold">Good Work @ Reasonable Prices.</span><br/>
              We are a Massachusetts-based agency building digital infrastructure that scales, dominates, and lasts for businesses and non-profits.
            </motion.div>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="flex flex-col md:flex-row items-start md:items-center gap-8 mt-24 md:mt-32 max-w-7xl mx-auto w-full"
        >
          <motion.a 
            whileHover={{ scale: 1.05 }} 
            whileTap={{ scale: 0.95 }}
            href="#services" 
            className="group flex items-center gap-4"
          >
            <div className="w-16 h-16 rounded-full border border-slate-200 flex items-center justify-center bg-white shadow-lg group-hover:border-rose-200 group-hover:shadow-rose-100 transition-colors">
              <div className="w-6 h-6 bg-rose-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
            </div>
            <span className="text-slate-900 font-bold text-lg md:text-xl group-hover:text-rose-600 transition-colors">Let us create your web site</span>
          </motion.a>
          
          <div className="h-px w-24 bg-slate-200 hidden md:block"></div>
          
          <div className="flex gap-6 text-sm font-medium text-slate-500">
             <motion.a whileHover={{ y: -2 }} href="#" className="hover:text-slate-900 transition-colors">Consulting</motion.a>
             <motion.a whileHover={{ y: -2 }} href="#" className="hover:text-slate-900 transition-colors">Development</motion.a>
             <motion.a whileHover={{ y: -2 }} href="#" className="hover:text-slate-900 transition-colors">Hosting</motion.a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
