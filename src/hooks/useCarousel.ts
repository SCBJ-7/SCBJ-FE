import { useRef, useState } from "react";

export const useCarousel = (totalSlides: number, infinite: boolean) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  const handleNext = () => {
    setCurrentIndex((prev) =>
      infinite ? (prev + 1) % totalSlides : Math.min(prev + 1, totalSlides - 1),
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      infinite ? (prev - 1 + totalSlides) % totalSlides : Math.max(prev - 1, 0),
    );
  };

  const getSliderStyle = () => {
    return {
      transform: `translateX(-${currentIndex * 100}%)`,
      transition: "transform 0.5s ease",
    };
  };

  return {
    sliderRef,
    currentIndex,
    handleNext,
    handlePrev,
    getSliderStyle,
  };
};
