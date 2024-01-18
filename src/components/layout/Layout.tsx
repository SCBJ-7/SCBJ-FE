import React from "react";
import Header from "./header/HeaderTop";
import * as S from "./Layout.style";
import BottomNav from "./navBottom/NavBottom";
import { useLocation } from "react-router-dom";
import { PATH } from "@/constants/path";
import TransferPricingHeader from "./transferWritingPriceHeader/TransferPricingHeaderTop";
import MainHeader from "@pages/homePage/mainHeader/MainHeader";

interface ChildrenProps {
  children: React.ReactNode;
}

const Layout = ({ children }: ChildrenProps) => {
  const { pathname } = useLocation();

  // FIXME: 헤더, 네비바 특정 페이지에서만 보이지 않도록 수정 필요
  // 이럼 account/yanolja/verify 이런 하위 페이지도 같이 include 됨

  const pathsToExclude = [
    PATH.LOGIN,
    PATH.DETAIL_ROOM,
    PATH.YANOLJA_ACCOUNT,
    PATH.WRITE_TRANSFER_PRICE,
  ];

  let isHeaderOn = !pathsToExclude.some((path) => pathname.includes(path));
  const isBottomNavOn = !pathsToExclude.some((path) => pathname.includes(path));

  if (pathname === PATH.ROOT) {
    isHeaderOn = false;
  }

  // 특수한 헤더
  const isTransferPricingHeaderOn = pathname.includes(
    PATH.WRITE_TRANSFER_PRICE,
  );
  const isMainHeaderOn = pathname.includes(PATH.ROOT);

  return (
    <S.Container>
      {isHeaderOn && <Header />}
      {isMainHeaderOn && <MainHeader />}
      {isTransferPricingHeaderOn && <TransferPricingHeader />}
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
