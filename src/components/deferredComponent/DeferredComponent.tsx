import { ReactNode, useEffect, useState } from "react";

export interface DeferredComponentProps {
  children: ReactNode;
}

const DeferredComponent = ({ children }: DeferredComponentProps) => {
  const [isDeferred, setIsDeferred] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsDeferred(true);
    }, 300);
    return () => clearTimeout(timeoutId);
  }, []);

  if (!isDeferred) {
    return null;
  }

  return <>{children}</>;
};

export default DeferredComponent;
