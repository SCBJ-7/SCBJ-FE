import styled from "styled-components";

export const SearchContainer = styled.div`
  width: 100%;
  height: 100%;

  padding-top: 35px;
  color: ${({ theme }) => theme.color.black};
  ${({ theme }) => theme.scroll};
`;
