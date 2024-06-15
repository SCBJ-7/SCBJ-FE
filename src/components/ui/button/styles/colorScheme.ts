import { type ElementType } from "react";
import { type CSSProp, css } from "styled-components";

import {
  type ButtonColorScheme,
  type ButtonProps,
  type ButtonVariants,
} from "../types";

import { theme } from "@/styles/theme";
import { hexToRgba } from "@/utils/styleFormatter";

type ColorSchemeWithVariant = {
  [variant in ButtonVariants]: CSSProp;
};

const createSolidColorScheme = (color: ColorScheme) => css`
  color: ${theme.color.white};
  border: 1px solid transparent;
  background-color: ${color.base};

  &:hover {
    background-color: ${color.light};
  }

  &:active {
    background-color: ${color.dark};
  }

  &:disabled {
    opacity: 0.8;
    cursor: not-allowed;
    background-color: ${theme.color.greyScale5};
  }
`;

const createOutlineColorScheme = (color: ColorScheme) => css`
  color: ${color.base};
  border: 1px solid ${color.base};
  background-color: transparent;

  &:hover {
    background-color: ${hexToRgba(color.base, 0.05)};
  }

  &:active {
    background-color: ${hexToRgba(color.dark, 0.2)};
  }

  &:disabled {
    opacity: 0.8;
    color: ${theme.color.greyScale5};
    border: 1px solid ${theme.color.greyScale5};
    background-color: transparent;
  }
`;

const createGhostColorScheme = (color: ColorScheme) => css`
  color: ${color.base};
  border: none;
  background-color: transparent;
  border: 1px solid transparent;

  &:hover {
    color: ${color.base};
    background-color: ${hexToRgba(color.base, 0.05)};
  }

  &:active {
    background-color: ${hexToRgba(color.base, 0.12)};
  }

  &:disabled {
    opacity: 0.8;
    color: ${theme.color.greyScale5};
    border: none;
    background-color: transparent;
  }
`;

const createLinkColorScheme = (color: ColorScheme) => css`
  color: ${color.base};
  border: 1px solid transparent;
  background-color: transparent;

  &:hover {
    color: ${color.base};
    text-decoration: underline;
  }
  &:active {
    color: ${color.dark};
  }

  &:disabled {
    border: none;
    text-decoration: none;
    opacity: 0.4;
  }
`;

interface ColorScheme {
  base: string;
  light: string;
  dark: string;
}

const COLOR_SCHEME_MAP: Record<ButtonColorScheme, ColorScheme> = {
  blue: {
    base: theme.color.percentBlue,
    light: hexToRgba(theme.color.percentBlue, 0.85),
    dark: theme.color.darkBlue,
  },

  orange: {
    base: theme.color.percentOrange,
    light: hexToRgba(theme.color.percentOrange, 0.85),
    dark: theme.color.darkOrange,
  },

  pink: {
    base: theme.color.yanoljaPink,
    light: hexToRgba(theme.color.yanoljaPink, 0.85),
    dark: "#CC0044",
  },

  black: {
    base: "#18181E",
    light: hexToRgba("#18181B", 0.85),
    dark: "#0C0C0E",
  },
};

console.log("새깔:", COLOR_SCHEME_MAP.black.light);

const BUTTON_COLOR_SCHEME_MAP: Record<
  ButtonColorScheme,
  ColorSchemeWithVariant
> = {
  blue: {
    solid: createSolidColorScheme(COLOR_SCHEME_MAP.blue),
    outline: createOutlineColorScheme(COLOR_SCHEME_MAP.blue),
    ghost: createGhostColorScheme(COLOR_SCHEME_MAP.blue),
    link: createLinkColorScheme(COLOR_SCHEME_MAP.blue),
  },
  black: {
    solid: createSolidColorScheme(COLOR_SCHEME_MAP.black),
    outline: createOutlineColorScheme(COLOR_SCHEME_MAP.black),
    ghost: createGhostColorScheme(COLOR_SCHEME_MAP.black),
    link: createLinkColorScheme(COLOR_SCHEME_MAP.black),
  },
  pink: {
    solid: createSolidColorScheme(COLOR_SCHEME_MAP.pink),
    outline: createOutlineColorScheme(COLOR_SCHEME_MAP.pink),
    ghost: createGhostColorScheme(COLOR_SCHEME_MAP.pink),
    link: createLinkColorScheme(COLOR_SCHEME_MAP.pink),
  },
  orange: {
    solid: createSolidColorScheme(COLOR_SCHEME_MAP.orange),
    outline: createOutlineColorScheme(COLOR_SCHEME_MAP.orange),
    ghost: createGhostColorScheme(COLOR_SCHEME_MAP.orange),
    link: createLinkColorScheme(COLOR_SCHEME_MAP.orange),
  },
};

export const getColorScheme = (
  colorScheme: Pick<
    ButtonProps<ElementType>,
    "colorScheme"
  >["colorScheme"] = "orange",
  variant: Pick<ButtonProps<ElementType>, "variant">["variant"] = "solid",
) => {
  console.log("Color Scheme:", colorScheme, "Variant:", variant);
  return BUTTON_COLOR_SCHEME_MAP[colorScheme as ButtonColorScheme][
    variant as keyof ColorSchemeWithVariant
  ];
};
