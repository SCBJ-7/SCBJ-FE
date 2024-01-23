import { ISearchList } from "@/types/searchList";
import * as S from "./SearchItem.style";
import { format, parseISO } from "date-fns";
import { useNavigate } from "react-router-dom";

const SearchItem = ({ item }: { item: ISearchList }) => {
  const navigate = useNavigate();
  const calculatePercentage = (salePrice: number) => {
    const percentage = salePrice * 100;

    // Math.round 함수를 사용하여 소수점 이하 반올림
    const roundedPercentage = Math.round(percentage);

    return roundedPercentage;
  };
  const formatDateString = (dateString: string) => {
    // 문자열을 Date 객체로 파싱
    const dateObject = parseISO(dateString);

    // format 함수를 사용하여 원하는 형태로 포맷
    const formattedDate = format(dateObject, "MM.dd");

    return formattedDate;
  };
  const handleClickItem = () => {
    navigate(`/room/${item.id}`);
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
          {item.isFirst === false && (
            <S.SecondSaleText>마감 특가</S.SecondSaleText>
          )}
        </S.ItemContent>
      </S.ItemContainer>
    </>
  );
};

export default SearchItem;
