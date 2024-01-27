import ReactDOM from "react-dom";
import useA2HS from "@hooks/common/useA2HS";
import IcPercentHotelSrc from "@assets/icons/ic_percent_hotel-app.png";
import * as S from "./A2HS.style";
import { AnimatePresence } from "framer-motion";

const A2HS = () => {
  const { deferredPrompt, install, clearPrompt } = useA2HS();
  const modalRoot = document.getElementById("modal-root");

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const modalVariants = {
    hidden: { y: "100vh", x: "50", opacity: 0 },
    visible: { y: 0, x: "50", opacity: 1 },
    exit: { y: "100vh", x: "50", opacity: 0 },
  };

  if (!deferredPrompt || !modalRoot) return null;

  return ReactDOM.createPortal(
    <AnimatePresence mode="wait">
      {deferredPrompt && (
        <>
          <S.BackDrop
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={backdropVariants}
            transition={{ duration: 0.5, delay: 1 }}
          />
          <S.A2HSContainer
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={modalVariants}
            transition={{ duration: 0.5, delay: 1 }}
          >
            <S.CloseButton type="button" onClick={clearPrompt}>
              <S.CloseIcon />
            </S.CloseButton>
            <S.IconWrapper>
              <S.Icon src={IcPercentHotelSrc} alt="퍼센트 호텔 앱 아이콘" />
            </S.IconWrapper>
            <S.Message>
              퍼센트호텔 어플 설치하면 <br /> 더욱 편리하게 거래 가능해요!
            </S.Message>
            <S.ButtonWrapper>
              <S.InstallButton type="button" onClick={install}>
                지금 설치하기
              </S.InstallButton>
              <S.DismissButton type="button" onClick={clearPrompt}>
                웹으로 볼게요
              </S.DismissButton>
            </S.ButtonWrapper>
          </S.A2HSContainer>
        </>
      )}
    </AnimatePresence>,
    modalRoot,
  );
};

export default A2HS;