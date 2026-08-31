import React, { useState } from 'react';
import { AnimatePresence } from 'motion/react';
import { Header } from './components/Header';
import { CanvasAnimation } from './components/CanvasAnimation';
import { CustomCursor } from './components/CustomCursor';
import { SmoothScroll } from './components/SmoothScroll';
import { BannerHero } from './components/BannerHero';
import { StatsCardsSection } from './components/StatsCardsSection';
import { ContactModal } from './components/ContactModal';
import { TailoredTravelSection } from './components/TailoredTravelSection';
import { ExecutiveTravelSection } from './components/ExecutiveTravelSection';
import { FooterSection } from './components/FooterSection';
import { LoadingScreen } from './components/LoadingScreen';
import { BackToTopButton } from './components/BackToTopButton';

export default function App() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="min-h-screen text-white bg-transparent">
      <SmoothScroll />
      <AnimatePresence>
        {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
      </AnimatePresence>
      <CustomCursor />
      <Header onContactClick={() => setIsContactModalOpen(true)} />
      <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
      <CanvasAnimation />
      <BannerHero 
        onWatchDemoClick={() => {}}
        onGetStartedClick={() => setIsContactModalOpen(true)}
        onReadMoreClick={() => {}}
      />
      <StatsCardsSection />
      <ExecutiveTravelSection onReserveClick={() => setIsContactModalOpen(true)} />
      <TailoredTravelSection />
      <FooterSection />
      <BackToTopButton />
    </div>
  );
}
