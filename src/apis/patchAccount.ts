import { END_POINTS } from "@constants/api";

import type { AccountData } from "@type/profile";

import { axiosInstance } from "./axiosInstance";

export const patchAccount = async (accountData: AccountData) => {
  const { data } = await axiosInstance.patch(END_POINTS.ACCOUNT, accountData);

  return data.data;
};
