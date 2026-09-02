export type DisciplineCategory = 'coding' | 'robotics' | 'iot' | 'ai-ml';

export interface StemDiscipline {
  id: string;
  title: string;
  description: string;
  iconName: string;
  category: DisciplineCategory;
  tools: string[];
}

export interface ProgramTrack {
  slug: string;
  title: string;
  targetAudience: string; // e.g., "Ages 8-12", "High School Students"
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  duration: string;
  description: string;
  outcomes: string[];
  featuredTools: string[];
}

export interface StudentProject {
  id: string;
  title: string;
  studentName: string;
  age: number;
  description: string;
  tags: string[];
  discipline: DisciplineCategory;
  demoUrl?: string;
}

export interface AcademyEvent {
  id: string;
  title: string;
  date: string;
  location: string;
  type: 'Workshop' | 'Hackathon' | 'Exposition' | 'Webinar';
  description: string;
  registrationOpen: boolean;
}

export interface ImpactStat {
  label: string;
  value: string;
  description: string;
}