import { END_POINTS } from "@/constants/api";
import { axiosInstance } from "@/apis/axiosInstance";
import { ProfileData } from "@/types/profile";

export const fetchUserInfo = async (): Promise<ProfileData> => {
  const { data } = await axiosInstance.get(END_POINTS.USER_INFO);
  return data.data;
};

export const changeName = async (name: string) => {
  const res = await axiosInstance.patch(END_POINTS.CHANGE_NAME, { name });
  return res;
};

export const changeNumber = async (number: string) => {
  const res = await axiosInstance.patch(END_POINTS.CHANGE_NUMBER, {
    phone: number,
  });
  return res;
};
