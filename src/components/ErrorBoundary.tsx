import { Component, type ErrorInfo, type ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  state: State = { error: null };

  static getDerivedStateFromError(error: Error) {
    return { error };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error('Presentation error:', error, info);
  }

  render() {
    if (this.state.error) {
      return (
        <div style={{ padding: 32, color: '#fff', background: '#0D1B2A', minHeight: '100vh' }}>
          <h1>Something went wrong</h1>
          <pre style={{ marginTop: 16, color: '#f88' }}>{this.state.error.message}</pre>
        </div>
      );
    }
    return this.props.children;
  }
}
