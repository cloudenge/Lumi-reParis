import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, CheckCircle2, ShieldCheck, Sliders, Sparkles } from 'lucide-react';

interface TailoredTravelSectionProps {
  onServiceSelect?: (serviceName: string) => void;
}

export const TailoredTravelSection: React.FC<TailoredTravelSectionProps> = ({ onServiceSelect }) => {
  return (
    <section id="tailored" className="w-full bg-transparent text-white py-20 px-4 sm:px-6 lg:px-8 border-t border-white/10 relative overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-sky-500/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Top Scroll Indicator Row */}
        <div className="flex justify-end mb-6">
          <span className="text-xs text-white/40 font-mono tracking-widest uppercase">
            // Scroll To Explore ↓
          </span>
        </div>

        {/* Section 1: Philosophy & 2x2 Feature Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start mb-24">
          
          {/* Left Column: Trajectory Graphic + Aspirational Editorial Headline */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 flex flex-col justify-between"
          >
            {/* Topographic flight route vector illustration */}
            <div className="relative w-full h-40 mb-6 rounded-2xl bg-white/[0.02] border border-white/10 p-4 flex items-center justify-center">
              {/* Grid pattern background */}
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>
              
              <svg className="w-full h-28 text-sky-400/80 drop-shadow-[0_0_10px_rgba(255,92,40,0.3)] overflow-visible" viewBox="0 0 350 100" fill="none" stroke="currentColor">
                {/* Dashed curved jet trajectory path with loop */}
                <path 
                  d="M 20,75 Q 80,10 140,50 T 220,40 C 260,10 290,90 270,50 C 255,20 300,20 330,35" 
                  strokeWidth="2" 
                  strokeDasharray="4 4"
                />
                {/* Jet outline vector */}
                <g transform="translate(320, 28) rotate(-15) scale(0.6)">
                  <path d="M100 10 C96 10 93 25 93 38 L10 50 C5 51 5 55 10 55 L90 53 L90 62 L80 68 L80 72 L100 70 L120 72 L120 68 L110 62 L110 53 L190 55 C195 55 195 51 190 50 L107 38 C107 25 104 10 100 10 Z" fill="#0284c7" stroke="#ffffff" strokeWidth="2" />
                </g>
              </svg>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal leading-tight text-white tracking-tight">
              More than just a flight,{' '}
              <span className="font-headline-italic text-sky-300">
                luxury, efficiency, personalised travel,
              </span>{' '}
              tailored to bring your aspirations to life.
            </h2>
          </motion.div>

          {/* Right Column: 2x2 Feature Highlights */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {/* Feature 1: Flexible Solutions */}
            <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-white/20 transition-all">
              <h3 className="text-base font-medium text-white mb-1.5 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
                Flexible Solutions
              </h3>
              <p className="text-xs text-white/60 leading-relaxed">
                Stop depending on airlines. Fly on your own terms or join our exclusive shared flights.
              </p>
            </div>

            {/* Feature 2: Smart Quotes */}
            <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-white/20 transition-all">
              <h3 className="text-base font-medium text-white mb-1.5 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                Smart Quotes
              </h3>
              <p className="text-xs text-white/60 leading-relaxed">
                Know what you are paying for. No hidden fees. No overpromises. Flights suitable for your needs.
              </p>
            </div>

            {/* Feature 3: Fully Customizable */}
            <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-white/20 transition-all">
              <h3 className="text-base font-medium text-white mb-1.5 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                Fully Customizable
              </h3>
              <p className="text-xs text-white/60 leading-relaxed">
                Control all aspects of your journey. Easily upgrade services with our premium add-ons.
              </p>
            </div>

            {/* Feature 4: Personalization */}
            <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-white/20 transition-all">
              <h3 className="text-base font-medium text-white mb-1.5 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                Personalization
              </h3>
              <p className="text-xs text-white/60 leading-relaxed">
                Receive full support of our Flight Management. We have you covered anywhere, anytime.
              </p>
            </div>
          </motion.div>

        </div>

        {/* Section 2: 3 Tall Service Tier Cards Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          
          {/* Tall Card 1: On-Demand */}
          <motion.div 
            initial={{ opacity: 0, x: -100, rotateY: 30 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            whileHover={{ scale: 1.05, y: -20, rotateX: 5, boxShadow: "0 30px 60px -15px rgba(2, 132, 199, 0.5)", zIndex: 10 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ type: "spring", stiffness: 90, damping: 20, delay: 0.1 }}
            onClick={() => onServiceSelect?.('On-Demand Private Jet')}
            className="group relative h-[420px] rounded-3xl overflow-hidden border border-white/10 bg-white/[0.04] backdrop-blur-xl shadow-2xl flex flex-col justify-end p-6 transition-all duration-300 cursor-none"
          >
            <img 
              src="https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=800&q=80" 
              alt="On-Demand jet on tarmac at sunset" 
              className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-75 group-hover:opacity-90"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent"></div>

            <div className="relative z-10">
              <h3 className="text-2xl sm:text-3xl font-normal font-headline-italic text-white mb-1 group-hover:text-sky-300 transition-colors">
                On-Demand
              </h3>
              <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                Customize all aspects of your journey.
              </p>
            </div>
          </motion.div>

          {/* Tall Card 2: Flexible Services (Dark Textured Card) */}
          <motion.div 
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            whileHover={{ scale: 1.05, y: -20, boxShadow: "0 30px 60px -15px rgba(2, 132, 199, 0.4)", zIndex: 10 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ type: "spring", stiffness: 90, damping: 20, delay: 0.2 }}
            onClick={() => onServiceSelect?.('Flexible Services Charter')}
            className="group relative h-[420px] rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl shadow-2xl flex flex-col justify-between p-7 hover:border-white/30 hover:bg-white/[0.07] transition-all duration-300 overflow-hidden cursor-none"
          >
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-white/70 mb-8">
                <Sliders className="w-3.5 h-3.5 text-sky-400" />
                <span>Tailored Charter</span>
              </div>

              <h3 className="text-3xl sm:text-4xl font-normal font-headline-italic text-white mb-3 tracking-tight">
                Flexible <br />
                <span className="text-sky-400">Services</span>
              </h3>

              <p className="text-xs sm:text-sm text-white/70 leading-relaxed max-w-xs">
                Smart solutions for all your charter requirements
              </p>
            </div>

            <div>
              <button 
                className="group/btn inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-xs font-medium text-white transition-all cursor-pointer"
              >
                <span>All Solutions</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-sky-400 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
              </button>
            </div>
          </motion.div>

          {/* Tall Card 3: Shared Flights */}
          <motion.div 
            initial={{ opacity: 0, x: 100, rotateY: -30 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            whileHover={{ scale: 1.05, y: -20, rotateX: 5, boxShadow: "0 30px 60px -15px rgba(2, 132, 199, 0.5)", zIndex: 10 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ type: "spring", stiffness: 90, damping: 20, delay: 0.3 }}
            onClick={() => onServiceSelect?.('Shared Flights')}
            className="group relative h-[420px] rounded-3xl overflow-hidden border border-white/10 bg-white/[0.04] backdrop-blur-xl shadow-2xl flex flex-col justify-end p-6 transition-all duration-300 cursor-none"
          >
            <img 
              src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=800&q=80" 
              alt="Two executives shaking hands in airport lounge at sunset" 
              className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-75 group-hover:opacity-90"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent"></div>

            <div className="relative z-10">
              <h3 className="text-2xl sm:text-3xl font-normal font-headline-italic text-white mb-1 group-hover:text-amber-300 transition-colors">
                Shared Flights
              </h3>
              <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                Fly private for a fraction of the price.
              </p>
            </div>
          </motion.div>

        </div>

        {/* Section 3: Global Airline & Aviation Partner Badges */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="pt-8 border-t border-white/10 flex flex-wrap items-center justify-center sm:justify-between gap-8 text-white/40 font-mono text-xs sm:text-sm tracking-wider uppercase"
        >
          <span className="hover:text-white/80 transition-colors cursor-default">Southwest</span>
          <span className="hover:text-white/80 transition-colors cursor-default font-serif lowercase italic text-base">British Airways</span>
          <span className="hover:text-white/80 transition-colors cursor-default border border-white/20 px-2 py-0.5 rounded text-[11px] font-bold">AIRBUS</span>
          <span className="hover:text-white/80 transition-colors cursor-default tracking-widest font-sans font-semibold">AIRFRANCE</span>
          <span className="hover:text-white/80 transition-colors cursor-default font-sans font-bold text-amber-500/70">RYANAIR</span>
        </motion.div>

      </div>
    </section>
  );
};
