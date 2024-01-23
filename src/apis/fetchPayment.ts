import { axiosInstance } from "@apis/axiosInstance";
import { END_POINTS } from "@constants/api";
import type { StockData, PaymentData, PaymentRequestData } from "@type/payment";
import type { ResponseData } from "@type/responseType";
import type { Nullable } from "@type/nullable";

export const getStock = async (productId: string): Promise<StockData> => {
  const { data } = await axiosInstance.get<ResponseData<StockData>>(
    END_POINTS.STOCK(productId),
  );
  return data.data;
};

export const getStock = async (productId: string): Promise<StockData> => {
  const { data } = await axiosInstance.get<ResponseData<StockData>>(
    END_POINTS.STOCK(productId),
  );
  return data.data;
};

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
  isAgeOver14: boolean;
  useAgree: boolean;
  cancelAndRefund: boolean;
  collectPersonalInfo: boolean;
  thirdPartySharing: boolean;
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
    isAgeOver14,
    useAgree,
    cancelAndRefund,
    collectPersonalInfo,
    thirdPartySharing,
  } = paymentRequest;

  const { data } = await axiosInstance.post<ResponseData<PaymentRequestData>>(
    END_POINTS.PAYMENT_REQUEST(productId, paymentType),
    {
      customerName,
      customerEmail,
      customerPhoneNumber,
      isAgeOver14,
      useAgree,
      cancelAndRefund,
      collectPersonalInfo,
      thirdPartySharing,
    },
  );
  return data.data;
};

export interface PaymentSuccessProps {
  paymentType: string;
  pgToken: Nullable<string>;
}

export const getPaymentSuccess = async ({
  paymentType,
  pgToken,
}: PaymentSuccessProps): Promise<PaymentData | null> => {
  if (!pgToken) return null;

  const { data } = await axiosInstance.get<ResponseData<PaymentData>>(
    END_POINTS.PAYMENT_SUCCESS(paymentType, pgToken),
  );
  console.log(data);
  return data.data;
};
