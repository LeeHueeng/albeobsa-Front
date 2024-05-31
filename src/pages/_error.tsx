import React from "react";
import { NextPageContext } from "next";

interface ErrorProps {
  statusCode?: number;
}

class ErrorPage extends React.Component<ErrorProps> {
  static getInitialProps({ res, err }: NextPageContext) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
    return { statusCode };
  }

  render() {
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h1>{this.props.statusCode}</h1>
        <p>
          {this.props.statusCode
            ? `An error ${this.props.statusCode} occurred on server`
            : "An error occurred on client"}
        </p>
      </div>
    );
  }
}

export default ErrorPage;
