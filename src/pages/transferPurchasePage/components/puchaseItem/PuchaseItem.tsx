import * as S from "./PuchaseItem.style";
import { format } from "date-fns";
import { ko } from "date-fns/locale";
import { IPurchaseItemWithRemainDate } from "../../TransferPurchase";
import { PATH } from "@/constants/path";

const PuchaseItem = (props: IPurchaseItemWithRemainDate) => {
  const handleClick = () => {
    window.location.href = `${PATH.PURCAHSE_DEATAIL}?id=${props.id}`;
  };
  return (
    <S.PurchaseItemContainer onClick={handleClick}>
      <S.PurchaseItemTitle $isComplete={props.remainDate < 0}>
        {props.remainDate > 0
          ? `체크인까지 ${props.remainDate}일 남았어요!`
          : props.remainDate === 0
            ? "오늘이 체크인이에요 !"
            : "이용완료"}
        <S.ArrowRightBtnIcon></S.ArrowRightBtnIcon>
      </S.PurchaseItemTitle>
      <S.PurchaseItemContent>
        <S.PurchaseItemImage src={props.ImageUrl} />
        <S.PuchaseItemInfo>
          <S.PurchaseItemName>{props.name}</S.PurchaseItemName>
          <S.PuChaseItemType>{props.roomType}</S.PuChaseItemType>
          <S.PuChaseItemDate>
            {`${format(props.checkInDate, "yyyy. MM. dd (ccc)", {
              locale: ko,
            })} ~ `}
            {`${format(props.checkOutDate, "yyyy. MM. dd (ccc)", {
              locale: ko,
            })}`}
          </S.PuChaseItemDate>
          <S.PurchaseItemPrice>{`${props.price.toLocaleString()}원`}</S.PurchaseItemPrice>
        </S.PuchaseItemInfo>
      </S.PurchaseItemContent>
    </S.PurchaseItemContainer>
  );
};

export default PuchaseItem;
