import { ACCESS_TOKEN, END_POINTS, REFRESH_TOKEN } from "@/constants/api";
import { axiosInstance } from "@apis/axiosInstance";

export const logout = async () => {
  await axiosInstance.post(`${END_POINTS.USER_INFO}/logout`, {
    accessToken: localStorage.getItem(ACCESS_TOKEN),
    refreshToken: localStorage.getItem(REFRESH_TOKEN),
  });
};
