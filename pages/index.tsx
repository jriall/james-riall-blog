import React from "react";
import { Meta } from "../components/Meta";
import { PostItem } from "../components/PostItem";

import { getPosts } from "../scripts/utils";
import { Post } from "../types/posts";

export const getStaticProps = () => {
  const posts = getPosts();

  return {
    props: {
      posts,
    },
  };
};

const Home: React.FC<{ posts: Post[] }> = ({ posts }) => {
  return (
    <>
      <Meta
        title="James Riall"
        description="A collection of articles, thoughts, notes, and observations"
      />
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
    </>
  );
};

export default Home;
