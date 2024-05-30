import { createContext, ReactNode, useMemo } from "react";

interface DialogContextProps {
  onClose: () => void;
}
export const DialogContext = createContext<DialogContextProps | null>(null);

interface DialogProviderProps {
  children: ReactNode;
  onClose: () => void;
}

export const DialogProvider = ({ children, onClose }: DialogProviderProps) => {
  const ContextValue = useMemo(() => ({ onClose }), [onClose]);

  return (
    <DialogContext.Provider value={ContextValue}>
      {children}
    </DialogContext.Provider>
  );
};
