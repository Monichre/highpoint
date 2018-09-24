import React, { Component } from "react";
import ReactDOM from "react-dom";

export default class Modal extends Component {
  constructor() {
    super();
    this.el = document.createElement("div");
    this.el.classList.add("Modal");
  }

  componentDidMount() {
    document.body.appendChild(this.el);
  }

  componentWillUnmount() {
    document.body.removeChild(this.el);
  }

  render() {
    return ReactDOM.createPortal(this.props.children, this.el);
  }
}
