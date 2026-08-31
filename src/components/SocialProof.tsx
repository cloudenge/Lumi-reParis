import React from 'react';
import { Feather, Zap, Hexagon, Box } from 'lucide-react';

export const SocialProof: React.FC = () => {
  return (
    <div className="w-full max-w-5xl mx-auto px-4 pt-2 pb-6 text-center">
      <p className="text-[11px] sm:text-xs font-medium text-white/70 tracking-wide uppercase mb-4">
        Trusted by 200+ companies
      </p>

      <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 md:gap-14 opacity-90 hover:opacity-100 transition-opacity">
        {/* FeatherDev */}
        <div className="flex items-center gap-2 text-white font-medium text-base sm:text-lg tracking-tight select-none">
          <Feather className="w-4 h-4 text-white/90" />
          <span>FeatherDev</span>
        </div>

        {/* Boltshift */}
        <div className="flex items-center gap-2 text-white font-medium text-base sm:text-lg tracking-tight select-none">
          <div className="w-5 h-5 rounded-md bg-white/10 flex items-center justify-center border border-white/20">
            <Zap className="w-3.5 h-3.5 text-white fill-white" />
          </div>
          <span>Boltshift</span>
        </div>

        {/* GlobalBank */}
        <div className="flex items-center gap-2 text-white font-medium text-base sm:text-lg tracking-tight select-none">
          <Hexagon className="w-4 h-4 text-white/90 stroke-[2.2]" />
          <span>GlobalBank</span>
        </div>

        {/* Lightbox */}
        <div className="flex items-center gap-2 text-white font-medium text-base sm:text-lg tracking-tight select-none">
          <Box className="w-4 h-4 text-white/90 stroke-[2.2]" />
          <span>Lightbox</span>
        </div>
      </div>
    </div>
  );
};
