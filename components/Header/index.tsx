import Link from "next/link";
import React from "react";

export const Header: React.FC = () => {
  return (
    <header>
      <div className="flex">
        <Link href="/" className="py-6 pr-4 text-4xl">
          James Riall
        </Link>
        <Link href="/about" className="px-6 py-8 text-2xl">
          About
        </Link>
        <Link href="/posts" className="px-6 py-8 text-2xl">
          Posts
        </Link>
      </div>
    </header>
  );
};
