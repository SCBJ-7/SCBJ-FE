import { postSignup, SignupProps } from "@apis/postSignup.ts";
import { PATH } from "@constants/path.ts";
import { useFormContext } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import * as S from "../../SignUp.style";

const SignUpSubmitBtn = () => {
  const navigate = useNavigate();

  const {
    getValues,
    handleSubmit,
    formState: { isValid },
  } = useFormContext();

  const handleOnSubmit = async () => {
    const signupInfo: SignupProps = {
      email: getValues("email"),
      password: getValues("password"),
      name: getValues("name"),
      phone: getValues("phone"),
      privacyPolicy: getValues("term1"),
      termOfUse: getValues("term2"),
    };

    await postSignup(signupInfo)
      .then(() => {
        navigate(PATH.LOGIN);
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
