import React from 'react';
import { X, Play, CheckCircle2, Sparkles } from 'lucide-react';

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DemoModal: React.FC<DemoModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
      <div 
        className="relative w-full max-w-3xl rounded-2xl bg-neutral-900 border border-neutral-800 p-6 sm:p-8 shadow-2xl overflow-hidden text-white"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-neutral-800 hover:bg-neutral-700 text-neutral-400 hover:text-white transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-2 mb-2 text-sky-400 font-medium text-xs tracking-wider uppercase">
          <Sparkles className="w-4 h-4" />
          <span>Exclusive Paris Experience</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
          Lumière Paris Tour Highlights
        </h2>
        <p className="text-neutral-400 text-sm mb-6">
          Explore iconic Paris landmarks, private Seine cruises, Michelin dining, and luxury stays in 2 minutes.
        </p>

        {/* Video Placeholder Stage */}
        <div className="relative aspect-video w-full rounded-xl bg-neutral-950 border border-neutral-800 flex flex-col items-center justify-center overflow-hidden group cursor-pointer">
          <div className="w-16 h-16 rounded-full bg-[#0284c7] flex items-center justify-center shadow-lg shadow-sky-500/30 group-hover:scale-110 transition-transform">
            <Play className="w-7 h-7 text-white fill-white ml-1" />
          </div>
          <span className="mt-4 text-xs font-semibold text-neutral-300">Click to Play Demo Video (1:48)</span>
          
          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[11px] text-neutral-400">
            <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> HD 1080p Stream</span>
            <span>Subtitles Available</span>
          </div>
        </div>

        {/* Action Button */}
        <div className="mt-6 flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-full bg-neutral-800 hover:bg-neutral-700 text-white text-xs font-semibold cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
