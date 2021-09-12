import React from "react";
import Head from "next/head";

const Meta = ({ title, keywords, description }) => {
  return (
    <Head>
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
    </Head>
  );
};

Meta.defaultProps = {
    title: "Virginie Perrault, Bien naître et Bien être",
    keywords: "Aide soignante, auxiliaire de puériculture, massage bébé",
    description: "To be added"
}

export default Meta;