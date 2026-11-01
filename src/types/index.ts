export interface SolutionItem {
  id: string;
  category: 'governanca' | 'riscos' | 'cultura' | 'todos';
  title: string;
  shortDesc: string;
  fullDesc: string;
  deliverables: string[];
  timeline: string;
  idealFor: string;
  iconName: string;
}

export interface SegmentItem {
  id: string;
  title: string;
  description: string;
  painPoints: string[];
  keyBenefits: string[];
  iconName: string;
}

export interface DiagnosticQuestion {
  id: number;
  category: string;
  question: string;
  options: {
    label: string;
    points: number;
    description: string;
  }[];
}
