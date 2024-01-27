import React from "react";
import Header from "./header/HeaderTop";
import * as S from "./Layout.style";
import BottomNav from "./navBottom/NavBottom";
import A2HS from "../A2HS/A2HS";
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
        <A2HS />
        {children}
        {isBottomNavOn && <BottomNav />}
      </S.Wrapper>
    </S.Container>
  );
};

export default Layout;
