import React, { Fragment, Component } from "react";
import { mobileLinks } from "../../../links";
import MobileMenu from "../mobileMenu";
import MobileNavTrigger from "../mobileNavTrigger";
import Menu from "../mobileMenu/menu";

class MobileLeftNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mobileNavOpen: false
    };
  }

  componentDidMount() {
    this.DOM = {};
    const mobileMenu = document.querySelector(".mobile-menu");
    if (mobileMenu) {
      this.DOM.menu = new Menu(mobileMenu);
      this.DOM.menuCtrls = {
        open: document.querySelector(".menu-trigger"),
        close: document.querySelector(".menu-trigger--close")
      };
    }
  }

  toggleMobileNav = e => {
    const { mobileNavOpen } = this.state;
    if (mobileNavOpen) {
      this.DOM.menu.close();
      this.props.parentAddLinesAnimation();
    } else {
      this.props.parentRemoveLinesAnimation();
      this.DOM.menu.open();
    }
    this.setState({
      mobileNavOpen: !mobileNavOpen
    });
  };

  render() {
    return (
      <Fragment>
        <MobileMenu links={mobileLinks} toggleMenu={this.toggleMobileNav} />
        <div className="inner">
          <ul style={{ listStyle: "none" }} className="top">
            <li className="logo_link" style={{ width: "100%" }}>
              <MobileNavTrigger toggleMobile={this.toggleMobileNav} />
            </li>
          </ul>
          <ul className="middle" />
        </div>
      </Fragment>
    );
  }
}

export default MobileLeftNav;
