
export interface SummaryResult {
  patientName: string;
  summary: string;
  todoList: string[];
}

export enum SectionType {
  HERO = 'hero',
  PROBLEM = 'problem',
  SOLUTION = 'solution',
  BENEFITS = 'benefits',
  FEATURES = 'features',
  STEPS = 'steps',
  DEMO = 'demo',
  FAQ = 'faq'
}
