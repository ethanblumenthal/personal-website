export interface IPost {
  fields: {
    date: string;
    title: string;
    description: string;
    image: {
      fields: {
        file: {
          url;
        };
      };
    };
    slug: string;
  };
}
