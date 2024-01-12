import * as S from "./Toast.style";
import { useToastStore } from "@/store/store";

const Toast = () => {
  const ToastConfig = useToastStore((state) => state.config);
  const { strings } = ToastConfig;

  const variants = {
    visible: {
      opacity: [0, 0.3, 1],
      y: 0,
      transition: {
        duration: 0.3,
        type: "spring",
        stiffness: 60,
        delay: 0.5,
      },
    },
    hidden: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <S.ToastContainer
      variants={variants}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      {strings.map((str, idx) => {
        return typeof str === "string" ? (
          <span key={idx}>{str}</span>
        ) : (
          <strong key={idx}>{str}</strong>
        );
      })}
    </S.ToastContainer>
  );
};

export default Toast;
