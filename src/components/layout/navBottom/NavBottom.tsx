import * as S from "./NavBottom.style";
import ToolTip from "./toolTip/ToolTip";

import IconHomeFill from "@/assets/icons/navIcon/icon_home_fill.svg?react";
import IconHomeLine from "@/assets/icons/navIcon/icon_home_line.svg?react";
import IconMyFill from "@/assets/icons/navIcon/icon_my_fill.svg?react";
import IconMyLine from "@/assets/icons/navIcon/icon_my_line.svg?react";
import IconSearchFill from "@/assets/icons/navIcon/icon_search_fill.svg?react";
import IconSearchLine from "@/assets/icons/navIcon/icon_search_line.svg?react";
import IconTransferWritingFill from "@/assets/icons/navIcon/icon_transferWriting_fill.svg?react";
import IconTransferWritingLine from "@/assets/icons/navIcon/icon_transferWriting_line.svg?react";
import IconWishFill from "@/assets/icons/navIcon/icon_wish_fill.svg?react";
import IconWishLine from "@/assets/icons/navIcon/icon_wish_line.svg?react";
import { PATH } from "@/constants/path";
import useTooltip from "@/hooks/common/useTooltip";

interface BottomNavProps {
  isMobile: boolean;
}

const BottomNav = ({ isMobile }: BottomNavProps) => {
  const { isToolTipVisible, hideTooltipForWeek } = useTooltip();

  const navList = [
    {
      id: 1,
      name: "홈",
      path: PATH.ROOT,
      icon: [<IconHomeFill />, <IconHomeLine />],
    },
    {
      id: 2,
      name: "검색",
      path: PATH.SEARCHLIST,
      icon: [<IconSearchFill />, <IconSearchLine />],
    },
    {
      id: 3,
      name: "판매하기",
      path: PATH.WRITE_TRANSFER,
      icon: [<IconTransferWritingFill />, <IconTransferWritingLine />],
    },
    {
      id: 4,
      name: "찜",
      path: PATH.WISHLIST,
      icon: [<IconWishFill />, <IconWishLine />],
    },
    {
      id: 5,
      name: "마이",
      path: PATH.MY_PAGE,
      icon: [<IconMyFill />, <IconMyLine />],
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
        {navList.map(({ id, path, icon, name }) => {
          return (
            <S.BottomNavCell //
              key={id}
              to={path}
              children={({ isActive }) => (
                <S.BottomNavCellContent className={isActive ? "active" : ""}>
                  {isActive ? icon[0] : icon[1]}
                  {name}
                </S.BottomNavCellContent>
              )}
            />
          );
        })}
      </S.BottomNavWrapper>
    </S.BottomNavContainer>
  );
};

export default BottomNav;

//https://velog.io/@yoonth95/SVG-%ED%8C%8C%EC%9D%BC-React-Component%EB%A1%9C-%EA%B0%80%EC%A0%B8%EC%98%A4%EA%B8%B0-Vite-TypeScript
