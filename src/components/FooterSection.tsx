import React from 'react';
import { motion } from 'motion/react';
import { LumiereCircularEmblem } from './Logo';
import { Instagram, Linkedin, Twitter, Facebook, Pin as Pinterest } from 'lucide-react';

interface FooterSectionProps {
  onContactClick?: () => void;
  onRegistrationClick?: () => void;
  onSocialClick?: (platform: string) => void;
  onFooterLinkClick?: (title: string) => void;
}

export const FooterSection: React.FC<FooterSectionProps> = ({
  onContactClick,
  onRegistrationClick,
  onSocialClick,
  onFooterLinkClick,
}) => {
  const footerColumns = [
    {
      title: 'ABOUT US',
      links: ['Corporate Overview', 'Flight Academy', 'Fleet & Safety', 'Careers & Cadet'],
    },
    {
      title: 'SIMULATORS',
      links: ['Cabin Training Devices', 'FNTP II MCC', 'FTD', 'Full Flight Simulators', 'CBT'],
    },
    {
      title: 'TRAININGS',
      links: ['Cabin Crew Training', 'Cockpit Crew Training', 'Type Rating & Recurrent', 'Safety Management'],
    },
    {
      title: 'SCHEDULE',
      links: ['Simulator Slots', 'Course Calendar', 'Charter Timetable'],
    },
    {
      title: 'CONTACT',
      links: ['Flight Training Center', 'Paris Base Concierge', '24/7 Dispatch Desk'],
    },
  ];

  return (
    <footer id="contact" className="w-full relative overflow-hidden font-sans bg-transparent">
      
      {/* 1. TOP CALL-TO-ACTION SECTION (Clean Transparent Background with Glowing Watermark - No Glass Effect) */}
      <div className="w-full bg-transparent text-white pt-20 pb-28 px-4 sm:px-6 lg:px-8 relative text-center flex flex-col items-center justify-center border-t border-white/10">
        
        {/* Subtle sky ambient glow behind CTA */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

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
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-white uppercase tracking-tight mb-4 drop-shadow-sm">
            WANT TO BECOME A <span className="font-headline-italic normal-case text-sky-400 font-normal">Pilot</span>?
          </h2>

          {/* Subtext Paragraph */}
          <p className="text-xs sm:text-sm text-white/80 font-normal leading-relaxed max-w-2xl mb-8">
            Do you want to become a member of rapidly growing Turkish Airlines & Lumière Aviation network and do you want to ask more questions about our training programmes and simulators for <span className="font-semibold text-white">Registration</span>?
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            {/* Solid Contact Us Button */}
            <button
              onClick={onContactClick}
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#0284c7] hover:bg-[#0369a1] text-white font-bold text-xs sm:text-sm uppercase tracking-wider transition-all duration-200 shadow-xl shadow-sky-500/25 active:scale-95 cursor-pointer border border-sky-400/30"
            >
              CONTACT US
            </button>

            {/* Outlined E-Registration Button */}
            <button
              onClick={onRegistrationClick}
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/20 hover:border-white/30 font-bold text-xs sm:text-sm uppercase tracking-wider transition-all duration-200 shadow-lg backdrop-blur-md active:scale-95 cursor-pointer"
            >
              E-REGISTRATION
            </button>
          </div>
        </motion.div>
      </div>

      {/* 2. CENTERED EMBLEM LOGO OVERLAPPING TOP & BOTTOM FOOTER SECTION */}
      <div className="relative z-20 -mt-14 flex justify-center">
        <LumiereCircularEmblem size={108} className="shadow-2xl ring-4 ring-black/80" />
      </div>

      {/* 3. WHITE GLASS FOOTER SECTION */}
      <div className="w-full bg-white/[0.04] backdrop-blur-2xl text-white pt-16 pb-12 px-4 sm:px-6 lg:px-8 border-t border-white/20 relative z-10 -mt-14 shadow-[0_-20px_60px_rgba(0,0,0,0.5)]">
        <div className="max-w-6xl mx-auto pt-12">
          
          {/* Navigation Links Grid (5 Columns) */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-16 text-left">
            {footerColumns.map((col) => (
              <div key={col.title}>
                <h3 className="text-xs font-bold uppercase tracking-widest text-white mb-2">
                  {col.title}
                </h3>
                <div className="w-8 h-0.5 bg-sky-500 mb-4" />
                <ul className="space-y-2.5 text-xs text-white/70 font-normal">
                  {col.links.map((link) => (
                    <li key={link}>
                      <button
                        onClick={() => onFooterLinkClick?.(link)}
                        className="hover:text-white transition-colors text-left cursor-pointer focus:outline-none focus:text-white"
                      >
                        {link}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom Social Icons Row */}
          <div className="pt-8 border-t border-white/15 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center space-x-6 text-white/70">
              <button 
                onClick={() => onSocialClick?.('Instagram')}
                className="hover:text-sky-400 transition-colors p-1 rounded hover:bg-white/10 cursor-pointer focus:outline-none" 
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </button>
              <button 
                onClick={() => onSocialClick?.('LinkedIn')}
                className="hover:text-sky-400 transition-colors p-1 rounded hover:bg-white/10 cursor-pointer focus:outline-none" 
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4 fill-current" />
              </button>
              <button 
                onClick={() => onSocialClick?.('Twitter')}
                className="hover:text-sky-400 transition-colors p-1 rounded hover:bg-white/10 cursor-pointer focus:outline-none" 
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4 fill-current" />
              </button>
              <button 
                onClick={() => onSocialClick?.('Facebook')}
                className="hover:text-sky-400 transition-colors p-1 rounded hover:bg-white/10 cursor-pointer focus:outline-none" 
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4 fill-current" />
              </button>
              <button 
                onClick={() => onSocialClick?.('Pinterest')}
                className="hover:text-sky-400 transition-colors p-1 rounded hover:bg-white/10 cursor-pointer focus:outline-none" 
                aria-label="Pinterest"
              >
                <Pinterest className="w-4 h-4" />
              </button>
            </div>

            <p className="text-[11px] text-white/60 font-mono text-center sm:text-right">
              © {new Date().getFullYear()} Lumière Aviation & Flight Training Center. All rights reserved.
            </p>
          </div>

        </div>
      </div>

    </footer>
  );
};


