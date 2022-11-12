import React from "react";

import { Meta } from "../components/Meta";
import { HomepageView } from "../components/routes/Homepage";
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

const Homepage: React.FC<{ posts: Post[] }> = ({ posts }) => {
  return (
    <>
      <Meta
        title="James Riall"
        description="A collection of articles, thoughts, notes, and observations"
      />
      <HomepageView posts={posts} />
    </>
  );
};

export default Homepage;
