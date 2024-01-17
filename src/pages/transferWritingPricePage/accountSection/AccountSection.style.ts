import { motion } from "framer-motion";
import styled from "styled-components";
import { FaChevronRight } from "react-icons/fa6";

export const Container = styled(motion.div)`
  padding: 16px 20px 24px;
  background-color: white;
  margin-bottom: 1px;

  cursor: pointer;
`;

export const Contents = styled.div<{ $accountNumber: string | null }>`
  ${({ theme }) => theme.typo.body4};

  h1 {
    ${({ theme }) => theme.typo.body3};
    margin-bottom: 10px;
  }

  section {
    display: flex;
    justify-content: space-between;

    h2 {
      color: ${({ theme, $accountNumber }) =>
        $accountNumber ? theme.color.greyScale1 : theme.color.cautionRed};
    }
  }
`;

export const rightBtn = styled(FaChevronRight)`
  font-size: 12px;
  color: ${({ theme }) => theme.color.greyScale1};
`;
