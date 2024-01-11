import styled from "styled-components";
import { NavLink } from "react-router-dom";
export const MyPageNavContainer = styled.section`
  width: 100%;
  height: 49px;
  display: flex;
  justify-content: center;
  position: sticky;
  top: 56px;
  background-color: white;
  color: ${({ theme }) => theme.color.greyScale3};
`;

export const MyPageNavCell = styled(NavLink)`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.color.greyScale3};
  ${({ theme }) => theme.typo.title5}
  &.active {
    border-bottom: 2px solid ${({ theme }) => theme.color.black};
    color: ${({ theme }) => theme.color.black};
  }
`;
