import styled from "styled-components";

export const ItemContainer = styled.div`
  width: 100%;
  height: 344px;
  padding: 1rem 0 1.5rem 0;
  color: ${({ theme }) => theme.color.black};
  @media screen and (min-width: 568px) {
    width: calc(50% - 8px);
  }
  cursor: pointer;
`;

export const ItemContent = styled.div`
  min-width: 240px;
  position: relative;

  width: 100%;
  height: 100%;

  & > img {
    width: 100%;
    height: 192px;
    object-fit: cover;
    border-radius: 12px 12px 0 0;
  }
`;

export const ItemName = styled.div`
  ${({ theme }) => theme.typo.body2}
  margin-top: 1rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
export const ItemRoomName = styled.div`
  ${({ theme }) => theme.typo.body3}
  margin-top:0.5rem;
`;
export const ItemOriginalPrice = styled.div`
  color: ${({ theme }) => theme.color.greyScale2};
  ${({ theme }) => theme.typo.body3}

  text-decoration-line:  line-through;
  margin-top: 0.5rem;
`;

export const ItemBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${({ theme }) => theme.typo.body1}
`;
export const ItemPrice = styled.span`
  margin-right: 0.5rem;
`;
export const ItemSalePercent = styled.span`
  color: ${({ theme }) => theme.color.percentBlue};
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
