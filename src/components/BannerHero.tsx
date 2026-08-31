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
    <section className="relative w-full min-h-screen pt-32 max-w-[90vw] sm:max-w-5xl mx-auto px-4 text-center flex flex-col items-center justify-center z-20 pointer-events-none">
      {/* Announcement Badge / Pill */}
      <motion.div 
        initial={{ opacity: 0, x: -200, y: 100, rotate: -20, scale: 0 }}
        animate={{ opacity: 1, x: 0, y: 0, rotate: 0, scale: 1 }}
        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1], delay: 3.0 }}
        className="mb-4 inline-flex items-center pointer-events-auto"
      >
        <button
          onClick={onReadMoreClick}
          className="group inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.05] border border-white/10 hover:border-white/20 transition-all duration-200 cursor-pointer shadow-lg backdrop-blur-md"
        >
          <span className="text-xs font-medium text-white tracking-wide">
            {announcementText}
          </span>
          <span className="w-4 h-4 rounded-full bg-[#0284c7] flex items-center justify-center text-white transition-transform duration-200 group-hover:translate-x-0.5">
            <ArrowRight className="w-2.5 h-2.5 stroke-[2.5]" />
          </span>
        </button>
      </motion.div>

      {/* Main Headline */}
      <motion.h1 
        initial={{ opacity: 0, scale: 1.5, filter: "blur(20px)", rotateX: 45 }}
        animate={{ opacity: 1, scale: 1, filter: "blur(0px)", rotateX: 0 }}
        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1], delay: 3.2 }}
        className="text-[40px] sm:text-[60px] lg:text-[76px] font-medium tracking-tight text-white leading-[1.05] max-w-xl mx-auto mb-4 pointer-events-auto"
      >
        {headline}
      </motion.h1>

      {/* Subheadline */}
      <motion.p 
        initial={{ opacity: 0, x: 200, filter: "blur(10px)" }}
        animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1], delay: 3.4 }}
        className="text-[13px] sm:text-base lg:text-lg text-white/80 font-normal leading-relaxed max-w-xl mx-auto mb-6 text-balance pointer-events-auto"
      >
        {subheadline}
      </motion.p>

      {/* CTA Buttons Row */}
      <motion.div 
        initial={{ opacity: 0, scale: 0, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1], delay: 3.6 }}
        className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pointer-events-auto"
      >
        {/* Explore Tours Button */}
        <button
          onClick={onWatchDemoClick}
          className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-white/[0.06] border border-white/15 hover:border-white/30 hover:bg-white/10 text-white font-medium text-xs sm:text-sm transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer shadow-md group backdrop-blur-md"
        >
          <Compass className="w-4 h-4 text-sky-400 group-hover:rotate-45 transition-transform duration-300" />
          <span>Explore Tours</span>
        </button>

        {/* Plan Your Trip Button */}
        <button
          onClick={onGetStartedClick}
          className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-[#0284c7] hover:bg-[#0369a1] text-white font-medium text-xs sm:text-sm transition-all duration-200 shadow-xl shadow-sky-500/20 active:scale-95 cursor-pointer"
        >
          Plan Your Trip
        </button>
      </motion.div>
    </section>
  );
};


