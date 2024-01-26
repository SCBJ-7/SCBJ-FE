import { axiosInstance } from "@apis/axiosInstance";
import { END_POINTS } from "@/constants/api";

export const cancelSale = async (saleId: string) => {
  const { data } = await axiosInstance.delete(END_POINTS.ROOM(saleId));
  return data.data;
};
