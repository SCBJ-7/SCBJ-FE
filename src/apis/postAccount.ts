import { axiosInstance } from "@apis/axiosInstance";
import { END_POINTS } from "@/constants/api";

interface AccountProps {
  accountNumber: string;
  bank: string;
}

export const postAccount = async (accountInfo: AccountProps) => {
  const { data } = await axiosInstance.post(
    END_POINTS.ACCOUNT,
    accountInfo,
    {},
  );
  return data.data;
};
