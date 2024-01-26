import * as S from "./SaleItem.style";
import { ISaleItemWithRemainDate } from "../../TransferSale";
import { PATH } from "@/constants/path";
import { remainTime } from "@/utils/dateFormatter";
import { useNavigate } from "react-router-dom";
import { formatDateWithoutTime } from "@/utils/dateFormatter";

const SaleItem = (props: ISaleItemWithRemainDate) => {
  const navigate = useNavigate();
  console.log(props.productId);
  const urlId = props.id || props.productId;
  const isPaymentId = props.id ? true : false;
  const handleClick = () => {
    navigate(`${PATH.SALE_DETAIL}/${urlId}?isPaymentId=${isPaymentId}`);
  };

  const Title = () => {
    switch (props.saleStatus) {
      case "판매완료":
        return formatDateWithoutTime(props.checkInDate) + " 입금 예정";
      case "판매만료":
        return "판매만료";
      case "판매중":
        return "판매만료까지 " + remainTime(props.checkInDate) + " 남았어요!";
      case "정산완료":
        return "정산완료";
      default:
        break;
    }
  };
  const Price = () => {
    if (props.saleStatus === "판매중") {
      return !props.secondPrice ? (
        <span>{`${props.firstPrice.toLocaleString()}원`}</span>
      ) : (
        <>
          <div>
            1차:<span>{`${props.firstPrice.toLocaleString()}원`}</span>
          </div>
          <div>
            2차:<span>{`${props.secondPrice.toLocaleString()}원`}</span>
          </div>
        </>
      );
    }

    if (props.saleStatus === "판매만료") {
      return <span>판매 시간이 지나 자동 만료된 상품입니다</span>;
    }

    return (
      <span className="price">
        {`${props.secondPrice.toLocaleString()}원` ||
          `${props.firstPrice.toLocaleString()}원`}
      </span>
    );
  };

  return (
    <S.SaleItemContainer $saleStatus={props.saleStatus} onClick={handleClick}>
      <S.SaleItemTitle $saleStatus={props.saleStatus}>
        <Title />
        <S.ArrowRightBtnIcon />
      </S.SaleItemTitle>
      <S.SaleItemContent>
        <S.SaleItemImage src={props.imageUrl} />
        <S.DimmedImage $saleStatus={props.saleStatus}>a</S.DimmedImage>
        <S.SaleItemInfo>
          <S.SaleItemName>{props.name}</S.SaleItemName>
          <S.SaleItemType>{props.roomType}</S.SaleItemType>
          <S.SaleItemDate>
            <S.SaleItemDate>
              {`${formatDateWithoutTime(props.checkInDate)} ~ ${formatDateWithoutTime(
                props.checkOutDate,
              )}`}
            </S.SaleItemDate>
          </S.SaleItemDate>

          <S.SaleItemPrice $saleStatus={props.saleStatus}>
            <Price />
          </S.SaleItemPrice>
        </S.SaleItemInfo>
      </S.SaleItemContent>
    </S.SaleItemContainer>
  );
};

export default SaleItem;
