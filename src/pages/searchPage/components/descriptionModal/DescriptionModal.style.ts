import styled from "styled-components";
import CloseButton from "@assets/icons/ic_close-button.svg?react";

export const ModalTwoContainer = styled.div`
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 120;
`;

export const ModalTwoContent = styled.div`
  width: 260px;
  height: 111px;
  position: fixed;
  background-color: white;
  padding: 1rem;
  border-radius: 20px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const ModalTwoTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;
export const ModaltTwoTitle = styled.div`
  ${({ theme }) => theme.typo.body3}
`;
export const ModalTwoText = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 38px;
  color: black;
  ${({ theme }) => theme.typo.body6}
`;
export const ModalCloseButton = styled(CloseButton)`
  margin-right: auto;
  cursor: pointer;
`;
