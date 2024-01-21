import { axiosInstance } from "@apis/axiosInstance";
import { END_POINTS } from "@constants/api";
import type { PaymentData, PaymentRequestData } from "@type/payment";
import type { ResponseData } from "@type/responseType";

export const getPayment = async (productId: string): Promise<PaymentData> => {
  const { data } = await axiosInstance.get<ResponseData<PaymentData>>(
    END_POINTS.PAYMENT(productId),
  );
  return data.data;
};

export interface PaymentRequestProps {
  productId: string;
  paymentType: string;
  customerName: string;
  customerEmail: string;
  customerPhoneNumber: string;
}

export const postPayment = async (
  paymentRequest: PaymentRequestProps,
): Promise<PaymentRequestData> => {
  const {
    productId,
    paymentType,
    customerName,
    customerEmail,
    customerPhoneNumber,
  } = paymentRequest;

  const { data } = await axiosInstance.post<ResponseData<PaymentRequestData>>(
    END_POINTS.PAYMENT_REQUEST(productId, paymentType),
    {
      customerName,
      customerEmail,
      customerPhoneNumber,
    },
  );
  return data.data;
};
