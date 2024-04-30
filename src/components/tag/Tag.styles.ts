import styled, { type DefaultTheme, css } from "styled-components";

const getVariantStyle = (theme: DefaultTheme) => ({
  outline: css`
    background-color: ${theme.color.white};
    color: ${theme.color.percentOrange};
  `,
});

const getRadiusStyle = () => ({
  rectangle: css`
    border-radius: 8px;
  `,
  pill: css`
    border-radius: 20px;
  `,
});

type ButtonProps = {
  variant: "outline";
  $isTextOnly: boolean;
  radius: "rectangle" | "pill";
};

export const StyledTag = styled.button.withConfig({
  shouldForwardProp: (prop) => !["variant", "radius"].includes(prop),
})<ButtonProps>`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 0.35rem 0.5rem;

  ${({ theme }) => theme.typo.caption4};

  border: 1px solid ${({ theme }) => theme.color.percentOrange};

  ${({ theme, variant }) => getVariantStyle(theme)[variant]};
  ${({ radius }) => getRadiusStyle()[radius]};

  aspect-ratio: ${({ $isTextOnly }) => ($isTextOnly ? "1/1" : "auto")}};
`;

export const StyledIcon = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;
