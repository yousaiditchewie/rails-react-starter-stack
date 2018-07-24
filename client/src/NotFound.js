import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class NotFound extends Component {
  render() {
    return (
      <div>
        <h1>404: Not found</h1>
        <a href="/">Back to home</a>
      </div>
    );
  }
}
