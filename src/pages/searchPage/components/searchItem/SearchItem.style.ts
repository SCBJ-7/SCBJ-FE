import { FaStar } from "react-icons/fa6";
import styled from "styled-components";

export const ItemContainer = styled.div`
  width: 100%;
  height: 373px;
  color: ${({ theme }) => theme.color.black};
  position: relative;
  background-color: white;
  cursor: pointer;
  border-radius: 12px;
  & > img {
    width: 100%;
    height: 192px;
    object-fit: cover;
    border-radius: 12px 12px 0 0;
  }

  @media screen and (min-width: 568px) {
    width: calc(50% - 8px);
  }
`;

export const ItemContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-width: 240px;
  height: 181px;
  width: 100%;
  padding: 24px 16px;
`;

export const ItemTop = styled.div`
  width: 100%;
  height: 66px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const StartImg = styled(FaStar)`
  color: ${({ theme }) => theme.color.percentOrange};
`;

export const ItemRates = styled.div`
  display: flex;
  ${({ theme }) => theme.typo.caption2}
  > div {
    padding-right: 0.1rem;
  }
`;

export const ItemName = styled.div`
  ${({ theme }) => theme.typo.body2}

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const ItemRoomName = styled.div`
  ${({ theme }) => theme.typo.body3}
`;

export const ItemBottom = styled.div`
  height: 35px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${({ theme }) => theme.typo.body1}
`;

export const ItemOriginalPriceCover = styled.div`
  width: 127px;
  display: flex;
  justify-content: space-between;
  ${({ theme }) => theme.typo.body5}
`;

export const ItemOriginalPrice = styled.span`
  color: ${({ theme }) => theme.color.greyScale3};
  text-decoration-line: line-through;
`;

export const ItemSalePercent = styled.span`
  color: ${({ theme }) => theme.color.percentBlue};
`;

export const ItemPriceCover = styled.div`
  width: 127px;
  display: flex;
  justify-content: space-between;
  ${({ theme }) => theme.typo.body5}
  >div:first-child {
    margin-top: 5px;
  }
`;

export const ItemPrice = styled.span`
  font-size: 18px;
  font-weight: 700;
`;

export const ItemDateCover = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ItemDate = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 97px;
  white-space: nowrap;
  padding: 0 0.5rem;
  height: 23px;
  background-color: ${({ theme }) => theme.color.greyScale6};
  ${({ theme }) => theme.typo.body3}
  border-radius: 12px;
`;

export const SecondSaleText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 79px;
  height: 24px;
  position: absolute;
  top: 0;
  right: 0;
  border-radius: 0 12px 0 8px;
  color: ${({ theme }) => theme.color.percentOrange};
  background-color: ${({ theme }) => theme.color.black};
  ${({ theme }) => theme.typo.caption2}
`;
