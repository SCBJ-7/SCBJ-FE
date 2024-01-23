import useProfileApi from "@apis/useProfileApi";
import { useUserInfoStore } from "@store/store";
import { useEffect } from "react";

export const useLoadUserInfo = (isShow: boolean) => {
  const userInfo = useUserInfoStore((state) => state.userInfo);
  const setUserInfo = useUserInfoStore((state) => state.setUserInfo);
  const { getProfileData } = useProfileApi();

  useEffect(() => {
    const fetchUserInfo = async () => {
      if (isShow && userInfo === null) {
        const response = await getProfileData("/v1/members");
        setUserInfo(response);
      }
    };

    fetchUserInfo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isShow, userInfo]);

  return userInfo;
};
