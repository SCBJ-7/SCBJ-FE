import styled from "styled-components";
import LoginLogo from "../../assets/logos/loginlogo.svg?react";
import { Link } from "react-router-dom";

export const SignInContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 100px 20px 0 20px;
`;

export const SignInLogo = styled(LoginLogo)``;

export const SignInInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  margin: 80px 0 40px 0;

  width: 100%;
`;

export const SignInInputWrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const SignInInputTitle = styled.p`
  ${({ theme }) => theme.typo.caption1}
  color: ${({ theme }) => theme.color.greyScale1};
  font-weight: 400;
`;

export const SignInInput = styled.input`
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
`;

export const SignInInputCaption = styled.span<{ $color: string }>`
  ${({ theme }) => theme.typo.caption5}
  color: ${({ $color }) => $color};
`;

export const SignInSubmitBtn = styled.button`
  width: 100%;
  height: 48px;
  border-radius: 8px;

  color: white;

  background-color: ${({ theme }) => theme.color.percentOrange};
`;

export const SignInLinkWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;

  margin: 20px 0 0 0;
`;

export const SignInLink = styled(Link)`
  color: ${({ theme }) => theme.color.greyScale1};
  ${({ theme }) => theme.typo.caption1}
`;
