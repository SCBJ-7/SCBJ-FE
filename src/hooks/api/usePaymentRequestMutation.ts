import { postPayment } from "@/apis/fetchPayment";
import { useMutation } from "@tanstack/react-query";

import type { PaymentRequestProps } from "@/apis/fetchPayment";
import type { PaymentRequestData } from "@/types/payment";

export const usePaymentRequestMutation = () => {
  const paymentMutation = useMutation<
    PaymentRequestData,
    Error,
    PaymentRequestProps
  >({
    mutationFn: ({
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
    }: PaymentRequestProps) =>
      postPayment({
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
      }),
    throwOnError: true,
  });

  return paymentMutation;
};
