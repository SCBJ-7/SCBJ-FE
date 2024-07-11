import styled from "styled-components";

export const ManageContainer = styled.div`
  padding-top: 56px;

  h1 {
    ${({ theme }) => theme.typo.body2}
    color: ${({ theme }) => theme.color.black};

    margin-bottom: 16px;
  }
`;

export const ManageInfoWrapper = styled.div`
  padding: 1.25rem;

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

  input {
    border: none;
    outline: none;

    width: 100%;
  }

  div {
    display: flex;
    align-items: center;

    height: 32px;

    border-bottom: ${({ theme }) => theme.border.strokeThin};
  }

  button {
    position: absolute;
    right: 0px;

    padding: 3px 10px;

    border: 1px solid ${({ theme }) => theme.color.black};
    border-radius: 8px;
  }
`;
