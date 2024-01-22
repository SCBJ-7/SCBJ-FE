import * as S from "./PaymentButton.style";
import type { PaymentData } from "@type/payment";

interface PaymentButtonProps {
  payment: Pick<PaymentData, "salePrice">;
}

const PaymentButton = ({ payment }: PaymentButtonProps) => {
  return (
    <S.Button type="submit" aria-label="결제하기">
      {payment.salePrice.toLocaleString("ko-KR")}원 결제하기
    </S.Button>
  );
};

export default PaymentButton;
