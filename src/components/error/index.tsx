import { Modal } from "@/components/modal";
import React, { Component, ErrorInfo, ReactNode } from "react";
import Router from 'next/router'
import Title from "@/components/title";

type Props = {
  children?: ReactNode;
}

type State = {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(error: Error): State {
    console.error(error);

    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  public handleClose() {
    this.setState({ hasError: false });

    Router.push('/home');
  }

  public render() {
    if (this.state.hasError) {
      return (
        <Modal onClose={this.handleClose}>
            <Title size={64}>Something went wrong!</Title>
        </Modal>
      )
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
