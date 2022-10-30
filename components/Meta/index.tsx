import Head from "next/head";
import React from "react";

interface MetaProps {
  title: string;
  description: string;
  imageUrl?: string;
}

export const Meta: React.FC<MetaProps> = ({ title, description, imageUrl }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="og:title" content={title} />
      <meta name="twitter:title" content={title} />
      <meta name="description" content={description} />
      <meta name="twitter:description" content={description} />
      <meta property="og:description" content={description} />
      {imageUrl && (
        <>
          <meta name="twitter:image" content={imageUrl} />
          <meta property="og:image" content={imageUrl} />
          <meta property="og:site_name" content="Hotel Insights by Google" />
          <meta property="og:type" content="website" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta property="og:image" content={imageUrl} />
        </>
      )}
    </Head>
  );
};
