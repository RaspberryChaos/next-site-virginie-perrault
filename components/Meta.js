import React from "react";
import Head from "next/head";

const Meta = ({ title, keywords }) => {
  return (
    <Head>
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>{title}</title>

      <meta name="description" content="Aide soignante et auxiliaire de puériculture au sein de l'hôpital public. Accompagnante périnatale, ateliers massage bébé, massage femme enceinte ayurvéda, groupe de parole pour les papas et ateliers toucher relaxation à l'école et à la crèche." />
      <meta name="keywords" content={keywords} />

      <link rel="icon" href="/imgs/favicon.ico" />

      <link
        rel="apple-touch-icon"
        href="/appleTouchIcons/apple-touch-icon-iphone-60x60.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="60x60"
        href="/appleTouchIcons/apple-touch-icon-ipad-76x76.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="114x114"
        href="/appleTouchIcons/apple-touch-icon-iphone-retina-120x120.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="144x144"
        href="/appleTouchIcons/apple-touch-icon-ipad-retina-152x152.png"
      />

      <meta property="og:title" content={title} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://site-virginie-perrault-v2.vercel.app/" />
      <meta
        property="og:image"
        content="/imgs/main-image.jpeg"
      />
    </Head>
  );
};

Meta.defaultProps = {
  title: "Virginie Perrault, Bien naître et Bien être",
  keywords:
    "Aide soignante, auxiliaire de puériculture, massage bébé, femme enceinte, massage femmes enceintes, maman, papa, future maman, accompagnante périnatale, yoga kids",
};

export default Meta;
