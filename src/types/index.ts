export type PopupId =
  | 'water-crisis'
  | 'waste-overflow'
  | 'waste-unequal'
  | 'waste-quality'
  | 'waste-manual'
  | 'conserve-how'
  | 'regulate-how'
  | 'quality-how'
  | 'audience-twad'
  | 'audience-municipal'
  | 'audience-csr'
  | 'benefits-detail'
  | 'commercial-detail'
  | 'roi-detail'
  | 'deployment'
  | 'case-reference'
  | 'company'
  | 'anpr-detail'
  | 'vehicle-classification'
  | 'multi-recognition'
  | 'night-vision'
  | 'tolling-systems'
  | 'ticketless-parking'
  | 'access-control'
  | 'smart-security';

export interface PopupData {
  title: string;
  icon?: string;
  stat?: string;
  statLabel?: string;
  points: string[];
}

export const TOTAL_SLIDES = 14;
