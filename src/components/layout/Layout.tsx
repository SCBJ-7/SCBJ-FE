import React from "react";
import Header from "./header/HeaderTop";
import * as S from "./Layout.style";
import BottomNav from "./navBottom/NavBottom";
interface ChildrenProps {
  children: React.ReactNode;
  isHeaderOn: boolean;
  isBottomNavOn: boolean;
}

const Layout = ({ children, isHeaderOn, isBottomNavOn }: ChildrenProps) => {
  return (
    <S.Container>
      <S.Wrapper>
        {isHeaderOn && <Header />}
        {children}
        {isBottomNavOn && <BottomNav />}
      </S.Wrapper>
    </S.Container>
  );
};

export default Layout;
