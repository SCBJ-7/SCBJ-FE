import { IUserInfo } from "./../types/userInfo";
import { axiosInstance } from "@apis/axiosInstance";
import { END_POINTS } from "@/constants/api";

// 유저 정보를 불러오는 api입니다.
export const fetchUserInfo = async (): Promise<IUserInfo | undefined> => {
  const { data } = await axiosInstance.get(END_POINTS.USER_INFO);
  return data.data as IUserInfo;
};
