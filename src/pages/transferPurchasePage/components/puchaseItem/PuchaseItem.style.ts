import styled from "styled-components";
import { PiCaretRightBold } from "react-icons/pi";

export const PurchaseItemContainer = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.color.greyScale6};
  height: 160px;
  cursor: pointer;
  padding: 16px 20px;

  &:hover {
    border-bottom: 1px solid ${({ theme }) => theme.color.greyScale3};
  }
`;

export const PurchaseItemTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
  font-size: 0.75rem;
  font-weight: 600;
  width: 100%;
  color: ${({ theme, $isComplete }) =>
    $isComplete ? theme.color.black : theme.color.percentOrange};
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
`;

export const PurchaseItemImage = styled.img`
  width: 88px;
  height: 88px;
  flex-shrink: 0;
  background-color: #f9f9f9;
  border-radius: 12px;
  object-fit: cover;
`;

export const PuchaseItemInfo = styled.div`
  width: 220px;
  height: 83px;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const PurchaseItemName = styled.div`
  font-size: 0.875rem;
  font-weight: bold;
`;

export const PuChaseItemType = styled.div`
  font-size: 0.75rem;
  font-weight: bold;
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
