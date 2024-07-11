import { styled } from "styled-components";

import type { ColorKeys } from "@/styles/theme.ts";

import { remCalc } from "@/utils/styleFormatter.ts";

export type LayoutStyleProps = {
  bg?: ColorKeys;
  /**
   * padding-top
   */
  pt?: number;
  /**
   * padding-bottom
   */
  pb?: number;
  /**
   * padding-block
   */
  paddingBlock?: number;
  /**
   * padding-inline
   */
  paddingInline?: number;
};

export const Wrapper = styled.div.withConfig({
  shouldForwardProp: (prop) =>
    !["bg", "pt", "pb", "paddingBlock", "paddingInline"].includes(prop),
})<LayoutStyleProps>`
  width: 100%;
  min-height: 100%;
  max-width: 768px;
  min-width: 360px;
  position: relative;
  margin: 0 auto;

  background-color: ${({ theme, bg }) =>
    bg ? theme.color[bg] : theme.color.white};
  padding-top: ${({ pt }) => (pt ? `calc(56px + ${remCalc(pt)})` : undefined)};
  padding-bottom: ${({ pb }) =>
    pb ? `calc(78px + ${remCalc(pb)})` : undefined};
  padding-block: ${({ paddingBlock }) =>
    paddingBlock ? remCalc(paddingBlock) : undefined};
  padding-inline: ${({ paddingInline }) =>
    paddingInline ? remCalc(paddingInline) : undefined};
`;
