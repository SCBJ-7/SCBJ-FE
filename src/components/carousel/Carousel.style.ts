import styled from "styled-components";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export const CarouselContainer = styled.div<{
  $width: number | string;
  $height: number;
}>`
  position: relative;
  width: ${(props) =>
    typeof props.$width === "number" ? `${props.$width}px` : props.$width};
  min-height: ${(props) => `${props.$height}px`};
  height: ${(props) => `${props.$height}px`};
  overflow: hidden;
`;

export const SliderWrapper = styled.div`
  width: 100%;
  overflow: hidden;
`;

export const SliderContainer = styled.div`
  display: flex;
  width: fit-content;
  height: 100%;
  transition: transform 0.3s ease-in-out;
`;

export const ImageWrapper = styled.div<{
  $width: number | string;
  $height: number;
}>`
  flex: 0 0 auto;
  width: ${(props) =>
    typeof props.$width === "number" ? `${props.$width}px` : props.$width};
  min-height: ${(props) => `${props.$height}px`};
  height: ${(props) => `${props.$height}px`};
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const ButtonContainer = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  justify-content: space-between;
  width: 100%;
  pointer-events: none;
`;

export const Button = styled.button<{ $visible: boolean }>`
  pointer-events: ${(props) => (props.$visible ? "all" : "none")};
  position: absolute;
  top: 50%;
  transform: translateY(-50%) scale(${(props) => (props.$visible ? 1 : 0.7)});
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.5);
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
  opacity: ${(props) => (props.$visible ? 1 : 0)};
  transition:
    opacity 0.5s cubic-bezier(0.5, -0.75, 0.7, 2),
    transform 0.6s cubic-bezier(0.5, -0.75, 0.7, 2),
    background-color 0.5s ease;

  &:hover {
    cursor: pointer;
    background-color: rgba(255, 255, 255, 0.7);
    svg {
      fill: rgba(0, 0, 0, 0.4);
    }
  }
`;

export const LeftButton = styled(Button)`
  left: 16px;
`;

export const RightButton = styled(Button)`
  right: 16px;
`;

export const LeftIcon = styled(FaChevronLeft)`
  width: 100%;
  font-size: 1rem;
  fill: rgba(0, 0, 0, 0.3);
  transition: fill 0.5s ease;
`;

export const RightIcon = styled(FaChevronRight)`
  width: 100%;
  font-size: 1rem;
  fill: rgba(0, 0, 0, 0.3);
  transition: fill 0.5s ease;
`;
