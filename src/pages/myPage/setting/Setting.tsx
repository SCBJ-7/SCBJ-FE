import * as S from "./Setting.style";
import Info from "../info/Info";
import Manage from "../manage/Manage";

import { HelmetTag } from "@/components/Helmet/Helmet";

const Setting = () => {
  const schemaData = {
    "@type": "WebPage",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${location.origin}${location.pathname}}`,
    },
  };

  return (
    <>
      <HelmetTag title="설정" schemaData={schemaData} />
      <S.SettingListContainer>
        <Manage />
        <Info />
      </S.SettingListContainer>
    </>
  );
};

export default Setting;
