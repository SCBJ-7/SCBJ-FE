import {
  getPayment,
  getPaymentCancel,
  getPaymentSuccess,
} from "@apis/fetchPayment";
import { useQuery, useSuspenseQuery } from "@tanstack/react-query";
import type { PaymentData } from "@type/payment";
import type { Nullable } from "@type/nullable";

export const usePaymentQuery = (productId: string) => {
  const paymentQuery = useSuspenseQuery<PaymentData>({
    queryKey: ["payment", productId],
    queryFn: async () => await getPayment(productId),
    staleTime: 5 * 60 * 1000,
    gcTime: 60 * 1000,
    refetchOnWindowFocus: true,
    refetchOnReconnect: true,
  });

  return paymentQuery;
};

interface PaymentSuccessProps {
  paymentType: string;
  pgToken: Nullable<string>;
}

export const usePaymentSuccessQuery = ({
  paymentType,
  pgToken,
}: PaymentSuccessProps) => {
  const paymentSuccessQuery = useQuery({
    queryKey: ["payment"],
    queryFn: async () => await getPaymentSuccess({ paymentType, pgToken }),
    enabled: !!pgToken,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    refetchInterval: false,
  });

  return paymentSuccessQuery;
};

export const usePaymentCancelQuery = (paymentType: string) => {
  const paymentCancelQuery = useQuery({
    queryKey: ["payment"],
    queryFn: async () => await getPaymentCancel(paymentType),
    enabled: false,
  });

  return paymentCancelQuery;
};
