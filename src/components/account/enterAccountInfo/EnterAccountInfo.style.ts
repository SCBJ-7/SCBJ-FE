import styled, { css } from "styled-components";
import { AnimationControls, motion } from "framer-motion";

interface BankInputProps {
  $bank: string | undefined;
  $showBankList: boolean;
}

export const EnterAccountInfoContainer = styled.div`
  h1 {
    padding: 24px 20px 0;
    ${({ theme }) => theme.typo.title4}
    color: ${({ theme }) => theme.color.black};

    margin-bottom: 32px;
  }

  background-color: white;
  width: 100%;
  height: 100%;
`;

const inputStyle = css`
  width: calc(100% - 40px);
  height: 43px;

  padding: 0 16px;
  margin: 0 20px;

  ${({ theme }) => theme.typo.body2}
  color: ${({ theme }) => theme.color.percentOrange};
  line-height: 43px;

  transition: all 0.2s ease;

  border: ${({ theme }) => theme.border.strokeThin};
  border-radius: 8px;

  box-shadow: 4px 4px 10px 0px rgba(0, 0, 0, 0.04);
`;

export const Header = styled.header`
  display: flex;
  align-items: center;

  padding: 0 20px;

  height: 48px;

  ${({ theme }) => theme.typo.body1}
  color: ${({ theme }) => theme.color.black};

  h1 {
    width: calc(100% - 48px);
    text-align: center;
  }
`;

export const AccountNumberInput = styled.input.attrs({
  type: "number",
  placeholder: "계좌번호",
})`
  ${inputStyle}

  margin-bottom: 16px;

  outline: none;

  &::placeholder {
    color: ${({ theme }) => theme.color.greyScale5};
  }

  &:focus {
    border-color: ${({ theme }) => theme.color.percentOrange};
  }

  &::-webkit-inner-spin-button {
    appearance: none;
    -moz-appearance: none;
    -webkit-appearance: none;
  }
`;

export const BankInput = styled.div<BankInputProps>`
  ${inputStyle}

  color: ${({ $bank, theme }) => !$bank && theme.color.greyScale5};
  border-color: ${({ $showBankList, theme }) =>
    $showBankList && theme.color.percentOrange};
`;

export const BackgroundBlur = styled.div<{ $isVisible: boolean }>`
  position: absolute;
  top: 0;
  left: 0;

  display: ${({ $isVisible }) => ($isVisible ? "block" : "none")};

  width: 100%;
  height: 100%;

  background-color: rgba(0, 0, 0, 0.45);
`;

export const BankListBottomSheet = styled(motion.div).attrs<{
  controls: AnimationControls;
}>((props) => ({
  initial: { y: "100%", display: "none" },
  animate: props.controls,
  transition: { duration: 1 },
}))`
  position: absolute;
  bottom: 0;

  padding: 64px 20px 100px;

  background-color: ${({ theme }) => theme.color.greyScale7};

  border-radius: 28px 28px 0px 0px;

  h2 {
    ${({ theme }) => theme.typo.title4}
    color: ${({ theme }) => theme.color.black};

    margin-bottom: 16px;
  }
`;

export const BankListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px 6%;

  height: 100%;

  @media screen and (min-width: 425px) {
    gap: 20px 5%;
  }

  @media screen and (min-width: 768px) {
    gap: 20px;
    justify-content: space-between;
  }
`;

export const BankListWrapper = styled.label`
  cursor: pointer;

  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 16px;

  ${({ theme }) => theme.typo.body5}
  color: ${({ theme }) => theme.color.black};

  flex: 20.5%;
  flex-grow: 0;

  input {
    display: none;
  }

  @media screen and (min-width: 425px) {
    flex: 12.5%;
    flex-grow: 0;
  }

  @media screen and (min-width: 768px) {
    flex: 10%;
    flex-grow: 0;
  }
`;

export const SubmitButton = styled.button<{
  $disabled: boolean;
  $showBankList: boolean;
}>`
  position: absolute;
  left: 20px;
  bottom: 112px;

  display: ${({ $showBankList }) => $showBankList && "none"};

  width: calc(100% - 40px);
  height: 48px;

  border-radius: 8px;

  ${({ theme }) => theme.typo.button2}
  color: ${({ theme }) => theme.color.white};
  line-height: 48px;

  background-color: ${({ theme, $disabled }) =>
    $disabled ? theme.color.greyScale5 : theme.color.percentOrange};
`;
