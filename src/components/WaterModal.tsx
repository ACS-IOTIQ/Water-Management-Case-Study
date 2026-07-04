import { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { POPUPS } from '../data/popups';
import { usePresentation } from '../context/PresentationContext';
import { LiveDashboard } from './ui/LiveDashboard';
import { PopupIcon } from './ui/PopupIcon';
import { X } from 'lucide-react';

export function WaterModal() {
  const { activePopup, closePopup, modalOpen } = usePresentation();
  const data = activePopup ? POPUPS[activePopup] : null;

  useEffect(() => {
    document.body.classList.toggle('modal-open', modalOpen);
    return () => document.body.classList.remove('modal-open');
  }, [modalOpen]);

  return (
    <AnimatePresence>
      {modalOpen && data && activePopup && (
        <motion.div
          className="modal-overlay open"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={(e) => {
            if (e.target === e.currentTarget) closePopup();
          }}
        >
          <motion.div
            className="modal-water"
            role="dialog"
            aria-modal="true"
            initial={{ opacity: 0, scale: 0.88, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 24 }}
            transition={{ type: 'spring', stiffness: 320, damping: 28 }}
          >
            <div className="modal-waves">
              <div className="mw mw-1" />
              <div className="mw mw-2" />
              <div className="mw mw-3" />
            </div>
            <div className="modal-droplets">
              {Array.from({ length: 6 }).map((_, i) => (
                <span key={i} />
              ))}
            </div>
            <div className="modal-inner glass-water">
              <button type="button" className="modal-close" onClick={closePopup} aria-label="Close">
                <X size={18} />
              </button>
              {data.icon && (
                <div className="modal-icon">
                  <PopupIcon name={data.icon} size={32} />
                </div>
              )}
              <h3 className="modal-title">{data.title}</h3>
              <div className="modal-body">
                {data.image && (
                  <img src={data.image} alt="" className="modal-case-img" />
                )}
                {data.live ? (
                  <LiveDashboard />
                ) : (
                  <div dangerouslySetInnerHTML={{ __html: data.body }} />
                )}
              </div>
              <div className="modal-ripple" />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
