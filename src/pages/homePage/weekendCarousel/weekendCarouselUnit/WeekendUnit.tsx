import priceFormat from "@utils/priceFormat";
import * as S from "./WeekendUnit.style";
import { WeekendItem } from "@type/saleSection";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";
import { PATH } from "@constants/path";
import { parseISO } from "date-fns";

interface UnitProps {
  item: [number, WeekendItem];
}

const WeekendlUnit = ({ item }: UnitProps) => {
  const navigate = useNavigate();
  const CHKIN = format(parseISO(item[1].checkInDate), "MM.dd");
  const CHKOUT = format(parseISO(item[1].checkOutDate), "MM.dd");

  const onClickHandler = () => {
    navigate(PATH.DETAIL_ROOM + "/" + item[1].id);
  };

  return (
    <S.LocaleWrapper onClick={onClickHandler}>
      <img src={item[1].imageUrl} alt="" />
      <S.Stickers>
        <section>{item[1].brunch && "조식제공"}</section>
        <section>{item[1].pool && "수영장"}</section>
        <section>{item[1].oceanView && "오션뷰"}</section>
      </S.Stickers>
      <S.Titles>
        <h1>{item[1].name}</h1>
        <h3>{item[1].roomType}</h3>
      </S.Titles>
      <S.Price>
        <h4>{priceFormat(item[1].originalPrice)}</h4>
        <section>
          <S.Discounted>
            <h1>{priceFormat(item[1].salePrice)}원</h1>
            <h1 className="percentage">{item[1].salePercentage * 100}%</h1>
          </S.Discounted>
          <S.Period>
            {CHKIN} ~ {CHKOUT}
          </S.Period>
        </section>
      </S.Price>
    </S.LocaleWrapper>
  );
};

export default WeekendlUnit;
