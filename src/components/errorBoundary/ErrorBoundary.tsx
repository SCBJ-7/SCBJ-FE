import { useQueryErrorResetBoundary } from "@tanstack/react-query";
import { ComponentType, ReactNode } from "react";
import { ErrorBoundary, FallbackProps } from "react-error-boundary";
import ErrorFallback from "./ErrorFallback";

export interface LocalErrorBoundaryProps {
  children: ReactNode;
  fallback?: ComponentType<FallbackProps>;
}

const LocalErrorBoundary = ({
  children,
  fallback,
}: LocalErrorBoundaryProps) => {
  const { reset } = useQueryErrorResetBoundary();

  return (
    <ErrorBoundary
      FallbackComponent={fallback ? fallback : ErrorFallback}
      onReset={reset}
      resetKeys={[location.pathname]}
    >
      {children}
    </ErrorBoundary>
  );
};

export default LocalErrorBoundary;
