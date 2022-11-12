import fs from "fs";
import path from "path";
import matter from "gray-matter";

import { Post } from "../types/posts";

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
      const { data, content } = matter(fileContent);
      data["publishedOn"] = new Date(data["publishedOn"]).toUTCString();
      const slug = file.name.replace(/.mdx$/, "");
      return { data, content, slug };
    })
    .filter((post) => !!post)
    .sort((a, b) => {
      return (
        Date.parse(b.data["publishedOn"]) - Date.parse(a.data["publishedOn"])
      );
    }) as Post[];
};
