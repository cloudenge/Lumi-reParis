import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Compass, X, ArrowRight, Check, PhoneCall } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [showConciergeDirect, setShowConciergeDirect] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        handleClose();
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
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 800);
  };

  const handleClose = () => {
    onClose();
    setTimeout(() => {
      setIsSuccess(false);
      setEmail('');
      setName('');
      setShowConciergeDirect(false);
    }, 300);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-black/75 backdrop-blur-md cursor-pointer"
            aria-hidden="true"
          />
          
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 16 }}
            transition={{ type: 'spring', damping: 26, stiffness: 320 }}
            className="relative w-full max-w-sm sm:max-w-md bg-[#0f0f0f] border border-white/15 rounded-3xl p-6 sm:p-8 z-[101] shadow-2xl shadow-black/90 overflow-hidden my-auto select-none"
            role="dialog"
            aria-modal="true"
          >
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/15 transition-colors text-white/70 hover:text-white z-10 cursor-pointer focus:outline-none focus:ring-1 focus:ring-white/40"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Header / Logo */}
            <div className="flex items-center gap-2.5 mb-6">
              <div className="w-8 h-8 rounded-full bg-[#0284c7]/20 flex items-center justify-center border border-[#0284c7]/40">
                <Compass className="w-4 h-4 text-[#0284c7]" />
              </div>
              <div className="text-lg tracking-wide">
                <span className="font-semibold text-white">Lumière</span>
                <span className="font-light text-[#0284c7] ml-1">Paris</span>
              </div>
            </div>

            {!isSuccess ? (
              <motion.div
                key="form"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
              >
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-2 tracking-tight">
                  Plan Your Dream Paris Trip
                </h2>
                <p className="text-xs sm:text-[13px] text-white/70 mb-6 leading-relaxed">
                  Get customized Paris itineraries, private tour quotes, and luxury jet charter perks tailored for your travel dates.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4 relative z-10">
                  <div>
                    <label className="block text-[11px] text-white/90 font-medium mb-1.5 ml-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Eleanor Vance"
                      className="w-full bg-[#161616] border border-white/15 rounded-xl px-4 py-2.5 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-[#0284c7] focus:ring-1 focus:ring-[#0284c7]/50 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] text-white/90 font-medium mb-1.5 ml-1">
                      Email Address <span className="text-sky-400">*</span>
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="traveler@example.com"
                      required
                      className="w-full bg-[#161616] border border-white/15 rounded-xl px-4 py-2.5 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-[#0284c7] focus:ring-1 focus:ring-[#0284c7]/50 transition-all"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full group bg-[#0284c7] hover:bg-[#0369a1] text-white rounded-xl py-3 font-medium text-sm transition-all shadow-[0_0_20px_rgba(2,132,199,0.25)] hover:shadow-[0_0_25px_rgba(2,132,199,0.45)] flex items-center justify-center gap-2 disabled:opacity-70 cursor-pointer active:scale-98 border border-sky-400/30"
                  >
                    {isSubmitting ? (
                      <span className="animate-pulse">Preparing Itinerary...</span>
                    ) : (
                      <>
                        <span>Request Custom Itinerary</span>
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </>
                    )}
                  </button>
                </form>

                {showConciergeDirect ? (
                  <div className="mt-4 p-3 rounded-xl bg-white/5 border border-white/10 text-center">
                    <p className="text-xs text-white/90 font-medium flex items-center justify-center gap-1.5 mb-1">
                      <PhoneCall className="w-3.5 h-3.5 text-sky-400" />
                      Direct Paris Concierge Line:
                    </p>
                    <p className="text-sm font-mono text-sky-400 font-semibold">+33 1 42 68 55 00</p>
                    <p className="text-[10px] text-white/50 mt-1">Available 24/7 for bespoke travel planning</p>
                  </div>
                ) : (
                  <p className="text-[11px] text-center text-white/50 mt-5 relative z-10">
                    Need instant assistance?{' '}
                    <button
                      type="button"
                      onClick={() => setShowConciergeDirect(true)}
                      className="text-[#0284c7] hover:underline cursor-pointer font-medium focus:outline-none"
                    >
                      Speak with a Paris Concierge
                    </button>
                  </p>
                )}
              </motion.div>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-4 text-center relative z-10"
              >
                <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-5">
                  <Check className="w-7 h-7 text-emerald-400" />
                </div>
                
                <h2 className="text-xl font-bold text-white mb-2 tracking-tight">Merci! Request Received</h2>
                <p className="text-xs sm:text-[13px] text-white/70 mb-6 leading-relaxed max-w-[280px]">
                  We've sent a confirmation to <br/>
                  <span className="text-white font-medium">{email}</span>. A Paris luxury specialist will reach out within 2 hours.
                </p>
                
                <button
                  onClick={handleClose}
                  className="px-8 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white font-medium text-xs sm:text-sm transition-all cursor-pointer border border-white/10 active:scale-95"
                >
                  Done
                </button>
              </motion.div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

