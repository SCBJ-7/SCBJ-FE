import { css } from "styled-components";

const typoCreator = (
  fontSize: string,
  fontWeight: number,
  // lineHeight: string
) => {
  return css`
    font-size: ${fontSize};
    font-weight: ${fontWeight};
    line-height: normal;
  `;
};

export const typo = {
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
};
