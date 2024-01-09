import React from "react";
import * as S from "./Layout.style";
import Header from "./header/HeaderTop";
import BottomNav from "./navBottom/NavBottom";
import { useLocation } from "react-router-dom";
import { PATH } from "@/constants/path";

interface ChildrenProps {
  children: React.ReactNode;
}

const Layout = ({ children }: ChildrenProps) => {
  let isHeaderOn = true;
  const { pathname } = useLocation();

  switch (pathname) {
    case PATH.LOGIN:
      isHeaderOn = false;
      break;
    default:
      isHeaderOn = true;
  }

  return (
    <S.Container>
      <Header />
      <S.Wrapper $isHeaderOn={isHeaderOn}>{children}</S.Wrapper>
      <BottomNav />
    </S.Container>
  );
};

export default Layout;
