import { useStateHeaderStore } from "@/store/store";
import { useLocation } from "react-router-dom";

import * as S from "./TransferPricingHeaderTop.style";

const TransferPricingHeader = () => {
  const headerConfig = useStateHeaderStore((state) => state.headerConfig);

  const { search } = useLocation();
  const params = new URLSearchParams(search); // 쿼리스트링 분리

  let title = "";
  const undo = true;

  const hotelName = params.get("hotelName");
  if (hotelName) {
    title = hotelName;
  }

  return (
    <S.HeaderContainer>
      <S.HeaderWrapper>
        <S.HeaderCell>
          {undo && <S.UndoIcon onClick={headerConfig.undo} />}
        </S.HeaderCell>
        <S.HeaderCell>
          {headerConfig.title ? headerConfig.title : title}
        </S.HeaderCell>
        <S.HeaderCell></S.HeaderCell>
      </S.HeaderWrapper>
    </S.HeaderContainer>
  );
};

export default TransferPricingHeader;
