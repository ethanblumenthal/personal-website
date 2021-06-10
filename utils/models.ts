export interface IPost {
  date: string;
  title: string;
  excerpt: string;
  slug: string;
  tags: string[];
  isPublished: boolean;
}
export interface IProject {
  name: string;
  description: string;
  tags: string[];
  image: string;
  githubURL: string;
  siteURL: string;
}

export interface IService {
  cta: string;
  subtext: string;
  summary: string;
  link: string;
}
