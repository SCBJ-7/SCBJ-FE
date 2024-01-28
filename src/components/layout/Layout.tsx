import React from "react";
import Header from "./header/HeaderTop";
import * as S from "./Layout.style";
import BottomNav from "./navBottom/NavBottom";
import A2HS from "../A2HS/A2HS";
import { isMobile } from "@/utils/isMobile";

interface ChildrenProps {
  children: React.ReactNode;
  isHeaderOn: boolean;
  isBottomNavOn: boolean;
}

const Layout = ({ children, isHeaderOn, isBottomNavOn }: ChildrenProps) => {
  const isMobileDevice = isMobile();

  return (
    <S.Container>
      <S.Wrapper>
        {isHeaderOn && <Header />}
        {children}
        <A2HS />
        {isBottomNavOn && <BottomNav isMobile={isMobileDevice} />}
      </S.Wrapper>
    </S.Container>
  );
};

export default Layout;
