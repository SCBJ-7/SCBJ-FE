import InputField from "@components/inputField/InputField";
import axios from "axios";
import { useState } from "react";
import { useFormContext } from "react-hook-form";

import * as S from "./AccountVerificationSection.style";

import { useValidateEmailMutation } from "@/hooks/api/useValidateEmailMutation";

const AccountVerificationSection = () => {
  const { control, getValues, setError, clearErrors } = useFormContext();
  const [isEmailValidated, setIsEmailValidated] = useState(false);
  const [isCodeValidated, setIsCodeValidated] = useState(false);
  const [codeState, setCodeState] = useState("######");

  const validateEmailMutation = useValidateEmailMutation();

  const handleEmailValidateClick = async () => {
    const email = getValues("email");
    await validateEmailMutation.mutate(email, {
      onSuccess: (response) => {
        clearErrors("email");
        setCodeState(response.data.data);
        setIsEmailValidated(true);
      },
      onError: (error) => {
        if (axios.isAxiosError(error) && error.response) {
          setError("email", { message: error.response.data.message });
          setIsEmailValidated(false);
        }
      },
    });
  };

  const handleValidationCodeClick = () => {
    const code = getValues("code");

    if (code === codeState) {
      setIsCodeValidated(true);
      clearErrors("code");
    } else {
      setIsCodeValidated(false);
      setError("code", { message: "잘못된 인증번호입니다" });
    }
  };
  return (
    <S.MainWrapper>
      <InputField
        name="email"
        control={control}
        label="야놀자 계정 찾기"
        placeholder="이메일을 입력해주세요"
        rules={{
          required: "이메일을 입력해주세요",
          pattern: {
            value:
              /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            message: "이메일 양식이 올바르지 않습니다",
          },
        }}
        defaultValue=""
        onButtonClick={handleEmailValidateClick}
        buttonText={isEmailValidated ? "재요청" : "인증 요청"}
        buttonVariant={isEmailValidated ? "solid" : "outline"}
        buttonColor="yanoljaPink"
      />
      <InputField
        type="number"
        name="code"
        control={control}
        label="인증번호 입력"
        placeholder="코드 6자리를 입력해주세요"
        rules={{
          required: "인증번호를 입력해주세요",
          minLength: {
            value: 6,
            message: "6자리 이상 입력해주세요",
          },
        }}
        defaultValue=""
        onButtonClick={handleValidationCodeClick}
        buttonText={isCodeValidated ? "인증 완료" : "인증 확인"}
        buttonVariant={isCodeValidated ? "solid" : "outline"}
        buttonColor="yanoljaPink"
        isSuccess={!!isCodeValidated}
        successMessage="인증이 완료되었습니다"
      />
    </S.MainWrapper>
  );
};

export default AccountVerificationSection;
