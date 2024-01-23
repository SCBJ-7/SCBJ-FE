import { useCarousel } from "@hooks/common/useCarousel";
import { useCarouselSize } from "@hooks/common/useCarouselSize";
import * as S from "./WeekendCarousel.style.ts";
import { LocaleItem, WeekendItem } from "@type/saleSection.ts";
import WeekendUnit from "./weekendCarouselUnit/WeekendUnit.tsx";
import { useEffect } from "react";

interface CarouselProps {
  weekendHotels: [number, WeekendItem][];
  onChangeLocale: React.Dispatch<
    React.SetStateAction<[number, string, LocaleItem[]]>
  >;
  height?: number;
  arrows?: boolean;
  infinite?: boolean;
  draggable?: boolean;
  innerShadow?: boolean;
}
let Slidingwidth = 0;
const WeekendCarousel = ({
  weekendHotels,
  height = 300,
  arrows = true,
  infinite = false,
  draggable = false,
}: CarouselProps) => {
  const { sliderRef } = useCarouselSize();

  useEffect(() => {
    const calcWidth = () => {
      const containerWidth = document.querySelector(
        ".week-container",
      ) as HTMLDivElement;

      return containerWidth.getBoundingClientRect().width;
    };
    Slidingwidth = calcWidth();

    window.addEventListener("resize", calcWidth);

    return () => {
      window.removeEventListener("resize", calcWidth);
    };
  });

  const {
    currentIndex,
    getSliderStyle,
    handleSliderNavigationClick,
    handleSliderTransitionEnd,
    handlerSliderMoueDown,
    handleSliderTouchStart,
  } = useCarousel({
    slideLength: weekendHotels.length,
    infinite,
    slideWidth: Slidingwidth * 0.7,
  });

  return (
    <S.CarouselContainer $height={height}>
      <S.SliderWrapper>
        <S.SliderContainer
          ref={sliderRef}
          style={getSliderStyle()}
          data-testid={`slide-${currentIndex}`}
          onMouseDown={draggable ? handlerSliderMoueDown : undefined}
          onTouchStart={draggable ? handleSliderTouchStart : undefined}
          onTransitionEnd={draggable ? handleSliderTransitionEnd : undefined}
        >
          {weekendHotels.map((item) => (
            <WeekendUnit key={item[1].id} item={item} />
          ))}
        </S.SliderContainer>
      </S.SliderWrapper>
      {arrows && (
        <S.ButtonContainer>
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
            $visible={infinite || currentIndex < weekendHotels.length - 1}
          >
            <S.RightIcon />
          </S.RightButton>
        </S.ButtonContainer>
      )}
    </S.CarouselContainer>
  );
};

export default WeekendCarousel;
