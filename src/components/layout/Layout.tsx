import React from "react";
import Header from "./header/HeaderTop";
import * as S from "./Layout.style";
import BottomNav from "./navBottom/NavBottom";
import { useLocation } from "react-router-dom";
import { PATH } from "@/constants/path";

interface ChildrenProps {
  children: React.ReactNode;
}

const Layout = ({ children }: ChildrenProps) => {
  const { pathname } = useLocation();

  const isHeaderOn = ![
    PATH.LOGIN as string,
    PATH.DETAIL_ROOMS as string,
  ].includes(pathname);
  const isBottomNavOn = ![
    PATH.LOGIN as string,
    PATH.DETAIL_ROOMS as string,
  ].includes(pathname);

  return (
    <S.Container>
      {isHeaderOn && <Header />}
      <S.Wrapper
        $isHeaderOn={isHeaderOn} //
        $isBottomNavOn={isBottomNavOn}
      >
        {children}
      </S.Wrapper>
      {isBottomNavOn && <BottomNav />}
    </S.Container>
  );
};

export default Layout;
