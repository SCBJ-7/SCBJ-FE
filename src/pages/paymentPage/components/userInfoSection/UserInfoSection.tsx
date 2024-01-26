import * as S from "./UserInfoSection.style";
import Checkbox from "@components/checkbox/Checkbox";
import { useEffect } from "react";
import { useLoadUserInfo } from "@hooks/common/useLoadUserInfo";
import { Controller, useFormContext } from "react-hook-form";
import { EMAIL_REGEX, PHONE_NUMBER_REGEX } from "@constants/regex";

const UserInfoSection = () => {
  const {
    control,
    register,
    watch,
    setValue,
    formState: { errors },
  } = useFormContext();

  const isDiffUser = watch("isDiffUser");

  watch(["name", "email", "phone"]);

  const userInfo = useLoadUserInfo(isDiffUser);

  useEffect(() => {
    if (isDiffUser && userInfo) {
      setValue("name", userInfo.name, { shouldValidate: true });
      setValue("email", userInfo.email, { shouldValidate: true });
      setValue("phone", userInfo.phone, { shouldValidate: true });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isDiffUser, setValue, userInfo]);

  const handleFieldChange = () => {
    setValue("isDiffUser", false);
  };

  return (
    <S.HStack>
      <S.Text variant="body2">이용자 정보</S.Text>
      <Controller
        name="isDiffUser"
        control={control}
        render={({ field }) => (
          <Checkbox
            id="isDiffUser"
            isChecked={field.value}
            onChange={field.onChange}
            variant="caption"
            ariaLabel="구매자 정보와 동일합니다."
          >
            구매자 정보와 동일합니다.
          </Checkbox>
        )}
      />

      <S.FormWrapper>
        <S.LabelWrapper>
          <S.Label htmlFor="name">이용자 정보</S.Label>
          <S.InputWrapper>
            <S.Input
              {...register("name", { required: "이름을 입력해주세요" })}
              type="text"
              id="name"
              placeholder="김양수"
              onChange={handleFieldChange}
              $isError={!!errors.name}
            />
            {errors.name && (
              <S.InputCaption role="alert" aria-live="polite" error>
                {errors.name.message?.toString()}
              </S.InputCaption>
            )}
          </S.InputWrapper>
        </S.LabelWrapper>
        <S.LabelWrapper>
          <S.Label htmlFor="email">이메일</S.Label>
          <S.InputWrapper>
            <S.Input
              {...register("email", {
                required: "이메일을 입력해주세요",
                pattern: {
                  value: EMAIL_REGEX,
                  message: "유효한 이메일 주소를 입력해주세요",
                },
              })}
              type="text"
              id="email"
              placeholder="이메일을 입력해주세요"
              onChange={handleFieldChange}
              $isError={!!errors.email}
            />
            {errors.email && (
              <S.InputCaption role="alert" aria-live="polite" error>
                {errors.email.message?.toString()}
              </S.InputCaption>
            )}
          </S.InputWrapper>
        </S.LabelWrapper>
        <S.LabelWrapper>
          <S.Label htmlFor="phone">휴대폰번호</S.Label>
          <S.InputWrapper>
            <S.Input
              {...register("phone", {
                required: "전화번호를 입력해주세요",
                pattern: {
                  value: PHONE_NUMBER_REGEX,
                  message:
                    "올바른 휴대폰 번호를 입력해 주세요 (예: 010-1234-5678)",
                },
              })}
              type="text"
              id="phone"
              placeholder="전화번호를 입력해주세요"
              onChange={handleFieldChange}
              $isError={!!errors.phone}
            />
            {errors.phone && (
              <S.InputCaption role="alert" aria-live="polite" error>
                {errors.phone.message?.toString()}
              </S.InputCaption>
            )}
          </S.InputWrapper>
        </S.LabelWrapper>
      </S.FormWrapper>
    </S.HStack>
  );
};

export default UserInfoSection;
