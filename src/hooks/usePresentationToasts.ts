import { useEffect, useRef } from 'react';
import { toast } from 'sonner';
import { SLIDE_TITLES } from '../data/slides';
import { POPUPS } from '../data/popups';
import { usePresentation } from '../context/PresentationContext';

export function usePresentationToasts() {
  const { currentSlide, activePopup } = usePresentation();
  const prevSlide = useRef(currentSlide);
  const prevPopup = useRef(activePopup);

  useEffect(() => {
    if (currentSlide !== prevSlide.current) {
      toast(`Slide ${currentSlide}`, {
        description: SLIDE_TITLES[currentSlide - 1],
        duration: 2200,
      });
      prevSlide.current = currentSlide;
    }
  }, [currentSlide]);

  useEffect(() => {
    if (activePopup && activePopup !== prevPopup.current) {
      const data = POPUPS[activePopup];
      toast.info(data.title, {
        description: 'Detail panel opened',
        duration: 2000,
      });
    }
    prevPopup.current = activePopup;
  }, [activePopup]);
}
