import { useQueryErrorResetBoundary } from "@tanstack/react-query";
import { ComponentType, ReactNode } from "react";
import { ErrorBoundary, FallbackProps } from "react-error-boundary";
import { useLocation } from "react-router-dom";

import ErrorFallback from "./ErrorFallback";

export interface LocalErrorBoundaryProps {
  children: ReactNode;
  fallback?: ComponentType<FallbackProps>;
}

const ApiErrorBoundary = ({ children }: LocalErrorBoundaryProps) => {
  const { reset } = useQueryErrorResetBoundary();
  const { pathname } = useLocation();

  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={reset}
      resetKeys={[pathname]}
    >
      {children}
    </ErrorBoundary>
  );
};

export default ApiErrorBoundary;
