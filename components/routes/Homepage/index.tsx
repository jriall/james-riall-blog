import React from "react";

import { Post } from "types/posts";

import { PostItem } from "./PostItem";

export const HomepageView: React.FC<{ posts: Post[] }> = ({ posts }) => {
  return (
    <div>
      <h1 className="py-6 text-4xl">Posts</h1>
      <ul>
        {posts.map((post) => (
          <li className="py-6" key={post.slug}>
            <PostItem post={post} />
          </li>
        ))}
      </ul>
    </div>
  );
};
