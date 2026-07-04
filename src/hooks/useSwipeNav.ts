import { useEffect, useRef, type RefObject } from 'react';
import { usePresentation } from '../context/PresentationContext';

export function useSwipeNav(containerRef: RefObject<HTMLElement | null>) {
  const { next, prev, modalOpen } = usePresentation();
  const touchStartX = useRef(0);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const onTouchStart = (e: TouchEvent) => {
      if (!modalOpen) touchStartX.current = e.changedTouches[0].screenX;
    };

    const onTouchEnd = (e: TouchEvent) => {
      if (modalOpen) return;
      const diff = e.changedTouches[0].screenX - touchStartX.current;
      if (Math.abs(diff) > 50) diff < 0 ? next() : prev();
    };

    el.addEventListener('touchstart', onTouchStart, { passive: true });
    el.addEventListener('touchend', onTouchEnd, { passive: true });
    return () => {
      el.removeEventListener('touchstart', onTouchStart);
      el.removeEventListener('touchend', onTouchEnd);
    };
  }, [containerRef, next, prev, modalOpen]);
}
