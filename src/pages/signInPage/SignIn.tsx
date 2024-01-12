import * as S from "./SignIn.style";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useToastStore } from "@/store/store";

type FormValues = {
  email: string;
  password: string;
};

const SignIn = () => {
  const navigate = useNavigate();
  const setToastConfig = useToastStore((state) => state.setToastConfig);

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
    await axios
      .post("https://3.34.147.187.nip.io/v1/members/signin", {
        email,
        password,
      })
      .then(
        ({
          data: {
            data: {
              memberResponse,
              tokenResponse: { accessToken, refreshToken },
            },
          },
        }) => {
          // Todo : 임시로 localStorage에 사용자 정보, 토큰 둘 다 저장히지만 더 좋은 방법 찾기
          localStorage.setItem("memberResponse", memberResponse);
          localStorage.setItem("accessToken", accessToken);
          localStorage.setItem("refreshToken", refreshToken);

          navigate("/");
        },
      )
      .catch(({ response }) => {
        console.log(response);
        setToastConfig({
          isShow: true,
          isError: false,
          strings: [[<>아이디 혹은 비밀번호를 확인해주세요</>]],
        });
        setTimeout(() => {
          setToastConfig({
            isShow: false,
            isError: false,
            strings: [[<>아이디 혹은 비밀번호를 확인해주세요</>]],
          });
        }, 6000);
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
