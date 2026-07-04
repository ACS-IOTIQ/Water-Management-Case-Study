import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import { usePresentation } from '../../context/PresentationContext';

interface SlideProps {
  index: number;
  hero?: boolean;
  children: ReactNode;
}

export function Slide({ index, hero, children }: SlideProps) {
  const { currentSlide } = usePresentation();

  if (currentSlide !== index) return null;

  return (
    <motion.section
      className={`slide ${hero ? 'slide-hero' : ''} active`}
      data-slide={index}
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="tech-grid" aria-hidden />
      <motion.div
        className="slide-flow-wipe"
        aria-hidden
        initial={{ opacity: 1, scaleX: 0 }}
        animate={{ opacity: 0, scaleX: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      />
      {children}
    </motion.section>
  );
}
