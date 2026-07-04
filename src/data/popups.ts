import type { PopupData, PopupId } from '../types';

export const POPUPS: Record<PopupId, PopupData> = {
  'water-crisis': {
    title: 'Ponmudi — Before Automation',
    icon: 'map',
    body: `<p><strong>Location:</strong> Ponmudi Gram Panchayat, Erode District, Tamil Nadu</p>
<p><strong>Scale:</strong> ~19 Overhead Tanks · 100% Villages · ~14,000 People</p>
<p>Like many rural panchayats, Ponmudi faced chronic water loss, manual operations, and unequal supply to tail-end villages before iTank was deployed.</p>`,
  },
  'waste-overflow': {
    title: 'Overflow & Daily Loss',
    icon: 'droplets',
    body: `<p>Frequent tank overflows caused an estimated <strong>50,000 litres of water loss every day</strong>.</p>
<p>Pumps continued running with no level feedback — precious treated water drained away unused.</p>
<p><strong>After iTank:</strong> Overflow eliminated. 50,000 L/day saved.</p>`,
  },
  'waste-unequal': {
    title: 'Unequal Village Supply',
    icon: 'scale',
    body: `<p>Tail-end villages received little or no water while upstream areas were oversupplied.</p>
<p>Uncertain timings and poor pressure at household taps eroded public trust.</p>
<p><strong>After iTank:</strong> Scheduled equitable distribution — 199 new connections added.</p>`,
  },
  'waste-quality': {
    title: 'No Monitoring or Accountability',
    icon: 'shield',
    body: `<p>Zero real-time data on tank levels, pump status, or daily release volumes.</p>
<p>No audit trail for officers, panchayat, or funding partners.</p>
<p><strong>After iTank:</strong> 100% real-time monitoring, alerts, and water accounting.</p>`,
  },
  'waste-manual': {
    title: 'Manual Pump & Valve Operation',
    icon: 'wrench',
    body: `<p>Staff travelled to each OHT to operate pumps and valves manually — slow, costly, inconsistent.</p>
<p>High dependency on <strong>5 borewells</strong> with no automation logic.</p>
<p><strong>After iTank:</strong> 98% automation. Borewells reduced from 5 → 2.</p>`,
  },
  'conserve-how': {
    title: 'Water Conservation',
    icon: 'recycle',
    body: `<ul>
<li>Live level sensing — pumps stop before overflow</li>
<li>50,000 L/day overflow prevented at Ponmudi</li>
<li>Supply increased 34% (2.01 → 2.70 Lakh L/day)</li>
<li>~600 KL treated water saved</li>
</ul>`,
  },
  'regulate-how': {
    title: 'Regulated Public Supply',
    icon: 'calendar',
    body: `<ul>
<li>Scheduled distribution to all 19 OHTs</li>
<li>Zone-wise timing set by panchayat officers</li>
<li>Automatic valve control per schedule</li>
<li>Fair supply to tail-end villages</li>
</ul>`,
  },
  'quality-how': {
    title: 'Quality & Transparency',
    icon: 'building',
    body: `<ul>
<li>Daily supply volume records for audits</li>
<li>Ultrasonic flow metering for accuracy</li>
<li>Real-time dashboard + mobile app</li>
<li>CSR & government reporting ready</li>
</ul>`,
  },
  'system-overview': {
    title: 'iTank System Architecture',
    icon: 'cpu',
    body: `<p><strong>Field Layer:</strong> Level sensors, ultrasonic meters, pump & valve controllers, solar units, LTE/WiFi gateway</p>
<p><strong>Cloud:</strong> Secure automation engine & data store</p>
<p><strong>Officer Portal:</strong> Real-time dashboard, scheduling, reports</p>
<p><strong>Mobile App:</strong> Alerts & remote control</p>
<p>Deployed by <strong>ACS Technologies Pvt Ltd</strong>, Hyderabad.</p>`,
  },
  'how-steps': {
    title: 'Automated Operation Loop',
    icon: 'workflow',
    body: `<ol>
<li><strong>Monitor</strong> — IoT sensors read tank level & flow</li>
<li><strong>Plan</strong> — Schedule engine applies officer rules</li>
<li><strong>Control</strong> — Pumps & valves act automatically</li>
<li><strong>Report</strong> — Dashboard updates; alerts on anomalies</li>
</ol>`,
  },
  devices: {
    title: 'Smart Field Devices',
    icon: 'radio',
    body: `<p><strong>Water Level Sensor</strong> — Non-contact ultrasonic measurement</p>
<p><strong>Ultrasonic Flow Meter</strong> — High-accuracy consumption tracking</p>
<p><strong>Motor Controller</strong> — Intelligent pump automation</p>
<p><strong>Valve Controller</strong> — Remote scheduled open/close</p>
<p><strong>Solar Unit</strong> — Off-grid power for remote OHTs</p>
<p><strong>LTE/WiFi Gateway</strong> — Always-on cloud connectivity</p>`,
  },
  'dashboard-demo': {
    title: 'Live Officer Dashboard',
    icon: 'monitor',
    live: true,
    body: '',
  },
  'audience-twad': {
    title: 'TWAD & Water Boards',
    icon: 'landmark',
    body: `<p>District-wide visibility across OHTs. Reduce overflow & electricity costs. Audit-ready reports for state review.</p>
<p>Ponmudi model scaling to <strong>46 OHTs across 11 Gram Panchayats</strong> in Erode District.</p>`,
  },
  'audience-municipal': {
    title: 'Municipal Corporations',
    icon: 'city',
    body: `<p>Urban tank automation, equitable zone scheduling, Smart City integration, and citizen service improvements.</p>`,
  },
  'audience-csr': {
    title: 'CSR & Investors',
    icon: 'handshake',
    body: `<p>Measurable conservation: 54 tonnes CO₂ offset, 2.19 lakh kWh saved, documented social impact for CSR reporting.</p>
<p>Clear ROI with <strong>2 – 2.5 year payback</strong> at reference sites.</p>`,
  },
  'benefits-detail': {
    title: 'Ponmudi — Measured Outcomes',
    icon: 'chart',
    body: `<ul>
<li>34% increase in daily water supply (+69,000 L/day)</li>
<li>40% reduction in electricity consumption</li>
<li>30% lower cost per kilolitre (₹23.19 → ₹16.24/KL)</li>
<li>50,000 L/day overflow eliminated</li>
<li>Borewells: 5 → 2</li>
<li>199 new household connections</li>
<li>100% OHTs operational · 98% automation</li>
</ul>`,
  },
  'commercial-detail': {
    title: 'Financial Outcome — Ponmudi Reference',
    icon: 'wallet',
    body: `<table class="popup-table">
<tr><td>Total Investment</td><td><strong>₹13.3 Lakh</strong></td></tr>
<tr><td>Annual Savings</td><td><strong>₹6.8 Lakh</strong></td></tr>
<tr><td>Payback Period</td><td><strong>2 – 2.5 Years</strong></td></tr>
</table>
<p><strong>Annual Savings Breakdown:</strong></p>
<table class="popup-table">
<tr><td>Electricity</td><td>₹3,00,000</td></tr>
<tr><td>Water Loss Prevention</td><td>₹1,50,000</td></tr>
<tr><td>Manpower</td><td>₹1,20,000</td></tr>
<tr><td>Maintenance</td><td>₹1,10,000</td></tr>
</table>`,
  },
  'roi-detail': {
    title: 'Return on Investment',
    icon: 'trending',
    body: `<p><strong>ROI Drivers at Ponmudi:</strong></p>
<ul>
<li>₹3 Lakh/yr electricity savings (40% reduction)</li>
<li>₹1.5 Lakh/yr from preventing water loss</li>
<li>₹1.2 Lakh/yr manpower savings</li>
<li>₹1.1 Lakh/yr maintenance savings</li>
</ul>
<p>At scale across Erode District: potential <strong>₹3.13 Crore+</strong> annual savings.</p>`,
  },
  deployment: {
    title: 'Deployment Roadmap',
    icon: 'rocket',
    body: `<p><strong>Phase 1 — Survey</strong> (1–2 weeks)</p>
<p><strong>Phase 2 — Install</strong> (2–3 weeks): Sensors, controllers, connectivity</p>
<p><strong>Phase 3 — Go Live</strong> (1 week): Testing, officer training</p>
<p><strong>Phase 4 — Scale</strong>: 46 OHTs · 11 Panchayats · Erode District</p>`,
  },
  'case-reference': {
    title: 'Ponmudi Gram Panchayat — Full Case Study',
    icon: 'image',
    image: '/img/case-study.png',
    body: `<p><strong>Automation of Water Supply</strong> — Ponmudi Gram Panchayat, Erode District</p>
<p>Smart Water Management using IoT for efficient, equitable & sustainable supply.</p>
<p><strong>Environmental impact:</strong> 54 tonnes CO₂ offset · 2,19,000 kWh saved · 600 KL treated water conserved.</p>`,
  },
  company: {
    title: 'ACS Technologies Pvt Ltd',
    icon: 'building',
    body: `<p><strong>HQ:</strong> Hyderabad, Telangana</p>
<p><strong>Web:</strong> www.acstechlogies.com</p>
<p><strong>Phone:</strong> +91 78456 97475</p>
<p><strong>Product:</strong> iTank — IoT Smart Water Management System</p>
<p>Designing & deploying IoT solutions for water conservation and public utility automation across India.</p>`,
  },
};
