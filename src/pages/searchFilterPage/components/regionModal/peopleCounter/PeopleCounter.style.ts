import styled from "styled-components";
export const CountContainer = styled.div`
  width: 89px;
  height: 25px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
export const CountNumber = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25px;
  height: 25px;
  margin: 7px;
  ${({ theme }) => theme.typo.body1}
`;
export const UpButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: 500;
  width: 25px;
  height: 25px;
  border: 1px solid ${({ theme }) => theme.color.black};
  border-radius: 50%;
  > span {
    position: relative;
    bottom: 1px;
  }
`;
export const DownButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: 500;
  width: 25px;
  height: 25px;
  border: 1px solid ${({ theme }) => theme.color.black};
  border-radius: 50%;
  > span {
    position: relative;
    bottom: 1px;
  }
  &.disable {
    color: ${({ theme }) => theme.color.greyScale3};
    border: none;
    background-color: ${({ theme }) => theme.color.greyScale6};
  }
`;
