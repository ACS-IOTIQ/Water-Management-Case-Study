import { motion } from 'framer-motion';
import { usePresentation } from '../context/PresentationContext';

export function NavBar() {
  const { currentSlide, totalSlides, next, prev, goTo } = usePresentation();
  const pct = (currentSlide / totalSlides) * 100;

  return (
    <nav className="nav-bar" aria-label="Presentation navigation">
      <button type="button" className="nav-logo" onClick={() => goTo(1)} aria-label="Back to proposals">
        <img src="/img/logo.svg" alt="Home" width={34} height={34} />
        <div className="nav-brand">
          <span>Home</span>
          <small>ACS Technologies</small>
        </div>
      </button>
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
