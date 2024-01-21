import EnterAccountInfo from "@components/account/enterAccountInfo/EnterAccountInfo";
import { useLocation } from "react-router-dom";

const EditAccount = () => {
  const { state } = useLocation();

  return <EnterAccountInfo accountInfo={state} />;
};

export default EditAccount;
