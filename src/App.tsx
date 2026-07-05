import { useEffect, useRef, useState } from 'react';
import { Toaster } from 'sonner';
import { ErrorBoundary } from './components/ErrorBoundary';
import { PresentationProvider } from './context/PresentationContext';
import { useKeyboardNav } from './hooks/useKeyboardNav';
import { useSwipeNav } from './hooks/useSwipeNav';
import { usePresentationToasts } from './hooks/usePresentationToasts';
import { NavBar } from './components/NavBar';
import { SlideDeck } from './components/SlideDeck';

function PresentationApp() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hintHidden, setHintHidden] = useState(false);

  useKeyboardNav();
  useSwipeNav(containerRef);
  usePresentationToasts();

  useEffect(() => {
    const t = setTimeout(() => setHintHidden(true), 7000);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <Toaster
        position="bottom-right"
        theme="dark"
        richColors
        closeButton
        toastOptions={{
          style: {
            background: 'rgba(10, 25, 47, 0.92)',
            border: '1px solid rgba(79, 195, 247, 0.25)',
            color: '#fff',
            fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'SF Pro Text', 'Inter', system-ui, sans-serif",
          },
        }}
      />
      <NavBar />
      <div className="presentation" id="presentation" ref={containerRef}>
        <SlideDeck />
      </div>
      <div className={`key-hint ${hintHidden ? 'hidden' : ''}`}>
        ← → navigate · Tap cards for detail panels
      </div>
    </>
  );
}

export default function App() {
  return (
    <ErrorBoundary>
      <PresentationProvider>
        <PresentationApp />
      </PresentationProvider>
    </ErrorBoundary>
  );
}
