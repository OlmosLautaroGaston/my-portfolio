import React from "react";

export default function LayoutHead({title,
    description,
    url,
    canonicalUrl,
    image = "/lautaro.png",
    keywords = ["lautaro", "technology", "services"]}) {

  return (
    <>
      <title>{title}</title>
      {/* Base */}
      <meta charSet="UTF-8" />
      <meta content="index" name="robots" />
      <meta content={description} name="description" />

      <meta content={keywords.join(", ")} name="keywords" />
      <link href={canonicalUrl} rel="canonical" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, minimum-scale=1"
      />

      {/* Icons */}
      <link
        href="images/favicon/apple-icon-57x57.png"
        rel="apple-touch-icon"
        sizes="57x57"
      />
      <link
        href="images/favicon/apple-icon-60x60.png"
        rel="apple-touch-icon"
        sizes="60x60"
      />
      <link
        href="images/favicon/apple-icon-72x72.png"
        rel="apple-touch-icon"
        sizes="72x72"
      />
      <link
        href="images/favicon/apple-icon-76x76.png"
        rel="apple-touch-icon"
        sizes="76x76"
      />
      <link
        href="images/favicon/apple-icon-114x114.png"
        rel="apple-touch-icon"
        sizes="114x114"
      />
      <link
        href="images/favicon/apple-icon-120x120.png"
        rel="apple-touch-icon"
        sizes="120x120"
      />
      <link
        href="images/favicon/apple-icon-144x144.png"
        rel="apple-touch-icon"
        sizes="144x144"
      />
      <link
        href="images/favicon/apple-icon-152x152.png"
        rel="apple-touch-icon"
        sizes="152x152"
      />
      <link
        href="images/favicon/apple-icon-180x180.png"
        rel="apple-touch-icon"
        sizes="180x180"
      />
      <link
        href={"/favicon.png"}
        rel="icon"
        sizes="32x32"
        type="image/png"
      />
      <link
        href={"/favicon.png"}
        rel="icon"
        sizes="96x96"
        type="image/png"
      />
      <link
        href={"/favicon.png"}
        rel="icon"
        sizes="16x16"
        type="image/png"
      />

      {/* Open grahp */}
      <meta content={url} property="og:url" />
      <meta content={image} property="og:image" />
      <meta content={title} property="og:image:alt" />
      <meta content={title} property="og:title" />
      <meta content="es" property="og:locale" />
      <meta content="website" property="og:type" />
      <meta content="Portfolio" property="og:site_name" />
      <meta content={description} property="og:description" />
      {/* Twitter */}
      <meta content={url} name="twitter:site" />
      <meta content="summary_large_image" name="twitter:card" />
      <meta content={image} name="twitter:image" />
      <meta content={url} name="twitter:url" />
      <meta content="summary_large_image" name="twitter:card" />
      <meta content={description} name="twitter:description" />
      <meta content={title} name="twitter:title" />
      <meta content="@lautaro" name="twitter:creator" />
      </>
  );
}
