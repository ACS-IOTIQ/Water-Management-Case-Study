import { ArrowLeft } from 'lucide-react';
import { PopupIcon } from './PopupIcon';
import type { PopupData } from '../../types';

interface DetailPanelProps {
  data: PopupData;
  onClose: () => void;
}

export function DetailPanel({ data, onClose }: DetailPanelProps) {
  return (
    <div className="inline-detail">
      <button type="button" className="inline-detail-close" onClick={onClose}>
        <ArrowLeft size={15} /> Back
      </button>
      <div className="inline-detail-split">
        <div className="inline-detail-visual">
          {data.icon && <PopupIcon name={data.icon} size={92} />}
        </div>
        <div className="inline-detail-content">
          {data.stat && <div className="inline-detail-stat">{data.stat}</div>}
          {data.statLabel && <div className="inline-detail-stat-label">{data.statLabel}</div>}
          <h3 className="inline-detail-title">{data.title}</h3>
          <span className="inline-detail-divider" />
          <ul className="inline-detail-points">
            {data.points.map((point, i) => (
              <li key={i} dangerouslySetInnerHTML={{ __html: point }} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
