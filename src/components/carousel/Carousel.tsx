import { useCarousel } from "@/hooks/common/useCarousel";
import { useCarouselSize } from "@/hooks/common/useCarouselSize";

import * as S from "./Carousel.style.ts";
import ProgressiveImg from "../progressiveImg/ProgressiveImg.tsx";

interface CarouselProps {
  images: string[];
  height?: number;
  arrows?: boolean;
  infinite?: boolean;
  draggable?: boolean;
  innerShadow?: boolean;
}

const Carousel = ({
  height = 300,
  images,
  arrows = true,
  infinite = false,
  draggable = false,
  innerShadow = false,
}: CarouselProps) => {
  const slideList = infinite
    ? [images.at(-1), ...images, images.at(0)]
    : images;
  console.log(images.at(-1));
  const { slideWidth, sliderRef } = useCarouselSize();

  const {
    currentIndex,
    getSliderStyle,
    handleSliderNavigationClick,
    handleSliderTransitionEnd,
    handlerSliderMoueDown,
    handleSliderTouchStart,
  } = useCarousel({
    slideLength: slideList.length,
    infinite,
    slideWidth,
  });
  console.log("currentIndex", currentIndex);
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
          {innerShadow && <S.ImageShadowWrapper />}
          {slideList.map((imageUrl, index) => (
            <S.ImageWrapper key={index} $height={height}>
              <ProgressiveImg
                src={imageUrl ?? ""}
                alt={`Slide ${index}`}
                draggable={false}
                loading="lazy"
              />
            </S.ImageWrapper>
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
            $visible={infinite || currentIndex < images.length - 1}
          >
            <S.RightIcon />
          </S.RightButton>
        </S.ButtonContainer>
      )}
    </S.CarouselContainer>
  );
};

export default Carousel;
