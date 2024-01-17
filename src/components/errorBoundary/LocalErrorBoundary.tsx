import { AxiosResponseError } from "@components/error/Error";
import { useQueryErrorResetBoundary } from "@tanstack/react-query";
import { isAxiosError } from "axios";
import { PropsWithChildren } from "react";
import { ErrorBoundary, FallbackProps } from "react-error-boundary";

const ErrorFallback = ({ error, resetErrorBoundary }: FallbackProps) => {
  console.log(error);
  if (isAxiosError(error) || error instanceof AxiosResponseError) {
    const status = error.response?.status;
    const message = error.response?.data?.message || error.message;
    return (
      <div>
        <p>Error: {message}</p>
        <p>Status code: {status}</p>
        <button onClick={resetErrorBoundary}>다시시도 하기</button>
      </div>
    );
  } else {
    // Global Error Boundary로 에러 전달
    throw error;
  }
};

const LocalErrorBoundary: React.FC<PropsWithChildren> = ({ children }) => {
  const { reset } = useQueryErrorResetBoundary();

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback} onReset={reset}>
      {children}
    </ErrorBoundary>
  );
};

export default LocalErrorBoundary;
