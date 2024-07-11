import styled, { CSSProperties, css } from "styled-components";

import type { ColorKeys, TypoKeys } from "@/styles/theme.ts";

export interface IStyledTextProps {
  color?: ColorKeys;
  typo: TypoKeys;
  isEllipsis?: boolean;
  textAlign?: CSSProperties["textAlign"];
}

export type StyledEmEmProps = {
  color?: ColorKeys;
};

export const StyledTypo = styled.span.withConfig({
  shouldForwardProp: (prop) =>
    !["color", "typo", "isEllipsis", "textAlign"].includes(prop),
})<IStyledTextProps>`
  color: ${({ color, theme }) => (color && theme.color[color]) || "inherit"};

  ${({ theme, typo }) => theme.typo[typo]};

  text-align: ${({ textAlign }) => textAlign || ""};

  ${({ isEllipsis }) =>
    isEllipsis &&
    css`
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    `};

  &.pre {
    white-space: pre-wrap;
  }
`;

export const StyledEm = styled.em.withConfig({
  shouldForwardProp: (prop) => !["color"].includes(prop),
})<StyledEmEmProps>`
  color: ${({ theme, color }) => (color && theme.color[color]) || "inherit"};
`;
