import fs from "fs";
import path from "path";
import matter from "gray-matter";

import { Post, PostFrontmatter } from "../types/posts";

export const getPosts = (): Post[] => {
  return fs
    .readdirSync(path.join(process.cwd(), "pages", "posts"), {
      withFileTypes: true,
    })
    .filter((file) => file.name.endsWith(".mdx"))
    .map((file) => {
      const fileContent = fs.readFileSync(
        path.join(process.cwd(), "pages", "posts", file.name),
        "utf-8"
      );
      const slug = file.name.replace(/.mdx$/, "");
      const { data, content } = matter(fileContent);
      const post: Post = { data: data as PostFrontmatter, content, slug };
      post.data.publishedOn = new Date(data.publishedOn).toUTCString();
      return post;
    })
    .filter((post) => post.data.isPublished)
    .sort((a, b) => {
      return Date.parse(b.data.publishedOn) - Date.parse(a.data.publishedOn);
    }) as Post[];
};
