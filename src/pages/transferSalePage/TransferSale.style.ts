import styled from "styled-components";

export const SaleList = styled.div`
  width: 100%;
  height: 100%;
  padding-bottom: 160px;
  background-color: white;
  color: ${({ theme }) => theme.color.black};

  ${({ theme }) => theme.scroll}
`;

export const NoSaleItems = styled.div`
  margin-top: 64px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;

  color: ${({ theme }) => theme.color.black};

  h2 {
    ${({ theme }) => theme.typo.title4}
  }
  span {
    ${({ theme }) => theme.typo.body4}
    color: ${({ theme }) => theme.color.greyScale2};
  }
`;
