import { useEffect } from 'react';
import { usePresentation } from '../context/PresentationContext';

export function useKeyboardNav() {
  const { next, prev, goTo, closePopup, modalOpen, totalSlides } = usePresentation();

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && modalOpen) {
        closePopup();
        return;
      }
      if (modalOpen) return;

      if (e.key === 'ArrowRight' || e.key === 'ArrowDown' || e.key === ' ') {
        e.preventDefault();
        next();
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault();
        prev();
      } else if (e.key === 'Home') {
        goTo(1);
      } else if (e.key === 'End') {
        goTo(totalSlides);
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [next, prev, goTo, closePopup, modalOpen, totalSlides]);
}
