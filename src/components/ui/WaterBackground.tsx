interface WaterBackgroundProps {
  waves?: 2 | 3;
  ripples?: boolean;
  bubbles?: boolean;
}

export function WaterBackground({ waves = 3, ripples = true, bubbles = false }: WaterBackgroundProps) {
  return (
    <div className="water-bg">
      <div className="wave wave-1" />
      {waves >= 2 && <div className="wave wave-2" />}
      {waves >= 3 && <div className="wave wave-3" />}
      {ripples && (
        <>
          <div className="ripple ripple-1" />
          <div className="ripple ripple-2" />
        </>
      )}
      {bubbles && (
        <div className="bubbles">
          {Array.from({ length: 6 }).map((_, i) => (
            <span key={i} />
          ))}
        </div>
      )}
    </div>
  );
}
