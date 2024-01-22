import Checkbox from "@components/checkbox/Checkbox";
import * as S from "./TermsAgreementSection.style";
import { ChangeEvent, useState } from "react";

const TermsAgreementSection = () => {
  const [isChecked, setIsChecked] = useState(false);
  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
  };

  return (
    <S.HStack>
      <S.TitleWrapper>
        <S.Text variant="body2">규정 및 약관 동의</S.Text>
      </S.TitleWrapper>
      <S.ItemWrapper>
        <Checkbox
          id="all"
          isChecked={isChecked}
          onChange={handleCheckboxChange}
          variant="title"
          ariaLabel="전체동의"
        >
          전체동의
        </Checkbox>
      </S.ItemWrapper>
      <S.ItemWrapper>
        <Checkbox
          id="term1"
          isChecked={isChecked}
          onChange={handleCheckboxChange}
          variant="caption"
          ariaLabel="만 14세 이상 이용 동의"
        >
          [필수] 만 14세 이상 이용 동의
        </Checkbox>
      </S.ItemWrapper>
      <S.ItemWrapper>
        <Checkbox
          id="term2"
          isChecked={isChecked}
          onChange={handleCheckboxChange}
          variant="caption"
          ariaLabel="이용규칙 동의"
        >
          [필수] 이용규칙 동의
        </Checkbox>
      </S.ItemWrapper>
      <S.ItemWrapper>
        <Checkbox
          id="term3"
          isChecked={isChecked}
          onChange={handleCheckboxChange}
          variant="caption"
          ariaLabel="취소 및 환불 규칙 동의"
        >
          [필수] 취소 및 환불 규칙 동의
        </Checkbox>
      </S.ItemWrapper>
      <S.ItemWrapper>
        <Checkbox
          id="term4"
          isChecked={isChecked}
          onChange={handleCheckboxChange}
          variant="caption"
          ariaLabel="개인정보 수집 및 이용 동의"
        >
          [필수] 개인정보 수집 및 이용 동의
        </Checkbox>
      </S.ItemWrapper>
      <S.ItemWrapper>
        <Checkbox
          id="term5"
          isChecked={isChecked}
          onChange={handleCheckboxChange}
          variant="caption"
          ariaLabel="개인정보 제3자 제공 동의"
        >
          [필수] 개인정보 제3자 제공 동의
        </Checkbox>
      </S.ItemWrapper>
    </S.HStack>
  );
};

export default TermsAgreementSection;
