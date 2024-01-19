import { useState } from "react";
import * as S from "./PaymentMethodSection.style";
import kakaopaySrc from "@assets/icons/ic_kakao_pay.png";

const PaymentMethodSection = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleRadioBoxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.currentTarget.checked);
  };

  return (
    <S.HStack>
      <S.Text variant="body2">결제 수단</S.Text>
      <S.Label htmlFor="kakaopay">
        <S.HiddenRadioBox
          id="kakaopay"
          name="paymentMethod"
          checked={isChecked}
          onChange={handleRadioBoxChange}
        />
        <S.RadioBox
          className="radio-box"
          aria-hidden={true}
          data-checked={isChecked ? "" : null}
        >
          <img src={kakaopaySrc} alt="카카오페이" />
        </S.RadioBox>
      </S.Label>
      <S.BenefitWrapper>
        <img src={kakaopaySrc} alt="카카오페이" />
        <S.TextWrapper>
          <S.Text variant="body6" color="black">
            2만원 이상 결제 시 2천원 즉시할인
          </S.Text>
          <S.Text variant="body6" color="greyScale2">
            최대 5% 적립
          </S.Text>
        </S.TextWrapper>
        <S.TextWrapper>
          <S.Text variant="body6" color="black">
            5만원 이상 결제 시 10% 즉시할인 (최대1만원)
          </S.Text>
          <S.Text variant="body6" color="greyScale2">
            매일 오전 10시/일 선착순 1000명/기간 내 1회 적용
          </S.Text>
        </S.TextWrapper>
      </S.BenefitWrapper>
    </S.HStack>
  );
};

export default PaymentMethodSection;
