import {
  Building2,
  Calendar,
  ChartColumn,
  Cpu,
  Droplets,
  Handshake,
  Image,
  Landmark,
  MapPin,
  Monitor,
  Radio,
  Recycle,
  Rocket,
  Scale,
  ShieldCheck,
  TrendingUp,
  Wallet,
  Workflow,
  Wrench,
  type LucideIcon,
} from 'lucide-react';

const ICON_MAP: Record<string, LucideIcon> = {
  map: MapPin,
  droplets: Droplets,
  scale: Scale,
  shield: ShieldCheck,
  wrench: Wrench,
  recycle: Recycle,
  calendar: Calendar,
  building: Building2,
  cpu: Cpu,
  workflow: Workflow,
  radio: Radio,
  monitor: Monitor,
  landmark: Landmark,
  city: Building2,
  handshake: Handshake,
  chart: ChartColumn,
  wallet: Wallet,
  trending: TrendingUp,
  rocket: Rocket,
  image: Image,
};

export function PopupIcon({ name, size = 28 }: { name?: string; size?: number }) {
  if (!name) return null;
  const Icon = ICON_MAP[name] ?? Droplets;
  return <Icon size={size} strokeWidth={1.75} />;
}
