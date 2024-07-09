import NoResult from "@/components/noResult/NoResult.tsx";
import { useCarousel } from "@/hooks/common/useCarousel";
import { useCarouselSize } from "@/hooks/common/useCarouselSize";
import { LocaleItem, WeekendItem } from "@/types/saleSection.ts";

import * as S from "./WeekendCarousel.style.ts";
import WeekendUnit from "./weekendCarouselUnit/WeekendUnit.tsx";

interface CarouselProps {
  weekendHotels: [number, WeekendItem][] | undefined;
  onChangeLocale: React.Dispatch<
    React.SetStateAction<[number, string, LocaleItem[]]>
  >;
  height?: number;
  arrows?: boolean;
  infinite?: boolean;
  draggable?: boolean;
  innerShadow?: boolean;
}

const WeekendCarousel = ({
  weekendHotels,
  height = 300,
  arrows = true,
  infinite = false,
  draggable = false,
}: CarouselProps) => {
  const { sliderRef } = useCarouselSize();

  const {
    currentIndex,
    getSliderStyle,
    handleSliderNavigationClick,
    handleSliderTransitionEnd,
    handlerSliderMoueDown,
    handleSliderTouchStart,
  } = useCarousel({
    slideLength: weekendHotels?.length,
    infinite,
    slideWidth: window.innerWidth > 500 ? 450 + 24 : 240 + 24,
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
          {weekendHotels ? (
            weekendHotels.map((item) => (
              <WeekendUnit key={item[1].id} item={item} />
            ))
          ) : (
            <NoResult title="주말 특가 상품이 없습니다." desc=""></NoResult>
          )}
        </S.SliderContainer>
      </S.SliderWrapper>
      {weekendHotels && arrows && (
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
