import React, { Component, ErrorInfo, ReactNode } from "react";
import { AlertTriangle, RefreshCw } from "lucide-react";
import { Button, Card } from "@/components/ui-elements";

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  private handleReset = () => {
    this.setState({ hasError: false, error: null });
    window.location.reload();
  };

  public render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div
          className="min-h-screen flex items-center justify-center p-4"
          role="alert"
          aria-live="assertive"
        >
          <Card className="max-w-md w-full text-center">
            <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-4">
              <AlertTriangle className="w-8 h-8 text-red-600" aria-hidden="true" />
            </div>
            <h1 className="text-2xl font-bold mb-2">Oops! Something went wrong</h1>
            <p className="text-muted-foreground mb-6">
              We encountered an unexpected error. Don't worry, your progress is saved.
            </p>
            {process.env.NODE_ENV === 'development' && this.state.error && (
              <pre className="text-left text-xs bg-muted p-4 rounded-lg mb-4 overflow-auto">
                {this.state.error.message}
              </pre>
            )}
            <Button
              onClick={this.handleReset}
              className="w-full"
              aria-label="Reload application"
            >
              <RefreshCw className="w-4 h-4" aria-hidden="true" />
              Reload Page
            </Button>
          </Card>
        </div>
      );
    }

    return this.props.children;
  }
}
