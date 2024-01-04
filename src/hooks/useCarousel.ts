import { useRef, useState } from "react";

export const useCarousel = (totalSlides: number) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
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
