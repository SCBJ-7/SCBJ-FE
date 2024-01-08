import { axiosInstance } from "@apis/axiosInstance";

export const getRoom = async (roomId: number) => {
  const { data } = await axiosInstance.get(`/products/${roomId}`);
  return data.data;
};
