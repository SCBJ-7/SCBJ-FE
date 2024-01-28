import { Helmet } from "react-helmet";

export const HelmetTag = ({ text }: { text: string }) => {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>{text} | 퍼센트호텔</title>
    </Helmet>
  );
};
