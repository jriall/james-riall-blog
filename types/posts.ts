export interface Post {
  data: {
    excerpt: string;
    publishedOn: string;
    tags: string[];
    title: string;
  };
  content: string;
  slug: string;
}
