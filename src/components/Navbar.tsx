import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-md border-b border-slate-200' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-24">
        <a href="#" className="flex flex-col items-start leading-none group">
          <span className="text-3xl font-black text-slate-900 tracking-tighter group-hover:text-rose-600 transition-colors">Wonk</span>
          <span className="text-sm font-medium text-rose-600 font-serif italic tracking-wide">newmedia</span>
        </a>

        <div className="hidden md:flex items-center gap-10">
          {['Our Services', 'Sample Sites', 'About Wonk'].map((item) => (
            <motion.a
              key={item}
              whileHover={{ y: -2 }}
              href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
              className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
            >
              {item}
            </motion.a>
          ))}
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#contact"
            className="px-6 py-3 rounded-full bg-rose-600 text-white text-sm font-medium hover:bg-rose-700 transition-colors shadow-[0_0_20px_rgba(225,29,72,0.15)] hover:shadow-[0_0_25px_rgba(225,29,72,0.25)]"
          >
            Client Login
          </motion.a>
        </div>

        <button
          className="md:hidden text-slate-900"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-slate-200 p-6 flex flex-col gap-4 shadow-xl">
          {['Our Services', 'Sample Sites', 'About Wonk'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
              className="text-lg font-medium text-slate-600 hover:text-slate-900"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item}
            </a>
          ))}
          <a
            href="#contact"
            className="mt-4 px-6 py-3 rounded-full bg-rose-600 text-white text-center text-sm font-medium hover:bg-rose-700"
            onClick={() => setMobileMenuOpen(false)}
          >
            Client Login
          </a>
        </div>
      )}
    </motion.nav>
  );
}
