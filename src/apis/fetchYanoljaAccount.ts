import { END_POINTS } from "@/constants/api";
import { axiosInstance } from "@/apis/axiosInstance";

export const postYanoljaAccount = async (email: string) => {
  const { data } = await axiosInstance.post(END_POINTS.YANOLJA, { email });
  return data.data;
};
