import { END_POINTS, ACCESS_TOKEN, REFRESH_TOKEN } from "@constants/api";
import { TokenData, ResponseData } from "@type/newToken";
import axios from "axios";

export const fetchNewToken = async (): Promise<TokenData> => {
  const { data } = await axios.post<ResponseData<TokenData>>(
    import.meta.env.VITE_BASE_URL + END_POINTS.NEW_TOKEN,
    {
      accessToken: localStorage.getItem(ACCESS_TOKEN),
      refreshToken: localStorage.getItem(REFRESH_TOKEN),
    },
  );
  return data.data;
};
