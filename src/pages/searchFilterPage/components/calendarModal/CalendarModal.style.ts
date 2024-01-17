import styled from "styled-components";
import CloseButton from "@assets/icons/ic_close-button.svg?react";
export const ModalContainer = styled.div`
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 101;

  color: ${({ theme }) => theme.color.black};
`;

export const ModalContent = styled.div`
  max-width: 768px;
  min-width: 360px;
  width: 100%;
  height: 100%;
  background-color: white;
  padding: 56px 20px 0 20px;
  display: flex;
  justify-content: center;
  ${({ theme }) => theme.scroll};
`;

export const ModalTop = styled.div`
  max-width: 768px;
  min-width: 360px;
  padding: 0 20px;
  width: 100%;
  position: absolute;
  top: 0;
  display: flex;
  justify-content: space-between;
  background-color: white;
  align-items: center;
  height: 56px;

  z-index: 50;
`;
export const ModalTitle = styled.div`
  font-size: 17px;
  font-weight: 600;
`;

export const ModalCloseButton = styled(CloseButton)`
  cursor: pointer;
`;
