import { css } from "styled-components";

import border from "./border";
import breakpoints from "./breakpoints";
import color from "./color";
import sizes from "./sizes";
import typography from "./typography";

export const theme = {
  color,
  ...typography,
  sizes,
  border,
  breakpoints,
  scroll: css`
    overflow-y: scroll;
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
    &::-webkit-scrollbar {
      display: none; /* Chrome, Safari, Opera*/
    }
  `,
  unableToDrag: css`
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  `,
};

type TypoType = typeof theme.typo;
export type TypoKeys = keyof Omit<
  TypoType,
  "letterSpacings" | "lineHeights" | "fontWeights" | "fontSizes"
>;
export type ColorKeys = keyof typeof theme.color;
export const colorKeys = Object.keys(theme.color) as Array<
  keyof typeof theme.color
>;

// export const breakpoints = {
//   tablet: "576px",
//   mobile: "390px",
// };
