import React from 'react';
import { motion } from 'motion/react';
import { Users, Star, MapPin, Award, ArrowUpRight } from 'lucide-react';

interface StatsCardsSectionProps {
  onCardClick?: (type: 'travelers' | 'satisfaction') => void;
}

export const StatsCardsSection: React.FC<StatsCardsSectionProps> = ({ onCardClick }) => {
  return (
    <section id="experience" className="relative w-full max-w-[94vw] sm:max-w-6xl mx-auto px-4 z-20 mt-12 sm:mt-16 mb-24 sm:mb-32">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Left Card: 10,000+ Happy Travelers */}
        <motion.div 
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
          onClick={() => onCardClick?.('travelers')}
          className="relative group p-6 sm:p-8 rounded-[2rem] bg-black/40 backdrop-blur-2xl border border-white/15 overflow-hidden hover:bg-black/60 hover:border-white/25 transition-all duration-300 shadow-2xl cursor-pointer"
        >
          {/* Top Row */}
          <div className="flex justify-between items-start mb-6">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0284c7]/20 border border-[#0284c7]/30">
              <Users className="w-3.5 h-3.5 text-sky-400" />
              <span className="text-[11px] font-medium text-sky-300">Trusted Experience</span>
            </div>
            <div className="w-8 h-8 rounded-full bg-white/10 border border-white/15 flex items-center justify-center group-hover:bg-white/20 transition-all duration-200">
              <ArrowUpRight className="w-4 h-4 text-white/70 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </div>
          
          {/* Content */}
          <h3 className="text-2xl sm:text-3xl font-semibold text-white mb-3 tracking-tight drop-shadow-sm">
            10,000+ Happy Travelers
          </h3>
          <p className="text-sm sm:text-[15px] text-white/80 leading-relaxed mb-8 font-light max-w-[95%]">
            Creating unforgettable Paris experiences with expertly crafted itineraries, trusted local guides, and exceptional service.
          </p>
          
          {/* Bottom Row */}
          <div className="flex items-center justify-between text-xs mt-auto pt-4 border-t border-white/10">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-sky-400" />
              <span className="text-white/90 font-medium">50+ Handcrafted Tour Routes</span>
            </div>
            <span className="tracking-widest uppercase text-[9px] text-white/50 font-semibold font-mono">
              Verified Reviews
            </span>
          </div>
        </motion.div>

        {/* Right Card: 4.9 Guest Satisfaction */}
        <motion.div 
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          onClick={() => onCardClick?.('satisfaction')}
          className="relative group p-6 sm:p-8 rounded-[2rem] bg-black/40 backdrop-blur-2xl border border-white/15 overflow-hidden hover:bg-black/60 hover:border-white/25 transition-all duration-300 shadow-2xl cursor-pointer"
        >
          {/* Top Row */}
          <div className="flex justify-between items-start mb-6">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-yellow-500/20 border border-yellow-500/30">
              <Star className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
              <span className="text-[11px] font-medium text-yellow-300">Top Rated</span>
            </div>
            <div className="w-8 h-8 rounded-full bg-white/10 border border-white/15 flex items-center justify-center group-hover:bg-white/20 transition-all duration-200">
              <ArrowUpRight className="w-4 h-4 text-white/70 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </div>
          
          {/* Content */}
          <h3 className="text-2xl sm:text-3xl font-semibold text-white mb-3 tracking-tight drop-shadow-sm">
            4.9<span className="text-xl inline-block -translate-y-[2px] ml-1 mr-1 text-yellow-400">★</span> Guest Satisfaction
          </h3>
          <p className="text-sm sm:text-[15px] text-white/80 leading-relaxed mb-8 font-light max-w-[95%]">
            Luxury stays, private tours, and seamless travel planning designed for a truly unforgettable Paris getaway.
          </p>
          
          {/* Bottom Row */}
          <div className="flex items-center justify-between text-xs mt-auto pt-4 border-t border-white/10">
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-yellow-400" />
              <span className="text-white/90 font-medium">24/7 Dedicated Concierge</span>
            </div>
            <span className="tracking-widest uppercase text-[9px] text-white/50 font-semibold font-mono">
              5-Star Excellence
            </span>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

