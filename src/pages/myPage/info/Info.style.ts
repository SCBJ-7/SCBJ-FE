import styled, { css } from "styled-components";
import { ListElement, ListWrapper } from "../setting/Setting.style";

export const dimmedStyle = css`
  position: fixed;
  top: 0;

  z-index: 10;

  width: 100%;
  max-width: 768px;
  height: 100%;

  background-color: rgba(0, 0, 0, 0.45);

  left: 50%;
  transform: translateX(-50%);
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
  ${({ theme }) => theme.typo.body6}
  color: ${({ theme }) => theme.color.black};
  line-height: 40px;
  text-align: center;
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

export const InfoListWrapper = styled.section`
  ${ListWrapper}
`;

export const InfoListElement = styled.div`
  ${ListElement}

  button {
    width: 100%;

    text-align: left;
    line-height: 32px;
  }
`;
