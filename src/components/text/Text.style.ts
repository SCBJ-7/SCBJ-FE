import styled from "styled-components";
import { theme } from "@styles/theme";

type Variant = keyof typeof theme.typo;
export type ColorVariant = keyof typeof theme.color;

export type VariantProps = {
  variant?: Variant;
  color?: ColorVariant;
};

export const Text = styled.p.withConfig({
  shouldForwardProp: (prop) => !["variant", "color"].includes(prop),
})<VariantProps>`
  ${({ variant, theme }) => variant && theme.typo[variant]}
  color: ${({ color, theme }) => color && theme.color[color]}
`;
