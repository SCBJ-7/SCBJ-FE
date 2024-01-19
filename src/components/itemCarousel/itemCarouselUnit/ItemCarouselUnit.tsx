import { format } from "date-fns";
import * as S from "./ItemCarouselUnit.style";
import { LocaleItem } from "@type/saleSection";

interface UnitProps {
  item: [number, string, LocaleItem[]];
}

const ItemCarouselUnit = ({ item }: UnitProps) => {
  const [, , hotel] = item;
  const CHKIN0 = format(hotel[0].checkInDate, "mm.dd");
  const CHKOUT0 = format(hotel[0].checkOutDate, "mm.dd");
  const CHKIN1 = format(hotel[1].checkInDate, "mm.dd");
  const CHKOUT1 = format(hotel[1].checkOutDate, "mm.dd");

  const onClickHandler = () => {};

  return (
    <S.LocaleWrapper $display={hotel ? "block" : "none"}>
      {hotel[0] && (
        <S.ItemUnit onClick={onClickHandler}>
          <img src={hotel[0].imageUrl} />
          <div className="item-info">
            <div className="hotel_title">
              <h1>{hotel[0].name}</h1>
              <h3>{hotel[0].roomType}</h3>
              <S.Sticker>
                {CHKIN0} ~ {CHKOUT0}
              </S.Sticker>
            </div>
            <div className="hotel_price">
              <h5>{hotel[0].originalPrice}</h5>
              <h1>
                {hotel[0].salePrice}{" "}
                <span>{hotel[0].salePercentage * 100}%</span>
              </h1>
            </div>
          </div>
        </S.ItemUnit>
      )}
      {hotel[1] && (
        <S.ItemUnit>
          <img src={hotel[1].imageUrl} />
          <div className="item-info">
            <div className="hotel_title">
              <h1>{hotel[1].name}</h1>
              <h3>{hotel[1].roomType}</h3>
              <S.Sticker>
                {CHKIN1} ~ {CHKOUT1}
              </S.Sticker>
            </div>
            <div className="hotel_price">
              <h5>{hotel[1].originalPrice}</h5>
              <h1>
                {hotel[1].salePrice}{" "}
                <span>{hotel[1].salePercentage * 100}%</span>
              </h1>
            </div>
          </div>
        </S.ItemUnit>
      )}
    </S.LocaleWrapper>
  );
};

export default ItemCarouselUnit;
