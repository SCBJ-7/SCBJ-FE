import { BASE_URL, END_POINTS } from "@/constants/api";

import type { EmailValidateData, LoginData } from "@type/login";
import type { ResponseData } from "@type/responseType";
import axios from "axios";

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
