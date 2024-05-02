import styled, { css, DefaultTheme } from "styled-components";

import IconHeart from "@/assets/icons/ic_heart-fill.svg?react";
import { hexToRgba } from "@/utils/styleFormatter";

export { Text } from "@/pages/roomDetailPage/RoomDetail.style";

export const Wrapper = styled.section`
  width: 100%;
  max-width: 768px;

  padding-block-start: 0.825rem;
  padding-block-end: 1.875rem;

  padding-inline: 1.25rem;

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

export const Flex = styled.div`
  display: flex;
`;

export const ColWrapper = styled(Flex)`
  flex-direction: column;
  gap: 0.375rem;
  flex: 1;
`;

export const Row2 = styled(Flex)`
  gap: 0.5rem;
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

  width: 70%;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 75%;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 100%;
  }
`;

export const Heart = styled(IconHeart)`
  display: flex;
  align-items: center;
`;
