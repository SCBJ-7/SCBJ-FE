import { ManageInfoElement } from "../manageProfile/ManageProfile.style";

const ManageEmail = ({ email }: { email: string }) => {
  return (
    <ManageInfoElement>
      <label htmlFor="email">이메일 아이디</label>
      <div>
        <input type="text" id="email" readOnly value={email} />
      </div>
    </ManageInfoElement>
  );
};

export default ManageEmail;
