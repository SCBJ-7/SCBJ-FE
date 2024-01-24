import styled from "styled-components";
import FilterIcon from "@assets/icons/ic_arrows-down-up.svg?react";
import CloseButton from "@assets/icons/ic_close-button.svg?react";
import WarningIcon from "@assets/icons/ic_warning.svg?react";
export const SearchFilterCover = styled.div`
  height: 28px;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const SearchFilterText = styled.div`
  ${({ theme }) => theme.typo.body5}
  margin-right: 0.25rem;
`;

export const SearchFilterImg = styled(FilterIcon)`
  width: 10px;
  height: 10px;
`;
export const ModalContainer = styled.div`
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);

  z-index: 101;
`;

export const ModalContent = styled.div`
  max-width: 768px;
  min-width: 360px;
  width: 100%;
  height: 311px;
  position: fixed;
  bottom: 0;
  background-color: white;
  padding: 32px 20px;
  border-radius: 28px 28px 0 0;
  transform: translateY(0%);
`;

export const ModalTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`;
export const ModalTitle = styled.div`
  ${({ theme }) => theme.typo.button2}
`;
export const ModalCloseButton = styled(CloseButton)`
  margin-right: auto;
  cursor: pointer;
`;
export const ModalFitlerName = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.color.greyScale6};
  ${({ theme }) => theme.typo.body4}
  cursor: pointer;
  transition: 0.2s;
  > span {
    display: inline-block;
    margin-right: 0.25rem;
  }

  &:hover {
    background-color: ${({ theme }) => theme.color.greyScale7};
    border-bottom: 1px solid ${({ theme }) => theme.color.greyScale3};
  }

  &.active {
    ${({ theme }) => theme.typo.button4}
  }
`;

export const WarningButton = styled(WarningIcon)`
  position: relative;
  top: 0.75px;
`;

export const ModalTwoContainer = styled.div`
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 105;
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
