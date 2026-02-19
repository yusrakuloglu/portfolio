export interface NavItem {
  label: string;
  href: string;
}

export interface AboutCard {
  id: number;
  title: string;
  content: string;
  items?: string[];
  techStack?: string[];
}

export interface SkillItem {
  name: string;
  iconKey: string;
}

export interface SkillCategory {
  id: string;
  name: string;
  glowColor: string;
  skills: SkillItem[];
}

export interface Experience {
  slug: string;
  company: string;
  role: string;
  type: 'frontend' | 'mobile';
  period: string;
  isCurrent: boolean;
  description: string;
  achievements: string[];
  tech: string[];
}

export interface ProjectLink {
  label: string;
  url: string;
  type: "github" | "appstore" | "playstore" | "live";
};

export interface Project {
  slug: string;
  title: string;
  category: "personal" | "professional";
  type: "mobile" | "frontend";
  tech: string[];
  description: string;
  highlights: string[];
  links: ProjectLink[];
  company?: string;
};