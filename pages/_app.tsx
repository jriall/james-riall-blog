import { MainPageLayout } from "../components/MainPageLayout";
import "../styles/globals.css";
import { MDXProvider } from "@mdx-js/react";
import MDXComponents from "../components/MDXComponents";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <MDXProvider components={MDXComponents}>
      <MainPageLayout>
        <Component {...pageProps} />
      </MainPageLayout>
    </MDXProvider>
  );
}

export default MyApp;
