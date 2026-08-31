import React from 'react';
import { motion } from 'motion/react';
import { Users, Star, MapPin, Award, ArrowUpRight } from 'lucide-react';

export const StatsCardsSection: React.FC = () => {
  return (
    <section id="experience" className="relative w-full max-w-[90vw] sm:max-w-6xl mx-auto px-4 z-20 mt-16 mb-32 pointer-events-none">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pointer-events-auto">
        
        {/* Left Card */}
        <motion.div 
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative group p-8 rounded-[2rem] bg-white/[0.02] backdrop-blur-xl border border-white/10 overflow-hidden hover:bg-white/[0.06] transition-colors"
        >
          {/* Top Row */}
          <div className="flex justify-between items-start mb-6">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0284c7]/10 border border-[#0284c7]/20">
              <Users className="w-3.5 h-3.5 text-[#0284c7]" />
              <span className="text-[11px] font-medium text-[#0284c7]">Trusted Experience</span>
            </div>
            <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white/10 transition-colors cursor-pointer">
              <ArrowUpRight className="w-4 h-4 text-white/50 group-hover:text-white" />
            </div>
          </div>
          
          {/* Content */}
          <h3 className="text-2xl sm:text-3xl font-semibold text-white mb-4 tracking-tight">10,000+ Happy Travelers</h3>
          <p className="text-sm sm:text-[15px] text-white/60 leading-relaxed mb-12 font-light max-w-[90%]">
            Creating unforgettable Paris experiences with expertly crafted itineraries, trusted local guides, and exceptional service.
          </p>
          
          {/* Bottom Row */}
          <div className="flex items-center justify-between text-xs mt-auto">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#0284c7]" />
              <span className="text-white/80 font-medium">50+ Handcrafted Tour Routes</span>
            </div>
            <span className="tracking-widest uppercase text-[9px] text-white/40 font-semibold">Verified Reviews</span>
          </div>
        </motion.div>

        {/* Right Card */}
        <motion.div 
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          className="relative group p-8 rounded-[2rem] bg-white/[0.02] backdrop-blur-xl border border-white/10 overflow-hidden hover:bg-white/[0.06] transition-colors"
        >
          {/* Top Row */}
          <div className="flex justify-between items-start mb-6">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-yellow-500/10 border border-yellow-500/20">
              <Star className="w-3.5 h-3.5 text-yellow-500 fill-yellow-500" />
              <span className="text-[11px] font-medium text-yellow-500">Top Rated</span>
            </div>
            <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white/10 transition-colors cursor-pointer">
              <ArrowUpRight className="w-4 h-4 text-white/50 group-hover:text-white" />
            </div>
          </div>
          
          {/* Content */}
          <h3 className="text-2xl sm:text-3xl font-semibold text-white mb-4 tracking-tight">
            4.9<span className="text-xl inline-block -translate-y-[2px] ml-1 mr-1">★</span> Guest Satisfaction
          </h3>
          <p className="text-sm sm:text-[15px] text-white/60 leading-relaxed mb-12 font-light max-w-[90%]">
            Luxury stays, private tours, and seamless travel planning designed for a truly unforgettable Paris getaway.
          </p>
          
          {/* Bottom Row */}
          <div className="flex items-center justify-between text-xs mt-auto">
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-yellow-500" />
              <span className="text-white/80 font-medium">24/7 Dedicated Concierge</span>
            </div>
            <span className="tracking-widest uppercase text-[9px] text-white/40 font-semibold">5-Star Excellence</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
