import axios from "axios";

import { BASE_URL, END_POINTS } from "@/constants/api";

export interface SignupProps {
  email: string;
  password: string;
  name: string;
  phone: string;
  privacyPolicy: boolean;
  termOfUse: boolean;
}

export const postSignup = async (signupInfo: SignupProps) => {
  const { data } = await axios.post(
    BASE_URL + END_POINTS.SIGNUP,
    signupInfo,
    {},
  );
  return data.data;
};
