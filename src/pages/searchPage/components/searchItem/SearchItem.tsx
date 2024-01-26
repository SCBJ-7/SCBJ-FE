import { ISearchList } from "@/types/searchList";
import * as S from "./SearchItem.style";
import { format, parseISO } from "date-fns";
import { useNavigate } from "react-router-dom";
import { PATH } from "@constants/path";

const SearchItem = ({ item }: { item: ISearchList }) => {
  const navigate = useNavigate();
  const calculatePercentage = (salePrice: number) => {
    const percentage = salePrice * 100;

    const roundedPercentage = Math.round(percentage);

    return roundedPercentage;
  };
  const formatDateString = (dateString: string) => {
    const dateObject = parseISO(dateString);

    const formattedDate = format(dateObject, "MM.dd");

    return formattedDate;
  };
  const handleClickItem = () => {
    navigate(PATH.DETAIL_ROOM(item.id));
  };
  return (
    <>
      <S.ItemContainer>
        <S.ItemContent onClick={handleClickItem}>
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
                {`${calculatePercentage(item.salePercentage)}%`}
              </S.ItemSalePercent>
            </div>
            <S.ItemDate>
              {`${formatDateString(item.checkIn)} ~ ${formatDateString(
                item.checkOut,
              )}`}
            </S.ItemDate>
          </S.ItemBottom>
          {!item.isFirstPrice && <S.SecondSaleText>마감 특가</S.SecondSaleText>}
        </S.ItemContent>
      </S.ItemContainer>
    </>
  );
};

export default SearchItem;
