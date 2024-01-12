import React from "react";
import {
  FieldValues,
  useController,
  UseControllerProps,
} from "react-hook-form";

import * as S from "./InputField.style";

import type { ColorKeys } from "@/styles/theme";

interface InputFieldProps<TFieldValues extends FieldValues>
  extends UseControllerProps<TFieldValues> {
  label: string;
  type?: React.HTMLInputTypeAttribute;
  placeholder?: string;
  onButtonClick?: () => void;
  buttonText?: string;
  buttonVariant?: "outline" | "solid";
  buttonColor?: ColorKeys;
  successMessage?: string;
  isSuccess?: boolean;
}

function InputField<TFieldValues extends FieldValues>({
  label,
  type = "text",
  placeholder,
  onButtonClick,
  buttonText,
  buttonVariant = "outline",
  buttonColor = "percentOrange",
  successMessage,
  isSuccess = false,
  ...useControllerProps
}: InputFieldProps<TFieldValues>) {
  const {
    field,
    fieldState: { error },
  } = useController(useControllerProps);

  return (
    <S.InputWrapper>
      <S.Label>{label}</S.Label>
      <div className="input_wrapper">
        <S.Input type={type} placeholder={placeholder} {...field} />
        {buttonText && (
          <S.ConFirmButton
            type="button"
            onClick={onButtonClick}
            color={buttonColor}
            variant={buttonVariant}
          >
            {buttonText}
          </S.ConFirmButton>
        )}
      </div>
      {error && <S.InputCaption error>{error.message}</S.InputCaption>}
      {!error && isSuccess && successMessage && (
        <S.InputCaption>{successMessage}</S.InputCaption>
      )}
    </S.InputWrapper>
  );
}

export default InputField;
