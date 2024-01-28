import { Link } from "react-router-dom";
import styled from "styled-components";

export const MyPageNavContainer = styled.section`
  width: 100%;
  height: 49px;
  display: flex;
  justify-content: center;
  position: sticky;
  top: 56px;
  color: ${({ theme }) => theme.color.greyScale3};
  z-index: 1;
`;

export const MyPageNavCell = styled(Link)`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-bottom: 1px solid ${({ theme }) => theme.color.greyScale3};
  ${({ theme }) => theme.typo.title5}
  &.active {
    border-bottom: 2px solid ${({ theme }) => theme.color.black};
    color: ${({ theme }) => theme.color.black};
  }
`;
