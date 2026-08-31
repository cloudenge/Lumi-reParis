import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Compass, X, ArrowRight, Check } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1000);
  };

  const handleClose = () => {
    onClose();
    // Reset state after animation finishes
    setTimeout(() => {
      setIsSuccess(false);
      setEmail('');
    }, 300);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] flex items-center justify-center p-4 cursor-pointer"
          />
          
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md bg-[#161616] border border-white/10 rounded-2xl p-8 z-[101] shadow-2xl overflow-hidden"
          >
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-6 right-6 w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors text-white/70 hover:text-white z-10 cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Header / Logo */}
            <div className="flex items-center gap-2 mb-8">
              <div className="w-8 h-8 rounded-full bg-[#0284c7]/20 flex items-center justify-center border border-[#0284c7]/30">
                <Compass className="w-5 h-5 text-[#0284c7]" />
              </div>
              <div className="text-lg tracking-wide">
                <span className="font-semibold text-white">Lumière</span>
                <span className="font-light text-[#0284c7] ml-1">Paris</span>
              </div>
            </div>

            {!isSuccess ? (
              <motion.div
                key="form"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
              >
                <h2 className="text-2xl font-bold text-white mb-2 tracking-tight">Plan Your Dream Paris Trip</h2>
                <p className="text-[13px] text-white/60 mb-6 leading-relaxed">
                  Get customized Paris itineraries, private tour quotes, and luxury hotel perks tailored for your travel dates.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4 relative z-10">
                  <div>
                    <label className="block text-[11px] text-white/80 font-medium mb-1.5 ml-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="traveler@example.com"
                      required
                      className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-[#0284c7] focus:ring-1 focus:ring-[#0284c7]/50 transition-all"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full group bg-[#0284c7] hover:bg-[#0369a1] text-white rounded-xl py-3 font-medium text-sm transition-all shadow-[0_0_20px_rgba(2,132,199,0.2)] hover:shadow-[0_0_25px_rgba(2,132,199,0.4)] flex items-center justify-center gap-2 disabled:opacity-70 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <span className="animate-pulse">Sending...</span>
                    ) : (
                      <>
                        Request Custom Itinerary
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </>
                    )}
                  </button>
                </form>

                <p className="text-[11px] text-center text-white/40 mt-6 relative z-10">
                  Need instant assistance? <button className="text-[#0284c7] hover:underline cursor-pointer">Speak with a Paris Concierge</button>
                </p>
              </motion.div>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex flex-col items-center justify-center py-4 text-center relative z-10"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-6">
                  <Check className="w-8 h-8 text-emerald-500" />
                </div>
                
                <h2 className="text-xl font-bold text-white mb-4 tracking-tight">Merci! Request Received</h2>
                <p className="text-[13px] text-white/60 mb-8 leading-relaxed max-w-[280px]">
                  We've sent a confirmation to <br/>
                  <span className="text-white font-medium">{email}</span>. A Paris travel specialist will reach out within 2 hours.
                </p>
                
                <button
                  onClick={handleClose}
                  className="px-8 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white font-medium text-sm transition-all cursor-pointer border border-white/5"
                >
                  Done
                </button>
              </motion.div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
