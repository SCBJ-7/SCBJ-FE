import { PATH } from "@/constants/path";
import { Helmet } from "react-helmet-async";

export const HelmetTag = ({ text }: { text: string }) => {
  return (
    <Helmet>
      <title>{text} | 퍼센트호텔</title>
      <meta name="description" content="양도 거래? 취소 보다 빠른 거래!"></meta>

      <meta itemProp="name" content="퍼센트 호텔" />
      <meta itemProp="description" content="양도 거래? 취소 보다 빠른 거래!" />
      <meta itemProp="image" content="/icon-192.png" />

      <meta property="og:url" content={PATH.ROOT} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={text} />
      <meta property="og:site_name" content="퍼센트 호텔" />
      <meta property="og:image" content="/icon-192.png" />
      <meta
        property="og:description"
        content="양도 거래? 취소 보다 빠른 거래!"
      />

      <meta property="twitter:card" content="/icon-192.png" />
      <meta name="twitter:title" content={text} />
      <meta
        name="twitter:description"
        content="양도 거래? 취소 보다 빠른 거래!"
      />
      <meta name="twitter:image" content="/src/assets/logos/main_logo.svg" />
    </Helmet>
  );
};
