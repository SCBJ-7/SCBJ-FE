import styled, { DefaultTheme } from "styled-components";
import { hexToRgba } from "@utils/hexTorgba";

export const PageContainer = styled.div`
  width: 100%;
  height: 100%;

  background-color: ${({ theme }) => theme.color.white};
`;

const breakpoints = {
  tablet: "768px",
  mobile: "390px",
};

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  height: 80%;
  gap: 2rem;

  padding-top: 20%;

  @media (max-width: ${breakpoints.mobile}) {
    padding-top: 30%;
  }
`;

export const PercentHotelLogo = styled.div`
  width: 200px;

  & > img {
    width: 100%;
  }

  @media (max-width: ${breakpoints.tablet}) {
    width: 170px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    width: 150px;
  }
`;

export const PercentHotelIcon = styled.div`
  width: 90px;

  & > img {
    width: 100%;
  }

  @media (max-width: ${breakpoints.tablet}) {
    width: 75px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    width: 60px;
  }
`;

export const XIcon = styled.div`
  width: 15px;

  & > img {
    width: 100%;
  }

  @media (max-width: ${breakpoints.mobile}) {
    width: 12px;
  }
`;

export const Title = styled.p`
  ${({ theme }) => theme.typo.title4};
  color: ${({ theme }) => theme.color.black};
`;

export const SubTitle = styled.p`
  ${({ theme }) => theme.typo.body4};
  color: ${({ theme }) => theme.color.black};
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

  @media (max-width: ${breakpoints.tablet}) {
    width: 80%;
  }

  @media (max-width: ${breakpoints.mobile}) {
    width: 100%;
  }

  ${({ theme }) => theme.typo.button3};

  border-radius: 8px;
  padding: 0.9rem;

  ${({ variant, theme }) => buttonStyles[variant](theme)};

  transition: background-color 0.2s ease-in-out;
`;
