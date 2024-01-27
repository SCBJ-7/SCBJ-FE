import styled from "styled-components";

export const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 99;
`;

export const ModalContent = styled.div`
  background-color: #fff;
  width: 90%;
  max-width: 320px;
  text-align: center;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  transform: translateY(-50%);
  top: -50%;
  border-radius: 12px;

  & > p {
    padding: 1rem;
    ${({ theme }) => theme.typo.body6};
  }

  & > button {
    width: 100%;
    background-color: ${({ theme }) => theme.color.percentOrange};
    color: #fff;
    border: none;
    padding: 10px 20px;
    ${({ theme }) => theme.typo.button4};
    cursor: pointer;

    -webkit-border-bottom-right-radius: 12px;
    -webkit-border-bottom-left-radius: 12px;
    -moz-border-radius-bottomright: 12px;
    -moz-border-radius-bottomleft: 12px;
    border-bottom-right-radius: 12px;
    border-bottom-left-radius: 12px;

    &:hover {
      background-color: ${({ theme }) => theme.color.darkOrange};
    }
  }
`;
