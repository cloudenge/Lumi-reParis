import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Compass } from 'lucide-react';

interface BannerHeroProps {
  onWatchDemoClick: () => void;
  onGetStartedClick: () => void;
  onReadMoreClick: () => void;
  headline?: string;
  subheadline?: string;
  announcementText?: string;
}

export const BannerHero: React.FC<BannerHeroProps> = ({
  onWatchDemoClick,
  onGetStartedClick,
  onReadMoreClick,
  headline = "Experience the Magic of Paris",
  subheadline = "Discover iconic landmarks, charming streets, luxury stays, and unforgettable moments with handcrafted Paris tours designed just for you.",
  announcementText = "Paris Summer 2026 • Discover Exclusive Offers",
}) => {
  return (
    <section className="relative w-full min-h-[90vh] sm:min-h-screen pt-28 sm:pt-32 pb-16 max-w-[94vw] sm:max-w-5xl mx-auto px-4 text-center flex flex-col items-center justify-center z-20 pointer-events-none">
      {/* Announcement Badge / Pill */}
      <motion.div 
        initial={{ opacity: 0, x: -100, y: 50, scale: 0.8 }}
        animate={{ opacity: 1, x: 0, y: 0, scale: 1 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 1.5 }}
        className="mb-4 sm:mb-6 inline-flex items-center pointer-events-auto"
      >
        <button
          onClick={onReadMoreClick}
          className="group inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/40 border border-white/20 hover:border-white/40 hover:bg-black/60 transition-all duration-200 cursor-pointer shadow-xl backdrop-blur-xl active:scale-95"
          aria-label="Read announcement about Paris Summer 2026 offers"
        >
          <span className="text-[11px] sm:text-xs font-medium text-white tracking-wide drop-shadow-sm">
            {announcementText}
          </span>
          <span className="w-4 h-4 rounded-full bg-[#0284c7] flex items-center justify-center text-white transition-transform duration-200 group-hover:translate-x-0.5">
            <ArrowRight className="w-2.5 h-2.5 stroke-[2.5]" />
          </span>
        </button>
      </motion.div>

      {/* Main Headline */}
      <motion.h1 
        initial={{ opacity: 0, scale: 1.2, filter: "blur(15px)" }}
        animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1], delay: 1.7 }}
        className="text-[34px] xs:text-[40px] sm:text-[60px] lg:text-[76px] font-medium tracking-tight text-white leading-[1.08] sm:leading-[1.05] max-w-2xl mx-auto mb-4 pointer-events-auto drop-shadow-[0_4px_24px_rgba(0,0,0,0.85)]"
      >
        {headline}
      </motion.h1>

      {/* Subheadline */}
      <motion.p 
        initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 1.3, ease: [0.22, 1, 0.36, 1], delay: 1.9 }}
        className="text-[13px] sm:text-base lg:text-lg text-white/90 font-normal leading-relaxed max-w-xl mx-auto mb-8 text-balance pointer-events-auto drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]"
      >
        {subheadline}
      </motion.p>

      {/* CTA Buttons Row */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 2.1 }}
        className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto pointer-events-auto"
      >
        {/* Explore Tours Button */}
        <button
          onClick={onWatchDemoClick}
          className="w-full sm:w-auto px-7 py-3 rounded-full bg-black/40 border border-white/20 hover:border-white/40 hover:bg-black/60 text-white font-medium text-xs sm:text-sm transition-all duration-200 flex items-center justify-center gap-2.5 cursor-pointer shadow-xl group backdrop-blur-xl active:scale-95"
        >
          <Compass className="w-4 h-4 text-sky-400 group-hover:rotate-45 transition-transform duration-300" />
          <span>Explore Tours</span>
        </button>

        {/* Plan Your Trip Button */}
        <button
          onClick={onGetStartedClick}
          className="w-full sm:w-auto px-7 py-3 rounded-full bg-[#0284c7] hover:bg-[#0369a1] text-white font-medium text-xs sm:text-sm transition-all duration-200 shadow-xl shadow-sky-500/25 border border-sky-400/30 active:scale-95 cursor-pointer"
        >
          Plan Your Trip
        </button>
      </motion.div>
    </section>
  );
};



