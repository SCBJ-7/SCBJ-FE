import styled from "styled-components";

export const SequneceSection = styled.div`
  height: 50px;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SequneceIndicator = styled.div`
  display: flex;

  section {
    cursor: pointer;
    width: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  section span {
    width: 6px;
    height: 6px;
    border-radius: 3px;
    background-color: ${({ theme }) => theme.color.greyScale5};
  }

  section span.current {
    width: 8px;
    height: 8px;
    border-radius: 4px;
    background-color: ${({ theme }) => theme.color.black};
  }
`;
