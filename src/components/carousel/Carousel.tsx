import { useCarousel } from "@hooks/useCarousel";
import * as S from "./Carousel.style.ts";

interface CarouselProps {
  images: string[];
  width?: number | string;
  height?: number;
  arrows?: boolean;
  infinite?: boolean;
  innerShadow?: boolean;
}

const Carousel = ({
  width = "100%",
  height = 300,
  images,
  arrows = true,
  infinite = false,
  innerShadow = false,
}: CarouselProps) => {
  const { sliderRef, currentIndex, handleNext, handlePrev, getSliderStyle } =
    useCarousel(images.length, infinite);

  return (
    <S.CarouselContainer $width={width} $height={height}>
      <S.SliderWrapper>
        <S.SliderContainer
          ref={sliderRef}
          style={getSliderStyle()}
          data-testid={`slide-${currentIndex}`}
        >
          {innerShadow && <S.ImageShadowWrapper />}
          {images.map((imageUrl, index) => (
            <S.ImageWrapper key={index} $width={width} $height={height}>
              <img src={imageUrl} alt={`Slide ${index}`} />
            </S.ImageWrapper>
          ))}
        </S.SliderContainer>
      </S.SliderWrapper>
      {arrows && (
        <S.ButtonContainer>
          <S.LeftButton
            aria-label="뒤로가기"
            onClick={handlePrev}
            $visible={infinite || currentIndex > 0}
          >
            <S.LeftIcon />
          </S.LeftButton>
          <S.RightButton
            aria-label="앞으로가기"
            onClick={handleNext}
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
