import { useForm } from "react-hook-form";
import * as S from "./PasswordReset.style";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

type FormValues = {
  email: string;
  password: string;
  checkPassword: string;
  code: string;
  isCodeCorrect: boolean;
};

const PasswordReset = () => {
  const navigate = useNavigate();

  const {
    register,
    getValues,
    setValue,
    formState: { errors, isValid },
    handleSubmit,
    setError,
    clearErrors,
  } = useForm({
    defaultValues: {
      email: "",
      code: "",
      password: "",
      checkPassword: "",
      isCodeCorrect: false,
    },
  });

  const [isEmailValidated, setIsEmailValidated] = useState(false);
  const [codeState, setCodeState] = useState("######");

  const handleOnSubmit = async (data: FormValues) => {
    const { password, email } = data;
    await axios
      .post("https://3.34.147.187.nip.io/v1/members/password", {
        email,
        password,
      })
      .then(() => {
        navigate("/signin");
      })
      .catch(({ response }) => {
        console.log(response);
        alert(response.data.message);
      });
  };

  const handleEmailValidateClick = async () => {
    await axios
      .post("https://3.34.147.187.nip.io/v1/members/email", {
        email: getValues("email"),
      })
      .then((response) => {
        if (response.status === 200) {
          clearErrors("email");
          setCodeState(response.data.data);
          setIsEmailValidated(true);
        }
      })
      .catch(({ response }) => {
        setError("email", { message: response.data.message });
        setIsEmailValidated(false);
      });
  };

  const handleValidationCodeClick = () => {
    const code = getValues("code");
    if (code === codeState) {
      setValue("isCodeCorrect", true);
      clearErrors("isCodeCorrect");
    } else {
      setValue("isCodeCorrect", false);
      setError("isCodeCorrect", { message: "잘못된 인증번호입니다" });
    }
  };

  return (
    <S.PasswordResetContainer onSubmit={handleSubmit(handleOnSubmit)}>
      <S.PasswordResetTitleContainer>
        <S.PasswordResetTitle>비밀번호 변경</S.PasswordResetTitle>
      </S.PasswordResetTitleContainer>

      <S.PasswordResetInputContainer>
        <S.PasswordResetInputWrapper>
          <S.PasswordResetInputTitle>이메일</S.PasswordResetInputTitle>
          <S.PasswordResetRelativeWrapper>
            <S.PasswordResetInput
              {...register("email", {
                required: "이메일을 입력해주세요",
                pattern: {
                  value:
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  message: "이메일 양식이 올바르지 않습니다",
                },
              })}
              placeholder="이메일을 입력해주세요"
            />
            <S.PasswordResetInputBtn
              type="button"
              $isCodeCorrect={isEmailValidated}
              onClick={handleEmailValidateClick}
            >
              {isEmailValidated ? "재요청" : "인증 요청"}{" "}
            </S.PasswordResetInputBtn>
          </S.PasswordResetRelativeWrapper>
          <S.PasswordResetInputCaption>
            {errors.email?.message}{" "}
          </S.PasswordResetInputCaption>
        </S.PasswordResetInputWrapper>

        <S.PasswordResetInputWrapper>
          <S.PasswordResetInputTitle>인증번호 입력</S.PasswordResetInputTitle>
          <S.PasswordResetRelativeWrapper>
            <S.PasswordResetInput
              {...register("code")}
              type="number"
              maxLength={6}
              placeholder="코드 6자리를 입력해주세요"
            />
            <input
              style={{ display: "none" }}
              type="checkbox"
              {...register("isCodeCorrect", {
                required: true,
                validate: (isCodeCorrect) => {
                  return isCodeCorrect === true || "잘못된 인증번호입니다";
                },
              })}
            />
            <S.PasswordResetInputBtn
              $isCodeCorrect={getValues("isCodeCorrect")}
              onClick={handleValidationCodeClick}
              type="button"
            >
              {getValues("isCodeCorrect") ? "인증확인" : "확인"}{" "}
            </S.PasswordResetInputBtn>
          </S.PasswordResetRelativeWrapper>
          <S.PasswordResetInputCaption
            $isCodeCorrect={getValues("isCodeCorrect")}
          >
            {getValues("isCodeCorrect") ? "인증이 완료되었습니다" : ""}
            {errors.isCodeCorrect?.message}{" "}
          </S.PasswordResetInputCaption>
        </S.PasswordResetInputWrapper>

        <S.PasswordResetInputWrapper>
          <S.PasswordResetInputTitle>새 비밀번호</S.PasswordResetInputTitle>
          <S.PasswordResetInput
            {...register("password", {
              required: "비빌번호를 설정해주세요.",
              pattern: {
                value: /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{7,}$/,
                message:
                  "영문, 숫자, 특수기호중 2개 이상을 포함해 8자 이상이여야 합니다.",
              },
            })}
            type="password"
            placeholder="비밀번호를 설정해주세요"
          />
          <S.PasswordResetInputCaption>
            {errors.password?.message}
          </S.PasswordResetInputCaption>
        </S.PasswordResetInputWrapper>

        <S.PasswordResetInputWrapper>
          <S.PasswordResetInputTitle>
            새 비밀번호 확인
          </S.PasswordResetInputTitle>
          <S.PasswordResetInput
            {...register("checkPassword", {
              required: "입력하신 비밀번호와 다릅니다.",
              validate: (checkPassword) => {
                return (
                  getValues("password") === checkPassword ||
                  "입력하신 비밀번호와 다릅니다."
                );
              },
            })}
            type="password"
            placeholder="동일한 비밀번호를 입력해주세요"
          />
          <S.PasswordResetInputCaption>
            {errors.checkPassword?.message}
          </S.PasswordResetInputCaption>
        </S.PasswordResetInputWrapper>
      </S.PasswordResetInputContainer>

      <S.PasswordResetSubmitBtn $isValid={isValid} type="submit">
        비밀번호 변경
      </S.PasswordResetSubmitBtn>
    </S.PasswordResetContainer>
  );
};

export default PasswordReset;
