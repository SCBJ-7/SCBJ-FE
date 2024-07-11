import { useLocation } from "react-router-dom";
import { PATH } from "../../../../constants/path";

import * as S from "./MyPageNav.style";

const MyPageNav = () => {
  const { pathname } = useLocation();

  const navList = [
    {
      id: 1,
      name: "구매내역",
      path: PATH.MY_PAGE,
    },
    {
      id: 2,
      name: "판매내역",
      path: PATH.SALE_LIST,
    },
  ];

  return (
    <S.MyPageNavContainer>
      {navList.map((item) => {
        return (
          <S.MyPageNavCell
            key={item.id}
            to={item.path}
            className={pathname === item.path ? "active" : ""}
          >
            {item.name}
          </S.MyPageNavCell>
        );
      })}
    </S.MyPageNavContainer>
  );
};

export default MyPageNav;
