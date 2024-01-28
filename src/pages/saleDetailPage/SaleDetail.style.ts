import styled from "styled-components";

import type { ColorKeys, TypoKeys } from "@styles/theme";

export {
  Row,
  VStack3,
  ThumbnailWrapper,
  Thumbnail,
  TitleWrapper,
} from "@pages/paymentPage/components/paymentInfoSection/PaymentInfoSection.style";
import borderImgSrc from "@assets/icons/border.svg";

export const TopSection = styled.section`
  width: 100%;
  height: 92px;
  background-color: white;
`;
export const TopSectionTitle = styled.div`
  padding: 1.5rem 1rem;
`;
export const TopSectionPurchaseDate = styled.div`
  ${({ theme }) => theme.typo.body3}
  margin-bottom:0.5rem;
`;

export const TopSectionReserveNumber = styled.div`
  ${({ theme }) => theme.typo.body2}
`;

export const Container = styled.main`
  padding-bottom: 62px;
`;

export const PurchasedContainer = styled.div`
  width: 100%;
  height: 100%;

  color: ${({ theme }) => theme.color.black};
  ${({ theme }) => theme.scroll};

  background-color: ${({ theme }) => theme.color.greyScale7};
  margin-top: 56px;
`;

export const PurchasedWrapper = styled.div`
  padding: 0.5rem 0.5rem 0 0.5rem;
`;

export const PurchasedWrapperPaddingOn = styled.div`
  padding: 0.5rem;
`;

export const CardWrapper = styled.div`
  padding: 1.5rem 1rem;

  background-color: ${({ theme }) => theme.color.white};
  border-bottom: ${({ theme }) => theme.border.strokeThin};
`;
export const CardWrapperBoxShadowOn = styled.div`
  padding: 1.5rem 1rem;

  background-color: ${({ theme }) => theme.color.white};
  border-bottom: ${({ theme }) => theme.border.strokeThin};
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.1);
`;

export const SaleStatus = styled.div<{ $saleStatus: string }>`
  display: flex;
  flex-direction: column;
  gap: 8px;

  color: ${({ theme, $saleStatus }) =>
    $saleStatus === "판매중" ? theme.color.percentOrange : theme.color.black};

  h2 {
    ${({ theme }) => theme.typo.title1}
  }

  span {
    ${({ theme }) => theme.typo.body2}
    color: ${({ theme, $saleStatus }) =>
      $saleStatus === "판매완료" || $saleStatus === "정산완료"
        ? theme.color.percentBlue
        : ""};
  }
`;
export const SecondStartDate = styled.div`
  ${({ theme }) => theme.typo.body2}
  color: ${({ theme }) => theme.color.percentOrange};

  padding-top: 8px;
  margin-bottom: 24px;
`;

export const BottomCardWrapper = styled(CardWrapper)`
  padding-bottom: 2rem;

  &::after {
    content: "";
    border-bottom: 0.9rem solid transparent;
    border-image: url(${borderImgSrc}) 0 0 100% 0 round;
    position: relative;
    bottom: -2.4rem;
    display: block;
    margin: 0 1rem 0;
  }
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
  padding: 1rem 1.25rem;
  margin-bottom: 2.5rem;
`;
