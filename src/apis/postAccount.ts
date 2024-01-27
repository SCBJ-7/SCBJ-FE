import { axiosInstance } from "@apis/axiosInstance";
import { END_POINTS } from "@/constants/api";

interface AccountProps {
  accountNumber: string;
  bank: string;
}

export const postAccount = async (accountInfo: AccountProps) => {
  try {
    const response = await axiosInstance.post(END_POINTS.ACCOUNT, accountInfo, {
      headers: {
        Authorization: `${localStorage.getItem("accessToken")}`,
        "Content-Type": "application/json",
      },
    });
    return response.data.data;
  } catch (err) {
    console.log(`⚠️예기치 못한 에러가 발생하였습니다.: ${err}`);
  }
};
