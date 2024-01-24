import EnterAccountInfo from "@components/account/enterAccountInfo/EnterAccountInfo";
import { PATH } from "@constants/path";
import useToastConfig from "@hooks/common/useToastConfig";
import { useLocation, useNavigate } from "react-router-dom";

const EditAccount = () => {
  const { state } = useLocation();
  const { handleToast } = useToastConfig();
  const navigate = useNavigate();

  if (!state) {
    handleToast(true, [<>잘못된 접근 방식입니다.</>]);
    navigate(PATH.SETTING, { replace: true });
    return;
  }

  return <EnterAccountInfo accountInfo={state} />;
};

export default EditAccount;
