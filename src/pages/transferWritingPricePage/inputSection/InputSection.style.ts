import { motion } from "framer-motion";
import styled from "styled-components";

export const InputDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  width: 100%;
  color: ${({ theme }) => theme.color.black};

  ${({ theme }) => theme.typo.title4};
  & p {
    white-space: nowrap;
  }
`;

export const Input = styled(motion.input)`
  width: 100%;
  height: 37px;
  color: ${({ theme }) => theme.color.percentOrange};
  ${({ theme }) => theme.typo.button5};

  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.color.greyScale6};
  box-shadow: 4px 4px 10px 0 rgba(0, 0, 0, 0.04);

  text-align: center;
  transition: 0.2s;

  &::placeholder {
    color: ${({ theme }) => theme.color.greyScale5};
    ${({ theme }) => theme.unableToDrag}
  }
  &:focus {
    border-color: ${({ theme }) => theme.color.percentOrange};
    outline: none;
  }
`;
