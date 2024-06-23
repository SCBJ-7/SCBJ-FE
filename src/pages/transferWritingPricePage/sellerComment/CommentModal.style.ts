import { motion } from "framer-motion";
import styled from "styled-components";

import breakpoints from "@/styles/breakpoints";

export const BackDrop = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  bottom: 0;
  width: 100%;
  max-width: 768px;
  height: 100%;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.45), transparent 80%);
  /* background-color: rgba(0, 0, 0, 0.45); */
  transition: opacity 0.5s ease;
  z-index: 11;
`;

export const CommentModalContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;

  position: fixed;
  width: 100%;
  max-width: 768px;
  bottom: 0;

  left: 0;
  right: 0;
  margin: auto;

  background-color: ${({ theme }) => theme.color.white};
  padding: 48px 1.25rem 3rem;

  box-shadow: 0px -2px 5px rgba(0, 0, 0, 0.2);
  border-radius: 28px 28px 0px 0px;

  z-index: 12;

  @media (max-width: ${breakpoints.md}) {
    width: 100%;
  }

  @media (max-width: ${breakpoints.sm}) {
    width: 100%;
  }
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Title = styled.span`
  ${({ theme }) => theme.typo.title4};
  line-height: 1.7;
`;

export const Subtitle = styled.span`
  ${({ theme }) => theme.typo.body1};
`;

export const TitleDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  line-height: 1.7;
  margin-top: 32px;
`;

export const Count = styled.div`
  font-size: 12px;
  font-weight: 400;
  span {
    font-size: 14px;
    font-weight: 600;
  }
`;

export const Message = styled.span`
  ${({ theme }) => theme.typo.body4};
`;

export const BadgesList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

export const Badge = styled.li<{ $clicked: boolean }>`
  flex-shrink: 0;
  height: 28px;
  color: ${({ theme }) => theme.color.percentOrange};
  border: 1px solid ${({ theme }) => theme.color.percentOrange};
  padding: 8px;
  background-color: ${({ $clicked, theme }) =>
    $clicked && theme.color.lightOrange};

  ${({ theme }) => theme.typo.body5};

  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 14px;
  ${({ theme }) => theme.unableToDrag}
  &:hover {
    background-color: ${({ theme }) => theme.color.lightOrange};
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;

  width: 100%;

  margin-top: 1rem;
  gap: 8px;
`;

const Button = styled.button`
  border: none;

  border-radius: 8px;
  padding: 0.75rem;

  ${({ theme }) => theme.typo.button2};

  width: 70%;

  @media (max-width: ${breakpoints.md}) {
    width: 90%;
  }

  @media (max-width: ${breakpoints.sm}) {
    width: 100%;
  }

  transition: background-color 0.2s ease-in-out;
`;

export const InstallButton = styled(Button)`
  background-color: ${({ theme }) => theme.color.percentOrange};
  color: #ffffff;

  &:hover {
    background-color: ${({ theme }) => theme.color.darkOrange};
  }
`;

export const DismissButton = styled(Button)`
  color: ${({ theme }) => theme.color.percentOrange};
  border: 1px solid ${({ theme }) => theme.color.percentOrange};

  &:hover {
    background-color: ${({ theme }) => theme.color.lightOrange};
  }
`;
