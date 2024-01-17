import RegisterAccount from "../registerAccount/RegisterAccount";
import EditAccount from "../editAccount/EditAccount";
import AccountInfo from "../accountInfo/AccountInfo";

const ManageAccount = () => {
  // FIXME: api 호출을 통해서 등록된 계좌가 있는지 확인해야함
  const noPrevAccount = true;
  const isEditing = false;

  return (
    <>
      {noPrevAccount ? (
        <RegisterAccount />
      ) : isEditing ? (
        <EditAccount />
      ) : (
        <AccountInfo />
      )}
    </>
  );
};

export default ManageAccount;
