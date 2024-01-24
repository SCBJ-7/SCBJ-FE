import { AnimatePresence } from "framer-motion";
import * as S from "./PercentAnimator.style";
import { LocaleItem } from "@type/saleSection";

const PercentAnimator = ({
  percent,
  localeAndHotel,
}: {
  percent: number;
  localeAndHotel: [number, string, LocaleItem[]][];
}) => {
  return (
    <S.Container>
      {localeAndHotel.map(
        (item) =>
          item[2].length !== 0 && (
            <AnimatePresence key={item[2][0].id}>
              {item[2][item[2].length - 1].salePercentage === percent && (
                <S.PercentDiv animate={{ y: [30, 0] }} exit={{ y: [0, -30] }}>
                  최대 {Math.floor(percent * 100)}%
                </S.PercentDiv>
              )}
            </AnimatePresence>
          ),
      )}
    </S.Container>
  );
};

export default PercentAnimator;
