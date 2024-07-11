import styled from "styled-components";

export const ItemSection = styled.section`
  width: 100%;
  height: 122px;
  margin-top: 0.5rem;
  cursor: pointer;
`;

export const ItemRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  height: 40px;
  ${({ theme }) => theme.typo.button7};
  background-color: white;
`;

export const Item = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 33.33%;
  height: 40px;
  border: ${({ theme }) => theme.border.strokeThin};
  &.active {
    color: ${({ theme }) => theme.color.percentOrange};
    font-weight: 700;
  }
`;
