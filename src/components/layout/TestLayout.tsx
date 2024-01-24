import React from "react";
import Header from "./header/HeaderTop";
import * as S from "./Layout.style";
import BottomNav from "./navBottom/NavBottom";
import TransferPricingHeader from "./transferWritingPriceHeader/TransferPricingHeaderTop";
import MainHeader from "@pages/homePage/mainHeader/MainHeader";

interface ChildrenProps {
  children: React.ReactNode;
  isHeaderOn: boolean;
  isMainHeaderOn: boolean;
  isTransferPricingHeaderOn: boolean;
  isBottomNavOn: boolean;
}

const TestLayout = ({
  children,
  isHeaderOn,
  isMainHeaderOn,
  isTransferPricingHeaderOn,
  isBottomNavOn,
}: ChildrenProps) => {
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

export default TestLayout;
