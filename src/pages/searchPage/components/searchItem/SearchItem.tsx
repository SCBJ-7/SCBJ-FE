import { format, parseISO } from "date-fns";
import { useNavigate } from "react-router-dom";

import * as S from "./SearchItem.style";

import ProgressiveImg from "@/components/progressiveImg/ProgressiveImg";
import { PATH } from "@/constants/path";
import { ISearchList } from "@/types/searchList";

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
      <S.ItemContainer onClick={handleClickItem}>
        <ProgressiveImg src={item.imageUrl} loading="lazy" />
        <S.ItemContent>
          <S.ItemTop>
            <S.ItemRates>
              <S.StartImg />
              <div>{item.reviewRate}</div>
              <div>&middot;</div>
              <div>{item.hotelRate}</div>
            </S.ItemRates>
            <S.ItemName>{item.name}</S.ItemName>
            <S.ItemRoomName>{item.roomType}</S.ItemRoomName>
          </S.ItemTop>

          <S.ItemBottom>
            <S.ItemDateCover>
              <div></div>
              <S.ItemDate>
                {`${formatDateString(item.checkIn)} ~ ${formatDateString(
                  item.checkOut,
                )}`}
              </S.ItemDate>
            </S.ItemDateCover>
            <div>
              <S.ItemOriginalPriceCover>
                <div>정가</div>
                <div>
                  <S.ItemSalePercent>
                    {`${calculatePercentage(item.salePercentage)}%`}
                  </S.ItemSalePercent>
                  <S.ItemOriginalPrice>
                    {" " + item.originalPrice.toLocaleString() + "원"}
                  </S.ItemOriginalPrice>
                </div>
              </S.ItemOriginalPriceCover>
              <S.ItemPriceCover>
                <div>거래가</div>
                <S.ItemPrice>
                  {item.salePrice.toLocaleString() + "원"}
                </S.ItemPrice>
              </S.ItemPriceCover>
            </div>
          </S.ItemBottom>
          {!item.isFirstPrice && <S.SecondSaleText>마감 특가</S.SecondSaleText>}
        </S.ItemContent>
      </S.ItemContainer>
    </>
  );
};

export default SearchItem;
