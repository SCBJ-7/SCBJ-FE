import styled from "styled-components";

export const PurchaseList = styled.div`
  width: 100%;
  padding-bottom: 160px;
  background-color: white;
  color: ${({ theme }) => theme.color.black};

  ${({ theme }) => theme.scroll}
`;

export const NoResult = styled.div`
  display: flex;
  margin-top: 64px;
  justify-content: center;
  align-items: center;
  ${({ theme }) => theme.typo.title4}
`;
