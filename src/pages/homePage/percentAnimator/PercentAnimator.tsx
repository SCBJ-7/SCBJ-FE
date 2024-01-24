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
      {localeAndHotel.map((item) => (
        <AnimatePresence>
          {item[2][0].salePercentage === percent && (
            <S.PercentDiv animate={{ y: [30, 0] }} exit={{ y: [0, -30] }}>
              최대 {percent * 100}%
            </S.PercentDiv>
          )}
        </AnimatePresence>
      ))}
      {/* <AnimatePresence>
        {percent === "서울" && (
          <S.PercentDiv animate={{ y: [30, 0] }} exit={{ y: [0, -30] }}>
            서울
          </S.PercentDiv>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {percent === "부산" && (
          <S.PercentDiv animate={{ y: [30, 0] }} exit={{ y: [0, -30] }}>
            부산
          </S.PercentDiv>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {percent === "제주" && (
          <S.PercentDiv animate={{ y: [30, 0] }} exit={{ y: [0, -30] }}>
            제주
          </S.PercentDiv>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {percent === "강원" && (
          <S.PercentDiv animate={{ y: [30, 0] }} exit={{ y: [0, -30] }}>
            강원
          </S.PercentDiv>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {percent === "전라" && (
          <S.PercentDiv animate={{ y: [30, 0] }} exit={{ y: [0, -30] }}>
            전라
          </S.PercentDiv>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {percent === "경상" && (
          <S.PercentDiv animate={{ y: [30, 0] }} exit={{ y: [0, -30] }}>
            경상
          </S.PercentDiv>
        )}
      </AnimatePresence> */}
    </S.Container>
  );
};

export default PercentAnimator;
