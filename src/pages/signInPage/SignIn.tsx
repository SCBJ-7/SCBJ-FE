import * as S from "./SignIn.style";

const SignIn = () => {
  return (
    <S.SignInContainer>
      <S.SignInLogo />

      <S.SignInInputContainer>
        <S.SignInInputWrapper>
          <S.SignInInputTitle>이메일</S.SignInInputTitle>
          <S.SignInInput placeholder="이메일을 입력해주세요" />
        </S.SignInInputWrapper>
        <S.SignInInputWrapper>
          <S.SignInInputTitle>비밀번호</S.SignInInputTitle>
          <S.SignInInput placeholder="비밀번호를 입력해주세요" />
        </S.SignInInputWrapper>
      </S.SignInInputContainer>

      <S.SignInSubmitBtn type="button">로그인</S.SignInSubmitBtn>

      <S.SignInLinkWrapper>
        <S.SignInLink to="/password-reset">비밀번호 찾기</S.SignInLink>
        <S.SignInLink to="/signup">회원가입 하기</S.SignInLink>
      </S.SignInLinkWrapper>
    </S.SignInContainer>
  );
};

export default SignIn;
