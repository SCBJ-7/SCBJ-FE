import Checkbox from "@components/checkbox/Checkbox";
import * as S from "./UserInfoSection.style";
import { useState } from "react";

const UserInfoSection = () => {
  const [checked, setChecked] = useState(false);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return (
    <S.HStack>
      <S.Text variant="body2">이용자 정보</S.Text>
      <Checkbox
        id="isDiffUser"
        isChecked={checked}
        onChange={handleCheckboxChange}
        variant="caption"
      >
        구매자 정보와 동일합니다.
      </Checkbox>

      <S.FormWrapper>
        <S.InputWrapper>
          <S.Label htmlFor="name">이름</S.Label>
          <S.Input type="text" id="name" placeholder="김양수" />
        </S.InputWrapper>
        <S.InputWrapper>
          <S.Label htmlFor="email">이메일</S.Label>
          <S.Input type="text" id="email" placeholder="이메일을 입력해주세요" />
        </S.InputWrapper>
        <S.InputWrapper>
          <S.Label htmlFor="phoneNumber">휴대폰번호</S.Label>
          <S.Input
            type="text"
            id="phoneNumber"
            placeholder="전화번호를 입력해주세요"
          />
        </S.InputWrapper>
      </S.FormWrapper>
    </S.HStack>
  );
};

export default UserInfoSection;
