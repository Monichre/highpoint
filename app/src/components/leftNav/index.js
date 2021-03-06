import React, { Component } from "react";
import { leftNavigationLines } from "../lines";
import DefaultLeftNav from "./defaultLeftNav";
import MobileLeftNav from "./mobileLeftNav";
import { BROWSER } from "../../utils/browser";

const { status } = BROWSER.isMobile();

export default class LeftNav extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.lines = {};
  }

  componentWillReceiveProps(nextProps) {
    if (
      nextProps.redrawLines !== this.props.redrawLines &&
      nextProps.redrawLines
    ) {
      this.linesOut();
      this.lines.removeLines();
      this.initLines();
    }
  }
  componentDidMount() {
    this.initLines();
  }

  initLines = () => {
    const nav = document.querySelector(".left_nav");
    const lines = leftNavigationLines(nav);

    lines.animateLinesIn();
    this.lines = lines;
  };

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
    const content = status ? (
      <MobileLeftNav
        parentRemoveLinesAnimation={this.linesOut}
        parentAddLinesAnimation={this.linesIn}
      />
    ) : (
      <DefaultLeftNav />
    );
    return (
      <section className={`left_nav ${status ? "mobile_left_nav" : ""}`}>
        {content}
      </section>
    );
  }
}

/*
  ========================================================================
  Code Example For Animating Lines
  ========================================================================
  
	setTimeout(function() {
				lineMaker.animateLineIn(4, {
					complete: function() { lineMaker.showLine(0); }
				});
				lineMaker.animateLineIn(5, {
					complete: function() { lineMaker.showLine(1); }
				});
				lineMaker.animateLineIn(6, {
					complete: function() { lineMaker.showLine(2); }
				});
				lineMaker.animateLineIn(7, {
					complete: function() { lineMaker.showLine(3); }
				});
			}, 100);

			setTimeout(function() {
				lineMaker.animateLineOut(4);
				lineMaker.animateLineOut(5);
				lineMaker.animateLineOut(6);
				lineMaker.animateLineOut(7);
			}, 2000);

			setTimeout(function() {
				lineMaker.createLine({top: '50vh', left: '21vw', width: '60vw', height: 16, color: '#E91E63', hidden: true, animation: { duration: 1000, easing: 'easeInOutExpo', delay: 300, direction: 'LeftRight' }});

				lineMaker.animateLineIn(8);
*/
