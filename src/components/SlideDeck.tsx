import { AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  BarChart3,
  Building2,
  Calendar,
  Camera,
  Car,
  CheckCircle2,
  Cpu,
  CreditCard,
  Droplets,
  Globe,
  Handshake,
  Landmark,
  Layers,
  Leaf,
  Lock,
  MapPin,
  Moon,
  ParkingSquare,
  Phone,
  Radio,
  Scale,
  ScanLine,
  ShieldCheck,
  Sliders,
  TrendingUp,
  Users,
  Wrench,
  Zap,
} from 'lucide-react';
import { POPUPS } from '../data/popups';
import { KEY_PERFORMANCE, PONMUDI_STATS, SAVINGS_BREAKDOWN } from '../data/slides';
import { usePresentation } from '../context/PresentationContext';
import { FadeUp, MotionGrid, motion, staggerItem, stepContainer, stepItem } from './ui/Motion';
import { Slide } from './ui/SlideShell';
import { WaterBackground } from './ui/WaterBackground';
import { GotoButton, PopupButton } from './ui/ActionButtons';
import { StatCard, KpiBar } from './ui/StatCard';
import { SavingsDonut } from './ui/SavingsDonut';
import { SystemTabs } from './ui/SystemTabs';
import { DetailPanel } from './ui/DetailPanel';
import { DemoVideo } from './ui/DemoVideo';

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

const HOW_STEPS = [
  { title: 'Monitor', Icon: Radio, desc: 'IoT sensors read tank level & flow' },
  { title: 'Plan', Icon: Calendar, desc: 'Schedule engine applies officer rules' },
  { title: 'Control', Icon: Sliders, desc: 'Pumps & valves act automatically' },
  { title: 'Report', Icon: BarChart3, desc: 'Dashboard updates; alerts on anomalies' },
] as const;

const RECOGNITION_CARDS = [
  { id: 'anpr-detail' as const, Icon: ScanLine, label: 'Plate Recognition', sub: 'Front & rear, real-time' },
  { id: 'vehicle-classification' as const, Icon: Car, label: 'Vehicle Classification', sub: 'Type · Color · Model' },
  { id: 'multi-recognition' as const, Icon: Layers, label: 'Multi-Vehicle Recognition', sub: 'Every lane, every vehicle' },
  { id: 'night-vision' as const, Icon: Moon, label: 'Night Vision Mode', sub: 'Accurate after dark' },
] as const;

const APPLICATION_CARDS = [
  { id: 'tolling-systems' as const, Icon: CreditCard, label: 'Tolling Systems', sub: 'No-stop toll billing' },
  { id: 'ticketless-parking' as const, Icon: ParkingSquare, label: 'Ticketless Parking', sub: 'Entry & exit by plate' },
  { id: 'access-control' as const, Icon: Lock, label: 'Access Control', sub: 'Gated communities & sites' },
  { id: 'smart-security' as const, Icon: Camera, label: 'Smart Security & Reports', sub: 'Live feeds + analytics' },
] as const;

const PROBLEM_CARDS = [
  { id: 'waste-overflow' as const, Icon: Droplets, label: 'Overflow & Loss', sub: '50K L/day wasted' },
  { id: 'waste-unequal' as const, Icon: Scale, label: 'Unequal Supply', sub: 'Tail-end villages dry' },
  { id: 'waste-quality' as const, Icon: ShieldCheck, label: 'No Accountability', sub: 'Zero monitoring' },
  { id: 'waste-manual' as const, Icon: Wrench, label: 'Manual Control', sub: '5 borewells overused' },
] as const;

const SOLUTION_CARDS = [
  { id: 'conserve-how' as const, Icon: Droplets, title: 'Conserve', desc: 'Stop 50K L/day overflow' },
  { id: 'regulate-how' as const, Icon: Scale, title: 'Regulate', desc: 'Fair OHT scheduling' },
  { id: 'quality-how' as const, Icon: ShieldCheck, title: 'Accountability', desc: '100% live monitoring' },
] as const;

const PARTNER_CARDS = [
  { id: 'audience-twad' as const, Icon: Landmark, title: 'TWAD & Water Boards' },
  { id: 'audience-municipal' as const, Icon: Building2, title: 'Municipal Corporations' },
  { id: 'audience-csr' as const, Icon: Handshake, title: 'CSR & Investors' },
] as const;

