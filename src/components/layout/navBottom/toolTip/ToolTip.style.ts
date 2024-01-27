import styled from "styled-components";
import { IoIosClose } from "react-icons/io";

export const Container = styled.div`
  position: absolute;
  width: 160px;
  height: 32px;

  top: -34px;
  left: calc(37.5% - 80px);
  border-radius: 16px;

  background-color: ${({ theme }) => theme.color.black};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 10;
`;

export const Wrapper = styled.section`
  width: 160px;
  height: 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px 0 16px;
`;

export const TextArea = styled.span`
  color: ${({ theme }) => theme.color.percentOrange};
  ${({ theme }) => theme.typo.caption2};
  flex-shrink: 0;
  transform: translateY(0.3px);
`;

export const CloseButton = styled(IoIosClose)`
  font-size: 24px;
  color: white;
  cursor: pointer;
`;

export const Tail = styled.div`
  position: absolute;
  top: 10px;
  transform: rotate(45deg);
  width: 24px;
  height: 24px;
  background-color: ${({ theme }) => theme.color.black};
  z-index: -1;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
`;
