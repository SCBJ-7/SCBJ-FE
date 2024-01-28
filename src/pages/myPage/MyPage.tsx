import { Outlet, useNavigate } from "react-router-dom";
import MyPageNav from "./components/myPageNav/MyPageNav";

import * as S from "./MyPage.style";
import { PATH } from "@constants/path";
import { useLoadUserInfo } from "@/hooks/common/useLoadUserInfo";
import useAuthStore from "@/store/authStore";

const MyPage = () => {
  const navigate = useNavigate();
  const userInfo = useLoadUserInfo(true);
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);
  const isConnected = userInfo?.linkedToYanolja;
  localStorage.setItem("isConnected", JSON.stringify(isConnected));

  const connectToYanolja = () => {
    navigate(PATH.YANOLJA_ACCOUNT);
  };

  return (
    <S.Container>
      <S.ProfileSection>
        {isLoggedIn && userInfo ? (
          <h3>{userInfo.email} 님</h3>
        ) : (
          <h3>로그인 후 판매글을 작성해보세요</h3>
        )}
        {!userInfo ? (
          <button onClick={() => navigate(PATH.LOGIN)}>로그인 하기</button>
        ) : isConnected ? (
          <span>야놀자와 연동된 계정입니다</span>
        ) : (
          <button onClick={connectToYanolja}>야놀자 계정 연동하기</button>
        )}
      </S.ProfileSection>
      <MyPageNav />
      <Outlet />
    </S.Container>
  );
};

export default MyPage;
