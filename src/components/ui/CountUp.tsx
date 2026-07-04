import { useEffect, useState } from 'react';

interface CountUpProps {
  value: string;
  duration?: number;
  delay?: number;
}

const NUMBER_RE = /^([^\d]*)(\d+(?:\.\d+)?)(.*)$/;

export function CountUp({ value, duration = 1.1, delay = 0 }: CountUpProps) {
  const match = value.match(NUMBER_RE);
  const [display, setDisplay] = useState(() => (match ? `${match[1]}0${match[3]}` : value));

  useEffect(() => {
    if (!match) {
      setDisplay(value);
      return;
    }
    const [, prefix, numStr, suffix] = match;
    const target = parseFloat(numStr);
    const decimals = numStr.includes('.') ? numStr.split('.')[1].length : 0;

    let frame: number;
    const startTime = performance.now() + delay * 1000;
    const durationMs = duration * 1000;

    const tick = (now: number) => {
      const elapsed = now - startTime;
      if (elapsed < 0) {
        frame = requestAnimationFrame(tick);
        return;
      }
      const progress = Math.min(elapsed / durationMs, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(`${prefix}${(target * eased).toFixed(decimals)}${suffix}`);
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [value, duration, delay]);

  return <>{display}</>;
}
