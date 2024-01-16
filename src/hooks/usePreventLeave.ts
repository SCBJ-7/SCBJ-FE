import { useEffect } from "react";

const usePreventLeave = (global = false) => {
  const handleBeforeUnload = (event: Event) => {
    event.preventDefault();
    event.returnValue = false; // Chrome requires returnValue to be set.
  };
  const onPreventLeave = () => {
    window.addEventListener("beforeunload", handleBeforeUnload);
  };
  const offPreventLeave = () => {
    window.removeEventListener("beforeunload", handleBeforeUnload);
  };

  // 만약 페이지 전체에 적용할 경우 global을 true로 입력해 window에 적용하면 된다.
  // 단일 요소(e.g., HTMLInputElement)에 별개로 적용할 경우 on/off PreventLeave 이벤트를 사용한다.
  useEffect(() => {
    if (!global) return;
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [global]);

  return {
    onPreventLeave,
    offPreventLeave,
  };
};

export default usePreventLeave;
