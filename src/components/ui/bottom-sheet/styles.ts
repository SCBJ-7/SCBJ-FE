import styled, { DefaultTheme, css } from "styled-components";

import { BgMap, BgType, type AlignType, type DirectionType } from "./types";

import type { ButtonDirection, ButtonVariantType } from "./bottom-sheet-button";

import CloseSvg from "@/assets/icons/ic_close-button.svg?react";
import breakpoints from "@/styles/breakpoints";
import { remCalc } from "@/utils/styleFormatter";
import { hexToRgba } from "@/utils/styleFormatter";

const getVariantStyle = (theme: DefaultTheme) => ({
  outline: css`
    background: none;
    color: ${theme.color.percentOrange};
    border: 1px solid ${theme.color.percentOrange};

    &:hover {
      background-color: ${({ theme }) =>
        hexToRgba(theme.color.darkOrange, 0.5)};
    }
  `,
  fill: css`
    background-color: ${theme.color.percentOrange};
    color: ${theme.color.white};

    &:hover {
      background-color: ${({ theme }) => theme.color.darkOrange};
    }
  `,
  none: css`
    background: none;
    color: ${({ theme }) => theme.color.greyScale3};

    &:hover {
      background-color: ${({ theme }) => theme.color.greyScale7};
    }
  `,
});

export const StyledButtonGroup = styled.div.withConfig({
  shouldForwardProp: (prop) => !["direction", "variant"].includes(prop),
})<{ direction: ButtonDirection; variant: ButtonVariantType }>`
  display: flex;
  flex-direction: ${({ direction }) =>
    direction === "vertical" ? "column" : "row"};
  gap: ${({ variant }) => (variant === "none" ? 0 : "8px")};
  justify-content: center;
  margin-top: 1.5rem;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: ${breakpoints.sm}) {
    width: 100%;
  }

  @media (min-width: ${breakpoints.md}) {
    width: 100%;
    max-width: 70%;
  }
`;

export const StyledButton = styled.button.withConfig({
  shouldForwardProp: (prop) => !["variant"].includes(prop),
})<{ variant: ButtonVariantType }>`
  ${({ theme, variant }) => getVariantStyle(theme)[variant]};

  border-radius: 8px;
  padding: 0.7rem;

  ${({ theme }) => theme.typo["button2"]};
  transition: background-color 0.2s ease-in-out;

  width: 100%;
`;

export const StyledBottomSheet = styled.div.withConfig({
  shouldForwardProp: (prop) => !["bg"].includes(prop),
})<{ bg?: BgType }>`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  max-width: ${({ theme }) => theme.sizes.sheet};
  margin-left: auto;
  margin-right: auto;

  border-top-left-radius: 16px;
  border-top-right-radius: 16px;

  background-color: ${({ theme, bg }) =>
    bg ? theme.color[BgMap[bg]] : theme.color.white};
  --background-color: ${({ theme, bg }) =>
    bg ? theme.color[BgMap[bg]] : theme.color.white};

  color: ${({ theme, bg }) =>
    bg === BgMap.black ? theme.color.white : theme.color.black};
  box-shadow: 0px -2px 5px rgba(0, 0, 0, 0.2);
  z-index: 10;
`;

export const StyledBottomSheetContent = styled.div`
  padding: ${remCalc("20px")} ${remCalc("20px")} 0;

  &::after {
    content: "";
    position: absolute;
    background-color: var(--background-color);
    top: 100%;
    left: 0;
    right: 0;
    height: 200%;
  }
`;

export const StyledControl = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const ControlButton = styled.button`
  margin-left: auto;
  width: 1.25rem;
  height: 1.25rem;
`;

export const CloseIcon = styled(CloseSvg)`
  color: inherit;
  cursor: pointer;
  width: 1.2rem;
  height: 1.2rem;
`;

export const Dimmer = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: hidden;
  outline: 0;

  background-color: rgba(20 18 24/ 0.4);
  z-index: 10;
`;

const getAlignStyle = (align: AlignType) => {
  switch (align) {
    case "center":
      return "center";
    case "start":
      return "left";
    case "end":
      return "right";
  }
};

export const StyledBottomSheetTitle = styled.p.withConfig({
  shouldForwardProp: (prop) => !["align"].includes(prop),
})<{ align: AlignType }>`
  ${({ theme }) => theme.typo.title4};
  color: inherit;
  text-align: ${({ align }) => getAlignStyle(align)};
`;

const getDirection = (dir?: DirectionType) => {
  switch (dir) {
    case "horizontal":
      return "row";
    case "vertical":
      return "column";
    default:
      undefined;
  }
};

export const StyledFooter = styled.div.withConfig({
  shouldForwardProp: (prop) => !["direction"].includes(prop),
})<{ direction?: DirectionType }>`
  display: flex;
  ${({ direction }) =>
    direction &&
    `
    padding-top: 1.5rem;
  flex-direction: ${getDirection(direction)}; 
  gap: 8px;
  `}

  padding-bottom: 2rem;
`;
