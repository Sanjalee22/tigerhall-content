import { ReactNode } from "react";

interface StatusMessage {
  messageText: string;
}

interface StatusContainerProps {
  children: ReactNode;
}

interface ErrorStateProps {
  errorText: string;
}

interface LoadingContentProps {
  isVisible: boolean
}