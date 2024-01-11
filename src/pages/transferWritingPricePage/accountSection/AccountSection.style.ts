import styled from "styled-components";
import { FaChevronRight } from "react-icons/fa6";

export const Container = styled.div`
  padding: 16px 20px 24px;
  background-color: white;
  margin-bottom: 16px;
`;

export const Contents = styled.div`
  ${({ theme }) => theme.typo.body4};

  h1 {
    ${({ theme }) => theme.typo.body3};
    margin-bottom: 10px;
  }

  section {
    display: flex;
    justify-content: space-between;

    h2 {
      color: ${({ theme }) => theme.color.cautionRed};
    }
  }
`;

export const rightBtn = styled(FaChevronRight)`
  font-size: 12px;
  color: ${({ theme }) => theme.color.greyScale1};
`;
