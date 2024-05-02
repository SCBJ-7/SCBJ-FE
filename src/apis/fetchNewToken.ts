import {
  ACCESS_TOKEN,
  BASE_URL,
  END_POINTS,
  REFRESH_TOKEN,
} from "@/constants/api";
import axios from "axios";

import type { TokenData } from "@/types/login";
import type { ResponseData } from "@/types/responseType";

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
