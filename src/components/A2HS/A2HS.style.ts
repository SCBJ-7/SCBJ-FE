import { motion } from "framer-motion";
import { IoIosClose } from "react-icons/io";
import styled from "styled-components";

import breakpoints from "@/styles/breakpoints";

export const BackDrop = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  bottom: 0;
  width: 100%;
  max-width: 768px;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.45);
  transition: opacity 0.5s ease;
  z-index: 11;
`;

export const A2HSContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  position: fixed;
  left: 50%;
  width: 90%;
  max-width: 518px;
  bottom: 0px;

  background-color: ${({ theme }) => theme.color.white};
  padding: 4rem 1.25rem 3rem;
  gap: 1.5rem;

  box-shadow: 0px -2px 5px rgba(0, 0, 0, 0.2);
  border-radius: 28px 28px 0px 0px;

  z-index: 12;

  transform: translateX(-50%);

  @media (max-width: ${breakpoints.md}) {
    width: 100%;
  }

  @media (max-width: ${breakpoints.sm}) {
    width: 100%;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 1.25rem;
  right: 1.25rem;

  &:hover {
    background-color: ${({ theme }) => theme.color.greyScale7};
    border-radius: 50%;
  }

  transition: background-color 0.2s ease-in-out;
`;

export const CloseIcon = styled(IoIosClose)`
  font-size: 28px;
  cursor: pointer;
`;

export const IconWrapper = styled.div`
  width: 70px;
  height: 70px;
  margin-bottom: 10px;

  border-radius: 16px;
  overflow: hidden;

  @media (max-width: ${breakpoints.md}) {
    width: 80px;
    height: 80px;
  }

  @media (max-width: ${breakpoints.sm}) {
    width: 80px;
    height: 80px;
  }

  & > img {
    width: 100&;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;

  margin-top: 1rem;
`;

export const Message = styled.span`
  ${({ theme }) => theme.typo.body2};
  text-align: center;
  line-height: 1.7;
`;

const Button = styled.button`
  border: none;

  border-radius: 8px;
  padding: 0.75rem;

  ${({ theme }) => theme.typo.button2};

  width: 70%;

  @media (max-width: ${breakpoints.md}) {
    width: 90%;
  }

  @media (max-width: ${breakpoints.sm}) {
    width: 100%;
  }

  transition: background-color 0.2s ease-in-out;
`;

export const InstallButton = styled(Button)`
  background-color: ${({ theme }) => theme.color.percentOrange};
  color: #ffffff;

  &:hover {
    background-color: ${({ theme }) => theme.color.darkOrange};
  }
`;

export const DismissButton = styled(Button)`
  background: none;
  color: ${({ theme }) => theme.color.greyScale3};

  &:hover {
    background-color: ${({ theme }) => theme.color.greyScale7};
  }
`;
