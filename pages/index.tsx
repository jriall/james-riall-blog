import React from "react";

import { Meta } from "../components/Meta";
import { Homepage } from "../components/routes/Homepage";
import { getPosts } from "../scripts/utils";
import { Post } from "types/posts";

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
      <Homepage posts={posts} />
    </>
  );
};

export default Home;
