import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled(motion.section)`
  padding: 40px 20px;

  display: flex;
  flex-direction: column;
  gap: 16px;
  background-color: white;
`;

export const Contents = styled.div`
  ${({ theme }) => theme.typo.body3};

  section {
    display: flex;
    justify-content: space-between;
    margin-bottom: 8px;
  }

  span {
    color: ${({ theme }) => theme.color.percentBlue};
  }
`;

export const Hr = styled.hr`
  border: none;
  border-top: 1px dashed ${({ theme }) => theme.color.greyScale5};
  color: #fff;
  background-color: #fff;
  height: 1px;
  width: 100%;
`;
