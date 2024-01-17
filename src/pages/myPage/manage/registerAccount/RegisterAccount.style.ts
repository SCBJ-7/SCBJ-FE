import styled from "styled-components";

export const RegisterAccountContainer = styled.div`
  position: relative;

  padding: 136px 20px 0;

  width: 100%;
  height: calc(100vh - 136px);

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;

  h2 {
    ${({ theme }) => theme.typo.title2}
    color: ${({ theme }) => theme.color.black};
  }
  p {
    ${({ theme }) => theme.typo.body4}
    color: ${({ theme }) => theme.color.greyScale2};
    text-align: center;
  }
`;

export const RegisterAccountButton = styled.button`
  position: absolute;
  bottom: 32px;

  display: flex;
  justify-content: center;
  align-items: center;

  width: calc(100% - 40px);
  height: 48px;

  background-color: ${({ theme }) => theme.color.percentOrange};

  border-radius: 8px;

  ${({ theme }) => theme.typo.button2}
  color: ${({ theme }) => theme.color.white};
`;
