import styled from "styled-components";
import { Link } from "react-router-dom";

export const PurchaseNavContainer = styled.section`
  width: 100%;
  height: 62px;
  display: flex;
  align-items: center;
`;
export const PurchaseNavCell = styled(Link)`
  padding: 8px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  ${({ theme }) => theme.typo.button6}
  background-color: white;
  color: ${({ theme }) => theme.color.greyScale2};

  border: 1px solid ${({ theme }) => theme.color.greyScale5};
  margin-left: 10px;
  border-radius: 1rem;
  &.active {
    color: white;
    border: none;
    ${({ theme }) => theme.typo.button7}
    background-color: ${({ theme }) => theme.color.percentOrange};
  }
`;
