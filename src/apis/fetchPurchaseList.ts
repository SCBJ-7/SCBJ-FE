import { END_POINTS } from "@/constants/api";

import { axiosInstance } from "./axiosInstance";

export const fetchPurchaseList = async () => {
  const response = await axiosInstance.get(END_POINTS.PURCHASE_HISTORY);
  return response.data.data;
};
