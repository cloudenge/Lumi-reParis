import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Plane } from 'lucide-react';

export const Loader: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Lock scrolling while loading
    document.body.style.overflow = 'hidden';

    const duration = 2500;
    const interval = 25;
    const steps = duration / interval;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const nextProgress = Math.min(100, Math.floor((currentStep / steps) * 100));
      setProgress(nextProgress);

      if (currentStep >= steps) {
        clearInterval(timer);
        setTimeout(() => {
          onComplete();
          document.body.style.overflow = '';
        }, 600); // small delay at 100% before firing exit
      }
    }, interval);

    return () => {
      clearInterval(timer);
      document.body.style.overflow = '';
    };
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[100000] bg-neutral-950 flex flex-col items-center justify-center overflow-hidden cursor-none"
      exit={{ 
        opacity: 0, 
        filter: "blur(20px)",
        scale: 1.1,
        transition: { duration: 1.2, ease: [0.76, 0, 0.24, 1] } 
      }}
    >
      <div className="relative w-full max-w-lg mx-auto flex flex-col items-center">
        
        {/* Giant Plane SVG taking off */}
        <motion.div
          initial={{ y: 200, x: -200, scale: 0.5, rotate: 15 }}
          animate={{ 
            y: progress === 100 ? -400 : 0, 
            x: progress === 100 ? 400 : 0, 
            scale: progress === 100 ? 2 : 1,
            rotate: progress === 100 ? -15 : 15 
          }}
          transition={{ 
            duration: progress === 100 ? 1.2 : 2.5, 
            ease: progress === 100 ? "easeInOut" : "easeOut"
          }}
          className="text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.4)] mb-12"
        >
          <Plane className="w-32 h-32 text-white fill-white/10" />
        </motion.div>

        {/* Brand Reveal */}
        <motion.h1 
          className="text-3xl sm:text-5xl tracking-[0.2em] uppercase text-white font-light mb-6"
          initial={{ opacity: 0, filter: "blur(20px)", y: 20 }}
          animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          transition={{ duration: 1.5, delay: 0.2 }}
        >
          Lumière <span className="font-semibold text-sky-400">Paris</span>
        </motion.h1>

        {/* Progress Bar Container */}
        <div className="w-64 h-[2px] bg-white/10 rounded-full overflow-hidden relative">
          <motion.div 
            className="absolute top-0 left-0 h-full bg-sky-400 shadow-[0_0_10px_#38bdf8]"
            style={{ width: `${progress}%` }}
          />
        </div>
        
        <div className="mt-4 text-xs font-mono text-white/50 tracking-widest flex items-center gap-2">
          <span className="text-sky-400">
            {progress === 100 ? "CLEARED FOR TAKEOFF" : "INITIALIZING SYSTEMS"}
          </span>
          <span className="w-8 inline-block text-right text-white font-semibold">{progress}%</span>
        </div>

      </div>

      {/* Ambient background glows */}
      <motion.div 
        className="absolute bottom-0 w-full h-[40vh] bg-sky-500/10 blur-[100px] rounded-full"
        animate={{ opacity: progress / 100 }}
      />
    </motion.div>
  );
};
