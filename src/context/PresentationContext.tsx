import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from 'react';
import type { PopupId } from '../types';
import { TOTAL_SLIDES } from '../types';

interface PresentationContextValue {
  currentSlide: number;
  totalSlides: number;
  activePopup: PopupId | null;
  goTo: (slide: number) => void;
  next: () => void;
  prev: () => void;
  openPopup: (id: PopupId) => void;
  closePopup: () => void;
  modalOpen: boolean;
}

const PresentationContext = createContext<PresentationContextValue | null>(null);

export function PresentationProvider({ children }: { children: ReactNode }) {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [activePopup, setActivePopup] = useState<PopupId | null>(null);

  const closePopup = useCallback(() => setActivePopup(null), []);

  const goTo = useCallback(
    (slide: number) => {
      if (slide < 1 || slide > TOTAL_SLIDES || slide === currentSlide) return;
      closePopup();
      setCurrentSlide(slide);
    },
    [currentSlide, closePopup],
  );

  const next = useCallback(() => {
    if (!activePopup) goTo(currentSlide + 1);
  }, [activePopup, currentSlide, goTo]);

  const prev = useCallback(() => {
    if (!activePopup) goTo(currentSlide - 1);
  }, [activePopup, currentSlide, goTo]);

  const openPopup = useCallback((id: PopupId) => setActivePopup(id), []);

  const value = useMemo(
    () => ({
      currentSlide,
      totalSlides: TOTAL_SLIDES,
      activePopup,
      goTo,
      next,
      prev,
      openPopup,
      closePopup,
      modalOpen: activePopup !== null,
    }),
    [currentSlide, activePopup, goTo, next, prev, openPopup, closePopup],
  );

  return (
    <PresentationContext.Provider value={value}>
      {children}
    </PresentationContext.Provider>
  );
}

export function usePresentation() {
  const ctx = useContext(PresentationContext);
  if (!ctx) throw new Error('usePresentation must be used within PresentationProvider');
  return ctx;
}
