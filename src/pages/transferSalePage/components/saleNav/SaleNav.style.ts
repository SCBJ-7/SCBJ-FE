import styled from "styled-components";
import { Link } from "react-router-dom";

export const SaleNavContainer = styled.section`
  width: 100%;
  height: 62px;
  display: flex;

  padding: 1rem 20px;
`;
export const SaleNavCell = styled(Link)`
  width: 56px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: padding-box;
  background-color: white;
  color: ${({ theme }) => theme.color.greyScale2};
  border: 1px solid ${({ theme }) => theme.color.greyScale5};
  margin-right: 10px;
  border-radius: 100px;
  ${({ theme }) => theme.typo.button6}
  &.active {
    color: white;
    border: none;
    ${({ theme }) => theme.typo.button7}
    background-color: ${({ theme }) => theme.color.percentOrange};
  }
`;
