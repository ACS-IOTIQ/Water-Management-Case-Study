import {
  ArrowRight,
  Building2,
  Cpu,
  Droplets,
  Handshake,
  Landmark,
  Leaf,
  MapPin,
  Phone,
  Play,
  Scale,
  ShieldCheck,
  TrendingUp,
  Users,
  Wrench,
  Zap,
  BarChart3,
  CheckCircle2,
  Globe,
} from 'lucide-react';
import { PONMUDI_STATS } from '../data/slides';
import { FadeUp, MotionGrid, motion, staggerItem } from './ui/Motion';
import { Slide } from './ui/SlideShell';
import { WaterBackground } from './ui/WaterBackground';
import { GotoButton, PopupButton } from './ui/ActionButtons';
import { StatCard, KpiBar } from './ui/StatCard';

function QrCode() {
  return (
    <svg viewBox="0 0 100 100" className="qr-svg" aria-label="QR Code">
      <rect width="100" height="100" fill="#fff" />
      <rect x="5" y="5" width="25" height="25" fill="#0A4DA3" />
      <rect x="8" y="8" width="19" height="19" fill="#fff" />
      <rect x="11" y="11" width="13" height="13" fill="#0A4DA3" />
      <rect x="70" y="5" width="25" height="25" fill="#0A4DA3" />
      <rect x="73" y="8" width="19" height="19" fill="#fff" />
      <rect x="76" y="11" width="13" height="13" fill="#0A4DA3" />
      <rect x="5" y="70" width="25" height="25" fill="#0A4DA3" />
      <rect x="40" y="40" width="20" height="20" fill="#1E88E5" opacity="0.5" />
    </svg>
  );
}

const PROBLEM_CARDS = [
  { id: 'waste-overflow' as const, Icon: Droplets, label: 'Overflow & Loss', sub: '50K L/day wasted' },
  { id: 'waste-unequal' as const, Icon: Scale, label: 'Unequal Supply', sub: 'Tail-end villages dry' },
  { id: 'waste-quality' as const, Icon: ShieldCheck, label: 'No Accountability', sub: 'Zero monitoring' },
  { id: 'waste-manual' as const, Icon: Wrench, label: 'Manual Control', sub: '5 borewells overused' },
] as const;

