import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Plane } from 'lucide-react';

interface LoadingScreenProps {
  onComplete: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 2500; // 2.5 seconds total loading time
    const intervalTime = 30;
    const increment = 100 / (duration / intervalTime);

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 400); // Wait a bit at 100% before firing complete
          return 100;
        }
        // Randomize increment slightly for realistic loading feel
        return Math.min(100, prev + increment + (Math.random() * 2 - 1));
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, filter: 'blur(10px)' }}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
      className="fixed inset-0 z-[99999] bg-[#050505] flex flex-col items-center justify-center"
    >
      <div className="flex flex-col items-center">
        {/* Glowing Airplane */}
        <motion.div
          animate={{ 
            y: 80 - (progress / 100) * 90, // Starts at 80px down, ends at -10px
            scale: 0.4 + (progress / 100) * 0.8, // Starts small (0.4), ends at 1.2
            opacity: progress > 5 ? 1 : 0, // Fades in quickly
            rotate: -15 + (progress / 100) * 5, // Slight tilt change as it takes off
          }}
          transition={{ 
            type: "tween",
            ease: "easeOut",
            duration: 0.2 // Quick response to the progress state updates
          }}
          className="mb-10"
        >
          <Plane 
            className="w-16 h-16 text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.6)]"
            strokeWidth={1.5}
          />
        </motion.div>

        {/* Logo Text */}
        <div className="text-3xl tracking-[0.3em] font-light mb-8 flex items-center">
          <span className="text-white">LUMIÈRE</span>
          <span className="text-[#0284c7] ml-3 font-medium">PARIS</span>
        </div>

        {/* Progress Bar Container */}
        <div className="w-64 h-[2px] bg-white/10 mb-5 overflow-hidden">
          <motion.div 
            className="h-full bg-[#0284c7] shadow-[0_0_10px_rgba(2,132,199,0.8)]"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Progress Text */}
        <div className="flex items-center gap-3 text-[10px] tracking-[0.2em] font-mono">
          <span className="text-[#0284c7]">INITIALIZING SYSTEMS</span>
          <span className="text-white w-8">{Math.floor(progress)}%</span>
        </div>
      </div>
    </motion.div>
  );
};
