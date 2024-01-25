import styled, { css } from "styled-components";

export const dimmedStyle = css`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 200;

  width: 100%;
  height: 100%;

  background-color: rgba(0, 0, 0, 0.45);
`;

export const DimmedBackground = styled.div`
  ${dimmedStyle}
`;

export const LogoutModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 66%;
  min-width: 240px;
  max-width: 400px;

  background-color: white;

  border-radius: 12px;
`;

export const ModalText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;

  padding: 16px 20px;

  h2 {
    ${({ theme }) => theme.typo.body2}
    color: ${({ theme }) => theme.color.black};
  }

  span {
    padding: 0 30px;
    word-break: keep-all;

    ${({ theme }) => theme.typo.body6}
    color: ${({ theme }) => theme.color.greyScale2};
    text-align: center;
  }
`;

export const ModalButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 40px;
`;

const Button = styled.button`
  width: 50%;
  line-height: 40px;

  ${({ theme }) => theme.typo.body6}
`;

export const ConfirmButton = styled(Button)`
  color: ${({ theme }) => theme.color.white};

  background-color: ${({ theme }) => theme.color.percentOrange};

  -webkit-border-bottom-left-radius: 12px;
  border-bottom-left-radius: 12px;
`;

export const CancelButton = styled(Button)`
  background-color: ${({ theme }) => theme.color.greyScale6};

  -webkit-border-bottom-right-radius: 12px;
  border-bottom-right-radius: 12px;
`;
