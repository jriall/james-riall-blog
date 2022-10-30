import React from "react";

import { Footer } from "../Footer";
import { Header } from "../Header";

export const MainPageLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <div className="max-w-5xl m-auto">
      <div className="flex flex-col justify-between min-h-screen">
        <div>
          <Header />
          <main>{children}</main>
        </div>
        <Footer />
      </div>
    </div>
  );
};
