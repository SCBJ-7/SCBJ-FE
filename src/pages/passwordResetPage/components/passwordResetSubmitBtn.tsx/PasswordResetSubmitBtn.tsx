import { useFormContext } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import * as S from "../../PasswordReset.style";

const PasswordResetSubmitBtn = () => {
  const navigate = useNavigate();
  const {
    getValues,
    handleSubmit,
    formState: { isValid },
  } = useFormContext();

  const handleOnSubmit = async () => {
    const data = getValues(["email", "password"]);
    await axios
      .patch("https://3.34.147.187.nip.io/v1/members/password", {
        email: data[0],
        password: data[1],
      })
      .then(() => {
        navigate("/signin");
      })
      .catch(({ response }) => {
        console.log(response);
        alert(response.data.message);
      });
  };

  return (
    <S.PasswordResetSubmitBtn
      $isValid={isValid}
      type="submit"
      onClick={handleSubmit(handleOnSubmit)}
    >
      비밀번호 변경
    </S.PasswordResetSubmitBtn>
  );
};

export default PasswordResetSubmitBtn;
