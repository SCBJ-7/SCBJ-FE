import { theme } from "@styles/theme";
import { hexToRgba } from "@utils/hexTorgba";
import styled from "styled-components";

export { Text } from "@pages/paymentPage/Payment.style";

export const HStack = styled.div`
  display: flex;
  flex-direction: column;

  gap: 1.5rem;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  &:focus > .radio-box {
    box-shadow: 0 0 0 3px ${({ theme }) => theme.color.lightBlue};
  }
`;

export const HiddenRadioBox = styled.input.attrs({
  type: "radio",
})`
  display: none;
`;

export const RadioBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0.65rem;

  border: 1px solid ${({ theme }) => theme.color.greyScale5};
  border-radius: 4px;

  cursor: pointer;

  transition:
    border,
    background-color 0.1s ease-in-out;

  &[data-checked] {
    border: 1px solid ${({ theme }) => theme.color.percentBlue};
    background-color: ${hexToRgba(theme.color.lightBlue, 0.55)};
  }

  &:hover {
    background-color: ${hexToRgba(theme.color.lightBlue, 0.5)};
  }

  & img {
    width: 52px;
  }
`;

export const BenefitWrapper = styled.div`
  padding: 1rem;

  display: flex;
  flex-direction: column;

  gap: 1rem;
  line-height: 1.8;

  background-color: ${({ theme }) => theme.color.greyScale7};
  border-radius: 8px;

  & > img {
    width: 52px;
  }
`;

export const TextWrapper = styled.div`
  line-height: 1.8;
`;

interface InputCaptionProps {
  error?: boolean;
}

export const InputCaption = styled.p.withConfig({
  shouldForwardProp: (prop) => !["error", "success"].includes(prop),
})<InputCaptionProps>`
  color: ${({ error, theme }) =>
    error ? theme.color.cautionRed : theme.color.percentBlue};

  ${({ theme }) => theme.typo.caption3};
`;
