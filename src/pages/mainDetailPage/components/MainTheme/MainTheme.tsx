import { useLocation } from "react-router-dom";

import * as S from "./MainTheme.style";
import FestivalCarousel from "../festivalCarousel/FestivalCarousel";

import { FirstFestivals, SecondFestivals } from "@/types/FestivalsData";

const MainTheme = () => {
  const { search } = useLocation();
  const params = new URLSearchParams(search); //
  const id = params.get("id");

  const festivals = id && id === "0" ? FirstFestivals : SecondFestivals;
  const title = id && id === "0" ? "벚꽃 축제 모음" : "국내 놀거리 모음";

  return (
    <S.Container>
      <S.Title>{title}</S.Title>
      <FestivalCarousel
        festivals={festivals}
        height={120}
        arrows={true}
        infinite={false}
        draggable={true}
      />
    </S.Container>
  );
};

export default MainTheme;
