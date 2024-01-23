import styled, { DefaultTheme, css } from "styled-components";

export interface CardItemStyleProps {
  type?: "normal" | "recipe";
}

const CardItemStyle = {
  normal: (theme: DefaultTheme) => css`
    & > .label {
      ${theme.typo.body4};
      color: ${theme.color.greyScale2};
    }

    & > .content {
      color: ${theme.color.black};
      ${theme.typo.body4};
    }
  `,
  recipe: (theme: DefaultTheme) => css`
    & > .label {
      color: ${theme.color.black};
      ${theme.typo.body2};
    }

    & > .content {
      color: ${theme.color.percentOrange};
      ${theme.typo.body2};
    }
  `,
};

export const CardItem = styled.div.withConfig({
  shouldForwardProp: (prop) => !["type"].includes(prop),
})<CardItemStyleProps>`
  display: flex;
  justify-content: space-between;

  ${({ type, theme }) => type && CardItemStyle[type](theme)};
`;

export const Hr = styled.hr`
  border: none;
  border-top: 1px dashed ${({ theme }) => theme.color.greyScale5};
  color: #fff;
  background-color: #fff;
  height: 1px;
  width: 100%;
`;
