import { useEffect, useState } from 'react';

export function LiveDashboard() {
  const [level, setLevel] = useState(88);
  const [liters, setLiters] = useState(62000);
  const [pumpActive, setPumpActive] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setLevel((prev) => {
        const next = prev + (Math.random() - 0.5) * 1.5;
        return Math.max(72, Math.min(96, next));
      });
      setLiters((prev) => prev + Math.floor(Math.random() * 20));
      if (Math.random() > 0.94) setPumpActive((p) => !p);
    }, 1200);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="popup-dashboard">
      <div className="pd-row">
        <span>Tank Level</span>
        <div className="pd-bar">
          <div className="pd-fill" style={{ width: `${level}%` }} />
        </div>
        <span>{Math.round(level)}%</span>
      </div>
      <div className="pd-row">
        <span>Supply Status</span>
        <span className={pumpActive ? 'pd-on' : 'pd-off'}>{pumpActive ? 'ACTIVE' : 'PAUSED'}</span>
      </div>
      <div className="pd-row">
        <span>Valve</span>
        <span className="pd-on">OPEN</span>
      </div>
      <div className="pd-row">
        <span>Today&apos;s Release</span>
        <strong>~{liters.toLocaleString('en-IN')} L</strong>
      </div>
      <div className="pd-row">
        <span>Quality Flag</span>
        <strong className="pd-green">NORMAL</strong>
      </div>
      <p className="popup-note">Illustrative demo — actual readings from your deployment.</p>
    </div>
  );
}
