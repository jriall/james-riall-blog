import Image from "next/image";
import React from "react";

import profilePhoto from "public/images/profile-photo.jpg";

export const AboutView: React.FC = () => {
  return (
    <div>
      <h1 className="text-5xl text-gray-900 mt-8 mb-8">About</h1>
      <p className="text-lg text-gray-600 my-4">
        I&apos;m James Riall, a senior software engineer and technical lead
        living in London. I currently work as the Technical Lead on a
        cross-functional team working on growing in-life merchant revenue within
        GoCardless&apos;s Product Growth division.
      </p>
      <p className="text-lg text-gray-600 mt-4 mb-16">
        My primary technology experience is in TypeScript, JavaScript, React,
        Next, Python, Flask, Redux, Ruby, Ruby on Rails, Angular (1 as well as
        2+), Google Cloud Platform, unit/integration/e2e testing, modern CSS
        (Sass, Grid, Flexbox, CSS-in-JS solutions etc).
      </p>
      <div className="flex justify-center items-center">
        <Image src={profilePhoto} alt="" className="rounded-full" />
      </div>
    </div>
  );
};
