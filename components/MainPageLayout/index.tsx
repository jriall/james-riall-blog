import React from "react";

import { Footer } from "../Footer";
import { Header } from "../Header";

export const MainPageLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <>
      <Header />
      <div className="max-w-3xl m-auto p-2">
        <div className="flex flex-col justify-between min-h-screen">
          <div>
            <main>{children}</main>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
