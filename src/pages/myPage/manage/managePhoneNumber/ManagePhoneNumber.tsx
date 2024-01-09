import { useRef, useState } from "react";
import { ManageInfoElement } from "../manageProfile/ManageProfile.style";

const ManagePhoneNumber = ({
  prevPhoneNumber,
}: {
  prevPhoneNumber: string;
}) => {
  const [phoneNumber, setPhoneNumber] = useState<string>(prevPhoneNumber);
  const [isChanging, setIsChanging] = useState<boolean>(false);

  const inputRef = useRef<HTMLInputElement>(null);

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(event.target.value);
  };

  const onClickHandler = () => {
    if (isChanging) {
      setIsChanging(false);
      // API CALL();
    } else {
      setIsChanging(true);
      inputRef.current?.focus();
    }
  };

  const buttonText = isChanging ? "확인" : "변경";

  return (
    <ManageInfoElement>
      <label htmlFor="phone-number">전화번호</label>
      <div>
        <input
          type="text"
          id="phone-number"
          value={phoneNumber}
          onChange={onChangeHandler}
          ref={inputRef}
          readOnly={!isChanging}
        />
        <button onClick={onClickHandler}>{buttonText}</button>
      </div>
    </ManageInfoElement>
  );
};

export default ManagePhoneNumber;
