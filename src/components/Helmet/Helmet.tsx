import { Helmet } from "react-helmet-async";

export const HelmetTag = ({
  title,
  description,
}: {
  title?: string;
  description?: string;
}) => {
  const orig = location.origin;
  const url = location.href;
  const defaultDescription =
    "못 가게된 숙박권 더 이상 돈 날리지 말고, 비싼 호캉스도 믿고 거래하자! 특가보다 저렴한 호캉스 예약.";
  const fullTitle = `퍼센트호텔${title ? ` | ${title}` : ""}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description || defaultDescription} />

      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:site_name" content="퍼센트 호텔" />
      <meta property="og:image" content={`${orig}/og-img.png`} />
      <meta property="og:description" content={defaultDescription} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={defaultDescription} />
      <meta
        name="twitter:image"
        content={`${orig}/assets/logos/main_logo.svg`}
      />

      <link rel="canonical" href={`${orig}${location.pathname}`} />
    </Helmet>
  );
};
