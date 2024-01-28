import * as S from "./SignIn.style";
import { useForm } from "react-hook-form";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import useToastConfig from "@hooks/common/useToastConfig";
// import { PATH } from "@constants/path";
import { useUserInfoStore } from "@/store/store";
import { postLogin } from "@apis/fetchLogin";
// import getNotificationPermission from "@/utils/getNotificationPermission";
import { getMessaging, getToken } from "firebase/messaging";
import { app } from "@/firebase";
import { useState } from "react";

type FormValues = {
  email: string;
  password: string;
};

const SignIn = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const redirectUrl = searchParams.get("redirect");
  const { handleToast } = useToastConfig();
  // const [visible, SetVisible] = useState<string | undefined>("");
  const [token, SetToken] = useState("");

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

  const handleOnSubmit = async (data: FormValues) => {
    const { email, password } = data;

    const messaging = getMessaging(app);

    const fcmToken = await getToken(messaging, {
      vapidKey:
        "BNJnISNECPJrEzIQ8Mbjvw2bu3GQrwo52ChZT0E8BX243r9WAlXS7yYZJntYKt537lSs4188KsLJLJFFdPyRL3Q",
    });

    SetToken(fcmToken);

    // let fcmToken = await getNotificationPermission();

    // if (!fcmToken) {
    //   fcmToken = localStorage.getItem("fcmToken") ?? "";
    //   console.log("토큰발급:", fcmToken);
    // }
    // SetVisible(fcmToken);

    await postLogin({ email, password, fcmToken })
      .then((loginData) => {
        const { memberResponse, tokenResponse } = loginData;
        useUserInfoStore.getState().setUserInfo(memberResponse);

        // TODO: 임시로 localStorage에서 토큰 저장히지만 더 좋은 방법 찾기~!! 토스~!!
        localStorage.setItem("accessToken", tokenResponse.accessToken);
        localStorage.setItem("refreshToken", tokenResponse.refreshToken);
        if (redirectUrl) {
          navigate(redirectUrl, { replace: true });
          return;
        }

        // navigate(PATH.ROOT, { replace: true });
      })
      .catch(() => {
        handleToast(false, [<>아이디 혹은 비밀번호를 확인해주세요</>]);
      });
  };

  return (
    <S.SignInContainer onSubmit={handleSubmit(handleOnSubmit)}>
      <Link to="/">
        <S.SignInLogo />
        <p>{token}</p>
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

export default SignIn;
