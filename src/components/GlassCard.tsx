import { ReactNode } from 'react';
import { motion } from 'motion/react';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function GlassCard({ children, className = '', delay = 0 }: GlassCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -5 }}
      className={`bg-white/70 backdrop-blur-xl border border-[var(--color-luxury-border)] p-8 shadow-[0_8px_32px_rgba(0,0,0,0.08)] rounded-none ${className}`}
    >
      {children}
    </motion.div>
  );
}
