import styled, { DefaultTheme } from "styled-components";

import breakpoints from "@/styles/breakpoints";
import { hexToRgba } from "@/utils/styleFormatter";

export const ErrorContainer = styled.main`
  width: 100%;
  height: 100%;

  background-color: ${({ theme }) => theme.color.white};
`;

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  height: 80%;
  gap: 2rem;

  padding-top: 218px;

  @media (max-width: ${breakpoints.md}) {
    padding-top: 120px;
  }

  @media (max-width: ${breakpoints.sm}) {
    padding-top: 120px;
  }
`;

export const LogoWrapper = styled.div`
  width: 90px;

  @media (max-width: ${breakpoints.md}) {
    width: 80px;
  }

  @media (max-width: ${breakpoints.sm}) {
    width: 70px;
  }
`;

export const TitleWrapper = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
`;

export const Title = styled.p`
  ${({ theme }) => theme.typo.title4};
  color: ${({ theme }) => theme.color.black};
`;

export const SubTitle = styled.p`
  ${({ theme }) => theme.typo.body4};
  color: ${({ theme }) => theme.color.greyScale2};
  line-height: 1.5;
  text-align: center;
`;

export const BottomWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 0 1.25rem;
  gap: 16px;
`;

interface ButtonVariantProps {
  variant: "solid" | "outline";
}

const buttonStyles = {
  solid: (theme: DefaultTheme) => `
    background-color: ${theme.color.percentOrange};
    color: ${theme.color.white};
    border: 1px solid ${theme.color.percentOrange};

    &:hover {
    background-color: ${theme.color.darkOrange};
    }
    &:focus {
    background-color: ${theme.color.darkOrange};
    }
  `,
  outline: (theme: DefaultTheme) => `
    color: ${theme.color.percentOrange};
    border: 1px solid ${theme.color.percentOrange}; 

    &:hover {
  background-color: ${hexToRgba(theme.color.lightOrange, 0.1)};
    }
    &:focus {
  background-color: ${hexToRgba(theme.color.lightOrange, 0.2)};
    }
  `,
};

export const Button = styled.button.withConfig({
  shouldForwardProp: (prop) => !["variant"].includes(prop),
})<ButtonVariantProps>`
  width: 60%;

  @media (max-width: ${breakpoints.md}) {
    width: 80%;
  }

  @media (max-width: ${breakpoints.sm}) {
    width: 100%;
  }

  ${({ theme }) => theme.typo.button3};

  border-radius: 8px;
  padding: 0.9rem;

  ${({ variant, theme }) => buttonStyles[variant](theme)};

  transition: background-color 0.2s ease-in-out;
`;
