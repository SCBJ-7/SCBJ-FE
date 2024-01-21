import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  height: 100%;
  background-color: white;
`;

export const NewMessage = styled.div`
  width: 100%;
  height: 72px;
  background-color: ${({ theme }) => theme.color.lightOrange};

  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 16px 20px;

  border-top: 1px solid ${({ theme }) => theme.color.greyScale6};
  border-bottom: 1px solid ${({ theme }) => theme.color.greyScale6};

  h1 {
    ${({ theme }) => theme.typo.body2}
  }

  h3 {
    ${({ theme }) => theme.typo.body6}
  }

  div {
    display: flex;
    gap: 4px;
    align-items: center;
  }

  section {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.color.cautionRed};
  }
`;

export const OldMessage = styled.div`
  width: 100%;
  height: 72px;
  background-color: ${({ theme }) => theme.color.greyScale8};

  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 16px 20px;

  border-top: 1px solid ${({ theme }) => theme.color.greyScale6};
  border-bottom: 1px solid ${({ theme }) => theme.color.greyScale6};
  background-color: #f7f7f7;

  h1 {
    ${({ theme }) => theme.typo.body2}
  }

  h3 {
    ${({ theme }) => theme.typo.body6}
  }
`;
