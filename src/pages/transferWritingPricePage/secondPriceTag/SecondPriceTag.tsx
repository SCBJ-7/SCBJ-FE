// import { format } from "date-fns";
// import { ko } from "date-fns/locale";
import { stagger, useAnimate } from "framer-motion";
import { useEffect } from "react";

import * as S from "./SecondPriceTag.style";
import InputSection from "../inputSection/InputSection";

import priceFormat from "@/utils/priceFormat";

interface PriceTagProps {
  firstPrice: string;
  secondPriceData: string;
  onSecondPriceChange: React.Dispatch<React.SetStateAction<string>>;
  downTimeAfter: string;
  onDownTimeAfterChange: React.Dispatch<React.SetStateAction<string>>;
  remainingDays: number;
  remainingTimes: number;
  startDate: Date;
  endDate: Date;
  secondPriceInputRef: React.MutableRefObject<null>;
  secondTimeInputRef: React.MutableRefObject<null>;
}

const SecondPriceTag = ({
  firstPrice,
  secondPriceData,
  onSecondPriceChange,
  downTimeAfter,
  onDownTimeAfterChange,
  remainingTimes,
  // startDate,
  // endDate,
  secondPriceInputRef,
  secondTimeInputRef,
}: PriceTagProps) => {
  // const STD = format(startDate, "MM. dd (ccc) HH:mm", { locale: ko });
  // const ETD = format(endDate, "MM. dd (ccc) HH:mm", { locale: ko });

  useEffect(() => {
    const processedfirstPrice = Number(firstPrice.split(",").join(""));
    const processedSecondPrice = Number(secondPriceData.split(",").join(""));
    if (processedSecondPrice >= processedfirstPrice) {
      // 만약 1차 가격을 내려서 2차 가격보다 낮아진다면 2차 가격은 최대 1차 가격 - 1000원으로 변경
      let updated = processedfirstPrice - 1000;
      if (updated < 0) {
        updated = 0;
      }

      onSecondPriceChange(priceFormat(updated));
    }
  }, [firstPrice, secondPriceData, onSecondPriceChange]);

  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate(
      ".children",
      { opacity: [0, 1], x: [-10, 0] },
      { delay: stagger(0.2) },
    );
  }, [animate]);

  return (
    <S.Container ref={scope} initial={{ y: 20 }} animate={{ y: 0 }}>
      <S.Contents>2차 거래 희망가를 입력해주세요</S.Contents>
      <InputSection
        inputRef={secondTimeInputRef}
        placeHolder="지정 시간"
        inputPosition="center"
        text={["체크인", "시간전에"]}
        inputData={downTimeAfter}
        remainingTimes={remainingTimes}
        onDataChange={onDownTimeAfterChange}
        type="time"
      />
      <InputSection
        inputRef={secondPriceInputRef}
        placeHolder="지정 가격"
        inputPosition="left"
        text={["원으로 가격을 내릴게요"]}
        inputData={secondPriceData}
        onDataChange={onSecondPriceChange}
        maxPrice={Number(firstPrice.split(",").join(""))}
      />
    </S.Container>
  );
};

export default SecondPriceTag;
