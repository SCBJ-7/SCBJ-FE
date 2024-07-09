import { ReactNode, createContext, useMemo } from "react";

interface BottomSheetContextProps {
  onClose: () => void;
}
export const BottomSheetContext = createContext<BottomSheetContextProps | null>(
  null,
);

interface BottomSheetProviderProps {
  children: ReactNode;
  onClose: () => void;
}

export const BottomSheetProvider = ({
  children,
  onClose,
}: BottomSheetProviderProps) => {
  const ContextValue = useMemo(() => ({ onClose }), [onClose]);

  return (
    <BottomSheetContext.Provider value={ContextValue}>
      {children}
    </BottomSheetContext.Provider>
  );
};
