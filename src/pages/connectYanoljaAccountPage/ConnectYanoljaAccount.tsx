import { useState, ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import { PATH } from "@constants/path";
import * as S from "./ConnectYanoljaAccount.style";
import Checkbox from "@components/checkbox/Checkbox";
import YanoljaLogo from "@assets/logos/Yanolja_CI.png";

const ConnectYanoljaAccount = () => {
  const [isChecked, setIsChecked] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log(`Checkbox is ${isChecked ? "checked" : "not checked"}`);

    navigate(PATH.YANOLJA_ACCOUNT_VERIFY + "/success", {
      state: { success: true },
      replace: true,
    });
  };

  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
  };

  return (
    <S.PageContainer>
      <S.YanoljaHeader>
        <S.LogoWrapper>
          <img src={YanoljaLogo} alt="야놀자 로고" />
        </S.LogoWrapper>
      </S.YanoljaHeader>

      <form onSubmit={handleSubmit}>
        <S.MainWrapper>
          <S.InputWrapper>
            <S.Label>야놀자 계정 찾기</S.Label>
            <div className="input_wrapper">
              <S.Input type="text" placeholder="이메일을 입력해주세요" />
              <S.ConFirmButton type="button">인증 요청</S.ConFirmButton>
            </div>
            <S.InputCaption>유효한 이메일을 입력해주세요</S.InputCaption>
          </S.InputWrapper>

          <S.InputWrapper>
            <S.Label>인증번호 입력</S.Label>
            <div className="input_wrapper">
              <S.Input placeholder="8자 이상 입력하세요" />
              <S.ConFirmButton type="button">인증 확인</S.ConFirmButton>
            </div>

            <S.InputCaption>잘못된 인증번호 입니다</S.InputCaption>
            <S.InputCaption>인증이 완료되었습니다</S.InputCaption>
          </S.InputWrapper>
        </S.MainWrapper>

        <S.SubWrapper>
          <Checkbox
            id="all"
            isChecked={isChecked}
            variant="title"
            size="md"
            onChange={handleCheckboxChange}
            ariaLabel="전체동의"
          >
            전체동의
          </Checkbox>
          <Checkbox
            id="term1"
            isChecked={isChecked}
            variant="caption"
            size="md"
            onChange={handleCheckboxChange}
            ariaLabel="이용약관"
          >
            [필수]{" "}
            <a
              className="link"
              target="_blank"
              href="https://makeux.notion.site/makeux/d790a6e1e31b4c7491a973cbfe3c160c"
              rel="noopener"
            >
              이용약관
            </a>
            에 동의합니다
          </Checkbox>
          <Checkbox
            id="term2"
            isChecked={isChecked}
            variant="caption"
            size="md"
            onChange={handleCheckboxChange}
            ariaLabel="개인정보 처리방침"
          >
            [필수]{" "}
            <a
              className="link"
              target="_blank"
              href="https://www.notion.so/makeux/12b8882bf894419e82f9e295348156f0"
              rel="noopener"
            >
              개인정보 처리방침
            </a>
            에 동의합니다
          </Checkbox>
        </S.SubWrapper>

        <S.BottomWrapper>
          <S.Button type="submit">계정 연동하기</S.Button>
        </S.BottomWrapper>
      </form>
    </S.PageContainer>
  );
};

export default ConnectYanoljaAccount;
