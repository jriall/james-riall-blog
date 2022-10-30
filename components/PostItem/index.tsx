import React from "react";
import Link from "next/link";

import { Post } from "../../types/posts";

export const PostItem: React.FC<{ post: Post }> = ({ post }) => {
  return (
    <div>
      <h3 className="text-gray-900 text-xl">{post.data.title}</h3>
      <p className="text-gray-700 text-base py-2">{post.data.excerpt}</p>
      <Link
        href={`/posts/${post.slug}`}
        className="text-base underline text-blue-600"
      >
        Read more
      </Link>
    </div>
  );
};
