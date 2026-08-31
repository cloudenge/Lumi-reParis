import React from 'react';
import { motion } from 'motion/react';
import { Users, Star, ArrowUpRight, Award, MapPin } from 'lucide-react';

interface GlassCardsProps {
  onCardClick?: (title: string) => void;
}

export const GlassCards: React.FC<GlassCardsProps> = ({ onCardClick }) => {
  return (
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-full max-w-5xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 z-20 pointer-events-auto">
      
      {/* Glass Card 1: 10,000+ Happy Travelers */}
      <motion.div 
        initial={{ opacity: 0, y: 300, rotateX: -60, scale: 0.5 }}
        animate={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1], delay: 3.8 }}
        whileHover={{ scale: 1.05, y: -10, rotateY: 5, boxShadow: "0 20px 40px -10px rgba(56, 189, 248, 0.4)", zIndex: 10 }}
        onClick={() => onCardClick?.('10,000+ Happy Travelers')}
        className="group relative rounded-2xl sm:rounded-3xl bg-white/[0.04] backdrop-blur-xl border border-white/10 p-5 sm:p-6 shadow-2xl hover:bg-white/[0.07] hover:border-white/20 transition-all duration-300 cursor-none flex flex-col justify-between overflow-hidden"
      >
        {/* Subtle orange ambient accent glow inside card */}
        <div className="absolute -top-12 -right-12 w-32 h-32 bg-sky-500/10 rounded-full blur-2xl group-hover:bg-sky-500/20 transition-all"></div>

        <div>
          {/* Header Row */}
          <div className="flex items-center justify-between mb-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-medium">
              <Users className="w-3.5 h-3.5" />
              <span>Trusted Experience</span>
            </div>
            <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 group-hover:text-white group-hover:bg-white/10 transition-all">
              <ArrowUpRight className="w-4 h-4" />
            </div>
          </div>

          {/* Card Title & Description */}
          <h3 className="text-lg sm:text-xl font-medium text-white mb-2 tracking-tight group-hover:text-sky-300 transition-colors">
            10,000+ Happy Travelers
          </h3>
          <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-normal mb-4">
            Creating unforgettable Paris experiences with expertly crafted itineraries, trusted local guides, and exceptional service.
          </p>
        </div>

        {/* Mini Glass Metric Widget */}
        <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs text-white/80">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-sky-400" />
            <span className="font-medium text-white">50+ Handcrafted Tour Routes</span>
          </div>
          <span className="text-[11px] text-white/50 font-mono">Verified Reviews</span>
        </div>
      </motion.div>

      {/* Glass Card 2: 4.9★ Guest Satisfaction */}
      <motion.div 
        initial={{ opacity: 0, y: 300, rotateX: -60, scale: 0.5 }}
        animate={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1], delay: 4.0 }}
        whileHover={{ scale: 1.05, y: -10, rotateY: -5, boxShadow: "0 20px 40px -10px rgba(245, 158, 11, 0.4)", zIndex: 10 }}
        onClick={() => onCardClick?.('4.9★ Guest Satisfaction')}
        className="group relative rounded-2xl sm:rounded-3xl bg-white/[0.04] backdrop-blur-xl border border-white/10 p-5 sm:p-6 shadow-2xl hover:bg-white/[0.07] hover:border-white/20 transition-all duration-300 cursor-none flex flex-col justify-between overflow-hidden"
      >
        {/* Subtle amber ambient accent glow inside card */}
        <div className="absolute -top-12 -right-12 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl group-hover:bg-amber-500/20 transition-all"></div>

        <div>
          {/* Header Row */}
          <div className="flex items-center justify-between mb-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-medium">
              <Star className="w-3.5 h-3.5 fill-amber-400" />
              <span>Top Rated</span>
            </div>
            <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 group-hover:text-white group-hover:bg-white/10 transition-all">
              <ArrowUpRight className="w-4 h-4" />
            </div>
          </div>

          {/* Card Title & Description */}
          <h3 className="text-lg sm:text-xl font-medium text-white mb-2 tracking-tight group-hover:text-amber-300 transition-colors">
            4.9★ Guest Satisfaction
          </h3>
          <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-normal mb-4">
            Luxury stays, private tours, and seamless travel planning designed for a truly unforgettable Paris getaway.
          </p>
        </div>

        {/* Mini Glass Metric Widget */}
        <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs text-white/80">
          <div className="flex items-center gap-2">
            <Award className="w-4 h-4 text-amber-400" />
            <span className="font-medium text-white">24/7 Dedicated Concierge</span>
          </div>
          <span className="text-[11px] text-white/50 font-mono">5-Star Excellence</span>
        </div>
      </motion.div>

    </div>
  );
};


