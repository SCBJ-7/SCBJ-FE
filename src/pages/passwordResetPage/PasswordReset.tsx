import { FormProvider, useForm } from "react-hook-form";

import FieldValues from "./components/fieldValues/FieldValues";
import PasswordResetSubmitBtn from "./components/passwordResetSubmitBtn.tsx/PasswordResetSubmitBtn";
import * as S from "./PasswordReset.style";

import { HelmetTag } from "@/components/Helmet/Helmet";
import { PATH } from "@/constants/path";

const PasswordResetView = () => {
  const method = useForm({
    mode: "onChange",
    shouldUnregister: false,
  });

  return (
    <S.PasswordResetContainer>
      <S.PasswordResetTitleContainer>
        <S.PasswordResetTitle>비밀번호 재설정</S.PasswordResetTitle>
      </S.PasswordResetTitleContainer>

      <FormProvider {...method}>
        <FieldValues />
        <PasswordResetSubmitBtn />
      </FormProvider>
    </S.PasswordResetContainer>
  );
};

const PasswordReset = () => {
  const schemaData = {
    "@type": "WebPage",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${location.origin}${PATH.PASSWORD_RESET}`,
    },
  };

  return (
    <>
      <HelmetTag title="비밀번호 재설정" schemaData={schemaData} />
      <PasswordResetView />
    </>
  );
};

export default PasswordReset;
