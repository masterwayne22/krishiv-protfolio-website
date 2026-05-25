export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link?: string;
  details?: {
    overview: string;
    keyFeatures: string[];
    techDetails: string;
    achievements: string[];
  };
}

export interface LanguageItem {
  name: string;
  level: string;
  subText: string;
}

export interface FrameworkItem {
  name: string;
  progress: number;
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  badgeText: string;
}

export interface EducationInfo {
  university: string;
  degree: string;
  period: string;
  coursework: string[];
}
