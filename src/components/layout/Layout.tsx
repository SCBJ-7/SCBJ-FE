import React from "react";

import Header from "./header/HeaderTop";
import * as S from "./Layout.style";
import BottomNav from "./navBottom/NavBottom";
import { A2HS } from "../A2HS/A2HS";

import type { LayoutStyleProps } from "./Layout.style";

import { isMobile } from "@/utils/isMobile";

interface ChildrenProps extends LayoutStyleProps {
  children: React.ReactNode;
  isHeaderOn?: boolean;
  isBottomNavOn?: boolean;
}

const Layout = (props: ChildrenProps) => {
  const isMobileDevice = isMobile();
  const {
    isHeaderOn = false,
    isBottomNavOn = false,
    children,
    ...rest
  } = props;

  return (
    <>
      {isHeaderOn && <Header />}
      <S.Wrapper {...rest}>
        {children}
        <A2HS />
      </S.Wrapper>
      {isBottomNavOn && <BottomNav isMobile={isMobileDevice} />}
    </>
  );
};

export default Layout;
