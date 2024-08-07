import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate, useSearchParams } from "react-router-dom";

import * as S from "./SignIn.style";

import { postLogin } from "@/apis/fetchLogin";
import { HelmetTag } from "@/components/Helmet/Helmet";
import { PATH } from "@/constants/path";
import useToastConfig from "@/hooks/common/useToastConfig";
import { useUserInfoStore } from "@/store/store";
import getNotificationPermission from "@/utils/getNotificationPermission";

type FormValues = {
  email: string;
  password: string;
};

const SignInView = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const redirectUrl = searchParams.get("redirect");
  const directUrl = searchParams.get("direct");
  const { handleToast } = useToastConfig();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  useEffect(() => {
    // TODO: UT용 다이렉트 로그인 처리
    if (directUrl === "login") {
      const email = "qwerty029369@gmail.com";
      const password = "qwerty123@";
      handleOnSubmit({ email, password });
    }
  }, [directUrl]);

  const handleOnSubmit = async (data: FormValues) => {
    const { email, password } = data;

    let fcmToken = await getNotificationPermission();

    if (!fcmToken) {
      fcmToken = localStorage.getItem("fcmToken") ?? "";
    }

    await postLogin({ email, password, fcmToken })
      .then((loginData) => {
        const { memberResponse, tokenResponse } = loginData;
        useUserInfoStore.getState().setUserInfo(memberResponse);

        localStorage.setItem("accessToken", tokenResponse.accessToken);
        localStorage.setItem("refreshToken", tokenResponse.refreshToken);

        if (redirectUrl) {
          navigate(redirectUrl, { replace: true });
          return;
        }

        navigate(PATH.ROOT, { replace: true });
      })
      .catch(() => {
        handleToast(true, [<>아이디 혹은 비밀번호를 확인해주세요</>]);
      });
  };

  return (
    <S.SignInContainer onSubmit={handleSubmit(handleOnSubmit)}>
      <Link to="/">
        <S.SignInLogo />
      </Link>
      <S.SignInInputContainer>
        <S.SignInInputWrapper>
          <S.SignInInputTitle>이메일</S.SignInInputTitle>
          <S.SignInInput
            {...register("email", {
              required: "이메일을 입력해주세요",
            })}
            placeholder="이메일을 입력해주세요"
          />
          <S.SignInInputCaption $color="#FF4949">
            {errors.email?.message}
          </S.SignInInputCaption>
        </S.SignInInputWrapper>
        <S.SignInInputWrapper>
          <S.SignInInputTitle>비밀번호</S.SignInInputTitle>
          <S.SignInInput
            {...register("password", {
              required: "비밀번호를 입력해주세요",
            })}
            placeholder="비밀번호를 입력해주세요"
            type="password"
          />
          <S.SignInInputCaption $color="#FF4949">
            {errors.password?.message}
          </S.SignInInputCaption>
        </S.SignInInputWrapper>
      </S.SignInInputContainer>

      <S.SignInSubmitBtn type="submit">로그인</S.SignInSubmitBtn>

      <S.SignInLinkWrapper>
        <S.SignInLink to="/password-reset">비밀번호 찾기</S.SignInLink>
        <S.SignInLink to="/signup">회원가입 하기</S.SignInLink>
      </S.SignInLinkWrapper>
    </S.SignInContainer>
  );
};

const SignIn = () => {
  const schemaData = {
    "@type": "WebPage",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${location.origin}${PATH.LOGIN}`,
    },
  };

  return (
    <>
      <HelmetTag title="로그인" schemaType="WebPage" schemaData={schemaData} />
      <SignInView />
    </>
  );
};

export default SignIn;
