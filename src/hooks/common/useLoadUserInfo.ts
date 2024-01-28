import { useUserInfoStore } from "@store/store";
import { useEffect } from "react";

import { fetchUserInfo } from "@/apis/fetchUserInfo";

export const useLoadUserInfo = (isShow: boolean) => {
  const userInfo = useUserInfoStore((state) => state.userInfo);
  const setUserInfo = useUserInfoStore((state) => state.setUserInfo);
  useEffect(() => {
    console.log();
    const getUserInfo = async () => {
      if (isShow && userInfo === null) {
        const response = await fetchUserInfo();
        console.log(response);
        setUserInfo(response);
      }
    };

    getUserInfo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isShow, userInfo]);

  return userInfo;
};
