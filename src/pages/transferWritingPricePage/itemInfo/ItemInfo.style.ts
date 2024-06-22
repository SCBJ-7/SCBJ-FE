import styled from "styled-components";
import { PiCaretRightBold } from "react-icons/pi";

export const Container = styled.div`
  width: 100%;
  height: 227px;
  background-color: white;
  padding-top: 24px;
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

  & > img {
    width: 76px;
    height: 76px;
    flex-shrink: 0;

    background-color: #f9f9f9;

    border-radius: 12px;

    object-fit: cover;
  }
`;

export const itemInfoDesc = styled.div`
  width: 100%;
  height: 76px;

  margin: 0 16px 0 14px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 4px;

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

export const DescAmount = styled.span`
  ${({ theme }) => theme.typo.body5};
  font-weight: 600;
  color: ${({ theme }) => theme.color.greyScale3};
  margin-top: 4px;
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

export const ItemDateSet = styled.div`
  display: flex;
  width: 100%;
  height: 112px;

  gap: 4px;
  padding: 0 20px;
  align-items: center;
`;

export const ItemDate = styled.div<{ dir: "LEFT" | "RIGHT" }>`
  flex-grow: 1;
  height: 76px;
  padding: 8px 20px;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.color.greyScale7};

  border-top-left-radius: ${({ dir }) => dir === "LEFT" && "8px"};
  border-bottom-left-radius: ${({ dir }) => dir === "LEFT" && "8px"};
  border-top-right-radius: ${({ dir }) => dir === "RIGHT" && "8px"};
  border-bottom-right-radius: ${({ dir }) => dir === "RIGHT" && "8px"};

  h4 {
    ${({ theme }) => theme.typo.body3};
    color: ${({ theme }) => theme.color.greyScale3};
    margin-bottom: 8px;
  }

  span {
    ${({ theme }) => theme.typo.body3};
    color: ${({ theme }) => theme.color.black};
  }
`;
