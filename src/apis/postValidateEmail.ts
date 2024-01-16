import { axiosInstance } from "@apis/axiosInstance";
import { END_POINTS } from "@/constants/api";

export const postValidateEmail = async (email: string) => {
  const { data } = await axiosInstance.post(END_POINTS.EMAIL, { email });
  console.log(data.data);
  return data.data;
};
