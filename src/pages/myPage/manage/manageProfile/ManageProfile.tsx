import { useUserInfoQuery } from "@/hooks/api/useUserInfoQuery";
import ManageEmail from "../manageEmail/ManageEmail";
import ManageName from "../manageName/ManageName";
import ManagePhoneNumber from "../managePhoneNumber/ManagePhoneNumber";
import * as S from "./ManageProfile.style";

const ManageProfile = () => {
  const { data: userInfo } = useUserInfoQuery();
  if (!userInfo) throw new Error("계정을 찾을 수 없습니다");

  return (
    <S.ManageContainer>
      <S.ManageInfoWrapper>
        <h1>나의 계정</h1>
        <ManageEmail email={userInfo?.email} />
        <ManageName
          prevName={userInfo?.name}
          linkedToYanolja={userInfo?.linkedToYanolja}
        />
        <ManagePhoneNumber prevPhoneNumber={userInfo?.phone} />
      </S.ManageInfoWrapper>
    </S.ManageContainer>
  );
};

export default ManageProfile;
