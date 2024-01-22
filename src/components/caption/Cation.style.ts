import { PiWarningCircle } from "react-icons/pi";
import type { ColorKeys, TypoKeys } from "@styles/theme";
import styled from "styled-components";

export const CaptionContainer = styled.div`
  display: inline-flex;
  flex-direction: column;

  gap: 0.5rem;
`;

export const CaptionWrapper = styled.div`
  display: flex;

  gap: 0.5rem;
`;

export const WarningIcon = styled(PiWarningCircle)`
  font-size: 1rem;
  color: ${({ theme }) => theme.color.cautionRed};
`;

type VariantProps = {
  variant?: TypoKeys;
  color?: ColorKeys;
};
export const Text = styled.p.withConfig({
  shouldForwardProp: (prop) => !["variant", "color"].includes(prop),
})<VariantProps>`
  ${({ variant, theme }) => variant && theme.typo[variant]}
  color: ${({ color, theme }) => color && theme.color[color]}
`;
