import type { ResponseData } from "@/types/responseType.ts";
import type { WishDataType } from "@/types/wish.ts";

import { axiosInstance } from "@/apis/axiosInstance.ts";
import { END_POINTS } from "@/constants/api.ts";

export const deleteWish = async (productId: number): Promise<void> => {
  return await axiosInstance.delete(`${END_POINTS.WISH(productId)}`);
};

export const postWish = async (productId: number): Promise<void> => {
  return await axiosInstance.post(`${END_POINTS.WISH(productId)}`);
};

export const getWish = async ({ pageParam = 0 }) => {
  const { data } = await axiosInstance.get<ResponseData<WishDataType>>(
    `${END_POINTS.WISH_LIST}`,
    {
      params: {
        page: pageParam,
        pageSize: 10,
      },
    },
  );
  return data.data;
};
