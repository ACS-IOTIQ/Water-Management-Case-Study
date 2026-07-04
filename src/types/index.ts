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
  | 'company';

export interface PopupData {
  title: string;
  icon?: string;
  stat?: string;
  statLabel?: string;
  points: string[];
}

export const TOTAL_SLIDES = 10;
