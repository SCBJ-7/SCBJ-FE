import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled.div`
  height: 30px;
  width: 40px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  position: relative;
`;

export const LocaleDiv = styled(motion.div)`
  font-size: 18px;
  font-weight: 800;
  position: absolute;

  & .percentage {
    color: ${({ theme }) => theme.color.percentBlue};
  }
`;
