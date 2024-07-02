import { motion } from "framer-motion";
import styled from "styled-components";

export const FirstContainer = styled(motion.div)`
  height: 138px;
  width: 100%;
  padding: 32px 20px 32px;
  background-color: white;
  margin-top: 8px;
`;

export const Headline = styled.div`
  ${({ theme }) => theme.typo.title4};
`;

export const Contents = styled.div`
  ${({ theme }) => theme.typo.body3};
  margin-top: 16px;

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
