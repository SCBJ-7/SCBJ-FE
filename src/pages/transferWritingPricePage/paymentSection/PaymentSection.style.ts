import { theme } from "@/styles/theme";
import { motion } from "framer-motion";
import { PiCaretDownBold } from "react-icons/pi";
import styled from "styled-components";

export const Container = styled(motion.div)<{ $is2ndChecked: boolean }>`
  padding: 16px 20px;
  background-color: white;
  margin-bottom: ${({ $is2ndChecked }) => ($is2ndChecked ? "8px" : "1px")};
  border-top: ${({ $is2ndChecked }) =>
    $is2ndChecked ? "1px dashed #CDCDCD" : ""};
`;
theme;
export const Contents = styled.div`
  ${({ theme }) => theme.typo.body4};

  h1 {
    ${({ theme }) => theme.typo.body3};
  }

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

export const Label = styled(motion.div)<{ $isOpen: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${({ $isOpen }) => ($isOpen ? "16px" : "0")};
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

export const downIcon = styled(PiCaretDownBold)`
  font-size: 14px;
  transition: 0.2s;
  transform: ${({ $isOpen }) => ($isOpen ? "" : "rotate(-180deg)")};
`;
