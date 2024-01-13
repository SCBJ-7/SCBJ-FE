import { HiCheck } from "react-icons/hi";
import type { ChangeEvent } from "react";
import * as S from "./Checkbox.style";
import type { CheckboxStyleProps } from "./Checkbox.style";

interface CheckboxProps extends CheckboxStyleProps {
  ariaLabel?: string;
  ariaLabelledby?: string;
  ariaDescribedby?: string;
  isChecked?: boolean;
  isDisabled?: boolean;
  id: string;
  name?: string;
  value?: string | number;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  children?: React.ReactNode;
}

export const Checkbox = ({
  ariaLabel,
  ariaLabelledby,
  ariaDescribedby,
  id,
  isChecked = false,
  isDisabled = false,
  name,
  onChange,
  size = "md",
  value,
  variant,
  children,
}: CheckboxProps) => (
  <S.CheckboxContainer htmlFor={id}>
    <S.HiddenCheckbox
      aria-label={ariaLabel}
      aria-labelledby={ariaLabelledby}
      aria-describedby={ariaDescribedby}
      id={id}
      checked={isChecked}
      disabled={isDisabled}
      name={name}
      onChange={onChange}
      value={value}
    />
    <S.StyledCheckbox
      data-checked={isChecked ? "" : null}
      data-disabled={isDisabled ? "" : null}
      size={size}
    >
      {isChecked && <HiCheck className="checkbox-icon" />}
    </S.StyledCheckbox>
    <S.LabelText
      variant={variant}
      data-checked={isChecked ? "" : null}
      data-disabled={isDisabled ? "" : null}
    >
      {children}
    </S.LabelText>
  </S.CheckboxContainer>
);

export default Checkbox;
