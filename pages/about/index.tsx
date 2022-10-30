import Image from "next/image";
import React from "react";
import profilePhoto from "public/images/profile-photo.jpg";

const About: React.FC = () => {
  return (
    <div>
      <h1 className="py-6 text-4xl">About</h1>
      <p className="py-4 text-base">
        I'm James Riall, a software engineer and tech lead living in London. I
        currently work as a Tech Lead in Product Growth for GoCardless
      </p>
      <Image src={profilePhoto} alt="" width={500} height={500} />
    </div>
  );
};

export default About;
