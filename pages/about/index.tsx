import React from "react";

import { AboutView } from "components/routes/About";
import { Meta } from "components/Meta";

const About: React.FC = () => {
  return (
    <>
      <Meta
        title="James Riall"
        description="A collection of articles, thoughts, notes, and observations on software engineering"
      />
      <AboutView />
    </>
  );
};

export default About;
