import { useFormContext } from "react-hook-form";

import * as S from "./PaymentButton.style";

import { usePaymentMutation } from "@/hooks/api/usePaymentMutation";

interface PaymentButtonProps {
  productId: string;
  price: number;
}

const PaymentButton = ({ productId, price }: PaymentButtonProps) => {
  const {
    handleSubmit,
    getValues,
    formState: { isValid },
  } = useFormContext();

  const { mutatePayment } = usePaymentMutation();

  const onSubmit = () => {
    const paymentType = getValues("paymentMethod");

    const customerName = getValues("name");
    const customerEmail = getValues("email");
    const customerPhoneNumber = getValues("phone");

    const isAgeOver14 = getValues("term1");
    const useAgree = getValues("term2");
    const cancelAndRefund = getValues("term3");
    const collectPersonalInfo = getValues("term4");
    const thirdPartySharing = getValues("term5");

    const paymentRequest = {
      productId,
      paymentType,
      customerName,
      customerEmail,
      customerPhoneNumber,
      isAgeOver14,
      useAgree,
      cancelAndRefund,
      collectPersonalInfo,
      thirdPartySharing,
    };

    mutatePayment(paymentRequest);
  };

  return (
    <S.Button
      type="submit"
      onClick={handleSubmit(onSubmit)}
      data-disabled={isValid ? null : ""}
      aria-label="결제하기"
    >
      {price.toLocaleString("ko-KR")}원 결제하기
    </S.Button>
  );
};

export default PaymentButton;
