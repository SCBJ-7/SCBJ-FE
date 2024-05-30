import type { ResponseData } from "@/types/responseType.ts";
import type { WishDataType } from "@/types/wish.ts";

import { axiosInstance } from "@/apis/axiosInstance.ts";
import { BASE_URL, END_POINTS } from "@/constants/api.ts";

export const deleteWish = async (productId: string): Promise<void> => {
  return await axiosInstance.delete<void>(
    `${BASE_URL}${END_POINTS.WISH(productId)}`,
  );
};

export const getWish = async (): Promise<WishDataType> => {
  const { data } = await axiosInstance.get<ResponseData<WishDataType>>(
    `${BASE_URL}${END_POINTS.WISH_LIST}`,
  );
  return data.data;
};
