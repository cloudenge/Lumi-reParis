import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Sparkles } from 'lucide-react';

export interface InfoModalData {
  isOpen: boolean;
  title?: string;
  subtitle?: string;
  message?: string;
  tag?: string;
  showAttribution?: boolean;
}

interface InfoModalProps {
  modalData: InfoModalData;
  onClose: () => void;
}

export const InfoModal: React.FC<InfoModalProps> = ({ modalData, onClose }) => {
  const {
    isOpen,
    title = 'Coming Soon',
    subtitle,
    message = 'This experience is currently being prepared.',
    tag = 'Notice',
    showAttribution = true,
  } = modalData;

  // Handle ESC key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      // Lock body scroll
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
          {/* Backdrop with subtle blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md cursor-pointer"
            aria-hidden="true"
          />

          {/* Modal Dialog (Strictly Black & White / Grayscale) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 16 }}
            transition={{ type: 'spring', damping: 28, stiffness: 350 }}
            className="relative w-full max-w-sm sm:max-w-md bg-[#0a0a0a] border border-white/15 rounded-3xl p-6 sm:p-8 text-white shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] overflow-hidden z-10 my-auto select-none"
            role="dialog"
            aria-modal="true"
            aria-labelledby="info-modal-title"
          >
            {/* Ambient grayscale inner highlight */}
            <div className="absolute -top-24 -left-24 w-48 h-48 bg-white/[0.04] rounded-full blur-2xl pointer-events-none" />

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/15 transition-all duration-200 cursor-pointer focus:outline-none focus:ring-1 focus:ring-white/40"
              aria-label="Close popup"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Tag / Badge */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-[10px] sm:text-[11px] font-mono tracking-wider uppercase text-white/90 mb-4">
              <Sparkles className="w-3 h-3 text-white/80" />
              <span>{tag}</span>
            </div>

            {/* Title */}
            <h3
              id="info-modal-title"
              className="text-xl sm:text-2xl font-semibold tracking-tight text-white mb-2"
            >
              {title}
            </h3>

            {/* Subtitle if provided */}
            {subtitle && (
              <p className="text-xs sm:text-sm font-medium text-white/80 mb-2">
                {subtitle}
              </p>
            )}

            {/* Message Body */}
            <p className="text-xs sm:text-sm text-white/60 font-normal leading-relaxed mb-6">
              {message}
            </p>

            {/* Divider */}
            <div className="w-full h-px bg-white/10 my-4" />

            {/* Xprogency Attribution & Action Row */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-1">
              {showAttribution ? (
                <div className="text-[11px] sm:text-xs text-white/50 font-normal tracking-wide text-center sm:text-left">
                  <span>This website was developed by </span>
                  <strong className="font-semibold text-white/90">Xprogency</strong>.
                </div>
              ) : (
                <div />
              )}

              <button
                onClick={onClose}
                className="w-full sm:w-auto px-5 py-2 rounded-full bg-white text-black font-semibold text-xs hover:bg-white/90 transition-all duration-200 cursor-pointer active:scale-95 shadow-md"
              >
                Close
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
