import { PiCaretRightBold } from "react-icons/pi";
import styled, { DefaultTheme } from "styled-components";

const stateColor = ({
  $saleStatus,
  theme,
}: {
  $saleStatus: string;
  theme: DefaultTheme;
}) => {
  switch ($saleStatus) {
    case "판매완료":
      return theme.color.percentBlue;
    case "판매만료":
      return theme.color.greyScale3;
    case "판매중":
      return theme.color.percentOrange;
    default:
      return theme.color.black;
  }
};

export const SaleItemContainer = styled.div<{ $saleStatus: string }>`
  position: relative;

  border-bottom: 1px solid ${({ theme }) => theme.color.greyScale6};

  height: 160px;

  cursor: pointer;

  padding: 16px 20px;

  color: ${({ theme, $saleStatus }) =>
    $saleStatus === "판매만료"
      ? `${theme.color.greyScale3} !important`
      : theme.color.black};

  &:hover {
    border-bottom: 1px solid ${({ theme }) => theme.color.greyScale3};
  }
`;

export const SaleItemTitle = styled.div<{ $saleStatus: string }>`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 0.5rem;

  ${({ theme }) => theme.typo.body5}
  color: ${({ $saleStatus, theme }) => stateColor({ $saleStatus, theme })};

  width: 100%;
`;

export const ArrowRightBtnIcon = styled(PiCaretRightBold)`
  font-size: 1rem;
  color: black;
`;

export const SaleItemContent = styled.div`
  width: 100%;
  height: 104px;
  padding: 0.5rem 0;

  display: flex;
  justify-content: start;
  align-items: center;
  gap: 1rem;
`;
export const DimmedImage = styled.div<{ $saleStatus: string }>`
  position: absolute;
  top: 48px;

  display: ${({ $saleStatus }) =>
    $saleStatus === "판매만료" ? "block" : "none"};

  background: rgba(205, 205, 205, 0.5);

  width: 88px;
  height: 88px;

  border-radius: 12px;
`;

export const SaleItemImage = styled.img`
  width: 88px;
  height: 88px;

  flex-shrink: 0;
  background-color: #f9f9f9;
  border-radius: 12px;
  object-fit: cover;
`;

export const SaleItemInfo = styled.div`
  height: 83px;

  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const SaleItemName = styled.div`
  ${({ theme }) => theme.typo.body3}
`;

export const SaleItemType = styled.div`
  ${({ theme }) => theme.typo.body5}
`;
export const SaleItemDate = styled.div`
  ${({ theme }) => theme.typo.body3}
`;
export const SaleItemPrice = styled.div<{ $saleStatus: string }>`
  display: flex;
  align-items: center;
  gap: 8px;

  ${({ theme }) => theme.typo.body5}
  color: ${({ theme }) => theme.color.greyScale3};

  div {
    display: flex;
    gap: 2px;
    color: ${({ theme }) => theme.color.greyScale2};
  }

  span {
    color: ${({ $saleStatus, theme }) => stateColor({ $saleStatus, theme })};
  }
`;
