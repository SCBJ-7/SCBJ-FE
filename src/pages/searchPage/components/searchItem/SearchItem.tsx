import { ISearchList } from "@/types/searchList";
import * as S from "./SearchItem.style";

const SearchItem = ({ item }: { item: ISearchList }) => {
  const calculatePercentage = (
    originalPrice: number,
    salePrice: number,
  ): string => {
    const difference = originalPrice - salePrice;
    const percentage = (difference / originalPrice) * 100;

    return `${percentage}%`;
  };

  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const day = date.getDate().toString().padStart(2, "0");
    return `${month}.${day}`;
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
              <S.ItemPrice>{item.salePrice.toLocaleString()}</S.ItemPrice>
              <S.ItemSalePercent>
                {calculatePercentage(item.originalPrice, item.salePrice)}
              </S.ItemSalePercent>
            </div>
            <S.ItemDate>
              {`${formatDate(item.checkInDate)} ~ ${formatDate(
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
