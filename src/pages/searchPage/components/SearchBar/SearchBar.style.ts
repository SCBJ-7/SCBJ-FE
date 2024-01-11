import styled from "styled-components";

export const SearchBarFixContainer = styled.div`
  position: fixed;
  height: 91px;
  max-width: 768px;
  min-width: 360px;
  z-index: 100;
  top: 0;
  width: 100%;
  background-color: white;
  color: ${({ theme }) => theme.color.black};
`;

export const SearchBarContainer = styled.div`
  width: 100%;

  height: 91px;
  padding: 16px 20px;
`;

export const SearchBarInput = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid ${({ theme }) => theme.color.greyScale4};
  border-radius: 12px;
  padding: 9px 20px;
`;
export const SearchRegion = styled.div`
  ${({ theme }) => theme.typo.body3}
`;
