export interface PostFrontmatter {
  excerpt: string;
  isPublished: boolean;
  publishedOn: string;
  tags: string[];
  title: string;
}

export interface Post {
  data: PostFrontmatter;
  content: string;
  slug: string;
}
