import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { GlassCard } from './GlassCard';

export const Testimonials: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });

  const cards = [
    { name: "Eleanor Sterling", role: "Architecture Critic", text: "Aura redefines what it means to live in the sky. The attention to light and space is unprecedented." },
    { name: "Jameson Wright", role: "Resident", text: "Every morning feels like a cinematic experience. The smart integration is completely invisible yet omnipresent." },
    { name: "Victoria Chen", role: "Interior Designer", text: "The material palette is exquisite. They have managed to capture both warmth and extreme modernism in one stroke." }
  ];

  return (
    <section ref={containerRef} className="relative h-[400vh] bg-[var(--color-luxury-bg)]">
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden">
        <h2 className="text-4xl md:text-5xl font-[family-name:var(--font-hero)] text-[var(--color-luxury-text)] mb-16 text-center">Voices of Aura</h2>
        
        <div className="relative w-full max-w-2xl aspect-[2/1]">
          {cards.map((card, i) => {
            // Calculate scale and opacity based on scroll progress for stacking effect
            const start = i * 0.3;
            const end = start + 0.3;
            
            // eslint-disable-next-line react-hooks/rules-of-hooks
            const scale = useTransform(scrollYProgress, [start, end, 1], [1, 0.9, 0.8]);
            // eslint-disable-next-line react-hooks/rules-of-hooks
            const y = useTransform(scrollYProgress, [start, end, 1], [0, i * -20, i * -40]);
            // eslint-disable-next-line react-hooks/rules-of-hooks
            const opacity = useTransform(scrollYProgress, [Math.max(0, start - 0.1), start, end], [0, 1, 0.5]);
            
            return (
              <motion.div
                key={i}
                style={{ scale, y, opacity, zIndex: cards.length - i }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <GlassCard className="w-full text-center py-12 px-8">
                  <p className="text-xl md:text-2xl font-[family-name:var(--font-hero)] text-[var(--color-luxury-text)] mb-8 italic">
                    "{card.text}"
                  </p>
                  <div>
                    <h4 className="text-sm tracking-widest uppercase font-semibold text-[var(--color-luxury-text)]">{card.name}</h4>
                    <span className="text-xs tracking-widest uppercase text-[var(--color-luxury-gold)]">{card.role}</span>
                  </div>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
