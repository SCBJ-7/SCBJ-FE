import axios from "axios";
import { END_POINTS, BASE_URL } from "@/constants/api";
import type { LoginData } from "@type/login";
import type { ResponseData } from "@type/responseType";

interface LoginProps {
  email: string;
  password: string;
}

export const postLogin = async ({
  email,
  password,
}: LoginProps): Promise<LoginData> => {
  const { data } = await axios.post<ResponseData<LoginData>>(
    BASE_URL + END_POINTS.LOGIN,
    {
      email,
      password,
    },
  );
  return data.data;
};
