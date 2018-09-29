import React, { Component } from "react";
import MobileRightNav from "./mobileRightNav";
import DefaultRightNav from "./defaultRightNav";
import { rightNavigationLines } from "../lines";
import { BROWSER } from "../../utils/browser";

const { status } = BROWSER.isMobile();

export default class RightNav extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.lines = {};
  }
  componentDidMount() {
    const nav = document.querySelector(".right_nav");
    const lines = rightNavigationLines(nav);

    lines.animateLinesIn();
    this.lines = lines;
  }

  linesOut = () => {
    this.lines.animateLinesOut();
  };

  render() {
    return (
      <section className={`right_nav`}>
        {status ? (
          <MobileRightNav
            parentCloseMenuAnimation={this.linesOut}
            {...this.props}
          />
        ) : (
          <DefaultRightNav {...this.props} />
        )}
      </section>
    );
  }
}
