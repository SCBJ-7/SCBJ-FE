import { instance } from "@apis/useProfileApi";
import { END_POINTS } from "@constants/api";
import { AccountProps } from "@type/account";

export const patchAccount = async (accountData: AccountProps) => {
  const { data } = await instance.patch(END_POINTS.ACCOUNT, accountData);

  return data.data;
};
