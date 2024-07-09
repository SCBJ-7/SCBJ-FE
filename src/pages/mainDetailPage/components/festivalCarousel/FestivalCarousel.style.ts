import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";
import styled, { css } from "styled-components";

export const Container = styled.div<{ $height: number }>`
  position: relative;

  width: 100%;
  min-height: ${(props) => `${props.$height}px`};
  height: ${(props) => `${props.$height}px`};
  background-color: white;
  display: flex;
  align-items: center;
  margin-top: 16px;
  overflow: hidden;
  cursor: grab;

  touch-action: pan-y;
`;

export const SliderWrapper = styled.div`
  width: 100%;
  overflow: hidden;
`;

export const SliderContainer = styled.div`
  display: flex;

  height: 100%;
`;

export const ImageShadowWrapper = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 90px;
  z-index: 2;
  background-image: linear-gradient(rgba(39, 50, 60, 0.5), rgba(39, 50, 60, 0));
`;

export const ItemWrapper = styled.div<{
  $height: number;
}>`
  display: flex;
  justify-content: center;
  position: relative;
  min-width: 351px;
  min-height: ${(props) => `${props.$height}px`};
  height: ${(props) => `${props.$height}px`};
  display: flex;
`;

export const Item = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  align-items: center;
  padding: 0 20px;
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.color.greyScale5};
  img {
    width: 76px;
    height: 88px;
    object-fit: cover;
  }
`;

export const ItemContent = styled.div`
  width: 180px;
  display: flex;
  flex-direction: column;
  padding: 14px 0;
  gap: 8px;
  height: 88px;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const Name = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;

  ${({ theme }) => theme.typo.button4};
`;
export const Period = styled.div`
  text-overflow: ellipsis;

  font-size: 12px;
  color: ${({ theme }) => theme.color.greyScale1};

  span {
    color: ${({ theme }) => theme.color.greyScale3};
  }
`;

export const Place = styled.div`
  font-size: 12px;
  span {
    color: ${({ theme }) => theme.color.greyScale3};
  }
  text-overflow: ellipsis;
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
