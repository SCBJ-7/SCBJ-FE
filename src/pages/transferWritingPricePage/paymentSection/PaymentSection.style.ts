import styled from "styled-components";

export const Container = styled.div<{ $is2ndChecked: boolean }>`
  padding: 16px 20px;
  background-color: white;
  margin-bottom: ${({ $is2ndChecked }) => ($is2ndChecked ? "8px" : "1px")};
`;

export const Contents = styled.div`
  ${({ theme }) => theme.typo.body4};

  h1 {
    ${({ theme }) => theme.typo.body3};
    margin-bottom: 16px;
  }

  section {
    display: flex;
    justify-content: space-between;
    margin-bottom: 16px;
  }
`;

//horizontal rule
export const Hr = styled.hr`
  border: none;
  border-top: 1px dashed ${({ theme }) => theme.color.greyScale5};
  color: #fff;
  background-color: #fff;
  height: 1px;
  width: 100%;
`;

export const Result = styled.div`
  ${({ theme }) => theme.typo.body3};

  section {
    display: flex;
    justify-content: space-between;
    margin-top: 16px;

    span {
      color: ${({ theme }) => theme.color.percentOrange};
    }
  }

  h6 {
    margin-top: 8px;
    ${({ theme }) => theme.typo.caption4};
    color: ${({ theme }) => theme.color.greyScale3};
  }
`;
