import Image from "next/image";
import React from "react";
import profilePhoto from "public/images/profile-photo.jpg";
import { Meta } from "../../components/Meta";

const About: React.FC = () => {
  return (
    <>
      <Meta
        title="James Riall"
        description="A collection of articles, thoughts, notes, and observations"
      />
      <div>
        <h1 className="py-6 text-4xl">About</h1>
        <p className="py-4 text-base">
          I&apos;m James Riall, a software engineer and tech lead living in
          London. I currently work as a Tech Lead in Product Growth for
          GoCardless
        </p>
        <div className="w-96">
          <Image src={profilePhoto} alt="" />
        </div>
      </div>
    </>
  );
};

export default About;
