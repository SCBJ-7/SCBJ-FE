import Checkbox from "@/components/checkbox/Checkbox";
import { useEffect } from "react";
import { Controller, useFormContext } from "react-hook-form";

import * as S from "./TermsAgreementSection.style";

const TermsAgreementSection = () => {
  const { control, watch, setValue } = useFormContext();
  const watchTerms = watch(["term1", "term2", "term3", "term4", "term5"]);

  useEffect(() => {
    const allChecked = watchTerms.every(Boolean);
    const currentAllChecked = watch("all");

    if (currentAllChecked !== allChecked) {
      setValue("all", allChecked, { shouldValidate: true });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [watchTerms, setValue]);

  const handleParentCheckboxChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setValue("term1", event.target.checked);
    setValue("term2", event.target.checked);
    setValue("term3", event.target.checked);
    setValue("term4", event.target.checked);
    setValue("term5", event.target.checked);
  };

  return (
    <S.HStack>
      <S.TitleWrapper>
        <S.Text variant="body2">규정 및 약관 동의</S.Text>
      </S.TitleWrapper>
      <S.ItemWrapper>
        <Controller
          name="all"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <Checkbox
              id="all"
              isChecked={field.value}
              value={field.value}
              onChange={handleParentCheckboxChange}
              variant="title"
              ariaLabel="전체동의"
            >
              전체동의
            </Checkbox>
          )}
        />
      </S.ItemWrapper>
      <S.ItemWrapper>
        <Controller
          name="term1"
          control={control}
          render={({ field }) => (
            <Checkbox
              id="term1"
              isChecked={field.value}
              value={field.value}
              onChange={field.onChange}
              variant="caption"
              ariaLabel="만 14세 이상 이용 동의"
            >
              [필수] 만 14세 이상 이용 동의
            </Checkbox>
          )}
        />
      </S.ItemWrapper>
      <S.ItemWrapper>
        <Controller
          name="term2"
          control={control}
          render={({ field }) => (
            <Checkbox
              id="term2"
              isChecked={field.value}
              value={field.value}
              onChange={field.onChange}
              variant="caption"
              ariaLabel="이용규칙 동의"
            >
              [필수] 이용규칙 동의
            </Checkbox>
          )}
        />
      </S.ItemWrapper>
      <S.ItemWrapper>
        <Controller
          name="term3"
          control={control}
          render={({ field }) => (
            <Checkbox
              id="term3"
              isChecked={field.value}
              value={field.value}
              onChange={field.onChange}
              variant="caption"
              ariaLabel="취소 및 환불 규칙 동의"
            >
              [필수] 취소 및 환불 규칙 동의
            </Checkbox>
          )}
        />
      </S.ItemWrapper>
      <S.ItemWrapper>
        <Controller
          name="term4"
          control={control}
          render={({ field }) => (
            <Checkbox
              id="term4"
              isChecked={field.value}
              value={field.value}
              onChange={field.onChange}
              variant="caption"
              ariaLabel="개인정보 수집 및 이용 동의"
            >
              [필수] 개인정보 수집 및 이용 동의
            </Checkbox>
          )}
        />
      </S.ItemWrapper>
      <S.ItemWrapper>
        <Controller
          name="term5"
          control={control}
          render={({ field }) => (
            <Checkbox
              id="term5"
              isChecked={field.value}
              value={field.value}
              onChange={field.onChange}
              variant="caption"
              ariaLabel="개인정보 제3자 제공 동의"
            >
              [필수] 개인정보 제3자 제공 동의
            </Checkbox>
          )}
        />
      </S.ItemWrapper>
    </S.HStack>
  );
};

export default TermsAgreementSection;
