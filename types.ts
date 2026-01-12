
export interface Project {
  id: string;
  title: string;
  subtitle: string;
  context: string;
  win: string;
  links: {
    label: string;
    url: string;
  }[];
  tags: string[];
}

export interface SkillCategory {
  category: string;
  skills: string[];
}
