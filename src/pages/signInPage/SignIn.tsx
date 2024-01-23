import * as S from "./SignIn.style";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useUserInfoStore } from "@/store/store";
import { postLogin } from "@apis/fetchLogin";
import { getMessaging, getToken } from "firebase/messaging";
import useToastConfig from "@hooks/common/useToastConfig";

type FormValues = {
  email: string;
  password: string;
};

const SignIn = () => {
  const navigate = useNavigate();
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

  const handleOnSubmit = async (data: FormValues) => {
    const { email, password } = data;
    let fcmToken = "";
    const messaging = getMessaging();
    getToken(messaging)
      .then((currentToken) => {
        if (currentToken) {
          fcmToken = currentToken;
        } else {
          console.log(
            "No registration token available. Request permission to generate one.",
          );
          // ...
        }
      })
      .catch((err) => {
        console.log("An error occurred while retrieving token. ", err);
        // ...
      });

    await postLogin({ email, password, fcmToken })
      .then((loginData) => {
        const { memberResponse, tokenResponse } = loginData;
        useUserInfoStore.getState().setUserInfo(memberResponse);

        // TODO: 임시로 localStorage에서 토큰 저장히지만 더 좋은 방법 찾기~!! 토스~!!
        localStorage.setItem("accessToken", tokenResponse.accessToken);
        localStorage.setItem("refreshToken", tokenResponse.refreshToken);
        navigate("/");
      })
      .catch(({ response }) => {
        console.log(response);
        // FIXME: USETOAST로 변경
        handleToast(false, [<>아이디 혹은 비밀번호를 확인해주세요</>]);
      });
  };

  return (
    <S.SignInContainer onSubmit={handleSubmit(handleOnSubmit)}>
      <S.SignInLogo />

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
