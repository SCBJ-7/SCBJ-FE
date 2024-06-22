import * as S from "./PriceSection.style";
import { PhaseType } from "../TransferWritingPrice";

import { useSelectedItemStore } from "@/store/store";

interface PriceProps {
  phase: PhaseType;
  firstPrice: number;
}

const PriceSection = ({ phase, firstPrice }: PriceProps) => {
  const selectedItem = useSelectedItemStore((state) => state.selectedItem);
  const { purchasePrice, refundPrice, remainingTimes } = selectedItem;

  return (
    <S.Container>
      {phase === "1stInput" && (
        <>
          <S.Rows>
            <span>야놀자 정가</span>
            <span>{purchasePrice.toLocaleString()}원</span>
          </S.Rows>
          <S.Rows>
            <span>야놀자 구매가</span>
            <span>{purchasePrice.toLocaleString()}원</span>
          </S.Rows>
          <S.Rows className="return">
            <span>예약취소 시 환불 가능 금액</span>
            <span className="blue">{refundPrice.toLocaleString()}원</span>
          </S.Rows>
        </>
      )}
      {phase === "2ndInput" && (
        <>
          <S.Rows>
            <span>1차 거래 희망가</span>
            <span className="blue">{firstPrice.toLocaleString()}원</span>
          </S.Rows>
          <S.Rows>
            <span>체크인까지 남은 시간</span>
            <span className="blue">{remainingTimes}시간</span>
          </S.Rows>
        </>
      )}
    </S.Container>
  );
};

export default PriceSection;
