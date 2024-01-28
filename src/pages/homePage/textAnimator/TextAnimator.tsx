import { AnimatePresence } from "framer-motion";

import * as S from "./TextAnimator.style";

const TextAnimator = ({ text }: { text: string }) => {
  return (
    <S.Container>
      <AnimatePresence>
        {text === "서울" && (
          <S.LocaleDiv animate={{ y: [30, 0] }} exit={{ y: [0, -30] }}>
            서울
          </S.LocaleDiv>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {text === "부산" && (
          <S.LocaleDiv animate={{ y: [30, 0] }} exit={{ y: [0, -30] }}>
            부산
          </S.LocaleDiv>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {text === "제주" && (
          <S.LocaleDiv animate={{ y: [30, 0] }} exit={{ y: [0, -30] }}>
            제주
          </S.LocaleDiv>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {text === "강원" && (
          <S.LocaleDiv animate={{ y: [30, 0] }} exit={{ y: [0, -30] }}>
            강원
          </S.LocaleDiv>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {text === "전라" && (
          <S.LocaleDiv animate={{ y: [30, 0] }} exit={{ y: [0, -30] }}>
            전라
          </S.LocaleDiv>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {text === "경상" && (
          <S.LocaleDiv animate={{ y: [30, 0] }} exit={{ y: [0, -30] }}>
            경상
          </S.LocaleDiv>
        )}
      </AnimatePresence>
    </S.Container>
  );
};

export default TextAnimator;
