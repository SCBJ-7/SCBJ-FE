import { memo } from "react";
import { Helmet } from "react-helmet-async";

export const HelmetTag = memo(
  ({
    title,
    schemaType = "TravelAgency",
    schemaData = {},
  }: {
    title?: string;
    description?: string;
    schemaType?: string;
    schemaData?: Record<string, any>;
  }) => {
    console.log(schemaData);

    const orig = location.origin;
    const defaultDescription =
      "못 가게된 숙박권 더 이상 돈 날리지 말고, 비싼 호캉스도 믿고 거래하자! 특가보다 저렴한 호캉스 예약.";
    const fullTitle = `퍼센트호텔${title ? ` | ${title}` : ""}`;

    const baseSchema = {
      "@context": "https://schema.org",
      "@type": schemaType,
      name: `${fullTitle}`,
      url: orig,
      logo: `${orig}/assets/logos/main_logo.svg`,
      description: defaultDescription,
      address: {
        "@type": "PostalAddress",
        addressCountry: "KR",
      },
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: `${orig}/search?q={search_term_string}`,
        },
        "query-input": "required name=search_term_string",
      },
    };

    const fullSchema = { ...baseSchema, ...schemaData };

    return (
      <Helmet>
        <title>{fullTitle}</title>
        <meta name="description" content={defaultDescription} />
        <script type="application/ld+json">{JSON.stringify(fullSchema)}</script>
      </Helmet>
    );
  },
);
