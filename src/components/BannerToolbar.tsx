import React, { useState } from 'react';
import { Code, Check, Edit3, Monitor, Tablet, Smartphone, Sparkles } from 'lucide-react';

interface BannerToolbarProps {
  headline: string;
  subheadline: string;
  announcementText: string;
  setHeadline: (v: string) => void;
  setSubheadline: (v: string) => void;
  setAnnouncementText: (v: string) => void;
  viewportMode: 'desktop' | 'tablet' | 'mobile';
  setViewportMode: (v: 'desktop' | 'tablet' | 'mobile') => void;
}

export const BannerToolbar: React.FC<BannerToolbarProps> = ({
  headline,
  subheadline,
  announcementText,
  setHeadline,
  setSubheadline,
  setAnnouncementText,
  viewportMode,
  setViewportMode,
}) => {
  const [showCode, setShowCode] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [copied, setCopied] = useState(false);

  const bannerCodeSnippet = `
/* Vetra AI Sales Banner - Pure Black DM Sans Layout */
<section className="bg-black text-white font-['DM_Sans'] min-h-screen">
  {/* Header Nav */}
  <header className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">
    <div className="flex items-center gap-2 font-bold text-2xl">Vetra</div>
    <nav className="flex gap-8 text-sm">
      <a href="#usecases">Use cases v</a>
      <a href="#features">Features v</a>
      <a href="#pricing">Pricing</a>
      <a href="#contact">Contact</a>
    </nav>
    <button className="bg-[#0284c7] text-white px-6 py-2.5 rounded-full font-semibold">Get started</button>
  </header>

  {/* Hero Banner */}
  <div className="max-w-5xl mx-auto px-4 py-16 text-center">
    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-neutral-900 border border-neutral-800 text-sm mb-8">
      <span>${announcementText}</span>
      <span className="w-5 h-5 rounded-full bg-[#0284c7] flex items-center justify-center">→</span>
    </div>
    <h1 className="text-6xl font-bold mb-6">${headline}</h1>
    <p className="text-xl text-white/90 max-w-2xl mx-auto mb-10">${subheadline}</p>
    <div className="flex justify-center gap-4">
      <button className="px-7 py-3.5 rounded-full bg-neutral-900 border border-neutral-800">Watch Demo</button>
      <button className="px-7 py-3.5 rounded-full bg-[#0284c7]">Get started for free</button>
    </div>
  </div>
</section>
`;

  const copyCode = () => {
    navigator.clipboard.writeText(bannerCodeSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full bg-neutral-950 border-b border-neutral-800/80 px-4 py-2 text-xs z-40 sticky top-0 shadow-md">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
        
        {/* Left Status Tag */}
        <div className="flex items-center gap-2">
          <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-neutral-900 border border-neutral-800 text-neutral-300 font-medium">
            <Sparkles className="w-3.5 h-3.5 text-sky-400" />
            <span>Vetra AI Sales Banner</span>
          </span>
          <span className="hidden sm:inline-block text-[11px] text-neutral-400">
            DM Sans • Pure Black • High White Contrast
          </span>
        </div>

        {/* Center Viewport Switcher */}
        <div className="flex items-center gap-1 bg-neutral-900 p-1 rounded-lg border border-neutral-800">
          <button
            onClick={() => setViewportMode('desktop')}
            className={`p-1.5 rounded-md flex items-center gap-1 text-[11px] font-medium transition-colors cursor-pointer ${
              viewportMode === 'desktop' ? 'bg-neutral-800 text-white' : 'text-neutral-400 hover:text-white'
            }`}
            title="Desktop View"
          >
            <Monitor className="w-3.5 h-3.5" />
            <span className="hidden md:inline">Desktop</span>
          </button>
          <button
            onClick={() => setViewportMode('tablet')}
            className={`p-1.5 rounded-md flex items-center gap-1 text-[11px] font-medium transition-colors cursor-pointer ${
              viewportMode === 'tablet' ? 'bg-neutral-800 text-white' : 'text-neutral-400 hover:text-white'
            }`}
            title="Tablet View (768px)"
          >
            <Tablet className="w-3.5 h-3.5" />
            <span className="hidden md:inline">Tablet</span>
          </button>
          <button
            onClick={() => setViewportMode('mobile')}
            className={`p-1.5 rounded-md flex items-center gap-1 text-[11px] font-medium transition-colors cursor-pointer ${
              viewportMode === 'mobile' ? 'bg-neutral-800 text-white' : 'text-neutral-400 hover:text-white'
            }`}
            title="Mobile View (375px)"
          >
            <Smartphone className="w-3.5 h-3.5" />
            <span className="hidden md:inline">Mobile</span>
          </button>
        </div>

        {/* Right Tools */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setShowEdit(!showEdit)}
            className={`px-3 py-1.5 rounded-lg border text-xs font-medium flex items-center gap-1.5 transition-colors cursor-pointer ${
              showEdit 
                ? 'bg-sky-500/10 border-sky-500/30 text-sky-400' 
                : 'bg-neutral-900 border-neutral-800 text-neutral-300 hover:text-white'
            }`}
          >
            <Edit3 className="w-3.5 h-3.5" />
            <span>Edit Text</span>
          </button>

          <button
            onClick={() => setShowCode(!showCode)}
            className={`px-3 py-1.5 rounded-lg border text-xs font-medium flex items-center gap-1.5 transition-colors cursor-pointer ${
              showCode 
                ? 'bg-sky-500/10 border-sky-500/30 text-sky-400' 
                : 'bg-neutral-900 border-neutral-800 text-neutral-300 hover:text-white'
            }`}
          >
            <Code className="w-3.5 h-3.5" />
            <span>Export Code</span>
          </button>
        </div>
      </div>

      {/* Edit Drawer */}
      {showEdit && (
        <div className="mt-3 pt-3 border-t border-neutral-800 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-3 animate-fade-in">
          <div>
            <label className="block text-[11px] text-neutral-400 mb-1">Badge Text</label>
            <input
              type="text"
              value={announcementText}
              onChange={(e) => setAnnouncementText(e.target.value)}
              className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-3 py-1.5 text-xs text-white focus:outline-none focus:border-sky-500"
            />
          </div>
          <div>
            <label className="block text-[11px] text-neutral-400 mb-1">Main Headline</label>
            <input
              type="text"
              value={headline}
              onChange={(e) => setHeadline(e.target.value)}
              className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-3 py-1.5 text-xs text-white focus:outline-none focus:border-sky-500"
            />
          </div>
          <div>
            <label className="block text-[11px] text-neutral-400 mb-1">Subheadline</label>
            <input
              type="text"
              value={subheadline}
              onChange={(e) => setSubheadline(e.target.value)}
              className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-3 py-1.5 text-xs text-white focus:outline-none focus:border-sky-500"
            />
          </div>
        </div>
      )}

      {/* Export Code Modal / Drawer */}
      {showCode && (
        <div className="mt-3 pt-3 border-t border-neutral-800 max-w-7xl mx-auto animate-fade-in">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold text-white">JSX / Tailwind Code Snippet</span>
            <button
              onClick={copyCode}
              className="px-3 py-1 rounded-md bg-[#0284c7] text-white text-xs font-medium hover:bg-[#0369a1] flex items-center gap-1 cursor-pointer"
            >
              {copied ? <Check className="w-3.5 h-3.5" /> : <Code className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied!' : 'Copy Snippet'}</span>
            </button>
          </div>
          <pre className="p-3 bg-neutral-900 rounded-xl border border-neutral-800 text-[11px] font-mono text-sky-300 overflow-x-auto max-h-48">
            {bannerCodeSnippet}
          </pre>
        </div>
      )}
    </div>
  );
};
