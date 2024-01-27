import React from "react";
import Header from "./header/HeaderTop";
import * as S from "./Layout.style";
import BottomNav from "./navBottom/NavBottom";
import A2HS from "../A2HS/A2HS";
import { useLocation } from "react-router-dom";
import { PATH } from "@/constants/path";
interface ChildrenProps {
  children: React.ReactNode;
  isHeaderOn: boolean;
  isBottomNavOn: boolean;
}

const Layout = ({ children, isHeaderOn, isBottomNavOn }: ChildrenProps) => {
  const { pathname } = useLocation();

  return (
    <S.Container>
      <S.Wrapper>
        {isHeaderOn && <Header />}
        <A2HS />
        {children}
        {pathname === PATH.ROOT && <A2HS />}
        {isBottomNavOn && <BottomNav />}
      </S.Wrapper>
    </S.Container>
  );
};

export default Layout;
