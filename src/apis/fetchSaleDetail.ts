import { END_POINTS } from "@/constants/api";

import { axiosInstance } from "./axiosInstance";

import type { ResponseData } from "@/types/responseType";
import type { ISaleData } from "@/types/saleDetail";

export const fetchSaleDetail = async (
  id: number,
  isPaymentId: boolean,
): Promise<ISaleData> => {
  const { data } = await axiosInstance.get<ResponseData<ISaleData>>(
    END_POINTS.SALE_DETAIL(id, isPaymentId),
  );
  return data.data;
};
