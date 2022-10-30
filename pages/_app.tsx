import { MainPageLayout } from "../components/MainPageLayout";
import "../styles/globals.css";
import { MDXProvider } from "@mdx-js/react";
import MDXComponents from "../components/MDXComponents";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css?family=Roboto"
          rel="stylesheet"
        />
      </Head>
      <MDXProvider components={MDXComponents}>
        <MainPageLayout>
          <Component {...pageProps} />
        </MainPageLayout>
      </MDXProvider>
    </>
  );
}

export default MyApp;
