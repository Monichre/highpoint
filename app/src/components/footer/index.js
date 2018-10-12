import React, { Component, Fragment } from "react";

import MiniCinder from "../cinderblock/miniCinder";
import RadialSkew, { skews } from "./radialSkew";
import RadialPane, { radials } from "./radialPane";
import _ from "lodash";

const Footer = props => {
  const toggleCSS = el => {
    el.classList.contains("showing")
      ? el.classList.remove("showing")
      : el.classList.add("showing");
  };

  const clickHandler = e => {
    e.preventDefault();
    e.stopPropagation();
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".footer_nav");
    toggleCSS(nav);
    toggleCSS(burger);
  };

  const handleHover = e => {
    const element = e.target;
    element.classList.add("hovering");
  };

  const handleHoverLeave = e => {
    const element = e.target;
    element.classList.remove("hovering");
  };

  const radialSkews = skews(props.rewind, props.pause, props.fastForward);
  const radialPanes = radials(props.rewind, props.pause, props.fastForward);

  return (
    <div className="footer">
      <nav className="footer_nav">
        <div className="container">
          {radialSkews.map((skew, i) => (
            <RadialSkew
              key={i}
              onClick={skew.onClick}
              onMouseLeave={handleHoverLeave}
              onMouseEnter={handleHover}
            />
          ))}
          {radialPanes.map((radial, i) => (
            <RadialPane onClick={radial.onClick} key={i}>
              {props.isPlaying ? radial.component : radial.play}
            </RadialPane>
          ))}
        </div>
      </nav>
      <div className="burger" onClick={clickHandler}>
        <MiniCinder />
      </div>
    </div>
  );
};

export default Footer;
