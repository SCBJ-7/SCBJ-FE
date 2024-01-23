import { PiMagnifyingGlassBold } from "react-icons/pi";
import styled from "styled-components";

export const Container = styled.section`
  width: calc(100% - 40px);
  height: 56px;
  border-radius: 12px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: white;
  padding: 16px;
  border: 1px solid ${({ theme }) => theme.color.greyScale6};
  margin-bottom: 24px;
  transition: 0.2s;
  box-shadow: 4px 4px 10px 0 rgba(0, 0, 0, 0.1);
  cursor: pointer;

  & h4 {
    ${({ theme }) => theme.typo.button4}
  }

  &:hover {
    transform: scale(1.01);
  }
`;

export const SearchIcon = styled(PiMagnifyingGlassBold)`
  font-size: 24px;
`;
