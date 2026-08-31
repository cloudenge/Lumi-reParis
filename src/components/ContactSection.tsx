import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { MagneticButton } from './MagneticButton';

export const ContactSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  });

  const y = useTransform(scrollYProgress, [0, 1], ['-20%', '20%']);

  return (
    <section ref={containerRef} className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      <motion.div 
        style={{ y }} 
        className="absolute inset-0 w-full h-[140%] -top-[20%] z-0"
      >
        <img 
          src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop" 
          alt="Contact Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
      </motion.div>

      <div className="relative z-10 w-full max-w-lg mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-[family-name:var(--font-hero)] text-white mb-4">Request a Private Viewing</h2>
          <p className="text-white/70 font-light tracking-wide">Experience Aura in person. By appointment only.</p>
        </div>

        <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
          <div className="relative group">
            <input 
              type="text" 
              placeholder="Full Name" 
              className="w-full bg-transparent border-b border-white/20 py-3 text-white placeholder-white/40 focus:outline-none focus:border-[var(--color-luxury-gold)] transition-colors"
            />
          </div>
          <div className="relative group">
            <input 
              type="email" 
              placeholder="Email Address" 
              className="w-full bg-transparent border-b border-white/20 py-3 text-white placeholder-white/40 focus:outline-none focus:border-[var(--color-luxury-gold)] transition-colors"
            />
          </div>
          <div className="relative group">
            <input 
              type="text" 
              placeholder="Preferred Date" 
              className="w-full bg-transparent border-b border-white/20 py-3 text-white placeholder-white/40 focus:outline-none focus:border-[var(--color-luxury-gold)] transition-colors"
            />
          </div>
          
          <div className="mt-8 flex justify-center">
            <MagneticButton className="px-12 py-4 bg-[var(--color-luxury-gold)] text-white rounded-full text-sm tracking-widest uppercase hover:bg-white hover:text-[var(--color-luxury-text)] transition-colors duration-500">
              Submit Inquiry
            </MagneticButton>
          </div>
        </form>
      </div>
    </section>
  );
};
