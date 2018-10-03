import React, { Component, Fragment } from "react";
import { Next, Prev, Play, Pause } from "../icons";
import { VideoMenu } from "../videoMenu";

/*
  NEED to change ALL #launchFullVideo to #isMobile/isPhone
  ======================================================================================
*/

class Footer extends Component {
  state = {
    launchFullScreenMenu: true,
    mobileMenuActive: false
  };

  componentWillMount() {
    this.setState({
      activeIcon: this.props.activeIcon
    });
  }

  toggleCSS = el => {
    el.classList.contains("showing")
      ? el.classList.remove("showing")
      : el.classList.add("showing");
  };

  clickHandler = e => {
    e.preventDefault();
    e.stopPropagation();
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".footer_nav");
    this.toggleCSS(nav);
    this.toggleCSS(burger);

    this.setState({
      videoMenuActive: !this.state.videoMenuActive
    });
  };

  handleHover = e => {
    const element = document.querySelector(
      `.${e.target.getAttribute("data-target-attribute")}`
    );
    element.classList.add("hovering");
  };

  handleHoverLeave = e => {
    const element = document.querySelector(
      `.${e.target.getAttribute("data-target-attribute")}`
    );
    element.classList.remove("hovering");
  };

  render() {
    const radialPane1 = (
      <p className="skew_gallery">
        <span>
          <Prev />
        </span>
      </p>
    );
    const radialPane2 = (
      <p className="skew_portfolio">
        <span>
          <Pause />
        </span>
      </p>
    );
    const radialPane3 = (
      <p className="skew_process">
        <span>
          <Next />
        </span>
      </p>
    );

    return (
      <Fragment>
        <div className="footer">
          <nav className="footer_nav">
            <div className="container">
              <div
                className="skew"
                data-target-attribute={"skew_gallery"}
                onMouseLeave={this.handleHoverLeave}
                onMouseEnter={this.handleHover}
                onClick={this.props.rewind}
              />
              <div
                className="skew"
                data-target-attribute={"skew_portfolio"}
                onMouseLeave={e => this.handleHoverLeave(e)}
                onMouseEnter={e => this.handleHover(e)}
                onClick={this.props.pause}
              />
              <div
                className="skew"
                data-target-attribute={"skew_process"}
                onMouseLeave={e => this.handleHoverLeave(e)}
                onMouseEnter={e => this.handleHover(e)}
                onClick={this.props.fastForward}
              />
              {radialPane1}
              {radialPane2}
              {radialPane3}
            </div>
          </nav>
          <div className="burger" onClick={this.clickHandler}>
            <MiniCinder />
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Footer;

const MiniCinder = () => (
  <svg viewBox="0 0 220.05 195.91" className="mini_cinderblock">
    <g
      id="cinderLayer"
      className="cinder_lines"
      fill="#fff"
      fillRule="evenodd"
      stroke="#fff"
    >
      <path d="M202.07,10.29h18V0H0V10.29H22.7a2,2,0,0,1,2,2V178.61a7,7,0,0,1-7,7H0v10.3H220v-10.3h-18a7,7,0,0,1-7-7V17.29A7,7,0,0,1,202.07,10.29ZM147,92.23H72.75a7,7,0,0,1-7-7V17.29a7,7,0,0,1,7-7H147a7,7,0,0,1,7,7V85.23A7,7,0,0,1,147,92.23Zm7,17.29v69.09a7,7,0,0,1-7,7H72.75a7,7,0,0,1-7-7V109.52a7,7,0,0,1,7-7H147A7,7,0,0,1,154,109.52Z" />
    </g>
  </svg>
);

// ;<VideoMenu active={this.state.videoMenuActive} />
