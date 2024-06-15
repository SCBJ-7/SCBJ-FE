import type { ColorKeys, TypoKeys } from "@/styles/theme";
import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;

  gap: 1.5rem;
`;

export const CardBody = styled.div`
  display: flex;
  flex-direction: column;

  gap: 1rem;
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
