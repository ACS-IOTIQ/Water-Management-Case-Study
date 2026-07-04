import type { CSSProperties, ReactNode } from 'react';

interface AnimFadeUpProps {
  delay?: number;
  className?: string;
  children: ReactNode;
}

export function AnimFadeUp({ delay = 0, className = '', children }: AnimFadeUpProps) {
  const style = { '--delay': `${delay}s` } as CSSProperties;
  return (
    <div className={`anim-fade-up ${className}`.trim()} style={style}>
      {children}
    </div>
  );
}
