import React, { useEffect } from "react";
import ReactDOM from "react-dom";

import * as S from "./Modal.style";

type CustomModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

const Modal: React.FC<CustomModalProps> = ({ isOpen, onClose, children }) => {
  const modalRoot = document.getElementById("modal-root") as HTMLElement;
  const el = document.createElement("div");

  useEffect(() => {
    modalRoot.appendChild(el);
    return () => {
      modalRoot.removeChild(el);
    };
  }, [el, modalRoot]);

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <S.ModalBackdrop onClick={onClose}>
      <S.ModalContent onClick={(e) => e.stopPropagation()}>
        {children}
      </S.ModalContent>
    </S.ModalBackdrop>,
    el,
  );
};

export default Modal;
