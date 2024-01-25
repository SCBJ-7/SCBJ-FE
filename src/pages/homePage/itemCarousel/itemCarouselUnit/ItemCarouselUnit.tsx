import { format, parseISO } from "date-fns";
import * as S from "./ItemCarouselUnit.style";
import { LocaleItem } from "@type/saleSection";
import { useNavigate } from "react-router-dom";
import { PATH } from "@constants/path";
import priceFormat from "@utils/priceFormat";

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

  const onClickHandler = (num: number) => {
    navigate(PATH.DETAIL_ROOM + "/" + hotel[num].id);
  };

  //정렬 수정
  return (
    <S.LocaleWrapper $display={hotel ? "block" : "none"}>
      {hotel[0] && (
        <S.ItemUnit
          onClick={() => onClickHandler(0)}
          onTouchStart={(e) => e.preventDefault()}
        >
          <img src={hotel[0].imageUrl} onClick={() => onClickHandler(0)} />
          <div className="item-info">
            <div className="hotel_title">
              <h1 onClick={() => onClickHandler(0)}>{hotel[0].hotelName}</h1>
              <h3 onClick={() => onClickHandler(0)}>{hotel[0].roomType}</h3>
              <S.Sticker>
                {CHKIN1} ~ {CHKOUT1}
              </S.Sticker>
            </div>
            <div className="hotel_price" onClick={() => onClickHandler(0)}>
              <h5>{hotel[0].originalPrice}</h5>
              <h1>
                {priceFormat(hotel[0].salePrice)} 원
                <span>{Math.round(hotel[0].salePercentage * 100)}%</span>
              </h1>
            </div>
          </div>
        </S.ItemUnit>
      )}
      {hotel[1] && (
        <S.ItemUnit
          onClick={() => onClickHandler(1)}
          onTouchStart={(e) => e.preventDefault()}
        >
          <img src={hotel[1].imageUrl} onClick={() => onClickHandler(0)} />
          <div className="item-info">
            <div className="hotel_title">
              <h1 onClick={() => onClickHandler(0)}>{hotel[1].hotelName}</h1>
              <h3 onClick={() => onClickHandler(0)}>{hotel[1].roomType}</h3>
              <S.Sticker>
                {CHKIN0} ~ {CHKOUT0}
              </S.Sticker>
            </div>
            <div className="hotel_price" onClick={() => onClickHandler(0)}>
              <h5>{hotel[1].originalPrice}</h5>
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
