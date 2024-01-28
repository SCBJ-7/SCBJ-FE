import { END_POINTS } from "@constants/api";

import type { IPurchaseData } from "@type/purchaseDetail";
import type { ResponseData } from "@type/responseType";

import { axiosInstance } from "./axiosInstance";

export const fetchPurchaseDetail = async (
  id: string,
): Promise<IPurchaseData> => {
  const { data } = await axiosInstance.get<ResponseData<IPurchaseData>>(
    END_POINTS.PURCHASE_DETAIL(id),
  );
  return data.data;
};
