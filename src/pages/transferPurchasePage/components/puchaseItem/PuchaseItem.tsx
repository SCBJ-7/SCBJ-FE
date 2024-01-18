import * as S from "./PuchaseItem.style";
import { IPurchaseItemWithRemainDate } from "../../TransferPurchase";
import { PATH } from "@/constants/path";
import { formatDate } from "@/utils/dateFormater";
import { useNavigate } from "react-router-dom";

const PuchaseItem = (props: IPurchaseItemWithRemainDate) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`${PATH.PURCAHSE_DEATAIL}?id=${props.id}`);
  };
  return (
    <S.PurchaseItemContainer onClick={handleClick}>
      <S.PurchaseItemTitle $remainingDays={props.remainDate}>
        {props.remainDate > 0
          ? `체크인까지 ${props.remainDate}일 남았어요!`
          : props.remainDate === 0
            ? "오늘이 체크인이에요!"
            : "이용완료"}
        <S.ArrowRightBtnIcon></S.ArrowRightBtnIcon>
      </S.PurchaseItemTitle>
      <S.PurchaseItemContent>
        <S.PurchaseItemImage src={props.ImageUrl} />
        <S.PuchaseItemInfo>
          <S.PurchaseItemName>{props.name}</S.PurchaseItemName>
          <S.PuChaseItemType>{props.roomType}</S.PuChaseItemType>
          <S.PuChaseItemDate>
            {`${formatDate(props.checkInDate)} ~ `}
            {formatDate(props.checkOutDate)}
          </S.PuChaseItemDate>
          <S.PurchaseItemPrice>{`${props.price.toLocaleString()}원`}</S.PurchaseItemPrice>
        </S.PuchaseItemInfo>
      </S.PurchaseItemContent>
    </S.PurchaseItemContainer>
  );
};

export default PuchaseItem;
