import Link from "next/link";
import React from "react";
import { SocialIcon } from "react-social-icons";

export const Header: React.FC = () => {
  return (
    <header>
      <div className="flex justify-between items-end pb-8">
        <div className="flex items-end pt-4">
          <Link href="/" className="pr-4 text-2xl hover:underline">
            James Riall
          </Link>
          <Link href="/about" className="px-6 text-xl hover:underline">
            About
          </Link>
        </div>
        <div className="flex items-end pb-1">
          <SocialIcon
            url="https://www.linkedin.com/in/james-riall/"
            label="Visit James Riall's LinkedIn profile"
            style={{
              height: "32px",
              width: "32px",
            }}
            className="mx-1"
          />
          <SocialIcon
            url="https://github.com/jriall"
            label="Visit James Riall's GitHub profile"
            style={{
              height: "32px",
              width: "32px",
            }}
            className="mx-1"
          />
          <SocialIcon
            url="mailto:jamesrariall@gmail.com"
            label="Send James Riall an email"
            style={{
              height: "32px",
              width: "32px",
            }}
            className="mx-1"
          />
        </div>
      </div>
    </header>
  );
};
