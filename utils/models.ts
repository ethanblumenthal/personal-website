export interface IPost {
  date: string;
  title: string;
  excerpt: string;
  slug: string;
  image: string;
  tags: string[];
  isPublished: boolean;
}
export interface IProject {
  name: string;
  description: string;
  tags: string[];
  image: string;
  githubURL: string;
  appURL?: string;
}

export interface IService {
  cta: string;
  subtext: string;
  summary: string;
  link: string;
}
