import {
  END_POINTS,
  ACCESS_TOKEN,
  REFRESH_TOKEN,
  BASE_URL,
} from "@constants/api";
import type { TokenData } from "@type/login";
import type { ResponseData } from "@type/responseType";
import axios from "axios";

export const fetchNewToken = async (): Promise<TokenData> => {
  const { data } = await axios.post<ResponseData<TokenData>>(
    BASE_URL + END_POINTS.NEW_TOKEN,
    {
      accessToken: localStorage.getItem(ACCESS_TOKEN),
      refreshToken: localStorage.getItem(REFRESH_TOKEN),
    },
  );
  return data.data;
};