const gridFade = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.3 },
};

const detailFade = {
  initial: { opacity: 0, y: 26 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -18 },
  transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] as const },
};

function ContextSlide() {
  const { activePopup, closePopup } = usePresentation();
  const active = activePopup === 'water-crisis' ? activePopup : null;
  return (
    <Slide index={3}>
      <div className="slide-bg" />
      <AnimatePresence mode="wait">
        {!active ? (
          <motion.div key="grid" className="slide-content" {...gridFade}>
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
          </motion.div>
        ) : (
          <motion.div key="detail" className="slide-content center" {...detailFade}>
            <DetailPanel data={POPUPS[active]} onClose={closePopup} />
          </motion.div>
        )}
      </AnimatePresence>
    </Slide>
  );
}

function ChallengesSlide() {
  const { activePopup, closePopup } = usePresentation();
  const active = PROBLEM_CARDS.some((c) => c.id === activePopup) ? activePopup : null;
  return (
    <Slide index={4}>
      <div className="slide-bg" />
      <AnimatePresence mode="wait">
        {!active ? (
          <motion.div key="grid" className="slide-content" {...gridFade}>
            <FadeUp><span className="eyebrow">Challenges</span></FadeUp>
            <FadeUp delay={0.08}>
              <h2 className="slide-title light">Before iTank Automation</h2>
            </FadeUp>
            <FadeUp delay={0.14}>
              <p className="slide-lead light">Tap a card to explore each challenge</p>
            </FadeUp>
            <MotionGrid className="guide-grid quad-row">
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
          </motion.div>
        ) : (
          <motion.div key="detail" className="slide-content center" {...detailFade}>
            <DetailPanel data={POPUPS[active]} onClose={closePopup} />
          </motion.div>
        )}
      </AnimatePresence>
    </Slide>
  );
}

