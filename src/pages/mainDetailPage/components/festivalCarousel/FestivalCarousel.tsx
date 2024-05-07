import * as S from "./FestivalCarousel.style";

import { FestivalDataProps } from "@/types/FestivalsData";

const FestivalCarousel = ({ festivals }: FestivalDataProps) => {
  return (
    <S.Container>
      {festivals.map((festival, i) => (
        <div key={i}>{festival?.name}</div>
      ))}
    </S.Container>
  );
};

export default FestivalCarousel;
