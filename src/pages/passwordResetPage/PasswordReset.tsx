import * as S from "./PasswordReset.style";

const PasswordReset = () => {
  return (
    <S.PasswordResetContainer>
      <S.PasswordResetTitleContainer>
        <S.PasswordResetTitle>비밀번호 변경</S.PasswordResetTitle>
      </S.PasswordResetTitleContainer>

      <S.PasswordResetInputContainer>
        <S.PasswordResetInputWrapper>
          <S.PasswordResetInputTitle>이메일</S.PasswordResetInputTitle>
          <S.PasswordResetRelativeWrapper>
            <S.PasswordResetInput placeholder="이메일을 입력해주세요" />
            <S.PasswordResetInputBtn type="button">
              인증 요청
            </S.PasswordResetInputBtn>
          </S.PasswordResetRelativeWrapper>
          <S.PasswordResetInputCaption $color="#FF4949">
            이미 사용중인 이메일 입니다
          </S.PasswordResetInputCaption>
        </S.PasswordResetInputWrapper>
        <S.PasswordResetInputWrapper>
          <S.PasswordResetInputTitle>인증번호 입력</S.PasswordResetInputTitle>
          <S.PasswordResetRelativeWrapper>
            <S.PasswordResetInput placeholder="코드 6자리를 입력해주세요" />
            <S.PasswordResetInputBtn type="button">
              확인
            </S.PasswordResetInputBtn>
          </S.PasswordResetRelativeWrapper>
          <S.PasswordResetInputCaption $color="#FF4949">
            잘못된 인증번호 입니다
          </S.PasswordResetInputCaption>
          <S.PasswordResetInputCaption $color="#0072B1">
            인증이 완료되었습니다
          </S.PasswordResetInputCaption>
        </S.PasswordResetInputWrapper>
        <S.PasswordResetInputWrapper>
          <S.PasswordResetInputTitle>새 비밀번호</S.PasswordResetInputTitle>
          <S.PasswordResetInput placeholder="비밀번호를 설정해주세요" />
          <S.PasswordResetInputCaption $color="#FF4949">
            비밀번호 입력 오류입니다
          </S.PasswordResetInputCaption>
        </S.PasswordResetInputWrapper>
        <S.PasswordResetInputWrapper>
          <S.PasswordResetInputTitle>
            새 비밀번호 확인
          </S.PasswordResetInputTitle>
          <S.PasswordResetInput placeholder="동일한 비밀번호를 입력해주세요" />
          <S.PasswordResetInputCaption $color="#FF4949">
            입력하신 비밀번호와 다릅니다
          </S.PasswordResetInputCaption>
        </S.PasswordResetInputWrapper>
      </S.PasswordResetInputContainer>

      <S.PasswordResetSubmitBtn>비밀번호 변경</S.PasswordResetSubmitBtn>
    </S.PasswordResetContainer>
  );
};

export default PasswordReset;
