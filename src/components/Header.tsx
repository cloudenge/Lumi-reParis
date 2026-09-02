import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Compass, Menu, X, ArrowRight } from 'lucide-react';

interface HeaderProps {
  onContactClick?: () => void;
  activeSection?: string;
  onNavigate?: (id: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ 
  onContactClick, 
  activeSection = 'experience',
  onNavigate 
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Experience', id: 'experience' },
    { name: 'Executive Fleet', id: 'executive' },
    { name: 'Tailored Services', id: 'tailored' },
  ];

  const handleNavClick = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (onNavigate) {
      onNavigate(id);
    } else {
      const element = document.getElementById(id);
      if (element) {
        const headerOffset = 100;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
      }
    }
  };

  const handleContactClick = () => {
    setMobileMenuOpen(false);
    onContactClick?.();
  };

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-4 sm:top-6 left-1/2 -translate-x-1/2 w-[94%] sm:w-[90%] max-w-5xl z-50 transition-all duration-500"
      >
        <div 
          className={`flex items-center justify-between px-4 sm:px-6 py-2.5 sm:py-3 rounded-full border transition-all duration-500 ${
            scrolled 
              ? 'bg-[#050505]/80 backdrop-blur-xl border-white/20 shadow-2xl shadow-black/60' 
              : 'bg-white/[0.04] backdrop-blur-md border-white/10 shadow-lg'
          }`}
        >
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-2 cursor-pointer group focus:outline-none"
            aria-label="Lumière Paris Home"
          >
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#0284c7]/20 flex items-center justify-center border border-[#0284c7]/40 group-hover:border-[#0284c7] transition-colors">
              <Compass className="w-4 h-4 sm:w-5 sm:h-5 text-[#0284c7] group-hover:rotate-45 transition-transform duration-300" />
            </div>
            <div className="text-lg sm:text-xl tracking-wide select-none">
              <span className="font-semibold text-white">Lumière</span>
              <span className="font-light text-[#0284c7] ml-1">Paris</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.name}
                  href={`#${item.id}`}
                  onClick={(e) => handleNavClick(item.id, e)}
                  className={`relative px-3.5 py-1.5 rounded-full text-xs lg:text-sm font-medium transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'text-white bg-white/10 shadow-sm'
                      : 'text-white/70 hover:text-white hover:bg-white/[0.05]'
                  }`}
                >
                  {item.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavPill"
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-[2px] bg-[#0284c7] rounded-full shadow-[0_0_8px_rgba(2,132,199,0.8)]"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
            <button
              onClick={handleContactClick}
              className={`relative px-3.5 py-1.5 rounded-full text-xs lg:text-sm font-medium transition-all duration-200 cursor-pointer ${
                activeSection === 'contact'
                  ? 'text-white bg-white/10 shadow-sm'
                  : 'text-white/70 hover:text-white hover:bg-white/[0.05]'
              }`}
            >
              Contact
              {activeSection === 'contact' && (
                <motion.div
                  layoutId="activeNavPill"
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-[2px] bg-[#0284c7] rounded-full shadow-[0_0_8px_rgba(2,132,199,0.8)]"
                  transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                />
              )}
            </button>
          </nav>

          {/* Right Actions: Desktop CTA + Mobile Hamburger */}
          <div className="flex items-center gap-2">
            {/* CTA Button (Desktop) */}
            <button 
              onClick={handleContactClick}
              className="hidden sm:inline-flex items-center justify-center px-5 py-2 rounded-full bg-[#0284c7] hover:bg-[#0369a1] text-white font-medium text-xs sm:text-sm transition-all duration-200 shadow-lg shadow-sky-500/20 active:scale-95 cursor-pointer border border-sky-400/20"
            >
              Plan Your Trip
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden w-9 h-9 rounded-full bg-white/10 border border-white/15 flex items-center justify-center text-white/90 hover:text-white hover:bg-white/20 transition-colors cursor-pointer"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Navigation Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/70 backdrop-blur-md z-40 md:hidden"
            />

            {/* Mobile Menu Content */}
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.96 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="fixed top-20 left-4 right-4 bg-[#0a0a0a]/95 border border-white/20 rounded-3xl p-6 z-50 md:hidden shadow-2xl shadow-black/80 backdrop-blur-2xl max-w-sm mx-auto"
            >
              <div className="flex flex-col gap-3">
                <span className="text-[10px] uppercase font-mono tracking-widest text-white/40 mb-1 px-2">
                  Navigation Menu
                </span>

                {navItems.map((item) => {
                  const isActive = activeSection === item.id;
                  return (
                    <a
                      key={item.name}
                      href={`#${item.id}`}
                      onClick={(e) => handleNavClick(item.id, e)}
                      className={`flex items-center justify-between px-4 py-3 rounded-2xl text-sm font-medium transition-all ${
                        isActive
                          ? 'text-white bg-white/10 border border-white/15 shadow-inner'
                          : 'text-white/70 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#0284c7]" />}
                        {item.name}
                      </span>
                      <ArrowRight className="w-4 h-4 text-white/40" />
                    </a>
                  );
                })}

                <button
                  onClick={handleContactClick}
                  className={`flex items-center justify-between px-4 py-3 rounded-2xl text-sm font-medium transition-all text-left ${
                    activeSection === 'contact'
                      ? 'text-white bg-white/10 border border-white/15 shadow-inner'
                      : 'text-white/70 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    {activeSection === 'contact' && <span className="w-1.5 h-1.5 rounded-full bg-[#0284c7]" />}
                    Contact
                  </span>
                  <ArrowRight className="w-4 h-4 text-white/40" />
                </button>

                <div className="pt-3 border-t border-white/10 mt-1">
                  <button
                    onClick={handleContactClick}
                    className="w-full py-3 rounded-2xl bg-[#0284c7] hover:bg-[#0369a1] text-white font-semibold text-sm transition-all shadow-lg shadow-sky-500/20 active:scale-98 flex items-center justify-center gap-2"
                  >
                    <span>Plan Your Trip</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

