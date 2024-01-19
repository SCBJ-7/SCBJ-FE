import { fetchPayment } from "@apis/fetchPayment";
import { useSuspenseQuery } from "@tanstack/react-query";
import type { PaymentData } from "@type/payment";
import type { ResponseData } from "@type/responseType";

export const usePaymentQuery = (productId: string) => {
  const paymentQuery = useSuspenseQuery<
    ResponseData<PaymentData>,
    Error,
    PaymentData
  >({
    queryKey: ["payment", productId],
    queryFn: async () => await fetchPayment(productId),
    select: (response) => response.data,
  });

  return paymentQuery;
};
