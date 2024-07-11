import { createContext, ReactNode, useMemo } from "react";

import { type BgType } from "./types";

interface DialogContextProps {
  onClose: () => void;
  bg: BgType;
}
export const DialogContext = createContext<DialogContextProps | null>(null);

interface DialogProviderProps {
  children: ReactNode;
  onClose: () => void;
  bg: BgType;
}

export const DialogProvider = ({
  children,
  onClose,
  bg,
}: DialogProviderProps) => {
  const ContextValue = useMemo(() => ({ onClose, bg }), [onClose, bg]);

  return (
    <DialogContext.Provider value={ContextValue}>
      {children}
    </DialogContext.Provider>
  );
};
