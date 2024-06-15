import { css } from "styled-components";

const typoCreator = (fontSize: string, fontWeight: number) => {
  return css`
    font-size: ${fontSize};
    font-weight: ${fontWeight};
  `;
};

const typography = {
  typo: {
    title1: typoCreator("1.625rem", 600),
    title2: typoCreator("1.25rem", 600),
    title3: typoCreator("1.125rem", 600),
    title4: typoCreator("1.125rem", 500),
    title5: typoCreator("1rem", 400),
    body1: typoCreator("1rem", 600),
    body2: typoCreator("1rem", 500),
    body3: typoCreator("0.875rem", 500),
    body4: typoCreator("0.875rem", 400),
    body5: typoCreator("0.75rem", 500),
    body6: typoCreator("0.75rem", 400),
    button1: typoCreator("1.125rem", 500),
    button2: typoCreator("1rem", 500),
    button3: typoCreator("1rem", 400),
    button4: typoCreator("0.875rem", 600),
    button5: typoCreator("0.875rem", 500),
    button6: typoCreator("0.75rem", 500),
    button7: typoCreator("0.75rem", 400),
    caption1: typoCreator("0.875rem", 300),
    caption2: typoCreator("0.75rem", 600),
    caption3: typoCreator("0.75rem", 500),
    caption4: typoCreator("0.625rem", 600),
    caption5: typoCreator("0.625rem", 400),
  },

  letterSpacings: {
    tighter: "-0.05em",
    tight: "-0.025em",
    normal: "0",
    wide: "0.025em",
    wider: "0.05em",
    widest: "0.1em",
  },

  lineHeights: {
    normal: "normal",
    none: 1,
    shorter: 1.25,
    short: 1.375,
    base: 1.5,
    tall: 1.625,
    taller: "2",
    "3": ".75rem",
    "4": "1rem",
    "5": "1.25rem",
    "6": "1.5rem",
    "7": "1.75rem",
    "8": "2rem",
    "9": "2.25rem",
    "10": "2.5rem",
  },

  fontWeights: {
    hairline: 100,
    thin: 200,
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900,
  },

  fontSizes: {
    "3xs": "0.45rem",
    "2xs": "0.625rem",
    xs: "0.75rem",
    sm: "0.875rem",
    md: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem",
    "5xl": "3rem",
    "6xl": "3.75rem",
    "7xl": "4.5rem",
    "8xl": "6rem",
    "9xl": "8rem",
  },
};

export default typography;
