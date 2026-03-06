import { Component, type ReactNode } from "react";
import { Button } from "@/components/ui/button";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, info: { componentStack: string }) {
    // In production this is where you'd send to Sentry / Datadog
    console.error("Uncaught error:", error, info.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-[60vh] flex items-center justify-center px-6">
          <div className="text-center max-w-md">
            <p className="text-[#c9a96e] font-mono text-xs tracking-[0.35em] uppercase mb-4">
              Something went wrong
            </p>
            <h1 className="font-serif text-2xl mb-3">An unexpected error occurred</h1>
            <p className="text-muted-foreground text-sm mb-6">
              We apologize for the inconvenience. Please refresh the page or return to the home
              page.
            </p>
            <div className="flex gap-3 justify-center">
              <Button variant="outline" onClick={() => window.location.reload()}>
                Refresh page
              </Button>
              <Button onClick={() => { this.setState({ hasError: false, error: null }); window.location.href = "/"; }}>
                Return home
              </Button>
            </div>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}
