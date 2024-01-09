import { motion } from "framer-motion";
import styled from "styled-components";

export const ToastContainer = styled(motion.div)`
  width: 360px;
  height: 40px;
  border-radius: 28px;

  ${({ theme }) => theme.typo.button7};
  background-color: ${({ theme }) => theme.color.black};
  color: white;
  box-shadow: 2px 2px 8px 0 rgba(0, 0, 0, 0.2);

  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  left: 0;
  right: 0;
  top: 80px;

  margin: auto;
  z-index: 100;

  & strong {
    color: #ff3478;
  }
`;
