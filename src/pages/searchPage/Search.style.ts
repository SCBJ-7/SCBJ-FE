import styled from "styled-components";

export const SearchContainer = styled.div`
  width: 100%;
  height: 100%;

  padding-top: 35px;
  color: ${({ theme }) => theme.color.black};
  ${({ theme }) => theme.scroll};
`;

export const SearchItemFlex = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  padding: 0 20px;
`;
