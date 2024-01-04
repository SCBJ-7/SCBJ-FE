import { useCarousel } from "@hooks/useCarousel";
import * as S from "./Carousel.styles";

interface CarouselProps {
  images: string[];
  width?: number | string;
  height?: number;
  arrows?: boolean;
}

const Carousel = ({
  width = "100%",
  height = 300,
  images,
  arrows = true,
}: CarouselProps) => {
  const { sliderRef, currentIndex, handleNext, handlePrev, getSliderStyle } =
    useCarousel(images.length);

  return (
    <S.CarouselContainer $width={width} $height={height}>
      <S.SliderWrapper>
        <S.SliderContainer ref={sliderRef} style={getSliderStyle()}>
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
            $visible={currentIndex > 0}
          >
            <S.LeftIcon />
          </S.LeftButton>
          <S.RightButton
            aria-label="앞으로가기"
            onClick={handleNext}
            $visible={currentIndex < images.length - 1}
          >
            <S.RightIcon />
          </S.RightButton>
        </S.ButtonContainer>
      )}
    </S.CarouselContainer>
  );
};

export default Carousel;
