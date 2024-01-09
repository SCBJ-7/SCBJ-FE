import { ManageInfoElement } from "../manageProfile/ManageProfile.style";

const ManageEmail = ({ prevEmail }: { prevEmail: string }) => {
  return (
    <ManageInfoElement>
      <label htmlFor="email">이메일 아이디</label>
      <div>
        <input type="text" id="email" readOnly value={prevEmail} />
      </div>
    </ManageInfoElement>
  );
};

export default ManageEmail;
