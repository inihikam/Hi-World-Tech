export interface Project {
  name: string;
  category: 'Web Apps' | 'APIs' | 'AI/ML' | 'Systems';
  shortDescription: string;
  fullDescription: string;
  problem: string;
  solution: string;
  techStack: string[];
  features: string[];
  impact: string;
  githubUrl: string;
  liveDemoUrl?: string;
  stars: number;
  forks: number;
}
