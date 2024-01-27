import { axiosInstance } from "@apis/axiosInstance";
import {
  ACCESS_TOKEN,
  END_POINTS,
  FCM_TOKEN,
  REFRESH_TOKEN,
} from "@/constants/api";

export const logout = async () => {
  await axiosInstance.post(`${END_POINTS.USER_INFO}/logout`, {
    accessToken: localStorage.getItem(ACCESS_TOKEN),
    refreshToken: localStorage.getItem(REFRESH_TOKEN),
  });
  localStorage.removeItem(FCM_TOKEN);
};
