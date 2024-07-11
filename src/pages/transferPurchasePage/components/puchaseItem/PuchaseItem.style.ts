import { PiCaretRightBold } from "react-icons/pi";
import styled from "styled-components";

export const PurchaseItemContainer = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.color.greyScale6};
  height: 160px;
  cursor: pointer;
  padding: 16px 20px;
  color: ${({ theme }) => theme.color.black};
  &:hover {
    border-bottom: 1px solid ${({ theme }) => theme.color.greyScale3};
  }
`;

export const PurchaseItemTitle = styled.div<{ $remainingDays: number }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
  font-size: 0.75rem;
  font-weight: 600;
  width: 100%;
  color: ${({ $remainingDays, theme }) =>
    $remainingDays < 0 ? "" : theme.color.percentOrange};
`;

export const ArrowRightBtnIcon = styled(PiCaretRightBold)`
  font-size: 0.75rem;
  color: black;
`;

export const PurchaseItemContent = styled.div`
  width: 100%;
  height: 104px;
  padding: 0.5rem 0;
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 1rem;

  & > img {
    width: 88px;
    height: 88px;
    flex-shrink: 0;
    background-color: #f9f9f9;
    border-radius: 12px;
    object-fit: cover;
  }
`;

export const PuchaseItemInfo = styled.div`
  height: 83px;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const PurchaseItemName = styled.div`
  font-size: 0.875rem;
  font-weight: 700;
`;

export const PuChaseItemType = styled.div`
  font-size: 0.75rem;
  font-weight: 700;
`;
export const PuChaseItemDate = styled.div`
  font-size: 0.75rem;
  font-weight: 600;
`;
export const PurchaseItemPrice = styled.div`
  font-size: 0.75rem;
  font-weight: 600;
  color: ${({ theme }) => theme.color.percentOrange};
`;
