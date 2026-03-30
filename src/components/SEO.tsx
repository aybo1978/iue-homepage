import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  url?: string;
}

export default function SEO({ title, description, keywords, url }: SEOProps) {
  const siteName = 'IUE – Institut für Unternehmensentwicklung';
  const fullTitle = `${title} | ${siteName}`;
  const baseUrl = 'https://iue-institut.de';

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={`${baseUrl}${url || ''}`} />

      {/* Open Graph (für Social Media & Google) */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:url" content={`${baseUrl}${url || ''}`} />
      <meta property="og:locale" content="de_DE" />
    </Helmet>
  );
}
