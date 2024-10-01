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

interface SkillDetails {
  id: number;
  name: string;
  description: string;
  img: string;
  subSkills: SubSkill[];
}
type SubSkill = SkillDetails;

export interface Skill {
  es: SkillDetails;
  en: SkillDetails;
}