import * as S from "./TransferItem.style";

interface ItemProps {
  item: number;
}

const TransferItem = (props: ItemProps) => {
  return (
    <S.ItemContainer>
      <S.ItemTitle>
        체크인까지 {props.item}일 남았어요!
        <S.ItemTitleBtn>
          판매하기
          <S.ItemTitleBtnIcon />
        </S.ItemTitleBtn>
      </S.ItemTitle>
      <S.ItemInfo>
        <S.itemInfoImg />
        <S.itemInfoDesc>
          <S.DescTitle>호텔 인 나인 강남</S.DescTitle>
          <S.DescOption>디럭스 킹 시티뷰</S.DescOption>
          <S.DescDates>2023. 12. 20 (수) ~ 2023. 12. 21 (목) </S.DescDates>
        </S.itemInfoDesc>
      </S.ItemInfo>
      <S.ItemPrice>
        <S.PriceTag>
          <h4>구매가</h4>
          <span>212,000 원</span>
        </S.PriceTag>
        <S.PriceTag>
          <h4>예약 취소 시 환불금액</h4>
          <span>0 원</span>
        </S.PriceTag>
      </S.ItemPrice>
    </S.ItemContainer>
  );
};

export default TransferItem;
