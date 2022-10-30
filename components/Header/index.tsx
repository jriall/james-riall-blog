import Link from "next/link";
import React from "react";

export const Header: React.FC = () => {
  return (
    <header>
      <div className="flex items-end pt-4 pb-8">
        <Link href="/" className="pr-4 text-2xl hover:underline">
          James Riall
        </Link>
        <Link href="/about" className="px-6 text-xl hover:underline">
          About
        </Link>
      </div>
    </header>
  );
};
