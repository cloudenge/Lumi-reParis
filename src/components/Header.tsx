import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Compass } from 'lucide-react';

interface HeaderProps {
  onContactClick?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onContactClick }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-6 left-1/2 -translate-x-1/2 w-[90%] max-w-5xl z-50 transition-all duration-500`}
    >
      <div className={`flex items-center justify-between px-6 py-3 rounded-full border transition-all duration-500 ${scrolled ? 'bg-white/[0.08] backdrop-blur-xl border-white/20' : 'bg-white/[0.02] backdrop-blur-md border-white/10'}`}>
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer">
          <div className="w-8 h-8 rounded-full bg-[#0284c7]/20 flex items-center justify-center border border-[#0284c7]/30">
            <Compass className="w-5 h-5 text-[#0284c7]" />
          </div>
          <div className="text-xl tracking-wide">
            <span className="font-semibold text-white">Lumière</span>
            <span className="font-light text-[#0284c7] ml-1">Paris</span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {[
            { name: 'Experience', id: 'experience' },
            { name: 'Executive Fleet', id: 'executive' },
            { name: 'Tailored Services', id: 'tailored' }
          ].map((item) => (
            <a
              key={item.name}
              href={`#${item.id}`}
              className="text-sm font-medium text-white/80 hover:text-white transition-colors cursor-pointer"
            >
              {item.name}
            </a>
          ))}
          <button
            onClick={onContactClick}
            className="text-sm font-medium text-white/80 hover:text-white transition-colors cursor-pointer bg-transparent border-none p-0"
          >
            Contact
          </button>
        </nav>

        {/* CTA Button */}
        <div>
          <button 
            onClick={onContactClick}
            className="px-6 py-2 rounded-full bg-[#0284c7] hover:bg-[#0369a1] text-white font-medium text-sm transition-all duration-200 shadow-lg shadow-sky-500/20 active:scale-95 cursor-pointer"
          >
            Plan Your Trip
          </button>
        </div>
      </div>
    </motion.header>
  );
};
