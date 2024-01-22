import { PATH } from "@constants/path";
import * as S from "./Manage.style";
import rightArrow from "@assets/icons/RightArrow.svg";
import useProfileApi from "@apis/useProfileApi";
import { useEffect, useState } from "react";
import type { ProfileData } from "./manageProfile/ManageProfile.type";
import { END_POINTS } from "@constants/api";

const Manage = () => {
  const manageList = [
    { path: PATH.MANAGE_PROFILE, name: "프로필 변경" },
    { path: PATH.MANAGE_ACCOUNT, name: "정산 계좌 관리" },
  ];

  // FIXME: 전역 상태로 야놀자 연동여부를 체크하도록 변경
  const { getProfileData } = useProfileApi();
  const [userProfile, setUserProfile] = useState<ProfileData>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const fetchUserProfile = async () => {
    try {
      const res = await getProfileData(END_POINTS.USER_INFO);
      setUserProfile(res);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchUserProfile();
    // eslint-disable-next-line
  }, []);

  if (isLoading) return <div>Loading...</div>;

  if (!userProfile) return <div>Data Fetching Error</div>;

  return (
    <S.ManageListWrapper>
      <h1>관리</h1>
      {manageList.map((item, index) => {
        const hideAccountManage =
          index === 1 && userProfile.linkedToYanolja === false;
        return (
          <S.ManageListElement key={item.name} $visible={!hideAccountManage}>
            <S.ManageLink to={item.path}>
              <span>{item.name}</span>
              <img src={rightArrow} alt={`${item.name}으로 이동하기`} />
            </S.ManageLink>
          </S.ManageListElement>
        );
      })}
    </S.ManageListWrapper>
  );
};

export default Manage;
