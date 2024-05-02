import ArrowSvg from "@/assets/icons/ic_arrow.svg?react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import type { ColorKeys, TypoKeys } from "@/styles/theme";

export const Container = styled.main`
  background-color: ${({ theme }) => theme.color.greyScale7};
  padding-bottom: 62px;
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

  ${({ theme }) => theme.typo.body2}
`;

const Flex = styled.div`
  display: flex;
`;

export const Col = styled(Flex)`
  padding-top: 2rem;
  flex-direction: column;
  gap: 8px;
`;

export const Row = styled(Flex)`
  gap: 4px;
  align-items: center;
`;

export const TitleWrapper = styled(Row)`
  margin-bottom: 1rem;
`;

export const Row1 = styled(Row)`
  gap: 2px;
`;

export const MapWrapper = styled.div`
  padding: 1rem 0 1.5rem;
`;

export const MapLink = styled(Link)`
  display: flex;
  gap: 4px;
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
  ${({ variant, theme }) => variant && theme.typo[variant]};
  color: ${({ color, theme }) => color && theme.color[color]};

  &.underline {
    text-decoration: underline;
    text-underline-position: under;
  }
`;

export const VStack1 = styled(Flex)`
  padding: 1rem 0;
  gap: 0.5rem;
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

export const TagWrapper = styled(Flex)`
  gap: 0.5rem;
  flex-wrap: wrap;
`;

export const MoreInfoWrapper = styled(Flex)`
  justify-content: flex-end;
  align-items: center;
  gap: 0.3rem;
`;

export const IconArrow = styled(ArrowSvg)`
  margin-left: auto;
`;
