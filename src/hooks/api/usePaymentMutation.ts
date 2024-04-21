import { postPayment } from "@apis/fetchPayment";
import { useMutation } from "@tanstack/react-query";

import type { PaymentRequestProps } from "@apis/fetchPayment";

export const usePaymentMutation = () => {
  const paymentMutation = useMutation({
    mutationFn: (paymentRequest: PaymentRequestProps) =>
      postPayment(paymentRequest),
    onSuccess: (data) => {
      const payUrl = data.url.toString();
      window.location.href = payUrl;
    },
  });

  return { mutatePayment: paymentMutation.mutate };
};
