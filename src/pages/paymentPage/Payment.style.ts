import type { ColorKeys, TypoKeys } from "@styles/theme";
import styled from "styled-components";

export const PaymentContainer = styled.div`
  background-color: ${({ theme }) => theme.color.greyScale7};
  padding-bottom: 80px;
`;

export const Section = styled.section`
  padding: 2rem 1.25rem;
  margin-bottom: 0.5rem;
  background-color: ${({ theme }) => theme.color.white};
`;

export const HStack = styled.div`
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

export const BottomWrapper = styled.div`
  padding: 2rem 1.25rem;
`;
