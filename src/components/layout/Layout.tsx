import React from "react";

import Header from "./header/HeaderTop";
import * as S from "./Layout.style";
import BottomNav from "./navBottom/NavBottom";
import A2HS from "../A2HS/A2HS";

import { ColorKeys } from "@/styles/theme.ts";
import { isMobile } from "@/utils/isMobile";

interface ChildrenProps {
  children: React.ReactNode;
  isHeaderOn?: boolean;
  isBottomNavOn?: boolean;
  bg?: ColorKeys;
}

const Layout = ({
  children,
  isHeaderOn = false,
  isBottomNavOn = false,
  bg = "white",
}: ChildrenProps) => {
  const isMobileDevice = isMobile();

  return (
    <>
      {isHeaderOn && <Header />}
      <S.Wrapper bg={bg}>
        {children}
        <A2HS />
      </S.Wrapper>
      {isBottomNavOn && <BottomNav isMobile={isMobileDevice} />}
    </>
  );
};

export default Layout;
