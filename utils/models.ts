export interface IPost {
  date: string;
  title: string;
  excerpt: string;
  author: IAuthor;
  coverImage: {
    url: string;
  };
  content: {};
  slug: string;
}

export interface IAuthor {
  name: string;
  picture: {
    url: string;
  };
}
