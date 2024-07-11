import styled, { type CSSProp } from "styled-components";

import { StyledFooter } from "@/components/ui/bottom-sheet/styles.ts";
import {
  BgMap,
  type BgType,
  type DirectionType,
} from "@/components/ui/dialog/types.ts";
import breakpoints from "@/styles/breakpoints.ts";
import { remCalc } from "@/utils/styleFormatter.ts";

export const StyledDialog = styled.div`
  position: fixed;
  top: 50%;
  left: 0;
  right: 0;
  width: ${({ theme }) => theme.sizes.dialog};
  max-width: 360px;
  margin-left: auto;
  margin-right: auto;

  transform: translateY(-50%);
  z-index: 10;

  @media (min-width: ${breakpoints.sm}) {
    width: 360px;
  }
`;

export const StyledDialogContent = styled.div.withConfig({
  shouldForwardProp: (prop) => !["css", "bg"].includes(prop),
})<{ css?: CSSProp; bg?: BgType }>`
  background-color: ${({ theme, bg }) =>
    bg ? theme.color[BgMap[bg]] : theme.color.white};
  color: ${({ theme, bg }) =>
    bg === BgMap.black ? theme.color.white : theme.color.black};

  padding: ${remCalc("40px")} ${remCalc("20px")};
  border-radius: 16px;
  box-shadow: 0px -2px 5px rgba(0, 0, 0, 0.2);

  ${({ css }) => css};
`;

export const StyledDialogFooter = styled(StyledFooter).withConfig({
  shouldForwardProp: (prop) => !["direction"].includes(prop),
})<{ direction?: DirectionType }>`
  padding-bottom: 0;
`;

export const StyledSpacing = styled.div`
  margin-top: 1rem;
`;
