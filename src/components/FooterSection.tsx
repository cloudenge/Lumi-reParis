import React from 'react';
import { motion } from 'motion/react';
import { LumiereCircularEmblem } from './Logo';
import { Facebook, Twitter, Linkedin, Pin as Pinterest } from 'lucide-react';

interface FooterSectionProps {
  onContactClick?: () => void;
  onRegistrationClick?: () => void;
}

export const FooterSection: React.FC<FooterSectionProps> = ({
  onContactClick,
  onRegistrationClick,
}) => {
  return (
    <footer className="w-full relative overflow-hidden font-sans bg-transparent">
      
      {/* 1. TOP CALL-TO-ACTION SECTION (Pure Dark Background with Glowing Watermark) */}
      <div className="w-full bg-transparent text-white pt-20 pb-28 px-4 sm:px-6 lg:px-8 relative text-center flex flex-col items-center justify-center border-t border-white/10">
        
        {/* Subtle orange ambient glow behind CTA */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] bg-sky-500/10 rounded-full blur-3xl pointer-events-none"></div>

        {/* Giant Watermark Text behind headline */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white/[0.04] text-6xl sm:text-8xl md:text-9xl font-extrabold tracking-widest select-none uppercase pointer-events-none whitespace-nowrap">
          CONTACT US
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="relative z-10 max-w-3xl mx-auto flex flex-col items-center"
        >
          {/* Main Headline */}
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-white uppercase tracking-tight mb-4">
            WANT TO BECOME A <span className="font-headline-italic normal-case text-sky-400 font-normal">Pilot</span>?
          </h2>

          {/* Subtext Paragraph */}
          <p className="text-xs sm:text-sm text-white/70 font-normal leading-relaxed max-w-2xl mb-8">
            Do you want to become a member of rapidly growing Turkish Airlines & Lumière Aviation network and do you want to ask more questions about our training programmes and simulators for <span className="font-semibold text-white">Registration</span>?
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            {/* Solid Contact Us Button */}
            <button
              onClick={onContactClick}
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#0284c7] hover:bg-[#0369a1] text-white font-bold text-xs sm:text-sm uppercase tracking-wider transition-all duration-200 shadow-xl shadow-sky-500/25 active:scale-95 cursor-pointer"
            >
              CONTACT US
            </button>

            {/* Outlined E-Registration Button */}
            <button
              onClick={onRegistrationClick}
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-white/[0.05] border border-white/20 text-white hover:bg-white/10 hover:border-white/30 font-bold text-xs sm:text-sm uppercase tracking-wider transition-all duration-200 shadow-lg backdrop-blur-md active:scale-95 cursor-pointer"
            >
              E-REGISTRATION
            </button>
          </div>
        </motion.div>
      </div>

      {/* 2. CENTERED EMBLEM LOGO OVERLAPPING TOP & BOTTOM FOOTER SECTION */}
      <div className="relative z-20 -mt-14 flex justify-center">
        <LumiereCircularEmblem size={108} className="shadow-2xl ring-4 ring-black" />
      </div>

      {/* 3. DARK GLASSMORPHIC FOOTER SECTION */}
      <div className="w-full bg-transparent text-white pt-16 pb-12 px-4 sm:px-6 lg:px-8 border-t border-white/10 relative z-10 -mt-14">
        <div className="max-w-6xl mx-auto pt-12">
          
          {/* Navigation Links Grid (5 Columns) */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-16 text-left">
            
            {/* Column 1: ABOUT US */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-white mb-2">
                ABOUT US
              </h3>
              <div className="w-8 h-0.5 bg-sky-500 mb-4"></div>
              <ul className="space-y-2.5 text-xs text-white/60 font-normal">
                <li><a href="#about" className="hover:text-white transition-colors">Corporate Overview</a></li>
                <li><a href="#mission" className="hover:text-white transition-colors">Flight Academy</a></li>
                <li><a href="#fleet" className="hover:text-white transition-colors">Fleet & Safety</a></li>
                <li><a href="#careers" className="hover:text-white transition-colors">Careers & Cadet</a></li>
              </ul>
            </div>

            {/* Column 2: SIMULATORS */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-white mb-2">
                SIMULATORS
              </h3>
              <div className="w-8 h-0.5 bg-sky-500 mb-4"></div>
              <ul className="space-y-2.5 text-xs text-white/60 font-normal">
                <li><a href="#cabin-devices" className="hover:text-white transition-colors">Cabin Training Devices</a></li>
                <li><a href="#fntp" className="hover:text-white transition-colors">FNTP II MCC</a></li>
                <li><a href="#ftd" className="hover:text-white transition-colors">FTD</a></li>
                <li><a href="#full-sim" className="hover:text-white transition-colors">Full Flight Simulators</a></li>
                <li><a href="#cbt" className="hover:text-white transition-colors">CBT</a></li>
              </ul>
            </div>

            {/* Column 3: TRAININGS */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-white mb-2">
                TRAININGS
              </h3>
              <div className="w-8 h-0.5 bg-sky-500 mb-4"></div>
              <ul className="space-y-2.5 text-xs text-white/60 font-normal">
                <li><a href="#cabin-crew" className="hover:text-white transition-colors">Cabin Crew Training</a></li>
                <li><a href="#cockpit-crew" className="hover:text-white transition-colors">Cockpit Crew Training</a></li>
                <li><a href="#type-rating" className="hover:text-white transition-colors">Type Rating & Recurrent</a></li>
                <li><a href="#safety-training" className="hover:text-white transition-colors">Safety Management</a></li>
              </ul>
            </div>

            {/* Column 4: SCHEDULE */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-white mb-2">
                SCHEDULE
              </h3>
              <div className="w-8 h-0.5 bg-sky-500 mb-4"></div>
              <ul className="space-y-2.5 text-xs text-white/60 font-normal">
                <li><a href="#simulator-slots" className="hover:text-white transition-colors">Simulator Slots</a></li>
                <li><a href="#course-calendar" className="hover:text-white transition-colors">Course Calendar</a></li>
                <li><a href="#charter-timetable" className="hover:text-white transition-colors">Charter Timetable</a></li>
              </ul>
            </div>

            {/* Column 5: CONTACT */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-white mb-2">
                CONTACT
              </h3>
              <div className="w-8 h-0.5 bg-sky-500 mb-4"></div>
              <ul className="space-y-2.5 text-xs text-white/60 font-normal">
                <li><a href="#hq" className="hover:text-white transition-colors">Flight Training Center</a></li>
                <li><a href="#paris-base" className="hover:text-white transition-colors">Paris Base Concierge</a></li>
                <li><a href="#support" className="hover:text-white transition-colors">24/7 Dispatch Desk</a></li>
              </ul>
            </div>

          </div>

          {/* Bottom Social Icons Row */}
          <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center space-x-6 text-white/50">
              <a href="#facebook" className="hover:text-sky-400 transition-colors" aria-label="Facebook">
                <Facebook className="w-4 h-4 fill-current" />
              </a>
              <a href="#twitter" className="hover:text-sky-400 transition-colors" aria-label="Twitter">
                <Twitter className="w-4 h-4 fill-current" />
              </a>
              <a href="#linkedin" className="hover:text-sky-400 transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-4 h-4 fill-current" />
              </a>
              <a href="#pinterest" className="hover:text-sky-400 transition-colors" aria-label="Pinterest">
                <Pinterest className="w-4 h-4" />
              </a>
            </div>

            <p className="text-[11px] text-white/40 font-mono text-center sm:text-right">
              © {new Date().getFullYear()} Lumière Aviation & Flight Training Center. All rights reserved.
            </p>
          </div>

        </div>
      </div>

    </footer>
  );
};
