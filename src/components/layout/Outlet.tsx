import { Outlet as RouterOutlet } from "react-router-dom";

import { HelmetTag } from "@/components/Helmet/Helmet";

const Outlet = ({ title }: { title?: string }) => {
  const schemaData = {
    "@type": "WebPage",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${location.origin}${location.pathname}}`,
    },
  };

  return (
    <>
      <HelmetTag title={title} schemaData={schemaData} />
      <RouterOutlet />
    </>
  );
};

export default Outlet;
