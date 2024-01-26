import styled from "styled-components";

export const PasswordResetContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: white;

  margin-top: 32px;

  padding-top: 56px;
  padding-bottom: 62px;
`;

export const PasswordResetTitleContainer = styled.div`
  display: flex;

  width: calc(100% - 40px);
`;

export const PasswordResetTitle = styled.h1`
  ${({ theme }) => theme.typo.title2}
  color: ${({ theme }) => theme.color.greyScale1};
`;

export const PasswordResetInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  margin: 60px 0;

  width: calc(100% - 40px);
`;

export const PasswordResetInputWrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const PasswordResetRelativeWrapper = styled.div`
  position: relative;
`;

export const PasswordResetInputTitle = styled.p`
  ${({ theme }) => theme.typo.caption1}
  color: ${({ theme }) => theme.color.greyScale1};
  font-weight: 400;
`;

export const PasswordResetInput = styled.input`
  width: 100%;
  height: 48px;

  border: 1px solid ${({ theme }) => theme.color.greyScale5};
  border-radius: 8px;

  padding-left: 8px;

  &::placeholder {
    ${({ theme }) => theme.typo.caption1}
    color: ${({ theme }) => theme.color.greyScale5};
    font-weight: 300;
  }

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const PasswordResetInputBtn = styled.button<{
  $isCodeCorrect?: boolean;
}>`
  ${({ theme }) => theme.typo.caption2}
  position: absolute;

  width: 72px;
  height: 28px;

  border: 1px solid ${({ theme }) => theme.color.percentOrange};
  border-radius: 8px;
  background-color: ${({ $isCodeCorrect, theme }) =>
    $isCodeCorrect ? theme.color.percentOrange : "white"};

  color: ${({ $isCodeCorrect, theme }) =>
    $isCodeCorrect ? "white" : theme.color.percentOrange};

  top: 10px;
  right: 10px;
`;

export const PasswordResetInputCaption = styled.span<{
  $isCodeCorrect?: boolean;
}>`
  ${({ theme }) => theme.typo.caption3}
  color: ${({ $isCodeCorrect }) => ($isCodeCorrect ? "#0072B1" : "#FF4949")};
`;

export const PasswordResetSubmitBtn = styled.button<{ $isValid: boolean }>`
  width: calc(100% - 40px);
  height: 48px;
  border-radius: 8px;

  color: white;

  background-color: ${({ $isValid, theme }) =>
    $isValid ? theme.color.percentOrange : theme.color.greyScale5};
`;
