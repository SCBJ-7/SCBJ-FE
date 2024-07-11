import styled, { css, DefaultTheme } from "styled-components";

import breakpoints from "@/styles/breakpoints.ts";
import { hexToRgba, remCalc } from "@/utils/styleFormatter";

export { Text } from "@/pages/roomDetailPage/RoomDetail.style";

export const Wrapper = styled.section`
  width: 100%;
  max-width: 768px;
  max-height: 78px;

  padding-block-start: ${remCalc(24)};
  padding-block-end: ${remCalc(30)};

  padding-inline: ${remCalc(20)};

  position: fixed;
  bottom: 0;
  background-color: ${({ theme }) => theme.color.white};

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;

  box-shadow: 0 0 0.4rem rgba(5, 44, 82, 0.1);
  -webkit-clip-path: inset(-0.4rem 0 0 0);
  clip-path: inset(-0.4rem 0 0 0);

  z-index: 10;
`;

export type TButtonVariant = keyof ReturnType<typeof variantStyles>;

const variantStyles = (theme: DefaultTheme) => ({
  fill: css`
    background-color: ${theme.color.percentOrange};
    color: ${theme.color.white};
    &:hover {background-color: ${({ theme }) => theme.color.darkOrange};
  `,
  outline: css`
    border: 1px solid ${theme.color.percentOrange};
    color: ${theme.color.percentOrange};
    &:hover {background-color: ${({ theme }) =>
      hexToRgba(theme.color.percentOrange, 0.1)};
  `,
});

export const Button = styled.button.withConfig({
  shouldForwardProp: (prop) => prop !== "variant",
})<{ variant?: TButtonVariant }>`
  ${({ theme }) => theme.typo.button3}
  padding: 0.7rem 1rem;
  border-radius: 8px;

  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;

  transition:
    background-color,
    border-color 0.2s ease-in;

  ${({ variant, theme }) =>
    variant ? variantStyles(theme)[variant] : variantStyles(theme)["fill"]}

  &:disabled {
    background-color: ${({ theme }) => theme.color.greyScale5};
    color: ${({ theme }) => theme.color.white};

    &:hover {
      background-color: ${({ theme }) => theme.color.greyScale4};
    }
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 8px;
  width: 45%;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

export const PriceWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
`;

export const LikeButtonWrapper = styled.button`
  display: inline-flex;
  align-items: center;
  padding-right: 1rem;
  border-right: 1px solid ${({ theme }) => theme.color.greyScale6};

  & > svg {
    width: 32px;
    height: 32px;
  }
`;
