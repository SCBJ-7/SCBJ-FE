import { useRef } from "react";

import { useToastStore } from "@/store/store";

interface ToastProps {
  isError: boolean;
  strings: React.ReactNode[];
}

const useToastConfig = () => {
  const setToastConfig = useToastStore((state) => state.setToastConfig);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleToast = (isError: boolean, strings: React.ReactNode[]) => {
    const toastProps: ToastProps = { isError, strings };

    setToastConfig({
      isShow: true,
      isError: toastProps.isError,
      strings: [""],
    });

    setToastConfig({
      isShow: true,
      isError: toastProps.isError,
      strings: toastProps.strings,
    });

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      setToastConfig({
        isShow: false,
        isError: toastProps.isError,
        strings: toastProps.strings,
      });
    }, 3000);
  };

  return { handleToast };
};

export default useToastConfig;
