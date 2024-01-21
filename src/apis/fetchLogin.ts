import axios from "axios";
import { END_POINTS, BASE_URL } from "@/constants/api";
import type { EmailValidateData, LoginData } from "@type/login";
import type { ResponseData } from "@type/responseType";
import { axiosInstance } from "./axiosInstance";

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

export const postValidateEmail = async (
  email: string,
): Promise<EmailValidateData> => {
  const { data } = await axiosInstance.post<ResponseData<EmailValidateData>>(
    END_POINTS.EMAIL,
    { email },
  );
  return data.data;
};
