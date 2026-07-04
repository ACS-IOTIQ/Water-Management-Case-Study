import { motion } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';

interface StatCardProps {
  icon: LucideIcon;
  value: string;
  label: string;
  accent?: boolean;
  delay?: number;
}

export function StatCard({ icon: Icon, value, label, accent, delay = 0 }: StatCardProps) {
  return (
    <motion.div
      className={`stat-card glass ${accent ? 'accent' : ''}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4, boxShadow: '0 16px 48px rgba(30, 136, 229, 0.25)' }}
    >
      <div className="stat-icon-wrap">
        <Icon size={22} strokeWidth={1.75} />
      </div>
      <span className="stat-value">{value}</span>
      <span className="stat-label">{label}</span>
    </motion.div>
  );
}

interface KpiBarProps {
  items: { icon: LucideIcon; value: string; label: string }[];
}

export function KpiBar({ items }: KpiBarProps) {
  return (
    <motion.div
      className="kpi-bar"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, duration: 0.6 }}
    >
      {items.map((item) => (
        <div key={item.label} className="kpi-item">
          <item.icon size={18} />
          <strong>{item.value}</strong>
          <span>{item.label}</span>
        </div>
      ))}
    </motion.div>
  );
}
