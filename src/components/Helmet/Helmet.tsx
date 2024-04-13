import { Helmet } from "react-helmet-async";

import { PATH } from "@/constants/path";

export const HelmetTag = ({ text }: { text: string }) => {
  return (
    <Helmet>
      <title>{text} | 퍼센트호텔</title>

      <meta itemProp="name" content="퍼센트 호텔"></meta>
      <meta
        itemProp="description"
        content="양도 거래? 취소 보다 빠른 거래!"
      ></meta>
      <meta itemProp="image" content="/icon-192.png"></meta>

      <meta property="og:url" content={PATH.ROOT}></meta>
      <meta property="og:title" content={`${text} | 퍼센트호텔`}></meta>
      <meta property="og:site_name" content="퍼센트 호텔"></meta>
      <meta property="og:type" content="website"></meta>
      <meta property="og:image" content="/icon-192.png"></meta>
      <meta
        property="og:description"
        content="양도 거래? 취소 보다 빠른 거래!"
      ></meta>

      <meta name="twitter:card" content="summary"></meta>
    </Helmet>
  );
};
