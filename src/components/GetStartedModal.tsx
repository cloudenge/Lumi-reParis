import React, { useState } from 'react';
import { X, ArrowRight, Check } from 'lucide-react';
import { LumiereParisLogo } from './Logo';

interface GetStartedModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GetStartedModal: React.FC<GetStartedModalProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
      <div 
        className="relative w-full max-w-md rounded-2xl bg-neutral-900 border border-neutral-800 p-6 sm:p-8 shadow-2xl overflow-hidden text-white"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-neutral-800 hover:bg-neutral-700 text-neutral-400 hover:text-white transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="mb-6">
          <LumiereParisLogo size="sm" />
        </div>

        {!submitted ? (
          <>
            <h2 className="text-2xl font-bold text-white mb-2">
              Plan Your Dream Paris Trip
            </h2>
            <p className="text-neutral-400 text-xs mb-6 leading-relaxed">
              Get customized Paris itineraries, private tour quotes, and luxury hotel perks tailored for your travel dates.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-neutral-300 mb-1.5">Email Address</label>
                <input
                  type="email"
                  required
                  placeholder="traveler@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-2.5 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-sky-500"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-full bg-[#0284c7] hover:bg-[#0369a1] text-white font-semibold text-sm transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-sky-500/20"
              >
                <span>Request Custom Itinerary</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>

            <div className="mt-6 pt-4 border-t border-neutral-800/60 text-center">
              <span className="text-[11px] text-neutral-500">
                Need instant assistance? <a href="#contact" className="text-sky-400 hover:underline">Speak with a Paris Concierge</a>
              </span>
            </div>
          </>
        ) : (
          <div className="text-center py-6 space-y-4">
            <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto">
              <Check className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white">Merci! Request Received</h3>
            <p className="text-xs text-neutral-400 leading-relaxed max-w-xs mx-auto">
              We've sent a confirmation to <span className="text-white font-medium">{email}</span>. A Paris travel specialist will reach out within 2 hours.
            </p>
            <button
              onClick={onClose}
              className="mt-4 px-6 py-2.5 rounded-full bg-neutral-800 text-white text-xs font-semibold hover:bg-neutral-700 cursor-pointer"
            >
              Done
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

