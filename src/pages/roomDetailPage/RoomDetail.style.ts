import styled from "styled-components";
import type { ColorKeys, TypoKeys } from "@styles/theme";

export const Container = styled.main`
  background-color: ${({ theme }) => theme.color.greyScale7};
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
  gap: 0.5rem;

  background-color: ${({ theme }) => theme.color.greyScale7};
  padding: 1rem;
  width: 100%;
`;

export const LeftBox = styled(Box)`
  -webkit-border-top-left-radius: 8px;
  -webkit-border-bottom-left-radius: 8px;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
`;

export const RightBox = styled(Box)`
  -webkit-border-top-right-radius: 8px;
  -webkit-border-bottom-right-radius: 8px;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
`;

export type VariantProps = {
  variant?: TypoKeys;
  color?: ColorKeys;
};
export const Text = styled.p.withConfig({
  shouldForwardProp: (prop) => !["variant", "color"].includes(prop),
})<VariantProps>`
  ${({ variant, theme }) => variant && theme.typo[variant]}
  color: ${({ color, theme }) => color && theme.color[color]}
`;

export const VStack1 = styled(Flex)`
  gap: 0.375rem;
`;

export const HStack1 = styled(Flex)`
  flex-direction: column;
  gap: 0.375rem;
`;

export const HStack5 = styled(HStack1)`
  gap: 2rem;
`;

export const VStack5 = styled(Flex)`
  gap: 2rem;
`;

export const MoreInfoWrapper = styled(Flex)`
  justify-content: flex-end;
  align-items: center;
  gap: 0.3rem;
`;
