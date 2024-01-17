import { IUserInfo } from "./../types/userInfo";
import { axiosInstance } from "@apis/axiosInstance";
import { END_POINTS } from "@/constants/api";

// 유저 정보를 불러오는 api입니다.
export const fetchUserInfo = async (): Promise<IUserInfo | undefined> => {
  try {
    const response = await axiosInstance.get(END_POINTS.USER_INFO, {
      headers: {
        Authorization: `${localStorage.getItem("accessToken")}`,
        "Content-Type": "application/json",
      },
    });
    return response.data.data as IUserInfo;
  } catch (err) {
    alert(`⚠️예기치 못한 에러가 발생하였습니다.: ${err}`);
  }
};
