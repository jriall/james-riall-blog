import Image from "next/image";
import React from "react";

import profilePhoto from "public/images/profile-photo.jpg";

export const AboutView: React.FC = () => {
  return (
    <div>
      <h1 className="text-5xl text-gray-900 mt-8 mb-8">About</h1>
      <p className="text-base text-gray-600 my-4">
        I&apos;m James Riall, a software engineer and tech lead living in
        London. I currently work as a Tech Lead in Product Growth for GoCardless
      </p>
      <div className="w-96">
        <Image src={profilePhoto} alt="" />
      </div>
    </div>
  );
};