function SolutionSlide() {
  const { activePopup, closePopup } = usePresentation();
  const active = SOLUTION_CARDS.some((c) => c.id === activePopup) ? activePopup : null;
  return (
    <Slide index={5}>
      <div className="slide-bg" />
      <AnimatePresence mode="wait">
        {!active ? (
          <motion.div key="grid" className="slide-content center" {...gridFade}>
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
              {SOLUTION_CARDS.map(({ id, Icon, title, desc }) => (
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
          </motion.div>
        ) : (
          <motion.div key="detail" className="slide-content center" {...detailFade}>
            <DetailPanel data={POPUPS[active]} onClose={closePopup} />
          </motion.div>
        )}
      </AnimatePresence>
    </Slide>
  );
}

function PartnersSlide() {
  const { activePopup, closePopup } = usePresentation();
  const active = PARTNER_CARDS.some((c) => c.id === activePopup) ? activePopup : null;
  return (
    <Slide index={7}>
      <div className="slide-bg" />
      <AnimatePresence mode="wait">
        {!active ? (
          <motion.div key="grid" className="slide-content center" {...gridFade}>
            <FadeUp><span className="eyebrow">Stakeholders</span></FadeUp>
            <FadeUp delay={0.08}>
              <h2 className="slide-title light">Built for Public Water Leadership</h2>
            </FadeUp>
            <MotionGrid className="partner-row">
              {PARTNER_CARDS.map(({ id, Icon, title }) => (
                <motion.div key={id} variants={staggerItem}>
                  <PopupButton popupId={id} className="partner-card glass">
                    <Icon size={32} strokeWidth={1.5} />
                    <h3>{title}</h3>
                  </PopupButton>
                </motion.div>
              ))}
            </MotionGrid>
          </motion.div>
        ) : (
          <motion.div key="detail" className="slide-content center" {...detailFade}>
            <DetailPanel data={POPUPS[active]} onClose={closePopup} />
          </motion.div>
        )}
      </AnimatePresence>
    </Slide>
  );
}

function ImpactSlide() {
  const { activePopup, closePopup } = usePresentation();
  const active = activePopup === 'benefits-detail' ? activePopup : null;
  return (
    <Slide index={8}>
      <div className="slide-bg" />
      <AnimatePresence mode="wait">
        {!active ? (
          <motion.div key="grid" className="slide-content center" {...gridFade}>
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
            <motion.div
              className="perf-chips"
              variants={stepContainer}
              initial="hidden"
              animate="show"
              transition={{ delayChildren: 0.5 }}
            >
              {KEY_PERFORMANCE.map((item) => (
                <motion.span key={item} className="perf-chip" variants={stepItem}>
                  <span className="check">✓</span> {item}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        ) : (
          <motion.div key="detail" className="slide-content center" {...detailFade}>
            <DetailPanel data={POPUPS[active]} onClose={closePopup} />
          </motion.div>
        )}
      </AnimatePresence>
    </Slide>
  );
}

function FinancialSlide() {
  const { activePopup, closePopup } = usePresentation();
  const active =
    activePopup === 'commercial-detail' || activePopup === 'roi-detail' ? activePopup : null;
  return (
    <Slide index={9}>
      <div className="slide-bg" />
      <AnimatePresence mode="wait">
        {!active ? (
          <motion.div key="grid" className="slide-content center" {...gridFade}>
            <FadeUp><span className="eyebrow">ROI</span></FadeUp>
            <FadeUp delay={0.08}>
              <h2 className="slide-title light">Financial Outcome</h2>
            </FadeUp>
            <MotionGrid className="commercial-row">
              <StatCard icon={TrendingUp} value={PONMUDI_STATS.investment} label="Investment" delay={0.1} />
              <StatCard icon={Zap} value={PONMUDI_STATS.annualSavings} label="Annual Savings" delay={0.18} accent />
              <StatCard icon={BarChart3} value={PONMUDI_STATS.payback} label="Payback Period" delay={0.26} />
            </MotionGrid>
            <FadeUp delay={0.32}>
              <SavingsDonut segments={[...SAVINGS_BREAKDOWN]} total={PONMUDI_STATS.annualSavings} />
            </FadeUp>
            <FadeUp delay={0.42}>
              <div className="btn-group">
                <PopupButton popupId="commercial-detail" className="btn-guide">Savings Breakdown</PopupButton>
                <PopupButton popupId="roi-detail" className="btn-guide">Scale ROI →</PopupButton>
              </div>
            </FadeUp>
          </motion.div>
        ) : (
          <motion.div key="detail" className="slide-content center" {...detailFade}>
            <DetailPanel data={POPUPS[active]} onClose={closePopup} />
          </motion.div>
        )}
      </AnimatePresence>
    </Slide>
  );
}

function CaseStudySlide() {
  const { activePopup, closePopup } = usePresentation();
  const active =
    activePopup === 'case-reference' || activePopup === 'deployment' ? activePopup : null;
  return (
    <Slide index={10}>
      <div className="slide-bg" />
      <AnimatePresence mode="wait">
        {!active ? (
          <motion.div key="grid" className="slide-content split" {...gridFade}>
            <div>
              <FadeUp><span className="eyebrow">Scale</span></FadeUp>
              <FadeUp delay={0.08}>
                <h2 className="slide-title light">Deployment &amp; Expansion</h2>
              </FadeUp>
              <FadeUp delay={0.14}>
                <p className="slide-lead light">
                  Scaling across <strong>{PONMUDI_STATS.scalePanchayats} Gram Panchayats</strong> ·{' '}
                  <strong>{PONMUDI_STATS.scaleOhts} OHTs</strong> in Erode District
                </p>
              </FadeUp>
              <motion.div
                className="phase-list"
                variants={stepContainer}
                initial="hidden"
                animate="show"
                transition={{ delayChildren: 0.22 }}
              >
                {['Site Survey', 'Install & Configure', 'Go Live & Train', 'District Scale'].map((p, i) => (
                  <motion.div key={p} className="phase" variants={stepItem}>
                    <span>0{i + 1}</span> {p}
                  </motion.div>
                ))}
              </motion.div>
              <FadeUp delay={0.32}>
                <div className="btn-group align-left">
                  <PopupButton popupId="case-reference" className="btn-guide dark">
                    Full Case Study <ArrowRight size={16} />
                  </PopupButton>
                  <PopupButton popupId="deployment" className="btn-guide dark">Deployment Plan</PopupButton>
                </div>
              </FadeUp>
            </div>
            <FadeUp delay={0.2}>
              <div className="scale-panel glass">
                <span className="eyebrow">Scale Snapshot</span>
                <div className="scale-stats">
                  <StatCard icon={Building2} value={`${PONMUDI_STATS.scaleOhts}`} label="OHTs at Scale" delay={0.1} />
                  <StatCard icon={Landmark} value={`${PONMUDI_STATS.scalePanchayats}`} label="Gram Panchayats" delay={0.18} />
                  <StatCard icon={TrendingUp} value={PONMUDI_STATS.scaleSavingsPotential} label="Annual Savings Potential" delay={0.26} accent />
                </div>
              </div>
            </FadeUp>
          </motion.div>
        ) : (
          <motion.div key="detail" className="slide-content center" {...detailFade}>
            <DetailPanel data={POPUPS[active]} onClose={closePopup} />
          </motion.div>
        )}
      </AnimatePresence>
    </Slide>
  );
}

function RecognitionSlide() {
  const { activePopup, closePopup } = usePresentation();
  const active = RECOGNITION_CARDS.some((c) => c.id === activePopup) ? activePopup : null;
  return (
    <Slide index={12}>
      <div className="slide-bg traffic" />
      <AnimatePresence mode="wait">
        {!active ? (
          <motion.div key="grid" className="slide-content" {...gridFade}>
            <FadeUp><span className="eyebrow">Core Technology</span></FadeUp>
            <FadeUp delay={0.08}>
              <h2 className="slide-title light">Recognition Capabilities</h2>
            </FadeUp>
            <FadeUp delay={0.14}>
              <p className="slide-lead light">Tap a card to see how each capability works</p>
            </FadeUp>
            <MotionGrid className="guide-grid quad-row">
              {RECOGNITION_CARDS.map(({ id, Icon, label, sub }) => (
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
          </motion.div>
        ) : (
          <motion.div key="detail" className="slide-content center" {...detailFade}>
            <DetailPanel data={POPUPS[active]} onClose={closePopup} />
          </motion.div>
        )}
      </AnimatePresence>
    </Slide>
  );
}

function ApplicationsSlide() {
  const { activePopup, closePopup } = usePresentation();
  const active = APPLICATION_CARDS.some((c) => c.id === activePopup) ? activePopup : null;
  return (
    <Slide index={13}>
      <div className="slide-bg traffic" />
      <AnimatePresence mode="wait">
        {!active ? (
          <motion.div key="grid" className="slide-content" {...gridFade}>
            <FadeUp><span className="eyebrow">Smart Infrastructure</span></FadeUp>
            <FadeUp delay={0.08}>
              <h2 className="slide-title light">Smart Applications</h2>
            </FadeUp>
            <FadeUp delay={0.14}>
              <p className="slide-lead light">Same recognition engine, applied across infrastructure</p>
            </FadeUp>
            <MotionGrid className="guide-grid quad-row">
              {APPLICATION_CARDS.map(({ id, Icon, label, sub }) => (
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
          </motion.div>
        ) : (
          <motion.div key="detail" className="slide-content center" {...detailFade}>
            <DetailPanel data={POPUPS[active]} onClose={closePopup} />
          </motion.div>
        )}
      </AnimatePresence>
    </Slide>
  );
}

function ContactSlide() {
  const { activePopup, closePopup } = usePresentation();
  const active = activePopup === 'company' ? activePopup : null;
  return (
    <Slide index={14} hero>
      <WaterBackground waves={2} ripples={false} />
      <AnimatePresence mode="wait">
        {!active ? (
          <motion.div key="grid" className="slide-content hero-content" {...gridFade}>
            <FadeUp><h2 className="thanks-title">Thank You</h2></FadeUp>
            <FadeUp delay={0.1}>
              <p className="thanks-sub">Reliable · Sustainable · Efficient Water for Every Village</p>
            </FadeUp>
            <FadeUp delay={0.2}>
              <div className="contact-block">
                <img src="/img/acs-logo.jpeg" alt="ACS Technologies" className="contact-logo" />
                <div className="contact-details">
                  <h3>ACS Technologies Ltd</h3>
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
          </motion.div>
        ) : (
          <motion.div key="detail" className="slide-content center" {...detailFade}>
            <DetailPanel data={POPUPS[active]} onClose={closePopup} />
          </motion.div>
        )}
      </AnimatePresence>
    </Slide>
  );
}

export function SlideDeck() {
  return (
    <>
      {/* 1 Landing */}
      <Slide index={1}>
        <div className="slide-bg" />
        <div className="slide-content center">
          <FadeUp><span className="eyebrow">ACS Technologies Ltd</span></FadeUp>
          <FadeUp delay={0.08}>
            <h2 className="slide-title light">ACS Proposals</h2>
          </FadeUp>
          <FadeUp delay={0.14}>
            <p className="slide-lead light">Select a case study to explore</p>
          </FadeUp>
          <MotionGrid className="proposal-cards">
            <motion.div variants={staggerItem}>
              <GotoButton slide={2} className="proposal-card water">
                <div className="proposal-card-icon"><Droplets size={22} /></div>
                <h3>Smart Water Management System</h3>
                <p>iTank — IoT automation for water supply at Ponmudi Gram Panchayat</p>
                <span className="proposal-card-cta">View Proposal <ArrowRight size={14} /></span>
              </GotoButton>
            </motion.div>
            <motion.div variants={staggerItem}>
              <GotoButton slide={11} className="proposal-card traffic">
                <div className="proposal-card-icon"><ScanLine size={22} /></div>
                <h3>Smart Traffic Management System</h3>
                <p>AI-powered license plate recognition, tolling, parking &amp; access control</p>
                <span className="proposal-card-cta">View Proposal <ArrowRight size={14} /></span>
              </GotoButton>
            </motion.div>
          </MotionGrid>
        </div>
      </Slide>

      {/* 2 Hero */}
      <Slide index={2} hero>
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
          <motion.div
            className="hero-byline"
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.34, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="byline-rule" />
            <p className="hero-company">
              by <strong>ACS Technologies Ltd</strong> · Hyderabad
            </p>
          </motion.div>
          <FadeUp delay={0.45}>
            <GotoButton slide={3} className="btn-water">
              Explore Proposal <ArrowRight size={18} />
            </GotoButton>
          </FadeUp>
        </div>
      </Slide>

      {/* 3 Context */}
      <ContextSlide />

      {/* 4 Challenges */}
      <ChallengesSlide />

      {/* 5 Solution */}
      <SolutionSlide />

      {/* 6 How it works */}
      <Slide index={6}>
        <div className="slide-bg" />
        <div className="slide-content center">
          <FadeUp><span className="eyebrow">Architecture</span></FadeUp>
          <FadeUp delay={0.08}>
            <h2 className="slide-title light">How iTank Works</h2>
          </FadeUp>
          <motion.div
            className="flow-grid"
            variants={stepContainer}
            initial="hidden"
            animate="show"
            transition={{ delayChildren: 0.16 }}
          >
            {HOW_STEPS.map(({ title, Icon, desc }, i) => (
              <motion.div key={title} className={`flow-card ${i === 3 ? 'accent' : ''}`} variants={stepItem}>
                <span className="flow-num">{i + 1}</span>
                <Icon size={28} strokeWidth={1.75} />
                <h3>{title}</h3>
                <p>{desc}</p>
              </motion.div>
            ))}
          </motion.div>
          <FadeUp delay={0.5}>
            <SystemTabs />
          </FadeUp>
        </div>
      </Slide>

      {/* 7 Partners */}
      <PartnersSlide />

      {/* 8 Impact */}
      <ImpactSlide />

      {/* 9 Financial */}
      <FinancialSlide />

      {/* 10 Case Study */}
      <CaseStudySlide />

      {/* 11 Traffic Management Intro */}
      <Slide index={11}>
        <div className="slide-bg traffic" />
        <div className="slide-content center">
          <FadeUp><span className="eyebrow">New Vertical</span></FadeUp>
          <FadeUp delay={0.08}>
            <h2 className="slide-title light">AI Traffic &amp; Surveillance Management</h2>
          </FadeUp>
          <FadeUp delay={0.16}>
            <p className="slide-lead light">
              License plate recognition, vehicle classification &amp; access control — extending ACS
              Technologies&apos; IoT platform beyond water to smart cities, highways &amp; facilities.
            </p>
          </FadeUp>
          <FadeUp delay={0.22}>
            <DemoVideo
              streamableId="gn1iei"
              poster="/img/traffic-demo-poster.jpg"
              label="Watch Demo"
            />
          </FadeUp>
          <FadeUp delay={0.32}>
            <GotoButton slide={12} className="btn-water">
              Explore Capabilities <ArrowRight size={18} />
            </GotoButton>
          </FadeUp>
        </div>
      </Slide>

      {/* 12 Recognition Capabilities */}
      <RecognitionSlide />

      {/* 13 Smart Applications */}
      <ApplicationsSlide />

      {/* 14 Contact */}
      <ContactSlide />
    </>
  );
}
