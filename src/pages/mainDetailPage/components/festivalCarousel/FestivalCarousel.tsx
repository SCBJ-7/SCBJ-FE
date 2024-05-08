import { useAnimateCarousel } from "@/hooks/common/useAnimateCarousel";
import * as S from "./FestivalCarousel.style";

import { FestivalData } from "@/types/FestivalsData"; // FestivalData 인터페이스를 가져옵니다.
import { useCarouselSize } from "@/hooks/common/useCarouselSize";

interface CarouselProps {
  festivals: FestivalData[];
  height?: number;
  arrows?: boolean;
  infinite?: boolean;
  draggable?: boolean;
  innerShadow?: boolean;
}

const FestivalCarousel = ({
  festivals,
  height = 300,
  arrows = true,
  infinite = false,
  draggable = false,
  innerShadow = false,
}: CarouselProps) => {
  const { slideWidth, sliderRef } = useCarouselSize();
  const {
    currentIndex,
    getSliderStyle,
    handleSliderNavigationClick,
    handleSliderTransitionEnd,
    handlerSliderMoueDown,
    handleSliderTouchStart,
    setIsPlay,
    setCurrentIndex,
  } = useAnimateCarousel({
    slideLength: festivals.length,
    infinite,
    slideWidth,
  });
  return (
    <S.Container
      $height={height}
      onTouchStart={(e) => e.preventDefault()}
      onMouseEnter={() => setIsPlay(false)}
      onMouseLeave={() => setIsPlay(true)}
    >
      <S.SliderContainer
        ref={sliderRef}
        style={getSliderStyle()}
        onMouseDown={draggable ? handlerSliderMoueDown : undefined}
        onTouchStart={draggable ? handleSliderTouchStart : undefined}
        onTransitionEnd={draggable ? handleSliderTransitionEnd : undefined}
      >
        {innerShadow && <S.ImageShadowWrapper />}
        {festivals.map((festival, i) => (
          <S.ItemWrapper key={i} $height={height}>
            <S.Item>
              <img src={festival?.image} />
              <S.ItemContent>
                <S.Name>{festival?.name}</S.Name>
                <S.Period>
                  <span>기간 &nbsp;</span> {festival?.startDate} ~
                  {festival?.endDate}
                </S.Period>
                <S.Place>
                  <span>장소 &nbsp;</span> {festival?.location}
                </S.Place>
              </S.ItemContent>
            </S.Item>
          </S.ItemWrapper>
        ))}
      </S.SliderContainer>
      {arrows && (
        <>
          <S.LeftButton
            aria-label="뒤로가기"
            onClick={handleSliderNavigationClick(currentIndex - 1)}
            $visible={infinite || currentIndex > 0}
          >
            <S.LeftIcon />
          </S.LeftButton>
          <S.RightButton
            aria-label="앞으로가기"
            onClick={handleSliderNavigationClick(currentIndex + 1)}
            $visible={infinite || currentIndex < festivals.length - 1}
          >
            <S.RightIcon />
          </S.RightButton>
        </>
      )}
    </S.Container>
  );
};

export default FestivalCarousel;
