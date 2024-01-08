import { motion } from "framer-motion";

import { PiCaretRightBold } from "react-icons/pi";
import styled from "styled-components";

export const ItemContainer = styled(motion.div)`
  height: 214px;
  margin: 20px;

  border: 1px solid ${({ theme }) => theme.color.greyScale5};
  border-radius: 12px;

  background-color: white;
  box-shadow: 4px 4px 10px 0 rgba(0, 0, 0, 0.04);

  transition: all 0.1s;

  cursor: pointer;

  &:hover {
    border: 1px solid ${({ theme }) => theme.color.greyScale3};
  }
`;

// 아이템 헤더
export const ItemTitle = styled.div`
  height: 48px;
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  color: ${({ theme }) => theme.color.percentOrange};

  ${({ theme }) => theme.typo.body5};

  padding: 0 20px;

  border-bottom: 1px solid ${({ theme }) => theme.color.greyScale7};
`;

export const ItemTitleBtn = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;

  color: ${({ theme }) => theme.color.black};

  ${({ theme }) => theme.typo.body5};
`;

export const ItemTitleBtnIcon = styled(PiCaretRightBold)`
  font-size: 12px;
`;

// 아이템 정보
export const ItemInfo = styled.div`
  padding: 8px 20px;

  display: flex;
`;

export const itemInfoImg = styled.img`
  width: 76px;
  height: 76px;
  flex-shrink: 0;

  background-color: #f9f9f9;

  border-radius: 12px;

  object-fit: cover;
`;

export const itemInfoDesc = styled.div`
  width: 100%;
  height: 76px;

  margin: 0 16px 0 14px;

  display: flex;
  flex-direction: column;
  gap: 8px;

  color: ${({ theme }) => theme.color.black};
`;

export const DescHotelName = styled.span`
  ${({ theme }) => theme.typo.body3};
  font-weight: 600;
`;

export const DescRoomName = styled.span`
  ${({ theme }) => theme.typo.body5};
  font-weight: 600;
`;

export const DescDates = styled.span`
  ${({ theme }) => theme.typo.body5};
  font-weight: 600;
`;

export const ItemPrice = styled.div`
  width: 100%;
  height: 74px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

export const PriceTag = styled.div`
  width: 100%;
  ${({ theme }) => theme.typo.body3};
  color: ${({ theme }) => theme.color.percentBlue};

  display: flex;
  justify-content: space-between;

  padding: 0 20px;

  & h4 {
    color: ${({ theme }) => theme.color.black};
  }
`;
