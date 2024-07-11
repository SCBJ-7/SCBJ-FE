import { PATH } from "@/constants/path";
import { WeekendItem } from "@/types/saleSection";
import priceFormat from "@/utils/priceFormat";
import { format, parseISO } from "date-fns";
import { useNavigate } from "react-router-dom";

import * as S from "./WeekendUnit.style";

import ProgressiveImg from "@/components/progressiveImg/ProgressiveImg";
import { StartImg } from "@/pages/searchPage/components/searchItem/SearchItem.style";

interface UnitProps {
  item: [number, WeekendItem];
}

const WeekendUnit = ({ item }: UnitProps) => {
  const navigate = useNavigate();
  const CHKIN = format(parseISO(item[1].checkInDate), "MM.dd");
  const CHKOUT = format(parseISO(item[1].checkOutDate), "MM.dd");

  const onClickHandler = () => {
    navigate(PATH.DETAIL_ROOM(item[1].id));
  };

  return (
    <S.LocaleWrapper onClick={onClickHandler}>
      <S.HotelRateMark>{item[1].reviewRate}</S.HotelRateMark>
      <ProgressiveImg src={item[1].imageUrl} alt={item[1].hotelName} />
      <S.HotelRate>
        <StartImg />

        <div>{item[1]?.hotelRate}</div>
        <div>&middot;</div>
        <div>{item[1]?.reviewRate}</div>
      </S.HotelRate>
      <S.Titles>
        <h1>{item[1].hotelName}</h1>
        <h3>{item[1].roomType}</h3>
      </S.Titles>
      <S.Stickers>
        {!item[1].isBrunchIncluded ? null : item[1].isPoolIncluded ||
          item[1].isOceanViewIncluded ? (
          <section>조식제공 &middot; </section>
        ) : (
          <section>조식제공</section>
        )}
        {!item[1].isPoolIncluded ? null : item[1].isOceanViewIncluded ? (
          <section>수영장 &middot;</section>
        ) : (
          <section>수영장 </section>
        )}
        {item[1].isOceanViewIncluded && <section>오션뷰</section>}
      </S.Stickers>
      <S.Price>
        <section>
          <h4>
            <div aria-label="white-space"></div>
            <S.OriginalSection>
              <div>정가</div>
              <div>
                <span className="percentage">
                  {Math.round(item[1].salePercentage * 100)}%
                </span>
                <span className="original">
                  {priceFormat(item[1].originalPrice)}원
                </span>
              </div>
            </S.OriginalSection>
          </h4>

          <h1>
            <S.Period>
              {CHKIN} ~ {CHKOUT}
            </S.Period>
            <S.SalesSection>
              <div>거래가</div>
              <div>{priceFormat(item[1].salePrice)}원</div>
            </S.SalesSection>
          </h1>
        </section>
      </S.Price>
    </S.LocaleWrapper>
  );
};

export default WeekendUnit;
