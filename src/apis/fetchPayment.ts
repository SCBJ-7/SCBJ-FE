import { axiosInstance } from "@apis/axiosInstance";
import { END_POINTS } from "@constants/api";
import type { PaymentData } from "@type/payment";
import type { ResponseData } from "@type/responseType";

export const fetchPayment = async (
  productId: string,
): Promise<ResponseData<PaymentData>> => {
  const { data } = await axiosInstance.get(END_POINTS.PAYMENT(productId));
  return data;
};
