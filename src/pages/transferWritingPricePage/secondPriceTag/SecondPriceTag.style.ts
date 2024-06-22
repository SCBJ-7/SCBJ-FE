import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled(motion.section)`
  padding: 40px 20px;

  display: flex;
  flex-direction: column;
  gap: 16px;
  background-color: white;

  margin-top: 8px;
`;

export const Contents = styled.div`
  ${({ theme }) => theme.typo.title4};
`;
