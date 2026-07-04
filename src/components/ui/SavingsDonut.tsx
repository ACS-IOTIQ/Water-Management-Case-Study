import { motion } from 'framer-motion';
import { CountUp } from './CountUp';

interface Segment {
  label: string;
  value: number;
  color: string;
}

interface SavingsDonutProps {
  segments: Segment[];
  total: string;
}

const SIZE = 140;
const STROKE = 20;
const RADIUS = (SIZE - STROKE) / 2;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

export function SavingsDonut({ segments, total }: SavingsDonutProps) {
  const sum = segments.reduce((acc, s) => acc + s.value, 0);
  let cumulative = 0;

  return (
    <div className="savings-panel glass">
      <div className="donut-wrap" style={{ width: SIZE, height: SIZE }}>
        <svg width={SIZE} height={SIZE} viewBox={`0 0 ${SIZE} ${SIZE}`}>
          <circle
            cx={SIZE / 2}
            cy={SIZE / 2}
            r={RADIUS}
            fill="none"
            stroke="rgba(255,255,255,0.1)"
            strokeWidth={STROKE}
          />
          {segments.map((seg, i) => {
            const fraction = seg.value / sum;
            const length = fraction * CIRCUMFERENCE;
            const offset = cumulative;
            cumulative += length;
            return (
              <motion.circle
                key={seg.label}
                cx={SIZE / 2}
                cy={SIZE / 2}
                r={RADIUS}
                fill="none"
                stroke={seg.color}
                strokeWidth={STROKE}
                strokeDasharray={`${length} ${CIRCUMFERENCE - length}`}
                transform={`rotate(-90 ${SIZE / 2} ${SIZE / 2})`}
                initial={{ strokeDashoffset: length }}
                animate={{ strokeDashoffset: -offset }}
                transition={{ duration: 0.8, delay: 0.15 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              />
            );
          })}
        </svg>
        <div className="donut-total">
          <strong>
            <CountUp value={total} delay={0.3} />
          </strong>
          <span>Per Year</span>
        </div>
      </div>
      <ul className="savings-legend">
        {segments.map((seg) => (
          <li key={seg.label}>
            <span className="swatch" style={{ background: seg.color }} />
            {seg.label}
            <strong>₹{seg.value.toLocaleString('en-IN')}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
}
