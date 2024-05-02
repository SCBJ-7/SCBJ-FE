import { useValidateEmailMutation } from "@/hooks/api/useValidateEmailMutation";
import InputField from "@/components/inputField/InputField";
import { EMAIL_REGEX, PHONE_NUMBER_REGEX } from "@/constants/regex";
import axios from "axios";
import { useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";

import * as S from "../../SignUp.style";

type FormValues = {
  email: string;
  password: string;
  checkPassword: string;
  name: string;
  phone: string;
  code: string;
  all: boolean;
  term1: boolean;
  term2: boolean;
};

const FieldValues = () => {
  const { setError, clearErrors, control, watch, getValues } =
    useFormContext<FormValues>();

  const [isEmailValidated, setIsEmailValidated] = useState(false);
  const [isCodeValidated, setIsCodeValidated] = useState(false);
  const [codeState, setCodeState] = useState("######");

  const validateEmailMutation = useValidateEmailMutation();

  const handleEmailValidateClick = async () => {
    const email = getValues("email");
    validateEmailMutation.mutate(
      { email },
      {
        onSuccess: (response) => {
          clearErrors("email");
          setCodeState(response);
          setIsEmailValidated(true);
        },
        onError: (error) => {
          if (axios.isAxiosError(error) && error.response) {
            setError("email", { message: error.response.data.message });
            setIsEmailValidated(false);
          }
        },
      },
    );
  };

  const code = watch("code");
  useEffect(() => {
    setIsCodeValidated(false);
  }, [code]);

  const handleValidationCodeClick = () => {
    const isValid = code === codeState;

    setIsCodeValidated(isValid);
    if (code === codeState) {
      setIsCodeValidated(true);
      clearErrors("code");
    } else {
      setIsCodeValidated(false);
      setError("code", { message: "인증번호를 다시 입력해주세요" });
    }
  };

  return (
    <S.SignUpInputContainer>
      <InputField
        name="email"
        control={control}
        label="이메일"
        placeholder="이메일을 입력해주세요"
        rules={{
          required: "이메일을 입력해주세요",
          pattern: {
            value: EMAIL_REGEX,
            message: "이메일 양식이 올바르지 않습니다",
          },
        }}
        defaultValue=""
        onButtonClick={handleEmailValidateClick}
        buttonText={isEmailValidated ? "재요청" : "인증 요청"}
        buttonVariant={isEmailValidated ? "solid" : "outline"}
        buttonColor="percentOrange"
        color="black"
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
        isSuccess={isCodeValidated}
        successMessage="인증이 완료되었습니다"
        buttonColor="percentOrange"
        color="black"
      />

      <InputField
        type="password"
        name="password"
        control={control}
        label="비밀번호"
        placeholder="비빌번호를 설정해주세요"
        rules={{
          required: "비빌번호를 설정해주세요",
          pattern: {
            value: /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{7,}$/,
            message:
              "영문, 숫자, 특수기호중 2개 이상을 포함해 8자 이상이여야 합니다.",
          },
        }}
        defaultValue=""
        color="black"
      />

      <InputField
        type="password"
        name="checkPassword"
        control={control}
        label="비밀번호 확인"
        placeholder="동일한 비밀번호를 입력해주세요"
        rules={{
          required: "입력하신 비밀번호와 다릅니다.",
          validate: (checkPassword) => {
            return (
              getValues("password") === checkPassword ||
              "입력하신 비밀번호와 다릅니다."
            );
          },
        }}
        defaultValue=""
        color="black"
      />

      <InputField
        type="text"
        name="name"
        control={control}
        label="이름"
        placeholder="김양도"
        rules={{
          required: "이름을 작성해 주세요",
          pattern: {
            value: /^[ㄱ-ㅎ|가-힣|a-z|A-Z|0-9|]+.{1,}$/,
            message: "2글자 이상의 단어로 작성해주세요",
          },
        }}
        defaultValue=""
        color="black"
      />

      <InputField
        type="text"
        name="phone"
        control={control}
        label="전화번호"
        placeholder="전화번호를 입력해 주세요"
        rules={{
          required: "전화번호를 입력해 주세요",
          pattern: {
            value: PHONE_NUMBER_REGEX,
            message: "전화번호를 입력해 주세요",
          },
        }}
        defaultValue=""
        color="black"
      />
    </S.SignUpInputContainer>
  );
};

export default FieldValues;
