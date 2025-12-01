import React from "react";
import { ErrorBoundary } from "react-error-boundary";
import ErrorMessage from "./ErrorMessage";

const ErrorFallback = ({
  error,
  resetErrorBoundary,
}: {
  error: Error;
  resetErrorBoundary: () => void;
}) => {
  return <ErrorMessage message={error.message} onRetry={resetErrorBoundary} />;
};

interface GlobalErrorBoundaryProps {
  children: React.ReactNode;
}

const GlobalErrorBoundary: React.FC<GlobalErrorBoundaryProps> = ({
  children,
}) => {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>{children}</ErrorBoundary>
  );
};

export default GlobalErrorBoundary;
