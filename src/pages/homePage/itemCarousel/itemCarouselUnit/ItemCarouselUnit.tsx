import { PATH } from "@constants/path";
import { LocaleItem } from "@type/saleSection";
import priceFormat from "@utils/priceFormat";
import { format, parseISO } from "date-fns";
import { useNavigate } from "react-router-dom";

import * as S from "./ItemCarouselUnit.style";

import ProgressiveImg from "@/components/progressiveImg/ProgressiveImg";

interface UnitProps {
  item: [number, string, LocaleItem[]];
}

const ItemCarouselUnit = ({ item }: UnitProps) => {
  const navigate = useNavigate();
  const [, , hotel] = item;

  const CHKIN0 = format(parseISO(hotel[0].checkInDate), "MM.dd");
  const CHKOUT0 = format(parseISO(hotel[0].checkOutDate), "MM.dd");

  const CHKIN1 = hotel[1]
    ? format(parseISO(hotel[1].checkInDate), "MM.dd")
    : "";
  const CHKOUT1 = hotel[1]
    ? format(parseISO(hotel[1].checkOutDate), "MM.dd")
    : "";

  const onClickHandler = (
    number: number,
    e: React.MouseEvent<Element, MouseEvent>,
  ) => {
    e.stopPropagation();
    navigate(PATH.DETAIL_ROOM(hotel[number].id));
  };

  return (
    <S.LocaleWrapper $display={hotel ? "block" : "none"}>
      {hotel[0] && (
        <S.ItemUnit onClick={(e) => onClickHandler(0, e)}>
          <ProgressiveImg src={hotel[0].imageUrl} alt={hotel[0].hotelName} />
          <div className="item-info">
            <div className="hotel_title">
              <h1>{hotel[0].hotelName}</h1>
              <h3>{hotel[0].roomType}</h3>
              <S.Sticker>
                {CHKIN0} ~ {CHKOUT0}
              </S.Sticker>
            </div>
            <div className="hotel_price">
              <h5>{hotel[0].originalPrice} 원</h5>
              <h1>
                {priceFormat(hotel[0].salePrice)} 원
                <span>{Math.round(hotel[0].salePercentage * 100)}%</span>
              </h1>
            </div>
          </div>
        </S.ItemUnit>
      )}
      {hotel[1] && (
        <S.ItemUnit onClick={(e) => onClickHandler(1, e)}>
          <ProgressiveImg src={hotel[1].imageUrl} alt={hotel[1].hotelName} />
          <div className="item-info">
            <div className="hotel_title">
              <h1>{hotel[1].hotelName}</h1>
              <h3>{hotel[1].roomType}</h3>
              <S.Sticker>
                {CHKIN1} ~ {CHKOUT1}
              </S.Sticker>
            </div>
            <div className="hotel_price">
              <h5>{hotel[1].originalPrice} 원</h5>
              <h1>
                {priceFormat(hotel[1].salePrice)} 원
                <span>{Math.round(hotel[1].salePercentage * 100)}%</span>
              </h1>
            </div>
          </div>
        </S.ItemUnit>
      )}
    </S.LocaleWrapper>
  );
};

export default ItemCarouselUnit;
