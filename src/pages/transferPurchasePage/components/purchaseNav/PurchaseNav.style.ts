import styled from "styled-components";
import { Link } from "react-router-dom";

export const PurchaseNavContainer = styled.section`
  width: 100%;
  height: 62px;
  display: flex;
  align-items: center;
`;
export const PurchaseNavCell = styled(Link)`
  width: 56px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  ${({ theme }) => theme.typo.button2}
  background-color: white;
  color: ${({ theme }) => theme.color.greyScale2};

  border: 1px solid ${({ theme }) => theme.color.greyScale5};
  margin-left: 1rem;
  border-radius: 1rem;
  &.active {
    color: white;
    border: none;
    background-color: ${({ theme }) => theme.color.percentOrange};
  }
`;
