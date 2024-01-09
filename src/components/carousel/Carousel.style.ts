import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import styled from "styled-components";

export const CarouselContainer = styled.div<{
  $height: number;
}>`
  position: relative;

  width: 100%;
  min-height: ${(props) => `${props.$height}px`};
  height: ${(props) => `${props.$height}px`};

  overflow: hidden;

  touch-action: pan-y;
`;

export const SliderWrapper = styled.div`
  width: 100%;

  overflow: hidden;
`;

export const SliderContainer = styled.div`
  display: flex;

  width: 100%;
  height: 100%;
`;

export const ImageWrapper = styled.div<{
  $height: number;
}>`
  width: 100%;
  min-height: ${(props) => `${props.$height}px`};
  height: ${(props) => `${props.$height}px`};

  flex: 0 0 auto;

  img {
    width: 100%;
    height: ${(props) => `${props.$height}px`};
    object-fit: cover;
  }
`;

export const ButtonContainer = styled.div`
  position: absolute;
  top: 50%;
  width: 100%;

  display: flex;
  justify-content: space-between;

  transform: translateY(-50%);

  pointer-events: none;
`;

export const Button = styled.button<{ $visible: boolean }>`
  position: absolute;
  top: 50%;
  width: 28px;
  height: 28px;

  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.5);
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);

  opacity: ${(props) => (props.$visible ? 1 : 0)};
  transform: translateY(-50%) scale(${(props) => (props.$visible ? 1 : 0.7)});
  transition:
    opacity 0.5s cubic-bezier(0.5, -0.75, 0.7, 2),
    transform 0.6s cubic-bezier(0.5, -0.75, 0.7, 2),
    background-color 0.5s ease;

  pointer-events: ${(props) => (props.$visible ? "all" : "none")};

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
