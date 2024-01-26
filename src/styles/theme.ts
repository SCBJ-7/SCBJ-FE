import { css } from "styled-components";

const typoCreator = (fontSize: string, fontWeight: number) => {
  return css`
    font-size: ${fontSize};
    font-weight: ${fontWeight};
  `;
};

export const theme = {
  color: {
    lightOrange: "#FFEDDA",
    percentOrange: "#FF7C17",
    darkOrange: "#E76500",

    lightBlue: "#D5EBFF",
    percentBlue: "#0A76DA",
    darkBlue: "#004789",

    cautionRed: "#FF4949",

    black: "#151515",
    white: "#FFFFFF",

    greyScale1: "#404040",
    greyScale2: "#686868",
    greyScale3: "#999999",
    greyScale4: "#B8B8B8",
    greyScale5: "#CDCDCD",
    greyScale6: "#E9E9E9",
    greyScale7: "#F6F6F6",

    yanoljaPink: "#FF3478",
  },
  typo: {
    title1: typoCreator("1.625rem", 700),
    title2: typoCreator("1.25rem", 700),
    title3: typoCreator("1.125rem", 700),
    title4: typoCreator("1.125rem", 600),
    title5: typoCreator("1rem", 500),

    body1: typoCreator("1rem", 700),
    body2: typoCreator("1rem", 600),
    body3: typoCreator("0.875rem", 600),
    body4: typoCreator("0.875rem", 500),
    body5: typoCreator("0.75rem", 600),
    body6: typoCreator("0.75rem", 500),

    button1: typoCreator("1.125rem", 500),
    button2: typoCreator("1rem", 700),
    button3: typoCreator("1rem", 500),
    button4: typoCreator("0.875rem", 700),
    button5: typoCreator("0.875rem", 600),
    button6: typoCreator("0.75rem", 600),
    button7: typoCreator("0.75rem", 500),

    caption1: typoCreator("0.875rem", 400),
    caption2: typoCreator("0.75rem", 700),
    caption3: typoCreator("0.75rem", 500),
    caption4: typoCreator("0.625rem", 700),
    caption5: typoCreator("0.625rem", 500),
  },
  border: {
    strokeThin: "1px solid #E9E9E9",
    strokeWide: "1px solid #F6F6F6",
    strokeDash: "1px solid #CDCDCD",
  },
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

export type TypoKeys = keyof typeof theme.typo;
export type ColorKeys = keyof typeof theme.color;

export const breakpoints = {
  tablet: "576px",
  mobile: "390px",
};
