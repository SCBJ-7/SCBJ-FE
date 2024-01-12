import { PATH } from "@constants/path";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useFormContext } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import * as S from "./SubmitButton.style";

const SubmitButton = () => {
  const {
    handleSubmit,
    getValues,
    formState: { isValid },
  } = useFormContext();
  const navigate = useNavigate();

  const { mutate: submitMutation } = useMutation({
    mutationFn: (email) =>
      // FIXME: axios instance 정해지면 교체예정
      axios.post("https://3.34.147.187.nip.io/v1/members/yanolja", { email }),
    onSuccess: () => {
      navigate(PATH.YANOLJA_ACCOUNT_VERIFY + "/success", {
        state: { success: true },
        replace: true,
      });
    },
    onError: () => {
      // 에러 핸들링 필요
    },
  });

  const onSubmit = () => {
    const email = getValues("email");
    if (!email) return;

    submitMutation(email);
  };

  return (
    <S.BottomWrapper>
      <S.Button
        type="submit"
        onClick={handleSubmit(onSubmit)}
        data-disabled={isValid ? null : ""}
        aria-label="야놀자 계정 연동하기"
      >
        계정 연동하기
      </S.Button>
    </S.BottomWrapper>
  );
};

export default SubmitButton;
