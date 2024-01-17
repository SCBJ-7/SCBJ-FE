import * as S from "./SignUp.style";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { EMAIL_REGEX } from "@constants/regex";

type FormValues = {
  email: string;
  password: string;
  checkPassword: string;
  name: string;
  phone: string;
  code: string;
  isCodeCorrect: boolean;
  selectAll: boolean;
  termOfUse: boolean;
  privacyPolicy: boolean;
};

const SignUp = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    getValues,
    setValue,
    formState: { errors, isValid },
    setError,
    clearErrors,
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
      checkPassword: "",
      name: "",
      phone: "",
      code: "",
      isCodeCorrect: false,
      selectAll: false,
      termOfUse: false,
      privacyPolicy: false,
    },
  });

  const [isEmailValidated, setIsEmailValidated] = useState(false);
  const [codeState, setCodeState] = useState("######");

  const handleOnSubmit = async (data: FormValues) => {
    const { email, password, name, phone, privacyPolicy, termOfUse } = data;
    await axios
      .post("https://3.34.147.187.nip.io/v1/members/signup", {
        email,
        password,
        name,
        phone,
        privacyPolicy,
        termOfUse,
      })
      .then(() => {
        navigate("/signin");
      })
      .catch(({ response }) => {
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

  const handleSelectAllClick = (e: React.FormEvent<HTMLInputElement>) => {
    if (e.currentTarget.checked) {
      setValue("termOfUse", true);
      setValue("privacyPolicy", true);
    } else {
      setValue("termOfUse", false);
      setValue("privacyPolicy", false);
    }
  };

  const handleSelectClick = (e: React.FormEvent<HTMLInputElement>) => {
    if (!e.currentTarget.checked) {
      setValue("selectAll", false);
    }
  };

  return (
    <S.SignUpContainer onSubmit={handleSubmit(handleOnSubmit)}>
      <S.SignUpTitle>회원가입</S.SignUpTitle>

      <S.SignUpInputContainer>
        <S.SignUpInputWrapper>
          <S.SignUpInputTitle>이메일</S.SignUpInputTitle>
          <S.SignUpInputRelativeWrapper>
            <S.SignUpInput
              {...register("email", {
                required: "이메일을 입력해주세요",
                pattern: {
                  value: EMAIL_REGEX,
                  message: "이메일 양식이 올바르지 않습니다",
                },
              })}
              placeholder="이메일을 입력해주세요"
            />
            <S.SignUpInputBtn
              $isCodeCorrect={isEmailValidated}
              onClick={handleEmailValidateClick}
              type="button"
            >
              {isEmailValidated ? "재요청" : "인증 요청"}
            </S.SignUpInputBtn>
          </S.SignUpInputRelativeWrapper>
          <S.SignUpInputCaption>{errors.email?.message}</S.SignUpInputCaption>
        </S.SignUpInputWrapper>

        <S.SignUpInputWrapper>
          <S.SignUpInputTitle>인증번호 입력</S.SignUpInputTitle>
          <S.SignUpInputRelativeWrapper>
            <S.SignUpInput
              {...register("code")}
              placeholder="코드 6자리를 입력해주세요"
              type="number"
              maxLength={6}
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
            <S.SignUpInputBtn
              $isCodeCorrect={getValues("isCodeCorrect")}
              onClick={handleValidationCodeClick}
              type="button"
            >
              {getValues("isCodeCorrect") ? "인증확인" : "확인"}
            </S.SignUpInputBtn>
          </S.SignUpInputRelativeWrapper>
          <S.SignUpInputCaption $isCodeCorrect={getValues("isCodeCorrect")}>
            {getValues("isCodeCorrect") ? "인증이 완료되었습니다" : ""}
            {errors.isCodeCorrect?.message}
          </S.SignUpInputCaption>
        </S.SignUpInputWrapper>

        <S.SignUpInputWrapper>
          <S.SignUpInputTitle>비밀번호</S.SignUpInputTitle>
          <S.SignUpInput
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
          <S.SignUpInputCaption>
            {errors.password?.message}
          </S.SignUpInputCaption>
        </S.SignUpInputWrapper>
        <S.SignUpInputWrapper>
          <S.SignUpInputTitle>비밀번호 확인</S.SignUpInputTitle>
          <S.SignUpInput
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
          <S.SignUpInputCaption>
            {errors.checkPassword?.message}
          </S.SignUpInputCaption>
        </S.SignUpInputWrapper>

        <S.SignUpInputWrapper>
          <S.SignUpInputTitle>이름</S.SignUpInputTitle>
          <S.SignUpInput
            {...register("name", {
              required: "이름을 작성해 주세요",
              pattern: {
                value: /^[ㄱ-ㅎ|가-힣|a-z|A-Z|0-9|]+.{1,}$/,
                message: "2글자 이상의 단어로 작성해주세요",
              },
            })}
            placeholder="김양도"
          />
          <S.SignUpInputCaption>{errors.name?.message}</S.SignUpInputCaption>
        </S.SignUpInputWrapper>

        <S.SignUpInputWrapper>
          <S.SignUpInputTitle>전화번호</S.SignUpInputTitle>
          <S.SignUpInput
            {...register("phone", {
              required: "전화번호를 입력해 주세요",
              pattern: {
                value: /^(01[016789]{1})-?[0-9]{3,4}-?[0-9]{4}$/,
                message: "전화번호를 입력해 주세요",
              },
            })}
            placeholder="010-1234-5678"
          />
          <S.SignUpInputCaption>{errors.phone?.message}</S.SignUpInputCaption>
        </S.SignUpInputWrapper>
      </S.SignUpInputContainer>

      <S.SignUpCheckBoxContainer>
        <S.SignUpCheckBoxWrapper>
          <S.SignUpCheckBoxInput
            {...register("selectAll", { required: true })}
            type="checkbox"
            onClick={handleSelectAllClick}
          />
          <S.SignUpCheckBoxTitle $color="#404040">
            전체동의
          </S.SignUpCheckBoxTitle>
        </S.SignUpCheckBoxWrapper>
        <S.SignUpCheckBoxWrapper>
          <S.SignUpCheckBoxInput
            {...register("termOfUse", { required: true })}
            type="checkbox"
            onClick={handleSelectClick}
          />
          <S.SignUpCheckBoxTitle $color="#999999">
            [필수]{" "}
            <S.SignUpCheckBoxLink
              target="_blank"
              href="https://makeux.notion.site/makeux/d790a6e1e31b4c7491a973cbfe3c160c"
            >
              이용약관
            </S.SignUpCheckBoxLink>
            에 동의합니다
          </S.SignUpCheckBoxTitle>
        </S.SignUpCheckBoxWrapper>
        <S.SignUpCheckBoxWrapper>
          <S.SignUpCheckBoxInput
            {...register("privacyPolicy", { required: true })}
            type="checkbox"
            onClick={handleSelectClick}
          />
          <S.SignUpCheckBoxTitle $color="#999999">
            [필수]{" "}
            <S.SignUpCheckBoxLink
              target="_blank"
              href="https://www.notion.so/makeux/12b8882bf894419e82f9e295348156f0"
            >
              개인정보 처리방침
            </S.SignUpCheckBoxLink>
            에 동의합니다
          </S.SignUpCheckBoxTitle>
        </S.SignUpCheckBoxWrapper>
      </S.SignUpCheckBoxContainer>

      <S.SignUpSubmitBtn $isValid={isValid} type="submit">
        가입하기
      </S.SignUpSubmitBtn>
    </S.SignUpContainer>
  );
};

export default SignUp;
