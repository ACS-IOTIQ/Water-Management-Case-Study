import { motion } from 'framer-motion';
import { usePresentation } from '../context/PresentationContext';

export function NavBar() {
  const { currentSlide, totalSlides, next, prev } = usePresentation();
  const pct = (currentSlide / totalSlides) * 100;

  return (
    <nav className="nav-bar" aria-label="Presentation navigation">
      <div className="nav-logo">
        <img src="/img/logo.svg" alt="iTank" width={34} height={34} />
        <div className="nav-brand">
          <span>iTank</span>
          <small>ACS Technologies</small>
        </div>
      </div>
      <div className="nav-progress">
        <div className="progress-track">
          <motion.div
            className="progress-fill"
            animate={{ width: `${pct}%` }}
            transition={{ type: 'spring', stiffness: 120, damping: 20 }}
          />
        </div>
        <span className="slide-counter">
          {currentSlide} / {totalSlides}
        </span>
      </div>
      <div className="nav-controls">
        <motion.button
          type="button"
          className="nav-btn"
          onClick={prev}
          disabled={currentSlide === 1}
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Previous"
        >
          &#8592;
        </motion.button>
        <motion.button
          type="button"
          className="nav-btn"
          onClick={next}
          disabled={currentSlide === totalSlides}
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Next"
        >
          &#8594;
        </motion.button>
      </div>
    </nav>
  );
}
