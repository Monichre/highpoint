import React, { Fragment, Component } from "react";
import MenuLink from "../menuLink";
import CinderBlock from "../cinderblock";
import HoverLink from "../hoverLink";
import { links } from "../../links";
import MobileMenu from "../mobileMenu";
import { BROWSER } from "../../utils/browser";
import imagesLoaded from "imagesloaded";
import Menu from "../mobileMenu/menu";

const { status } = BROWSER.isMobile();

class LeftNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile: status,
      mobileNavOpen: false
    };
  }

  componentDidMount() {
    this.DOM = {};
    this.DOM.mobileMenu = document.querySelector(".mobile-menu");
    this.DOM.menu = new Menu(this.DOM.mobileMenu);
    this.DOM.menuCtrls = {
      open: document.querySelector(".menu-trigger"),
      close: document.querySelector(".menu-trigger--close")
    };
  }

  toggleMobileNav = e => {
    e.preventDefault();
    const { mobileNavOpen } = this.state;

    this.setState(
      {
        mobileNavOpen: !mobileNavOpen
      },
      () => {
        this.state.mobileNavOpen ? this.DOM.menu.open() : this.DOM.menu.close();
      }
    );
  };

  render() {
    const conditionalMobileMenu = this.state.isMobile ? (
      <MobileMenu links={links} toggleMenu={this.toggleMobileNav} />
    ) : null;

    const conditionalTrigger = this.state.isMobile ? (
      <MobileNavTrigger toggleMobile={this.toggleMobileNav} />
    ) : (
      <HoverLink link="Contact" className="contact" isMobile={status} />
    );
    return (
      <Fragment>
        {conditionalMobileMenu}
        <section className="left_nav">
          <div className="inner">
            <ul style={{ listStyle: "none" }} className="top">
              <li className="logo_link" style={{ width: "100%" }}>
                <CinderBlock
                  context="navigation"
                  linkTo="/"
                  id="cinderblock_navigation"
                />
              </li>
            </ul>
            <ul className="middle">
              {links.map((link, i) => (
                <MenuLink key={i} link={link} />
              ))}
            </ul>
            <ul className="bottom">{conditionalTrigger}</ul>
          </div>
        </section>
      </Fragment>
    );
  }
}

export default LeftNav;

const MobileNavTrigger = ({ toggleMobile }) => (
  <li className={`hover-link menu-trigger`} onClick={toggleMobile}>
    <div className={`text`} />
    <div className="hover-link-icon">
      <span />
      <span />
    </div>
  </li>
);
