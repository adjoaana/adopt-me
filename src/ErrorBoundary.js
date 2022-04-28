import { Component } from "react";
import reactRouterDom from "react-router-dom";
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";

class ErrorBoundary extends Component {
  state = { hasError: false, redirect: false };
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error, info) {
    console.error("Error Boundary caught an error", error, info);
  }
  componentDidUpdate() {
    if (this.state.hasError) {
      setTimeout(() => this.setState({ redirect: true }), 5000);
    }
  }
  render() {
    if (this.state.redirect) {
      return <Redirect to="/" />;
    } else if (this.state.hasError) {
      return (
        <h2>
          There was an error with this listing <Link to="/">Click here</Link> to
          go back to the home page or wait five seconds
        </h2>
      );
    }
    return this.props.children;
  }
}
export default ErrorBoundary;
