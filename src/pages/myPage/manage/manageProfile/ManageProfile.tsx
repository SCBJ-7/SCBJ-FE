import ManageEmail from "../manageEmail/ManageEmail";
import ManageName from "../manageName/ManageName";
import ManagePhoneNumber from "../managePhoneNumber/ManagePhoneNumber";
import * as S from "./ManageProfile.style";

const ManageProfile = () => {
  const { data } = dummy;

  return (
    <S.ManageContainer>
      <h1>나의 계정</h1>
      <S.ManageInfoWrapper>
        <ManageEmail prevEmail={data.email} />
        <ManageName
          prevName={data.name}
          linkedToYanolja={data.linkedToYanolja}
        />
        <ManagePhoneNumber prevPhoneNumber={data.phone} />
      </S.ManageInfoWrapper>
    </S.ManageContainer>
  );
};

export default ManageProfile;

const dummy = {
  status: 200,
  message: "성공적으로 회원 정보를 조회했습니다.",
  data: {
    id: 1,
    email: "test@mail.com",
    name: "윤석민",
    phone: "10-1234-5678",
    accountNumber: "123-456-7810",
    bank: "농협",
    linkedToYanolja: false,
  },
};
