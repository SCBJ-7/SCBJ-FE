import React from "react";
import Header from "./header/HeaderTop";
import * as S from "./Layout.style";
import BottomNav from "./navBottom/NavBottom";
import { useLocation, useParams } from "react-router-dom";
import { PATH } from "@/constants/path";
import TransferPricingHeader from "./transferWritingPriceHeader/TransferPricingHeaderTop";
import MainHeader from "@pages/homePage/mainHeader/MainHeader";

interface ChildrenProps {
  children: React.ReactNode;
}

const Layout = ({ children }: ChildrenProps) => {
  const { pathname, search } = useLocation();

  // FIXME: 헤더, 네비바 특정 페이지에서만 보이지 않도록 수정 필요
  const pathsToExcludeHeader = [PATH.LOGIN, PATH.WRITE_TRANSFER_PRICE];

  const pathsToExcludeBottom = [PATH.LOGIN, PATH.SEARCH_FILTER];

  let isHeaderOn = !pathsToExcludeHeader.some((path) =>
    pathname.includes(path),
  );
  let isBottomNavOn = !pathsToExcludeBottom.some((path) =>
    pathname.includes(path),
  );

  if (pathname === PATH.ROOT) {
    isHeaderOn = false;
  }

  const { productId } = useParams();

  if (pathname === PATH.DETAIL_ROOM(productId!)) {
    isHeaderOn = false;
    isBottomNavOn = false;
  }
  // 특수한 헤더
  const isTransferPricingHeaderOn = pathname.includes(
    PATH.WRITE_TRANSFER_PRICE,
  );
  const isMainHeaderOn = pathname === PATH.ROOT;

  if (pathname.includes(PATH.MANAGE_ACCOUNT)) {
    if (pathname === PATH.ACCOUNT_EDIT) {
      isHeaderOn = false;
    }
    if (search === "?step=termsAgreement") {
      isHeaderOn = false;
      isBottomNavOn = false;
    }
    if (search === "?step=enterAccount") {
      isHeaderOn = false;
    }
  }

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
