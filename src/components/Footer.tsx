import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Mail, Server, Shield } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white pt-32 pb-12 border-t border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl font-bold text-slate-900 tracking-tighter mb-6">
              Let <span className="text-rose-600 font-serif italic">us</span> perform<br/>for you too.
            </h2>
            <p className="text-slate-600 text-lg mb-8 max-w-md">
              Ready to upgrade your web presence? Send us a message and let's build something exceptional.
            </p>
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="mailto:Good_Work@Reasonable_Prices" 
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-slate-900 text-white font-bold text-lg hover:bg-rose-600 transition-colors shadow-xl shadow-slate-200 group"
            >
              Get in Touch
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            <motion.a 
              whileHover={{ y: -5, scale: 1.02 }}
              href="#" 
              className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:bg-white hover:border-rose-300 shadow-sm hover:shadow-lg hover:shadow-slate-100 transition-colors group"
            >
              <Mail size={24} className="text-slate-400 group-hover:text-rose-600 mb-4 transition-colors" />
              <h4 className="text-slate-900 font-bold mb-2">Email Setup</h4>
              <p className="text-sm text-slate-500">Configure your e-mail account.</p>
            </motion.a>
            <motion.a 
              whileHover={{ y: -5, scale: 1.02 }}
              href="#" 
              className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:bg-white hover:border-rose-300 shadow-sm hover:shadow-lg hover:shadow-slate-100 transition-colors group"
            >
              <Shield size={24} className="text-slate-400 group-hover:text-rose-600 mb-4 transition-colors" />
              <h4 className="text-slate-900 font-bold mb-2">FTP Access</h4>
              <p className="text-sm text-slate-500">Change your FTP Password securely.</p>
            </motion.a>
            <motion.div 
              whileHover={{ y: -5, scale: 1.02 }}
              className="p-6 rounded-2xl bg-slate-50 border border-slate-200 sm:col-span-2 shadow-sm hover:shadow-lg hover:shadow-slate-100 transition-shadow"
            >
              <div className="flex items-center gap-4 mb-4">
                <Server size={24} className="text-rose-600" />
                <h4 className="text-slate-900 font-bold">Systems Status</h4>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-600">Global Response Time</span>
                <span className="px-2 py-1 rounded bg-emerald-100 text-emerald-700 text-xs font-bold border border-emerald-200">94ms</span>
              </div>
            </motion.div>
          </motion.div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-slate-200 gap-6">
          <div className="flex flex-col items-center md:items-start">
            <div className="text-2xl font-black text-slate-900 tracking-tighter mb-1">Wonk</div>
            <div className="text-slate-500 text-sm">copyright © 1995 - 2026, Wonk newmedia</div>
          </div>
          
          <div className="flex items-center gap-6 text-sm font-medium text-slate-500">
            <motion.a whileHover={{ y: -2 }} href="#" className="hover:text-slate-900 transition-colors">wonk defined</motion.a>
            <motion.a whileHover={{ y: -2 }} href="#" className="hover:text-rose-600 transition-colors font-serif italic">Served Differently!</motion.a>
          </div>
        </div>
        
      </div>
    </footer>
  );
}
