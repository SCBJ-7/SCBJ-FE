import { ColorKeys } from "@/styles/theme";
import { hexToRgba } from "@utils/hexTorgba.ts";
import styled, { DefaultTheme } from "styled-components";

export const InputWrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  & > .input_wrapper {
    position: relative;
  }
`;

export const Label = styled.label`
  ${({ theme }) => theme.typo.title5}
  color: ${({ theme }) => theme.color.greyScale1};
  font-weight: 400;
`;

export const Input = styled.input`
  width: 100%;
  height: 48px;

  border: 1px solid ${({ theme }) => theme.color.greyScale5};
  border-radius: 8px;

  padding-left: 0.5rem;

  color: ${({ theme }) => theme.color.yanoljaPink};

  &::placeholder {
    ${({ theme }) => theme.typo.caption1}
    color: ${({ theme }) => theme.color.greyScale5};
    font-weight: 300;
  }

  &:focus {
    outline: none;
    border: 2px solid ${({ theme }) => theme.color.percentBlue};
  }

  transition: border 0.1s ease-in-out;

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  &[type="number"] {
    -moz-appearance: textfield;
  }
`;

export interface ButtonVariantProps {
  variant: "solid" | "outline";
  color: ColorKeys;
}

const buttonStyles = {
  solid: (theme: DefaultTheme, color: ColorKeys) => `
  border: 1px solid ${theme.color[color]};

  background-color: ${theme.color[color]};
  color: ${theme.color.white};

  &:hover {
  background-color: ${hexToRgba(theme.color[color], 0.9)};
  }
  
  &:focus {
  background-color: ${hexToRgba(theme.color[color], 0.95)};
  }
  `,
  outline: (theme: DefaultTheme, color: ColorKeys) => `
  border: 1px solid  ${theme.color[color]};

  color:  ${theme.color[color]};
  background-color: unset;

  &:hover {
    background-color: ${hexToRgba(theme.color[color], 0.1)};
  }

  &:focus {
    background-color: ${hexToRgba(theme.color[color], 0.2)};
  }
  `,
};

export const ConFirmButton = styled.button.withConfig({
  shouldForwardProp: (prop) => !["variant", "color"].includes(prop),
})<ButtonVariantProps>`
  ${({ theme }) => theme.typo.caption2}
  position: absolute;

  width: 72px;
  height: 28px;

  border-radius: 8px;

  top: 10px;
  right: 10px;

  ${({ variant, color, theme }) => buttonStyles[variant](theme, color)};

  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
`;

interface InputCaptionProps {
  error?: boolean;
}

export const InputCaption = styled.p.withConfig({
  shouldForwardProp: (prop) => !["error", "success"].includes(prop),
})<InputCaptionProps>`
  color: ${({ error, theme }) =>
    error ? theme.color.cautionRed : theme.color.percentBlue};

  ${({ theme }) => theme.typo.caption3}
`;
