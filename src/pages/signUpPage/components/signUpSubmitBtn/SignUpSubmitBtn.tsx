import axios from "axios";
import { useFormContext } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import * as S from "../../SignUp.style";

import { BASE_URL, END_POINTS } from "@/constants/api";

const SignUpSubmitBtn = () => {
  const navigate = useNavigate();

  const {
    getValues,
    handleSubmit,
    formState: { isValid },
  } = useFormContext();

  const handleOnSubmit = async () => {
    const data = getValues([
      "email",
      "password",
      "name",
      "phone",
      "term1",
      "term2",
    ]);
    await axios
      .post(`${BASE_URL}${END_POINTS.SIGNUP}`, {
        email: data[0],
        password: data[1],
        name: data[2],
        phone: data[3],
        privacyPolicy: data[4],
        termOfUse: data[5],
      })
      .then(() => {
        navigate("/signin");
      })
      .catch(({ response }) => {
        alert(response.data.message);
      });
  };

  return (
    <S.SignUpSubmitBtn
      $isValid={isValid}
      type="submit"
      onClick={handleSubmit(handleOnSubmit)}
    >
      가입하기
    </S.SignUpSubmitBtn>
  );
};

export default SignUpSubmitBtn;
