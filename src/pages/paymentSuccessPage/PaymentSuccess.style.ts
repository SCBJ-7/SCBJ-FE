import type { ColorKeys, TypoKeys } from "@styles/theme";
import styled, { DefaultTheme } from "styled-components";
export {
  Row,
  VStack3,
  ThumbnailWrapper,
  Thumbnail,
  TitleWrapper,
} from "@pages/paymentPage/components/paymentInfoSection/PaymentInfoSection.style";
export { LeftBox, RightBox } from "@pages/roomDetailPage/RoomDetail.style";
import borderImgSrc from "@assets/icons/border.svg";

export const PurchasedContainer = styled.main`
  padding-top: 56px;
  padding-bottom: 62px;

  background-color: ${({ theme }) => theme.color.greyScale7};
`;

export const PurchasedWrapper = styled.div`
  padding: 0.5rem;
`;

export const CardWrapper = styled.div`
  padding: 1.5rem 1rem;

  background-color: ${({ theme }) => theme.color.white};
  border-bottom: ${({ theme }) => theme.border.strokeThin};
  box-shadow: 0 0.2rem 0.2rem 0 rgba(0, 0, 0, 0.1);
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

export const HeaderWrapper = styled.div`
  padding: 1.25rem 1rem;
  text-align: center;

  background-color: ${({ theme }) => theme.color.white};
  border-bottom: ${({ theme }) => theme.border.strokeThin};
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

export const TitleText = styled(Text)`
  margin-bottom: 1rem;
`;

export const SubtitleText = styled(Text)`
  margin-bottom: 0.5rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const BottomWrapper = styled.div`
  padding: 2rem 1.25rem;
`;

export const ButtonWrapper = styled.div`
  display: flex;

  gap: 0.5rem;
`;

interface ButtonVariantProps {
  variant: "solid" | "outline";
}

const buttonStyles = {
  solid: (theme: DefaultTheme) => `
    background-color: ${theme.color.percentOrange};
    color: ${theme.color.white};
    border: 1px solid ${theme.color.percentOrange};

    &:hover {
    background-color: ${theme.color.darkOrange};
    }
    &:focus {
    background-color: ${theme.color.darkOrange};
    }
  `,
  outline: (theme: DefaultTheme) => `
    background-color: ${theme.color.white};
    color: ${theme.color.percentOrange};
    border: 1px solid ${theme.color.percentOrange}; 
  `,
};

export const Button = styled.button.withConfig({
  shouldForwardProp: (prop) => !["variant"].includes(prop),
})<ButtonVariantProps>`
  width: 100%;
  height: 48px;
  border-radius: 8px;

  ${({ theme }) => theme.typo.button3};

  border-radius: 8px;
  padding: 0.9rem;

  ${({ variant, theme }) => buttonStyles[variant](theme)};

  transition: background-color 0.2s ease-in-out;
`;
