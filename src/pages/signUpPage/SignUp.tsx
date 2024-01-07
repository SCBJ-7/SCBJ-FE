import * as S from "./SignUp.style";

const SignUp = () => {
  return (
    <S.SignUpContainer>
      <S.SignUpTitle>회원가입</S.SignUpTitle>
      <S.SignUpInputContainer>
        <S.SignUpInputWrapper>
          <S.SignUpInputTitle>이메일</S.SignUpInputTitle>
          <div style={{ position: "relative" }}>
            <S.SignUpInput placeholder="이메일을 입력해주세요" />
            <S.SignUpInputBtn type="button">인증 요청</S.SignUpInputBtn>
          </div>
          <S.SignUpInputCaption $color="#FF4949">
            이미 사용중인 이메일 입니다
          </S.SignUpInputCaption>
        </S.SignUpInputWrapper>
        <S.SignUpInputWrapper>
          <S.SignUpInputTitle>인증번호 입력</S.SignUpInputTitle>
          <div style={{ position: "relative" }}>
            <S.SignUpInput placeholder="코드 6자리를 입력해주세요" />
            <S.SignUpInputBtn type="button">확인</S.SignUpInputBtn>
          </div>
          <S.SignUpInputCaption $color="#FF4949">
            잘못된 인증번호 입니다
          </S.SignUpInputCaption>
          <S.SignUpInputCaption $color="#0072B1">
            인증이 완료되었습니다
          </S.SignUpInputCaption>
        </S.SignUpInputWrapper>
        <S.SignUpInputWrapper>
          <S.SignUpInputTitle>비밀번호</S.SignUpInputTitle>
          <S.SignUpInput placeholder="비밀번호를 설정해주세요" />
          <S.SignUpInputCaption $color="#FF4949">
            비밀번호 입력 오류입니다
          </S.SignUpInputCaption>
        </S.SignUpInputWrapper>
        <S.SignUpInputWrapper>
          <S.SignUpInputTitle>비밀번호 확인</S.SignUpInputTitle>
          <S.SignUpInput placeholder="동일한 비밀번호를 입력해주세요" />
          <S.SignUpInputCaption $color="#FF4949">
            입력하신 비밀번호와 다릅니다
          </S.SignUpInputCaption>
        </S.SignUpInputWrapper>
        <S.SignUpInputWrapper>
          <S.SignUpInputTitle>이름</S.SignUpInputTitle>
          <S.SignUpInput placeholder="김양도" />
          <S.SignUpInputCaption $color="#FF4949">
            2글자 이상의 단어로 작성해주세요
          </S.SignUpInputCaption>
        </S.SignUpInputWrapper>
        <S.SignUpInputWrapper>
          <S.SignUpInputTitle>전화번호</S.SignUpInputTitle>
          <S.SignUpInput placeholder="010-1234-5678" />
          <S.SignUpInputCaption $color="#FF4949">
            전화번호를 입력해 주세요
          </S.SignUpInputCaption>
        </S.SignUpInputWrapper>
      </S.SignUpInputContainer>

      <S.SignUpCheckBoxContainer>
        <S.SignUpCheckBoxWrapper>
          <S.SignUpCheckBoxInput type="checkbox" />
          <S.SignUpCheckBoxTitle $color="#404040">
            전체동의
          </S.SignUpCheckBoxTitle>
        </S.SignUpCheckBoxWrapper>
        <S.SignUpCheckBoxWrapper>
          <S.SignUpCheckBoxInput type="checkbox" />
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
          <S.SignUpCheckBoxInput type="checkbox" />
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

      <S.SignUpSubmitBtn type="button">가입하기</S.SignUpSubmitBtn>
    </S.SignUpContainer>
  );
};

export default SignUp;
