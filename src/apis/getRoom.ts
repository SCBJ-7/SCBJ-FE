import { axiosInstance } from "@apis/axiosInstance";

export const getRoom = async (roomId: string) => {
  const { data } = await axiosInstance.get(`/products/${roomId}`);
  return data.data;
};
