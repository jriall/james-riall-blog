import React from "react";

export const Footer: React.FC = () => {
  return (
    <p className="text-base text-gray-800 py-8 px-8 text-center">
      Copyright © James Riall {new Date().getFullYear()}
    </p>
  );
};
