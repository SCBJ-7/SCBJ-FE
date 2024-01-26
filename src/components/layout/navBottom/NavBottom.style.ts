import {
  PiListMagnifyingGlassFill,
  PiNewspaperClippingFill,
  PiUserFill,
} from "react-icons/pi";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import NavIconHome from "@/assets/icons/NavHome";

export const BottomNavContainer = styled.section`
  display: flex;
  position: fixed;
  bottom: 0;
  width: 100%;
  max-width: 768px;
  z-index: 1;
  height: 60px;
  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.color.black};
  box-shadow: 0 0 10px 0 rgba(5, 44, 82, 0.1);
`;

export const BottomNavWrapper = styled.div`
  max-width: 768px;
  width: 100%;

  align-items: center;
  display: flex;
`;

export const BottomNavCell = styled(NavLink)`
  width: 25%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;

  ${({ theme }) => theme.typo.caption5}

  color: white;
  &.active {
    color: ${({ theme }) => theme.color.percentOrange};
  }
`;

export const NavIconHomes = styled(NavIconHome)``;

export const NavIconTransfer = styled(PiNewspaperClippingFill)`
  font-size: 2rem;
`;

export const NavIconSearch = styled(PiListMagnifyingGlassFill)`
  font-size: 2rem;
  transform: translateY(-1px);
`;

export const NavIconMy = styled(PiUserFill)`
  font-size: 2rem;
`;
