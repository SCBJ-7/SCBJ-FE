import { theme } from "@styles/theme.ts";
import styled from "styled-components";

export const Container = styled.main`
  padding-bottom: 80px;
`;

export const DetailSection = styled.section`
  padding: 2rem 1.25rem;
  margin-bottom: 0.5rem;
  background-color: ${({ theme }) => theme.color.white};
`;

export const ItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${({ theme }) => theme.typo.body3}
`;

const Flex = styled.div`
  display: flex;
`;

export const Col = styled(Flex)`
  flex-direction: column;
  gap: 0.5rem;
`;

export const Row = styled(Flex)`
  gap: 0.5rem;
  align-items: center;
`;

export const OptionWrapper = styled(Flex)`
  gap: 0.3rem;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;

  background-color: ${({ theme }) => theme.color.greyScale7};
  padding: 1rem;
  width: 100%;
`;

export const LeftBox = styled(Box)`
  -webkit-border-top-left-radius: 8px;
  -webkit-border-bottom-left-radius: 8px;
  -moz-border-radius-topleft: 8px;
  -moz-border-radius-bottomleft: 8px;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
`;

export const RightBox = styled(Box)`
  -webkit-border-top-right-radius: 8px;
  -webkit-border-bottom-right-radius: 8px;
  -moz-border-radius-topright: 8px;
  -moz-border-radius-bottomright: 8px;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
`;

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

export const VStack1 = styled(Flex)`
  gap: 0.25rem;
`;

export const HStack1 = styled(Flex)`
  flex-direction: column;
  gap: 0.25rem;
`;

export const HStack5 = styled(HStack1)`
  gap: 1.25rem;
`;

export const VStack5 = styled(Flex)`
  gap: 1.25rem;
`;

export const MoreInfoWrapper = styled(Flex)`
  justify-content: flex-end;
  align-items: center;
  gap: 0.3rem;
`;