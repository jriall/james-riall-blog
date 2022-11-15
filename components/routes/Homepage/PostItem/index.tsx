import React from "react";
import Link from "next/link";

import { Post } from "types/posts";
import { formatDate } from "utils/dates";

export const PostItem: React.FC<{ post: Post }> = ({ post }) => {
  return (
    <div>
      <Link href={`/posts/${post.slug}`}>
        <h3 className="text-3xl text-gray-900 mb-2 hover:underline">
          {post.data.title}
        </h3>
      </Link>
      <p className="text-gray-700 text-lg mb-2">{post.data.excerpt}</p>
      <p className="text-gray-400 text-base mb-2">
        Published on {formatDate(post.data.publishedOn)}
      </p>
      <hr className="my-8" />
    </div>
  );
};
