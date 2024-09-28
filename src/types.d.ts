import { Category } from "./context/Category";

export interface ProjectDetails {
  id: number;
  key: number;
  category: Category;
  title: string;
  github: string;
  description: React.ReactNode;
  href: string;
  badge: string[];
  img: string[];
}

export interface Project {
  es: ProjectDetails;
  en: ProjectDetails;
}
