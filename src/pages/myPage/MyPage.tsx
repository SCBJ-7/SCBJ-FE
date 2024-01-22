import { Outlet, useNavigate } from "react-router-dom";
import MyPageNav from "./components/myPageNav/MyPageNav";

import * as S from "./MyPage.style";
import useProfileApi from "@apis/useProfileApi";
import { useEffect, useState } from "react";
import { ProfileData } from "./manage/manageProfile/ManageProfile.type";
import { END_POINTS } from "@constants/api";
import { PATH } from "@constants/path";

const MyPage = () => {
  const navigate = useNavigate();
  // FIXME: 전역상태로 야놀자 연동 여부 확인하도록 수정
  const { getProfileData } = useProfileApi();
  const [userProfile, setUserProfile] = useState<ProfileData>();
  const isConnected = userProfile?.linkedToYanolja;

  const fetchUserProfile = async () => {
    try {
      const res = await getProfileData(END_POINTS.USER_INFO);
      setUserProfile(res);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchUserProfile();
    // eslint-disable-next-line
  }, []);

  const connectToYanolja = () => {
    navigate(PATH.YANOLJA_ACCOUNT);
  };

  return (
    <>
      <S.ProfileSection>
        <h3>{userProfile?.email} 님</h3>
        {!userProfile ? (
          <S.EmptyDiv />
        ) : isConnected ? (
          <span>야놀자와 연동된 계정입니다</span>
        ) : (
          <button onClick={connectToYanolja}>야놀자 계정 연동하기</button>
        )}
      </S.ProfileSection>
      <MyPageNav />
      <Outlet />
    </>
  );
};

export default MyPage;
