import * as S from "./MyPageNav.style";
import { useLocation, useNavigate } from "react-router-dom";
import { PATH } from "../../../../constants/path";
import { useEffect } from "react";
const MyPageNav = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    if (pathname === PATH.MY_PAGE || pathname === "/my-page") {
      navigate(PATH.PURCHASE_LIST);
    }
  }, [pathname, navigate]);
  const navList = [
    {
      id: 1,
      name: "구매내역",
      path: PATH.PURCHASE_LIST,
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
