import styled from "styled-components";

import { StyledFooter } from "@/components/ui/bottom-sheet/styles.ts";
import {
  BgMap,
  type BgType,
  type DirectionType,
} from "@/components/ui/dialog/types.ts";
import breakpoints from "@/styles/breakpoints.ts";
import { remCalc } from "@/utils/styleFormatter.ts";

export const StyledDialog = styled.div.withConfig({
  shouldForwardProp: (prop) => !["bg"].includes(prop),
})<{ bg?: BgType }>`
  position: fixed;
  top: 40%;
  left: 0;
  right: 0;
  width: ${({ theme }) => theme.sizes.dialog};
  max-width: 360px;
  margin-left: auto;
  margin-right: auto;

  border-radius: 16px;

  background-color: ${({ theme, bg }) =>
    bg ? theme.color[BgMap[bg]] : theme.color.white};

  color: ${({ theme, bg }) =>
    bg === BgMap.black ? theme.color.white : theme.color.black};
  box-shadow: 0px -2px 5px rgba(0, 0, 0, 0.2);
  z-index: 10;

  @media (min-width: ${breakpoints.sm}) {
    width: 360px;
  }
`;

export const StyledDialogContent = styled.div`
  padding: ${remCalc("40px")} ${remCalc("20px")};
`;

export const StyledDialogFooter = styled(StyledFooter).withConfig({
  shouldForwardProp: (prop) => !["direction"].includes(prop),
})<{ direction?: DirectionType }>`
  padding-bottom: 0;
`;

export const StyledSpaing = styled.div`
  margin-top: 1rem;
`;
