import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, ShieldCheck, Zap, Globe } from 'lucide-react';

interface ExecutiveTravelSectionProps {
  onReserveClick?: () => void;
}

export const ExecutiveTravelSection: React.FC<ExecutiveTravelSectionProps> = ({ onReserveClick }) => {
  return (
    <section id="executive" className="w-full bg-transparent text-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-t border-white/10 relative overflow-hidden">
      
      {/* Background ambient glow effect */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-sky-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Top 3 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          
          {/* Card 1: Instant Reservations */}
          <motion.div 
            initial={{ opacity: 0, y: 80, scale: 0.9, rotateX: -15 }}
            whileInView={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
            whileHover={{ scale: 1.05, y: -15, rotateY: 2, zIndex: 10, boxShadow: "0 25px 50px -12px rgba(2, 132, 199, 0.4)" }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.1 }}
            className="bg-white/[0.04] backdrop-blur-xl rounded-3xl p-6 sm:p-7 shadow-2xl border border-white/10 flex flex-col justify-between transition-colors duration-300 group cursor-none"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-[11px] uppercase tracking-wider font-semibold text-sky-400 bg-sky-500/10 px-2.5 py-0.5 rounded-full border border-sky-500/20">
                  Priority Booking
                </span>
                <Zap className="w-4 h-4 text-white/40 group-hover:text-sky-400 transition-colors" />
              </div>
              <h3 className="text-xl sm:text-2xl font-normal font-headline-italic tracking-tight text-white mb-2 group-hover:text-sky-300 transition-colors">
                Instant Reservations
              </h3>
              <p className="text-xs sm:text-sm text-white/70 font-normal leading-relaxed mb-6">
                Transparent pricing, immediate confirmation, and zero waiting time.
              </p>
            </div>
            
            {/* Image container */}
            <div className="w-full h-44 sm:h-48 rounded-2xl overflow-hidden bg-black/40 border border-white/10">
              <img 
                src="https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=800&q=80" 
                alt="Luxury cabin interior with seating"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                loading="lazy"
              />
            </div>
          </motion.div>

          {/* Card 2: Fly Anywhere */}
          <motion.div 
            initial={{ opacity: 0, y: 80, scale: 0.9, rotateX: -15 }}
            whileInView={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
            whileHover={{ scale: 1.05, y: -15, rotateY: 2, zIndex: 10, boxShadow: "0 25px 50px -12px rgba(245, 158, 11, 0.4)" }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.2 }}
            className="bg-white/[0.04] backdrop-blur-xl rounded-3xl p-6 sm:p-7 shadow-2xl border border-white/10 flex flex-col justify-between transition-colors duration-300 group cursor-none"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-[11px] uppercase tracking-wider font-semibold text-amber-400 bg-amber-500/10 px-2.5 py-0.5 rounded-full border border-amber-500/20">
                  Global Fleet
                </span>
                <Globe className="w-4 h-4 text-white/40 group-hover:text-amber-400 transition-colors" />
              </div>
              <h3 className="text-xl sm:text-2xl font-normal font-headline-italic tracking-tight text-white mb-2 group-hover:text-amber-300 transition-colors">
                Fly Anywhere
              </h3>
              <p className="text-xs sm:text-sm text-white/70 font-normal leading-relaxed mb-6">
                Fully capable Gulfstream fleet, transcontinental and intercontinental.
              </p>
            </div>

            {/* Image container */}
            <div className="w-full h-44 sm:h-48 rounded-2xl overflow-hidden bg-black/40 border border-white/10">
              <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3KApPGHaz5bYuLq_A5sOdn5lUrORrwjZqI_77ld5sbgTgrXCCVJxI0As&s=10" 
                alt="Gulfstream jet flying above mountains"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                loading="lazy"
              />
            </div>
          </motion.div>

          {/* Card 3: Uncompromised Safety */}
          <motion.div 
            initial={{ opacity: 0, y: 80, scale: 0.9, rotateX: -15 }}
            whileInView={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
            whileHover={{ scale: 1.05, y: -15, rotateY: -2, zIndex: 10, boxShadow: "0 25px 50px -12px rgba(16, 185, 129, 0.4)" }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.3 }}
            className="bg-white/[0.04] backdrop-blur-xl rounded-3xl p-6 sm:p-7 shadow-2xl border border-white/10 flex flex-col justify-between transition-colors duration-300 group cursor-none"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-[11px] uppercase tracking-wider font-semibold text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
                  Certified Standards
                </span>
                <ShieldCheck className="w-4 h-4 text-white/40 group-hover:text-emerald-400 transition-colors" />
              </div>
              <h3 className="text-xl sm:text-2xl font-normal font-headline-italic tracking-tight text-white mb-2 group-hover:text-emerald-300 transition-colors">
                Uncompromised Safety
              </h3>
              <p className="text-xs sm:text-sm text-white/70 font-normal leading-relaxed mb-6">
                Platinum-rated crews, rigorous safety audits, and top-tier maintenance.
              </p>
            </div>

            {/* Image container */}
            <div className="w-full h-44 sm:h-48 rounded-2xl overflow-hidden bg-black/40 border border-white/10">
              <img 
                src="https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=800&q=80" 
                alt="Pilots in cockpit"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                loading="lazy"
              />
            </div>
          </motion.div>

        </div>

        {/* Center Subtext Statement & CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-xl mx-auto text-center mb-16 flex flex-col items-center"
        >
          <p className="text-sm sm:text-base text-white/70 font-normal leading-relaxed mb-8">
            Eliminate delays with guaranteed fleet availability—effortless booking of private jets for executive travel.
          </p>

          {/* Sleek Jet Graphic */}
          <motion.div 
            initial={{ opacity: 0, y: 150, scale: 0.5 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ type: "spring", stiffness: 60, damping: 15, delay: 0.3 }}
            className="relative mb-6 flex justify-center items-center"
          >
            {/* Front facing jet vector silhouette in high-contrast illuminated white */}
            <svg 
              className="w-40 sm:w-56 h-auto text-white opacity-95 drop-shadow-[0_0_20px_rgba(255,255,255,0.4)] overflow-visible" 
              viewBox="0 0 200 80" 
              fill="currentColor"
            >
              <path d="M100 10 C96 10 93 25 93 38 L10 50 C5 51 5 55 10 55 L90 53 L90 62 L80 68 L80 72 L100 70 L120 72 L120 68 L110 62 L110 53 L190 55 C195 55 195 51 190 50 L107 38 C107 25 104 10 100 10 Z" />
              <ellipse cx="78" cy="48" rx="5" ry="8" fill="#0284c7" />
              <ellipse cx="122" cy="48" rx="5" ry="8" fill="#0284c7" />
            </svg>
          </motion.div>

          {/* Reserve Now Accent Button */}
          <button
            onClick={onReserveClick}
            className="px-8 py-3.5 rounded-full bg-[#0284c7] hover:bg-[#0369a1] text-white font-medium text-sm transition-all duration-200 shadow-xl shadow-sky-500/20 active:scale-95 cursor-pointer flex items-center gap-2 group"
          >
            <span>Reserve now</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </motion.div>

        {/* Bottom Large Cabin Preview Card */}
        <motion.div 
            initial={{ opacity: 0, scale: 0.9, rotateX: -20, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, scale: 1, rotateX: 0, filter: "blur(0px)" }}
            whileHover={{ scale: 1.02 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ type: "spring", stiffness: 80, damping: 20, delay: 0.3 }}
            className="w-full h-[320px] sm:h-[450px] rounded-3xl overflow-hidden relative shadow-2xl border border-white/10 group bg-white/[0.04] backdrop-blur-xl cursor-none"
          >
          <img 
            src="https://images.unsplash.com/photo-1512470876302-972faa2aa9a4?auto=format&fit=crop&w=1600&q=80" 
            alt="Executive private jet passenger cabin lounge" 
            className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-700 opacity-85 group-hover:opacity-100"
            loading="lazy"
          />
          {/* Subtle gradient overlay to match image vignetting */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none"></div>
          
          <div className="absolute bottom-6 left-6 right-6 text-white sm:max-w-md">
            <span className="text-xs uppercase tracking-widest text-sky-400 font-semibold mb-1 block">
              Premier Experience
            </span>
            <h4 className="text-xl sm:text-2xl font-normal font-headline-italic text-white">
              Unrivaled Luxury & Personalized Concierge
            </h4>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

