import { MDXProvider } from "@mdx-js/react";
import { AppProps } from "next/app";

import { MainPageLayout } from "../components/MainPageLayout";
import MDXComponents from "../components/MDXComponents";

import "../styles/globals.css";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <MDXProvider components={MDXComponents}>
      <MainPageLayout>
        <Component {...pageProps} />
      </MainPageLayout>
    </MDXProvider>
  );
};

export default MyApp;
