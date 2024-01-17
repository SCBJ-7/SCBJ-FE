import { useToastStore } from "@/store/store";

interface ToastProps {
  isError: boolean;
  strings: React.ReactNode[];
}

const useToastConfig = () => {
  const setToastConfig = useToastStore((state) => state.setToastConfig);

  const handleToast = (isError: boolean, strings: React.ReactNode[]) => {
    const toastProps: ToastProps = { isError, strings };

    setToastConfig({
      isShow: true,
      isError: toastProps.isError,
      strings: toastProps.strings,
    });
    setTimeout(() => {
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
