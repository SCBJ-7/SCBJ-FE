import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled(motion.section)`
  width: 100%;
  height: 100%;

  background-color: ${({ theme }) => theme.color.greyScale7};

  ${({ theme }) => theme.scroll}
`;

export const ButtonSection = styled.div<{ $readyToSubmit: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;

  & button {
    margin: 24px 0 64px;

    width: calc(100% - 40px);
    height: 48px;

    ${({ theme }) => theme.typo.button4}
    color: white;

    background-color: ${({ theme, $readyToSubmit }) =>
      $readyToSubmit ? theme.color.percentOrange : theme.color.greyScale5};
    border-radius: 12px;
    transition: 0.2s;

    &:hover {
      background-color: ${({ theme, $readyToSubmit }) =>
        $readyToSubmit ? theme.color.darkOrange : theme.color.greyScale5};
    }
  }
`;
