import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Code2 } from 'lucide-react';

interface XprogencyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const XprogencyModal: React.FC<XprogencyModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[120] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Dark Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md cursor-pointer"
            aria-hidden="true"
          />

          {/* Centered Modal Card (Strictly Black & White / Minimal Luxury) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 16 }}
            transition={{ type: 'spring', damping: 28, stiffness: 360 }}
            className="relative w-full max-w-[340px] sm:max-w-[380px] bg-[#0c0c0c] border border-white/15 rounded-3xl p-7 sm:p-8 text-center text-white shadow-[0_25px_70px_rgba(0,0,0,0.95)] overflow-hidden z-10 my-auto select-none"
            role="dialog"
            aria-modal="true"
            aria-labelledby="xprogency-modal-title"
          >
            {/* Subtle monochrome inner spotlight */}
            <div className="absolute -top-20 -left-20 w-44 h-44 bg-white/[0.04] rounded-full blur-3xl pointer-events-none" />

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/15 transition-all duration-200 cursor-pointer focus:outline-none focus:ring-1 focus:ring-white/40"
              aria-label="Close developer credit popup"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Top Developer Badge */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono tracking-[0.25em] uppercase text-white/60 mb-5">
              <Code2 className="w-3 h-3 text-white/70" />
              <span>DEVELOPER CREDIT</span>
            </div>

            {/* Intro Lead Text */}
            <p className="text-xs sm:text-[13px] text-white/70 font-normal tracking-wide mb-2">
              This website was developed by
            </p>

            {/* Prominent Xprogency Brand Wordmark */}
            <h2 
              id="xprogency-modal-title"
              className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-2 drop-shadow-sm font-sans"
            >
              Xprogency
            </h2>

            {/* Subtitle / Discipline */}
            <p className="text-[11px] sm:text-xs text-white/45 font-mono tracking-wider uppercase mb-7">
              Creative design &amp; web development
            </p>

            {/* Divider Line */}
            <div className="w-full h-px bg-white/10 mb-5" />

            {/* Action Button */}
            <button
              onClick={onClose}
              className="w-full py-2.5 rounded-full bg-white text-black font-semibold text-xs hover:bg-white/90 transition-all duration-200 cursor-pointer active:scale-95 shadow-md"
            >
              Close
            </button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
