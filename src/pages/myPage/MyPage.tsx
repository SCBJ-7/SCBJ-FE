import { Outlet } from "react-router-dom";
import MyPageNav from "./components/myPageNav/MyPageNav";

import * as S from "./MyPage.style";

const MyPage = () => {
  return (
    <>
      <S.ProfileSection>
        <span>kimyangdo82@gmail.com</span>
        <button>야놀자 계정 연동하기</button>
      </S.ProfileSection>
      <MyPageNav />
      <Outlet />
    </>
  );
};

export default MyPage;
