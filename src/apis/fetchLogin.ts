import axios from "axios";

import type { EmailValidateData, LoginData } from "@/types/login";
import type { ResponseData } from "@/types/responseType";

import { BASE_URL, END_POINTS } from "@/constants/api";

interface LoginProps {
  email: string;
  password: string;
  fcmToken?: string;
}

export const postLogin = async ({
  email,
  password,
  fcmToken,
}: LoginProps): Promise<LoginData> => {
  const { data } = await axios.post<ResponseData<LoginData>>(
    BASE_URL + END_POINTS.LOGIN,
    {
      email,
      password,
      fcmToken,
    },
  );
  return data.data;
};

export const postValidateEmail = async (
  email: string,
): Promise<EmailValidateData> => {
  const { data } = await axios.post<ResponseData<EmailValidateData>>(
    BASE_URL + END_POINTS.EMAIL,
    { email },
  );
  return data.data;
};
