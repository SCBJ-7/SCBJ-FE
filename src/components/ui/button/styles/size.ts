import { type CSSProp, css } from "styled-components";

import { type ButtonSizeSet } from "../types";

export const getSize = (size: ButtonSizeSet = "sm"): CSSProp => {
  return SIZE_MAP[size];
};

const XsmallSize = css`
  padding-inline: ${({ theme }) => theme.sizes.space[3]};
  padding-block: ${({ theme }) => theme.sizes.space[1]};
`;

const SmallSize = css`
  padding-inline: ${({ theme }) => theme.sizes.space[4]};
  padding-block: ${({ theme }) => theme.sizes.space[2]};
`;

const MediumSize = css`
  padding-inline: ${({ theme }) => theme.sizes.space[6]};
  padding-block: ${({ theme }) => theme.sizes.space[3]};
`;

const LargeSizes = css`
  padding-inline: ${({ theme }) => theme.sizes.space[10]};
  padding-block: ${({ theme }) => theme.sizes.space[4]};
`;

export const SIZE_MAP: Record<ButtonSizeSet, CSSProp> = {
  xs: XsmallSize,
  sm: SmallSize,
  md: MediumSize,
  lg: LargeSizes,
};
