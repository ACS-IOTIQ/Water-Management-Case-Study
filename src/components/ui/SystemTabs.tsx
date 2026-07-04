import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  Cloud,
  Cpu,
  Play,
  Radio,
  Sliders,
  Smartphone,
  Sun,
  Monitor as MonitorIcon,
  Waves,
  Wifi,
  Zap,
} from 'lucide-react';
import { LiveDashboard } from './LiveDashboard';

const TABS = [
  { id: 'system', label: 'System', icon: Cpu },
  { id: 'devices', label: 'Devices', icon: Zap },
  { id: 'live', label: 'Live Dashboard', icon: Play },
] as const;

const SYSTEM_LAYERS = [
  { icon: Radio, title: 'Field Layer', desc: 'Sensors, meters, controllers, solar & gateway' },
  { icon: Cloud, title: 'Cloud', desc: 'Secure automation engine & data store' },
  { icon: MonitorIcon, title: 'Officer Portal', desc: 'Real-time dashboard, scheduling, reports' },
  { icon: Smartphone, title: 'Mobile App', desc: 'Alerts & remote control' },
];

const DEVICES = [
  { icon: Radio, title: 'Level Sensor', desc: 'Non-contact ultrasonic measurement' },
  { icon: Waves, title: 'Flow Meter', desc: 'High-accuracy consumption tracking' },
  { icon: Cpu, title: 'Motor Controller', desc: 'Intelligent pump automation' },
  { icon: Sliders, title: 'Valve Controller', desc: 'Remote scheduled open/close' },
  { icon: Sun, title: 'Solar Unit', desc: 'Off-grid power for remote OHTs' },
  { icon: Wifi, title: 'LTE/WiFi Gateway', desc: 'Always-on cloud connectivity' },
];

type TabId = (typeof TABS)[number]['id'];

export function SystemTabs() {
  const [active, setActive] = useState<TabId>('system');

  return (
    <div className="system-tabs">
      <div className="tab-row">
        {TABS.map((tab) => (
          <button
            key={tab.id}
            type="button"
            className={`tab-btn ${active === tab.id ? 'active' : ''}`}
            onClick={() => setActive(tab.id)}
          >
            <tab.icon size={15} /> {tab.label}
          </button>
        ))}
      </div>
      <div className="tab-panel glass">
        <AnimatePresence mode="wait">
          {active === 'system' && (
            <motion.div
              key="system"
              className="tab-grid"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
            >
              {SYSTEM_LAYERS.map((l) => (
                <div key={l.title} className="tab-item">
                  <l.icon size={20} strokeWidth={1.75} />
                  <div>
                    <h4>{l.title}</h4>
                    <p>{l.desc}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          )}
          {active === 'devices' && (
            <motion.div
              key="devices"
              className="tab-grid three-col"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
            >
              {DEVICES.map((d) => (
                <div key={d.title} className="tab-item">
                  <d.icon size={20} strokeWidth={1.75} />
                  <div>
                    <h4>{d.title}</h4>
                    <p>{d.desc}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          )}
          {active === 'live' && (
            <motion.div
              key="live"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
            >
              <LiveDashboard />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
