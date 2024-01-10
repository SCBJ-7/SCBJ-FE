import styled from "styled-components";

export const PurchaseList = styled.div`
  width: 100%;
  height: 100%;
  padding-bottom: 160px;
  background-color: white;
  color: ${({ theme }) => theme.color.black};

  ${({ theme }) => theme.scroll}
`;
