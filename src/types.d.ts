export interface ProjectDetails {
  id: number;
  key: number;
  title: string;
  github: string;
  description: string[];
  href: string;
  badge: string[];
  img: string[];
}

export interface Project {
  es: ProjectDetails;
  en: ProjectDetails;
}
