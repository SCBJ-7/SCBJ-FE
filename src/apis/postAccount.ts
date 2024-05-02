import { END_POINTS } from "@/constants/api";
import { axiosInstance } from "@/apis/axiosInstance";

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
