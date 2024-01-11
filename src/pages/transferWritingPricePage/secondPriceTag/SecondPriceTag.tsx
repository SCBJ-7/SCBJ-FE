import { useEffect } from "react";
import InputSection from "../inputSection/InputSection";
import * as S from "./SecondPriceTag.style";

import { format } from "date-fns";
import { ko } from "date-fns/locale";

interface PriceTagProps {
  firstPrice: string;
  secondPriceData: string;
  onSecondPriceChange: React.Dispatch<React.SetStateAction<string>>;
  downTimeAfter: string;
  onDownTimeAfterChange: React.Dispatch<React.SetStateAction<string>>;
  remainingTimes: number;
  startDate: Date;
  endDate: Date;
}

const SecondPriceTag = ({
  firstPrice,
  secondPriceData,
  onSecondPriceChange,
  downTimeAfter,
  onDownTimeAfterChange,
  remainingTimes,
  startDate,
  endDate,
}: PriceTagProps) => {
  const STD = format(startDate, "MM. dd (ccc) HH:mm", { locale: ko });
  const ETD = format(endDate, "MM. dd (ccc) HH:mm", { locale: ko });

  useEffect(() => {
    if (secondPriceData >= firstPrice) {
      // 만약 1차 가격을 내려서 2차 가격보다 낮아진다면 2차 가격은 최대 1차 가격 - 1000원으로 변경
      let temp = Number(firstPrice) - 1000;
      if (temp < 0) {
        temp = 0;
      }

      onSecondPriceChange(temp.toString());
    }
  }, [firstPrice, secondPriceData, onSecondPriceChange]);

  return (
    // staggered children 적용 예정
    <>
      <S.Container>
        <S.Contents>
          <section>
            <h3>체크인</h3>
            <span>{remainingTimes} 시간 남았어요</span>
          </section>
          <section>
            <h3>숙박일</h3>
            <span>
              {STD} - {ETD}
            </span>
            {/* 23.20 (수) 17:00 ~ 23.21 (목) 10:00 */}
          </section>
        </S.Contents>
        <InputSection
          placeHolder="지정 시간"
          inputPosition="center"
          text={["체크인", "시간전에"]}
          inputData={downTimeAfter}
          onDataChange={onDownTimeAfterChange}
          remainingTimes={remainingTimes}
        />
        <InputSection
          placeHolder="지정 가격"
          inputPosition="left"
          text={["원으로 가격을 내릴게요"]}
          inputData={secondPriceData}
          onDataChange={onSecondPriceChange}
          maxPrice={Number(firstPrice)}
        />
      </S.Container>
      <S.Hr />
    </>
  );
};

export default SecondPriceTag;
