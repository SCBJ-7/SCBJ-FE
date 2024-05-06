import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";
import styled, { css } from "styled-components";

export const Container = styled.div<{ $height: number }>`
  position: relative;

  min-height: ${(props) => `${props.$height}px`};
  height: ${(props) => `${props.$height}px`};

  overflow: hidden;
  cursor: grab;

  touch-action: pan-y;
`;
export const SliderContainer = styled.div`
  display: flex;

  width: 100%;
  height: 100%;
`;

export const Title = styled.div`
  position: absolute;
  bottom: 30%;
  left: 24px;

  display: flex;
  flex-direction: column;
  gap: 16px;
  color: white;
  font-size: 24px;
  font-weight: 600;

  > div:nth-child(3) {
    font-size: 12px;
    font-weight: 500;
    text-decoration: underline;
  }
`;

export const ImageWrapper = styled.div<{
  $height: number;
}>`
  position: relative;
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
  background-color: white;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);

  opacity: ${(props) => (props.$visible ? 0.7 : 0)};

  transform: translateY(-50%) scale(${(props) => (props.$visible ? 1 : 0)});
  transition:
    opacity 0.5s cubic-bezier(0.5, -0.75, 0.7, 2),
    transform 0.6s cubic-bezier(0.5, -0.75, 0.7, 2);

  pointer-events: ${(props) => (props.$visible ? "all" : "none")};
  cursor: pointer;

  &:hover {
    opacity: 1;
  }

  @media (max-width: 375px) {
    opacity: ${(props) => (props.$visible ? 1 : 0)};
  }
`;

export const LeftButton = styled(Button)`
  left: 16px;
`;

export const RightButton = styled(Button)`
  right: 16px;
`;

export const IconStyle = css`
  width: 100%;
  font-size: 1.1rem;
  fill: rgba(0, 0, 0, 0.9);

  transition: fill 0.5s ease;
`;

export const LeftIcon = styled(PiCaretLeftBold)`
  ${IconStyle}
`;

export const RightIcon = styled(PiCaretRightBold)`
  ${IconStyle}
`;
