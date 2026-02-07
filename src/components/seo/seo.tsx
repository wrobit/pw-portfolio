import { Helmet } from "react-helmet";

import { seoConfig } from "@utils/constants/seo.constants";

type SeoProps = {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  type?: "website" | "article";
  noIndex?: boolean;
};

const getCanonicalUrl = (path?: string) => {
  if (!path) {
    return seoConfig.siteUrl;
  }

  const normalizedPath = path.startsWith("/") ? path : `/${path}`;

  return `${seoConfig.siteUrl}${normalizedPath}`;
};

const getMetaImage = (image?: string) => {
  const value = image ?? seoConfig.defaultImage;

  if (value.startsWith("http")) {
    return value;
  }

  return `${seoConfig.siteUrl}${value}`;
};

export const Seo = ({
  title,
  description,
  path,
  image,
  type = "website",
  noIndex = false,
}: SeoProps) => {
  const pageTitle = title ? `${title} | ${seoConfig.siteName}` : seoConfig.defaultTitle;
  const pageDescription = description ?? seoConfig.defaultDescription;
  const canonicalUrl = getCanonicalUrl(path);
  const pageImage = getMetaImage(image);
  const robotsContent = noIndex ? "noindex, nofollow" : "index, follow";
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: seoConfig.siteName,
      url: seoConfig.siteUrl,
      inLanguage: "en",
    },
    {
      "@context": "https://schema.org",
      "@type": "Person",
      name: seoConfig.personName,
      jobTitle: seoConfig.personJobTitle,
      url: seoConfig.siteUrl,
      email: seoConfig.personEmail,
      sameAs: seoConfig.sameAs,
    },
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: pageTitle,
      description: pageDescription,
      url: canonicalUrl,
      inLanguage: "en",
    },
  ];

  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <meta name="robots" content={robotsContent} />
      <link rel="canonical" href={canonicalUrl} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content={seoConfig.siteName} />
      <meta property="og:locale" content={seoConfig.locale} />
      <meta property="og:image" content={pageImage} />
      <meta property="og:image:alt" content={pageTitle} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={seoConfig.twitterHandle} />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:image" content={pageImage} />
      <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
    </Helmet>
  );
};
