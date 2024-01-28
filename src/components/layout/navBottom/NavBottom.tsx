import { PATH } from "@/constants/path";
import useTooltip from "@/hooks/common/useTooltip";
import { useLocation } from "react-router-dom";

import * as S from "./NavBottom.style";
import ToolTip from "./toolTip/ToolTip";

interface BottomNavProps {
  isMobile: boolean;
}

const BottomNav = ({ isMobile }: BottomNavProps) => {
  const { isToolTipVisible, hideTooltipForWeek } = useTooltip();

  const { pathname } = useLocation();
  const navList = [
    {
      id: 1,
      name: "홈",
      path: PATH.ROOT,
      icon: <S.NavIconHomes isActive={pathname === PATH.ROOT ? true : false} />,
    },
    {
      id: 2,
      name: "판매하기",
      path: PATH.WRITE_TRANSFER,
      icon: <S.NavIconTransfer />,
    },
    {
      id: 3,
      name: "상품조회",
      path: PATH.SEARCHLIST,
      icon: <S.NavIconSearch />,
    },
    {
      id: 4,
      name: "마이",
      path: PATH.MY_PAGE,
      icon: <S.NavIconMy />,
    },
  ];

  return (
    <S.BottomNavContainer $isMobile={isMobile}>
      {isToolTipVisible && (
        <ToolTip onClickClose={hideTooltipForWeek}>
          숙박권을 판매해보세요.
        </ToolTip>
      )}
      <S.BottomNavWrapper>
        {navList.map((item) => {
          return (
            <S.BottomNavCell
              key={item.id}
              to={item.path}
              className={(isActive) => (isActive ? "active" : "")}
            >
              {item.icon}
              {item.name}
            </S.BottomNavCell>
          );
        })}
      </S.BottomNavWrapper>
    </S.BottomNavContainer>
  );
};

export default BottomNav;
