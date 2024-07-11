import styled, { CSSProperties } from "styled-components";

import { getColorScheme } from "./colorScheme";
import { getRadius } from "./radius";
import { getSize } from "./size";
import { getWidth } from "./width";

import type {
  ButtonColorScheme,
  ButtonRadii,
  ButtonSizeSet,
  ButtonVariants,
  ButtonWidth,
} from "../types";
import type { TypoKeys } from "@/styles/theme";

type ButtonProps = {
  colorScheme: ButtonColorScheme;
  radius: ButtonRadii;
  size: ButtonSizeSet;
  variant: ButtonVariants;
  width: ButtonWidth;
  typo: TypoKeys;
};

export const StyledButton = styled.button.withConfig({
  shouldForwardProp: (prop) =>
    !["colorScheme", "size", "variant", "radius", "width", "typo"].includes(
      prop,
    ),
})<ButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  ${({ radius }) => getRadius(radius)};
  ${({ size }) => getSize(size)};
  ${({ width }) => getWidth(width)};
  ${({ colorScheme, variant }) => getColorScheme(colorScheme, variant)};
  ${({ theme, typo }) => theme.typo[typo]};

  transition-property: color, background-color, border-color,
    text-decoration-color, fill, stroke;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 0.15s;

  &:disabled {
    cursor: not-allowed;
  }

  &:focus {
    outline: none;
  }

  user-select: none;
`;

export const StyledButtonAddon = styled.span.withConfig({
  shouldForwardProp: (prop) => !["addonStyles"].includes(prop),
})<{
  addonStyles: {
    marginRight?: CSSProperties["marginRight"];
    marginLeft?: CSSProperties["marginLeft"];
  };
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-right: ${({ addonStyles }) => addonStyles?.marginRight || 0};
  margin-left: ${({ addonStyles }) => addonStyles?.marginLeft || 0};
`;
