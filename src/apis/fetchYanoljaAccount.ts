import { axiosInstance } from "@apis/axiosInstance";
import { END_POINTS } from "@/constants/api";

export const postYanoljaAccount = async (email: string) => {
  const { data } = await axiosInstance.post(END_POINTS.YANOLJA, { email });
  return data.data;
};
