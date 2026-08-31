import React from 'react';
import { Compass, Plane } from 'lucide-react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const LumiereParisLogo: React.FC<LogoProps> = ({ size = 'md', className = '' }) => {
  const iconSizes = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-7 h-7',
  };

  const textSizes = {
    sm: 'text-base font-semibold tracking-tight',
    md: 'text-xl font-semibold tracking-tight',
    lg: 'text-2xl font-semibold tracking-tight',
  };

  return (
    <div className={`flex items-center gap-2.5 select-none ${className}`}>
      <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-sky-500/20 to-amber-500/30 border border-sky-500/30 flex items-center justify-center text-sky-400 shadow-md">
        <Compass className={`${iconSizes[size]} stroke-[2]`} />
      </div>
      <div className="flex items-center gap-1">
        <span className={`${textSizes[size]} text-white font-sans tracking-tight`}>
          Lumière <span className="text-sky-400 font-light">Paris</span>
        </span>
      </div>
    </div>
  );
};

export const LumiereCircularEmblem: React.FC<{ size?: number; className?: string }> = ({ size = 96, className = '' }) => {
  return (
    <div 
      style={{ width: size, height: size }} 
      className={`relative rounded-full bg-gradient-to-br from-neutral-900 via-neutral-950 to-black border-2 border-sky-500/80 shadow-[0_0_30px_rgba(255,92,40,0.35)] flex items-center justify-center select-none overflow-hidden ${className}`}
    >
      {/* Outer Orange/Amber Accent Ring */}
      <div className="absolute inset-1 rounded-full border border-sky-400/40 pointer-events-none"></div>

      {/* SVG Arc Text */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
        <path id="textPathTop" d="M 18,50 A 32,32 0 1,1 82,50" fill="none" />
        <path id="textPathBottom" d="M 82,50 A 32,32 0 0,1 18,50" fill="none" />
        <text className="text-[7.5px] font-bold fill-white uppercase tracking-widest" textAnchor="middle">
          <textPath href="#textPathTop" startOffset="50%">
            LUMIÈRE PARIS
          </textPath>
        </text>
        <text className="text-[6.5px] font-semibold fill-sky-400 uppercase tracking-wider" textAnchor="middle">
          <textPath href="#textPathBottom" startOffset="50%">
            EXECUTIVE AVIATION
          </textPath>
        </text>
      </svg>

      {/* Center Icon Badge */}
      <div className="w-10 h-10 rounded-full bg-[#0284c7] border border-sky-300 flex items-center justify-center text-white shadow-inner z-10">
        <Plane className="w-5 h-5 fill-white text-white rotate-45 -translate-y-0.5" />
      </div>
    </div>
  );
};


