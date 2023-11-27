import { ReactNode } from "react";

export interface StatusMessage {
  messageText: string;
}

export interface StatusContainerProps {
  children: ReactNode;
}

export interface ErrorStateProps {
  errorText: string;
}

export interface LoadingContentProps {
  isVisible: boolean
}