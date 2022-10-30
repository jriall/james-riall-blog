import React from "react";

export const Footer: React.FC = () => {
  return (
    <p className="text-lg my-4">
      Copyright © James Riall {new Date().getFullYear()}
    </p>
  );
};
