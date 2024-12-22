export interface Education {
  institution: string;
  degree: string;
  startDate: string;
  endDate: string;
  grade: string;
}

export interface Project {
  title: string;
  date: string;
  repoLink?: string;
  liveLink?: string;
  description: string[];
}

export interface Award {
  title: string;
  date: string;
  description: string;
}

export interface PersonalInfo {
  fullName: string;
  email: string;
  phone: string;
  github?: string;
  linkedin?: string;
}

export interface Skills {
  languages: string[];
  tools: string[];
  coursework: string[];
}

export interface ResumeData {
  personalInfo: PersonalInfo;
  education: Education[];
  skills: Skills;
  projects: Project[];
  awards: Award[];
}