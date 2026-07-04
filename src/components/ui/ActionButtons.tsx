import type { PopupId } from '../../types';
import { usePresentation } from '../../context/PresentationContext';

interface PopupButtonProps {
  popupId: PopupId;
  className?: string;
  children: React.ReactNode;
}

export function PopupButton({ popupId, className = '', children }: PopupButtonProps) {
  const { openPopup } = usePresentation();
  return (
    <button type="button" className={className} onClick={() => openPopup(popupId)}>
      {children}
    </button>
  );
}

interface GotoButtonProps {
  slide: number;
  className?: string;
  children: React.ReactNode;
}

export function GotoButton({ slide, className = '', children }: GotoButtonProps) {
  const { goTo } = usePresentation();
  return (
    <button type="button" className={className} onClick={() => goTo(slide)}>
      {children}
    </button>
  );
}
