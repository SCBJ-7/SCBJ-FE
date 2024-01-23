import { getPayment } from "@apis/fetchPayment";
import { useSuspenseQuery } from "@tanstack/react-query";
import type { PaymentData } from "@type/payment";

export const usePaymentQuery = (productId: string) => {
  const paymentQuery = useSuspenseQuery<PaymentData>({
    queryKey: ["payment", productId],
    queryFn: async () => await getPayment(productId),
  });

  return paymentQuery;
};
