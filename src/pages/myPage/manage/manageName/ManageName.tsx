import { useRef, useState } from "react";
import { ManageInfoElement } from "../manageProfile/ManageProfile.style";

const ManageName = ({ prevName }: { prevName: string }) => {
  const [name, setName] = useState<string>(prevName);
  const [isChanging, setIsChanging] = useState<boolean>(false);

  const inputRef = useRef<HTMLInputElement>(null);

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
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
      <label htmlFor="name">이름</label>
      <div>
        <input
          type="text"
          id="name"
          value={name}
          onChange={onChangeHandler}
          ref={inputRef}
          readOnly={!isChanging}
        />
        <button onClick={onClickHandler}>{buttonText}</button>
      </div>
    </ManageInfoElement>
  );
};

export default ManageName;
