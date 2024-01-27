import styled from "styled-components";
import FilterIcon from "@assets/icons/ic_arrows-down-up.svg?react";

export const SearchFilterCover = styled.div`
  padding: 10px;
  height: 28px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  transition: 0.2s;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.color.greyScale6};
  }
`;

export const SearchFilterText = styled.div`
  ${({ theme }) => theme.typo.body5}
  margin-right: 0.25rem;
`;

export const SearchFilterImg = styled(FilterIcon)`
  width: 10px;
  height: 10px;
`;
