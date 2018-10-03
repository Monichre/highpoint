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
    this.lines.animateLineOut(0, {
      duration: 500,
      easing: "easeInOutExpo",
      delay: 0
    });
    this.lines.animateLineOut(1, {
      duration: 500,
      easing: "easeInOutExpo",
      delay: 0
    });
  };

  linesIn = () => {
    this.lines.animateLinesIn(() => {
      console.log("this is the callback");
    });
  };

  render() {
    return (
      <section className={`right_nav`}>
        {status ? (
          <MobileRightNav
            parentRemoveLinesAnimation={this.linesOut}
            parentAddLinesAnimation={this.linesIn}
            {...this.props}
          />
        ) : (
          <DefaultRightNav
            parentRemoveLinesAnimation={this.linesOut}
            parentAddLinesAnimation={this.linesIn}
            {...this.props}
          />
        )}
      </section>
    );
  }
}
