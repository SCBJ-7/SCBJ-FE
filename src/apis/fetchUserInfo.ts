import { IUserInfo } from "./../types/userInfo";
import axios from "axios";

// 유저 정보를 불러오는 api입니다.
export const fetchUserInfo = async (): Promise<IUserInfo | undefined> => {
  try {
    const response = await axios.get("/v1/members");
    return response.data.data as IUserInfo;
  } catch (err) {
    alert("⚠️예기치 못한 에러가 발생하였습니다.");
  }
};
