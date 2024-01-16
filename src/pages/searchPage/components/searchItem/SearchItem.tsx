import { ISearchList } from "@/types/searchList";
import * as S from "./SearchItem.style";
import { format, parseISO } from "date-fns";

const SearchItem = ({ item }: { item: ISearchList }) => {
  const calculatePercentage = (
    originalPrice: number,
    salePrice: number,
  ): string => {
    const difference = originalPrice - salePrice;
    const percentage = (difference / originalPrice) * 100;

    return `${percentage}%`;
  };
  const formatDateString = (dateString) => {
    // 문자열을 Date 객체로 파싱
    const dateObject = parseISO(dateString);

    // format 함수를 사용하여 원하는 형태로 포맷
    const formattedDate = format(dateObject, "MM.dd");

    return formattedDate;
  };

  return (
    <>
      <S.ItemContainer>
        <S.ItemContent>
          <S.ItemImage src={item.imageUrl} />
          <S.ItemName>{item.name}</S.ItemName>
          <S.ItemRoomName>{item.roomType}</S.ItemRoomName>
          <S.ItemOriginalPrice>
            {item.originalPrice.toLocaleString()}
          </S.ItemOriginalPrice>
          <S.ItemBottom>
            <div>
              <S.ItemPrice>
                {item.salePrice.toLocaleString() + "원"}
              </S.ItemPrice>
              <S.ItemSalePercent>
                {calculatePercentage(item.originalPrice, item.salePrice)}
              </S.ItemSalePercent>
            </div>
            <S.ItemDate>
              {`${formatDateString(item.checkInDate)} ~ ${formatDateString(
                item.checkOutDate,
              )}`}
            </S.ItemDate>
          </S.ItemBottom>
          {item.isFirst || <S.SecondSaleText>마감 특가</S.SecondSaleText>}
        </S.ItemContent>
      </S.ItemContainer>
    </>
  );
};

export default SearchItem;
