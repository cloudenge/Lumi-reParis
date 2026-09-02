import React, { useState, useEffect, useCallback } from 'react';
import { AnimatePresence } from 'motion/react';
import { Header } from './components/Header';
import { CanvasAnimation } from './components/CanvasAnimation';
import { CustomCursor } from './components/CustomCursor';
import { SmoothScroll } from './components/SmoothScroll';
import { BannerHero } from './components/BannerHero';
import { StatsCardsSection } from './components/StatsCardsSection';
import { ContactModal } from './components/ContactModal';
import { InfoModal, InfoModalData } from './components/InfoModal';
import { XprogencyModal } from './components/XprogencyModal';
import { TailoredTravelSection } from './components/TailoredTravelSection';
import { ExecutiveTravelSection } from './components/ExecutiveTravelSection';
import { FooterSection } from './components/FooterSection';
import { LoadingScreen } from './components/LoadingScreen';
import { BackToTopButton } from './components/BackToTopButton';

export default function App() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isXprogencyModalOpen, setIsXprogencyModalOpen] = useState(false);
  const [infoModalData, setInfoModalData] = useState<InfoModalData>({
    isOpen: false,
    title: '',
    message: '',
    tag: 'Notice',
    showAttribution: true,
  });
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('experience');

  const openInfoModal = useCallback((data: Omit<InfoModalData, 'isOpen'>) => {
    setInfoModalData({
      isOpen: true,
      showAttribution: true,
      ...data,
    });
  }, []);

  const closeInfoModal = useCallback(() => {
    setInfoModalData((prev) => ({ ...prev, isOpen: false }));
  }, []);

  const scrollToSection = useCallback((id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 90;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  }, []);

  // Active section detection via IntersectionObserver
  useEffect(() => {
    const sectionIds = ['experience', 'executive', 'tailored', 'contact'];
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-30% 0px -40% 0px',
        threshold: 0.1,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, [isLoaded]);

  return (
    <div className="min-h-screen text-white bg-transparent relative selection:bg-[#0284c7] selection:text-white">
      <SmoothScroll />
      <AnimatePresence>
        {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
      </AnimatePresence>
      <CustomCursor />

      {/* Navigation Header */}
      <Header 
        onContactClick={() => setIsContactModalOpen(true)}
        activeSection={activeSection}
        onNavigate={scrollToSection}
      />

      {/* Modals */}
      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />

      <XprogencyModal
        isOpen={isXprogencyModalOpen}
        onClose={() => setIsXprogencyModalOpen(false)}
      />

      <InfoModal
        modalData={infoModalData}
        onClose={closeInfoModal}
      />

      {/* Canvas Background Video / Frame Animation */}
      <CanvasAnimation />

      {/* Hero Section */}
      <BannerHero 
        onWatchDemoClick={() => scrollToSection('experience')}
        onGetStartedClick={() => setIsContactModalOpen(true)}
        onReadMoreClick={() => openInfoModal({
          title: 'Paris Summer 2026',
          subtitle: 'Exclusive Seasonal Offers',
          message: 'Curated summer 2026 itineraries and seasonal private flight arrangements are currently being prepared.',
          tag: 'Exclusive Preview',
        })}
      />

      {/* Stats / Experience Section */}
      <StatsCardsSection 
        onCardClick={(type) => {
          if (type === 'travelers') {
            openInfoModal({
              title: '10,000+ Happy Travelers',
              subtitle: 'Verified Guest Itineraries',
              message: 'Verified reviews and detailed client testimonials are currently being curated for the upcoming season.',
              tag: 'Traveler Reviews',
            });
          } else {
            openInfoModal({
              title: '4.9★ Guest Satisfaction',
              subtitle: '5-Star Excellence Standard',
              message: 'Our concierge service records and personalized travel logs are being prepared.',
              tag: 'Quality Assurance',
            });
          }
        }}
      />

      {/* Executive Travel / Fleet Section */}
      <ExecutiveTravelSection 
        onReserveClick={() => setIsContactModalOpen(true)}
        onCardClick={(featureTitle) => {
          openInfoModal({
            title: featureTitle,
            subtitle: 'Executive Fleet Experience',
            message: 'Detailed aircraft specifications, route availability, and instant reservation details are currently being prepared.',
            tag: 'Executive Fleet',
          });
        }}
      />

      {/* Tailored Travel / Services Section */}
      <TailoredTravelSection 
        onServiceSelect={(serviceName) => {
          openInfoModal({
            title: serviceName,
            subtitle: 'Bespoke Aviation Solutions',
            message: 'Comprehensive flight management options and customized charter packages are currently being prepared.',
            tag: 'Tailored Services',
          });
        }}
        onPartnerClick={(partnerName) => {
          openInfoModal({
            title: `${partnerName} Aviation Network`,
            subtitle: 'Global Partner Alliances',
            message: 'Interline agreements, seamless connections, and exclusive partner benefits are currently being prepared.',
            tag: 'Partner Alliances',
          });
        }}
      />

      {/* Footer Section */}
      <FooterSection 
        onContactClick={() => setIsContactModalOpen(true)}
        onRegistrationClick={() => openInfoModal({
          title: 'Flight Cadet & Pilot E-Registration',
          subtitle: 'Aviation Academy Enrollment',
          message: 'Pilot training and simulator slot enrollment for the upcoming 2026 term is currently being prepared.',
          tag: 'Aviation Academy',
        })}
        onSocialClick={() => {
          setIsXprogencyModalOpen(true);
        }}
        onFooterLinkClick={(linkTitle) => {
          openInfoModal({
            title: linkTitle,
            subtitle: 'Lumière Aviation Information',
            message: 'This experience is currently being prepared.',
            tag: 'Information Desk',
            showAttribution: true,
          });
        }}
      />

      {/* Back to top floating button */}
      <BackToTopButton />
    </div>
  );
}


