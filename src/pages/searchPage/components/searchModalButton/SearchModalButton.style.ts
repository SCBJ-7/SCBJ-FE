import styled from "styled-components";
import FilterIcon from "@assets/icons/ic_arrows-down-up.svg?react";

export const SearchFilterCover = styled.div`
  height: 28px;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const SearchFilterText = styled.div`
  ${({ theme }) => theme.typo.body5}
  margin-right: 0.25rem;
`;

export const SearchFilterImg = styled(FilterIcon)`
  width: 10px;
  height: 10px;
`;
