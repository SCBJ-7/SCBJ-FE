import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled(motion.div)`
  padding: 32px 20px;
  background-color: white;
  margin-top: 8px;
`;

export const Contents = styled.div`
  ${({ theme }) => theme.typo.body4};

  section {
    display: flex;
    justify-content: space-between;
    margin-bottom: 16px;
  }
`;

//horizontal rule
export const Hr = styled.hr`
  border: none;
  border-top: 1px dashed ${({ theme }) => theme.color.greyScale5};
  color: #fff;
  background-color: #fff;
  height: 1px;
  width: 100%;
`;

export const Result = styled(motion.div)`
  ${({ theme }) => theme.typo.body3};

  section {
    display: flex;
    justify-content: space-between;
    margin-top: 16px;

    span {
      color: ${({ theme }) => theme.color.percentOrange};
    }
  }

  h6 {
    margin-top: 8px;
    ${({ theme }) => theme.typo.caption4};
    color: ${({ theme }) => theme.color.greyScale3};
  }
`;

export const Label = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  ${({ theme }) => theme.typo.title4};
`;

export const IconWrapper = styled.button`
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.2s;
  border-radius: 2px;
  transform: translateX(6px);

  &:hover {
    background-color: ${({ theme }) => theme.color.greyScale7};
  }
`;
