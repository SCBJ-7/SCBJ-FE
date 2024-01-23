import { END_POINTS } from "@constants/api";
import type { AccountProps } from "@type/account";
import { axiosInstance } from "./axiosInstance";

export const patchAccount = async (accountData: AccountProps) => {
  const { data } = await axiosInstance.patch(END_POINTS.ACCOUNT, accountData);

  return data.data;
};
