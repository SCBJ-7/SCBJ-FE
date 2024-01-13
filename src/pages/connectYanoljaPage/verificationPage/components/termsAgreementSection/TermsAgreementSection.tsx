import Checkbox from "@components/checkbox/Checkbox";
import { useEffect } from "react";
import { Controller, useFormContext } from "react-hook-form";

import * as S from "./TermsAgreementSection.style";

const TermsAgreementSection = () => {
  const { control, watch, setValue } = useFormContext();
  const watchTerms = watch(["term1", "term2"]);

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
  };

  return (
    <S.SubWrapper>
      <Controller
        name="all"
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <Checkbox
            id="all"
            isChecked={field.value}
            onChange={handleParentCheckboxChange}
            variant="title"
            ariaLabel="전체동의"
          >
            전체동의
          </Checkbox>
        )}
      />
      <Controller
        name="term1"
        control={control}
        render={({ field }) => (
          <Checkbox
            id="term1"
            isChecked={field.value}
            onChange={field.onChange}
            variant="caption"
            ariaLabel="이용약관"
          >
            [필수]{" "}
            <a
              className="link"
              target="_blank"
              href="https://makeux.notion.site/makeux/d790a6e1e31b4c7491a973cbfe3c160c"
              rel="noopener"
            >
              이용약관
            </a>
            에 동의합니다
          </Checkbox>
        )}
      />
      <Controller
        name="term2"
        control={control}
        render={({ field }) => (
          <Checkbox
            id="term2"
            isChecked={field.value}
            onChange={field.onChange}
            variant="caption"
            ariaLabel="개인정보 처리방침"
          >
            [필수]{" "}
            <a
              className="link"
              target="_blank"
              href="https://www.notion.so/makeux/12b8882bf894419e82f9e295348156f0"
              rel="noopener"
            >
              개인정보 처리방침
            </a>
            에 동의합니다
          </Checkbox>
        )}
      />
    </S.SubWrapper>
  );
};

export default TermsAgreementSection;