export function SlideDeck() {
  return (
    <>
      {/* 1 Hero */}
      <Slide index={1} hero>
        <WaterBackground bubbles />
        <div className="slide-content hero-content">
          <FadeUp>
            <p className="proposal-tag">Project Proposal · Case Study</p>
          </FadeUp>
          <FadeUp delay={0.05}>
            <img src="/img/logo.svg" alt="iTank" className="hero-logo" />
          </FadeUp>
          <FadeUp delay={0.1}>
            <h1 className="hero-title">iTank</h1>
          </FadeUp>
          <FadeUp delay={0.18}>
            <p className="hero-subtitle">IoT Smart Water Management System</p>
          </FadeUp>
          <FadeUp delay={0.26}>
            <p className="hero-tagline">
              Automation of Water Supply — Ponmudi Gram Panchayat, Erode District
            </p>
          </FadeUp>
          <FadeUp delay={0.34}>
            <p className="hero-company">
              by <strong>ACS Technologies Pvt Ltd</strong> · Hyderabad
            </p>
          </FadeUp>
          <FadeUp delay={0.45}>
            <GotoButton slide={2} className="btn-water">
              Explore Proposal <ArrowRight size={18} />
            </GotoButton>
          </FadeUp>
        </div>
      </Slide>

      {/* 2 Context */}
      <Slide index={2}>
        <div className="slide-bg bg-ocean" />
        <div className="slide-content">
          <FadeUp><span className="eyebrow">Reference Site</span></FadeUp>
          <FadeUp delay={0.08}>
            <h2 className="slide-title light">Ponmudi Gram Panchayat</h2>
          </FadeUp>
          <FadeUp delay={0.14}>
            <p className="slide-lead light">
              <MapPin size={16} className="inline-icon" /> Erode District, Tamil Nadu — smart water for ~14,000 citizens
            </p>
          </FadeUp>
          <MotionGrid className="stat-row">
            <StatCard icon={Building2} value={`~${PONMUDI_STATS.ohts}`} label="Overhead Tanks" delay={0.1} />
            <StatCard icon={Users} value="~14K" label="People Served" delay={0.18} accent />
            <StatCard icon={CheckCircle2} value="100%" label="Villages Covered" delay={0.26} />
          </MotionGrid>
          <FadeUp delay={0.35}>
            <PopupButton popupId="water-crisis" className="btn-guide">
              Before Automation <ArrowRight size={16} />
            </PopupButton>
          </FadeUp>
        </div>
      </Slide>

      {/* 3 Challenges */}
      <Slide index={3}>
        <div className="slide-bg bg-deep" />
        <div className="slide-content">
          <FadeUp><span className="eyebrow">Challenges</span></FadeUp>
          <FadeUp delay={0.08}>
            <h2 className="slide-title light">Before iTank Automation</h2>
          </FadeUp>
          <FadeUp delay={0.14}>
            <p className="slide-lead light">Tap a card to explore each challenge</p>
          </FadeUp>
          <MotionGrid className="guide-grid">
            {PROBLEM_CARDS.map(({ id, Icon, label, sub }) => (
              <motion.div key={id} variants={staggerItem}>
                <PopupButton popupId={id} className="guide-card glass">
                  <div className="guide-icon-wrap">
                    <Icon size={26} strokeWidth={1.75} />
                  </div>
                  <h3>{label}</h3>
                  <em>{sub}</em>
                </PopupButton>
              </motion.div>
            ))}
          </MotionGrid>
        </div>
      </Slide>

      {/* 4 Solution */}
      <Slide index={4}>
        <div className="slide-bg bg-ocean" />
        <div className="slide-content center">
          <FadeUp><span className="eyebrow">Solution</span></FadeUp>
          <FadeUp delay={0.08}>
            <h2 className="slide-title light">iTank — Conserve · Regulate · Deliver</h2>
          </FadeUp>
          <FadeUp delay={0.14}>
            <p className="slide-lead light">
              Efficient, equitable &amp; sustainable water supply for every village
            </p>
          </FadeUp>
          <MotionGrid className="value-trio">
            {[
              { id: 'conserve-how' as const, Icon: Droplets, title: 'Conserve', desc: 'Stop 50K L/day overflow' },
              { id: 'regulate-how' as const, Icon: Scale, title: 'Regulate', desc: 'Fair OHT scheduling' },
              { id: 'quality-how' as const, Icon: ShieldCheck, title: 'Accountability', desc: '100% live monitoring' },
            ].map(({ id, Icon, title, desc }) => (
              <motion.div key={id} variants={staggerItem}>
                <PopupButton popupId={id} className="value-card glass">
                  <div className="value-ring"><Icon size={24} /></div>
                  <h3>{title}</h3>
                  <p>{desc}</p>
                  <span className="guide-link">Details →</span>
                </PopupButton>
              </motion.div>
            ))}
          </MotionGrid>
        </div>
      </Slide>

      {/* 5 How it works */}
      <Slide index={5}>
        <div className="slide-bg bg-mist" />
        <div className="slide-content center">
          <FadeUp><span className="eyebrow">Architecture</span></FadeUp>
          <FadeUp delay={0.08}>
            <h2 className="slide-title">How iTank Works</h2>
          </FadeUp>
          <FadeUp delay={0.16}>
            <div className="flow-strip">
              {['Monitor', 'Plan', 'Control', 'Report'].map((step, i) => (
                <div key={step} className={`flow-step ${i === 3 ? 'accent' : ''}`}>
                  <b>{i + 1}</b>{step}
                </div>
              ))}
            </div>
          </FadeUp>
          <FadeUp delay={0.24}>
            <img src="/img/case-study.png" alt="Ponmudi OHT" className="hero-visual case-photo" />
          </FadeUp>
          <FadeUp delay={0.32}>
            <div className="btn-group">
              <PopupButton popupId="system-overview" className="btn-guide dark"><Cpu size={16} /> System</PopupButton>
              <PopupButton popupId="devices" className="btn-guide dark"><Zap size={16} /> Devices</PopupButton>
              <PopupButton popupId="dashboard-demo" className="btn-water-sm"><Play size={14} /> Live Dashboard</PopupButton>
            </div>
          </FadeUp>
        </div>
      </Slide>

      {/* 6 Partners */}
      <Slide index={6}>
        <div className="slide-bg bg-deep" />
        <div className="slide-content center">
          <FadeUp><span className="eyebrow">Stakeholders</span></FadeUp>
          <FadeUp delay={0.08}>
            <h2 className="slide-title light">Built for Public Water Leadership</h2>
          </FadeUp>
          <MotionGrid className="partner-row">
            {[
              { id: 'audience-twad' as const, Icon: Landmark, title: 'TWAD & Water Boards' },
              { id: 'audience-municipal' as const, Icon: Building2, title: 'Municipal Corporations' },
              { id: 'audience-csr' as const, Icon: Handshake, title: 'CSR & Investors' },
            ].map(({ id, Icon, title }) => (
              <motion.div key={id} variants={staggerItem}>
                <PopupButton popupId={id} className="partner-card glass">
                  <Icon size={32} strokeWidth={1.5} />
                  <h3>{title}</h3>
                </PopupButton>
              </motion.div>
            ))}
          </MotionGrid>
        </div>
      </Slide>

      {/* 7 Impact */}
      <Slide index={7}>
        <div className="slide-bg bg-ocean" />
        <div className="slide-content center">
          <FadeUp><span className="eyebrow">Proven Results</span></FadeUp>
          <FadeUp delay={0.08}>
            <h2 className="slide-title light">Impact at Ponmudi</h2>
          </FadeUp>
          <MotionGrid className="impact-grid">
            <StatCard icon={TrendingUp} value="+34%" label="Water Supply Increase" delay={0.1} accent />
            <StatCard icon={Zap} value="-40%" label="Electricity Saved" delay={0.16} />
            <StatCard icon={Droplets} value="50K L" label="Overflow Prevented/Day" delay={0.22} />
            <StatCard icon={BarChart3} value="-30%" label="Cost per Kilolitre" delay={0.28} />
            <StatCard icon={Users} value="199" label="New Connections" delay={0.34} />
            <StatCard icon={Leaf} value="54T" label="CO₂ Offset/Year" delay={0.4} />
          </MotionGrid>
          <FadeUp delay={0.45}>
            <PopupButton popupId="benefits-detail" className="btn-guide">
              Full Impact Report <ArrowRight size={16} />
            </PopupButton>
          </FadeUp>
          <KpiBar
            items={[
              { icon: CheckCircle2, value: '100%', label: 'OHTs Live' },
              { icon: Cpu, value: '98%', label: 'Automation' },
              { icon: Droplets, value: '2.70L', label: 'Lakh L/Day' },
            ]}
          />
        </div>
      </Slide>

      {/* 8 Financial */}
      <Slide index={8}>
        <div className="slide-bg bg-deep" />
        <div className="slide-content center">
          <FadeUp><span className="eyebrow">ROI</span></FadeUp>
          <FadeUp delay={0.08}>
            <h2 className="slide-title light">Financial Outcome</h2>
          </FadeUp>
          <MotionGrid className="commercial-row">
            <StatCard icon={TrendingUp} value={PONMUDI_STATS.investment} label="Investment" delay={0.1} />
            <StatCard icon={Zap} value={PONMUDI_STATS.annualSavings} label="Annual Savings" delay={0.18} accent />
            <StatCard icon={BarChart3} value={PONMUDI_STATS.payback} label="Payback Period" delay={0.26} />
          </MotionGrid>
          <FadeUp delay={0.35}>
            <div className="btn-group">
              <PopupButton popupId="commercial-detail" className="btn-guide">Savings Breakdown</PopupButton>
              <PopupButton popupId="roi-detail" className="btn-guide">Scale ROI →</PopupButton>
            </div>
          </FadeUp>
        </div>
      </Slide>

      {/* 9 Case Study */}
      <Slide index={9}>
        <div className="slide-bg bg-mist" />
        <div className="slide-content split">
          <div>
            <FadeUp><span className="eyebrow">Scale</span></FadeUp>
            <FadeUp delay={0.08}>
              <h2 className="slide-title">Deployment &amp; Expansion</h2>
            </FadeUp>
            <FadeUp delay={0.14}>
              <p className="slide-lead">
                Scaling across <strong>{PONMUDI_STATS.scalePanchayats} Gram Panchayats</strong> ·{' '}
                <strong>{PONMUDI_STATS.scaleOhts} OHTs</strong> in Erode District
              </p>
            </FadeUp>
            <FadeUp delay={0.22}>
              <div className="phase-list">
                {['Site Survey', 'Install & Configure', 'Go Live & Train', 'District Scale'].map((p, i) => (
                  <div key={p} className="phase"><span>0{i + 1}</span> {p}</div>
                ))}
              </div>
            </FadeUp>
            <FadeUp delay={0.32}>
              <div className="btn-group align-left">
                <PopupButton popupId="case-reference" className="btn-guide dark">
                  Full Case Study <ArrowRight size={16} />
                </PopupButton>
                <PopupButton popupId="deployment" className="btn-guide dark">Deployment Plan</PopupButton>
              </div>
            </FadeUp>
            <FadeUp delay={0.4}>
              <p className="scale-note">
                District potential: <strong>{PONMUDI_STATS.scaleSavingsPotential}</strong> annual savings
              </p>
            </FadeUp>
          </div>
          <FadeUp delay={0.2}>
            <motion.img
              src="/img/case-study.png"
              alt="Ponmudi case study"
              className="hero-visual case-photo"
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300 }}
            />
          </FadeUp>
        </div>
      </Slide>

      {/* 10 Contact */}
      <Slide index={10} hero>
        <WaterBackground waves={2} ripples={false} />
        <div className="slide-content hero-content">
          <FadeUp><h2 className="thanks-title">Thank You</h2></FadeUp>
          <FadeUp delay={0.1}>
            <p className="thanks-sub">Reliable · Sustainable · Efficient Water for Every Village</p>
          </FadeUp>
          <FadeUp delay={0.2}>
            <div className="contact-block">
              <img src="/img/logo.svg" alt="iTank" className="contact-logo" />
              <div className="contact-details">
                <h3>ACS Technologies Pvt Ltd</h3>
                <p><MapPin size={14} className="inline-icon" /> Hyderabad, Telangana</p>
                <p>
                  <Globe size={14} className="inline-icon" />
                  <a href="https://www.acstechlogies.com" target="_blank" rel="noopener noreferrer">
                    www.acstechlogies.com
                  </a>
                </p>
                <p className="contact-phone">
                  <Phone size={14} className="inline-icon" /> +91 78456 97475
                </p>
              </div>
              <PopupButton popupId="company" className="qr-block glass">
                <QrCode />
                <span>Company info</span>
              </PopupButton>
            </div>
          </FadeUp>
          <FadeUp delay={0.35}>
            <PopupButton popupId="company" className="btn-water">
              About ACS Technologies
            </PopupButton>
          </FadeUp>
        </div>
      </Slide>
    </>
  );
}
