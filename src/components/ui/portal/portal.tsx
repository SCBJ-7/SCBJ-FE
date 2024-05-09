import { PropsWithChildren, useEffect, useRef } from "react";
import ReactDOM from "react-dom";

const Portal = (props: PropsWithChildren) => {
  const modalRootRef = useRef(document.createElement("div"));

  useEffect(() => {
    const modalRoot = modalRootRef.current;
    document.body.style.overflow = "hidden";

    if (!modalRoot.parentElement) {
      document.body.appendChild(modalRoot);
      modalRoot.id = "portal";
    }

    return () => {
      if (modalRoot.parentElement) {
        document.body.removeChild(modalRoot);
      }
      document.body.style.overflow = "unset";
    };
  }, [modalRootRef]);

  return ReactDOM.createPortal(props.children, modalRootRef.current);
};

export default Portal;
