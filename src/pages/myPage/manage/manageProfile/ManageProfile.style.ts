import styled from "styled-components";

export const ManageContainer = styled.div`
  padding: 32px 20px;

  h1 {
    ${({ theme }) => theme.typo.body2}
    color: ${({ theme }) => theme.color.black};

    margin-bottom: 16px;
  }
`;

export const ManageInfoWrapper = styled.div`
  ${({ theme }) => theme.typo.body4}
  color: ${({ theme }) => theme.color.black};

  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const ManageInfoElement = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  gap: 8px;

  border-bottom: ${({ theme }) => theme.border.strokeThin};

  input {
    border: none;
    outline: none;

    width: 100%;
  }

  div {
    display: flex;
    align-items: center;

    height: 32px;
  }

  button {
    position: absolute;
    right: 0px;
  }
`;
