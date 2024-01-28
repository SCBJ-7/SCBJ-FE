import SearchIcon from "@assets/icons/ic_search.svg?react";
import styled from "styled-components";

export const SearchBarFixContainer = styled.div`
  position: fixed;
  height: 72px;
  max-width: 768px;
  min-width: 360px;
  z-index: 1;
  top: 0;
  width: 100%;
  background-color: white;
  color: ${({ theme }) => theme.color.black};
`;

export const SearchBarContainer = styled.div`
  width: 100%;
  height: 72px;
  padding: 8px 20px;
`;

export const SearchBarInput = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  border: 1px solid ${({ theme }) => theme.color.greyScale6};
  border-radius: 12px;
  padding: 12px 16px;
  box-shadow: 4px 4px 10px 0px rgba(0, 0, 0, 0.1);
  transition: 0.2s;
  &:hover {
    scale: 1.01;
  }
  cursor: pointer;
`;
export const SearchRegion = styled.div`
  width: 100%;
  display: flex;

  justify-content: space-between;
  align-items: center;
  ${({ theme }) => theme.typo.button4}
`;

export const SearchBarIcon = styled(SearchIcon)``;
