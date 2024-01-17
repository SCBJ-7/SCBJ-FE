import { axiosInstance } from "@apis/axiosInstance";
import { END_POINTS, ACCESS_TOKEN, REFRESH_TOKEN } from "@constants/api";
import { TokenData } from "@type/newToken";

export const fetchNewToken = async () => {
  const { data } = await axiosInstance.post<TokenData>(END_POINTS.NEW_TOKEN, {
    accessToken: localStorage.getItem(ACCESS_TOKEN),
    refreshToken: localStorage.getItem(REFRESH_TOKEN),
  });
  console.log(data);
  return data;
};
