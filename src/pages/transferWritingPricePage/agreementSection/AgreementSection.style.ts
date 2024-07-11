import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled(motion.div)`
  background-color: white;
  padding: 32px 0 8px;
`;

export const FinalTerm = styled(motion.div)<{ $allChecked: boolean }>`
  margin-top: 32px;
  width: 100%;
  display: flex;
  justify-content: center;

  ${({ theme }) => theme.typo.body4}
  color:  ${({ theme }) => theme.color.percentBlue};
  opacity: ${({ $allChecked }) => ($allChecked ? "1" : "0")};
  transition: opacity 0.3s ease-in-out;
`;
