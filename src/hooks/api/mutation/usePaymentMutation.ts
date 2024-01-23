import { useMutation } from "@tanstack/react-query";

import { postPayment } from "@apis/fetchPayment";
import type { PaymentRequestProps } from "@apis/fetchPayment";

export const usePaymentMutation = () => {
  const paymentMutation = useMutation({
    mutationFn: (paymentRequest: PaymentRequestProps) =>
      postPayment(paymentRequest),
    onSuccess: (data) => {
      const payUrl = data.toString();
      window.location.href = payUrl;
    },
  });

  return paymentMutation;
};
