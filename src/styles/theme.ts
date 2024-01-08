import { css } from "styled-components";

const typoCreator = (fontSize: string, fontWeight: number) => {
  return css`
    font-size: ${fontSize};
    font-weight: ${fontWeight};
  `;
};

export const theme = {
  color: {
    primaryLight: "#FFECDB",
    primary: "#FF7C17",
    primaryDark: "#CB5A04",

    secondaryLight: "#CDEDFF",
    secondary: "#519EC9",
    secondaryDark: "#0072B1",

    black: "#151515",

    greyScale1: "#404040",
    greyScale2: "#686868",
    greyScale3: "#999999",
    greyScale4: "#B8B8B8",
    greyScale5: "#CDCDCD",
    greyScale6: "#E9E9E9",
  },
  typo: {
    title1: typoCreator("1.625rem", 700),
    title2: typoCreator("1.375rem", 600),
    title3: typoCreator("1.125rem", 600),
    title4: typoCreator("1rem", 500),
    title5: typoCreator("0.875rem", 500),

    body1: typoCreator("1rem", 500),
    body2: typoCreator("0.875rem", 500),
    body3: typoCreator("0.75rem", 500),

    button1: typoCreator("0.875rem", 500),
    button2: typoCreator("0.75rem", 500),

    link1: typoCreator("0.875rem", 500),
    link2: typoCreator("0.75rem", 500),

    caption1: typoCreator("0.875rem", 500),
    caption2: typoCreator("0.75rem", 400),
    caption3: typoCreator("0.625rem", 400),
  },
};
