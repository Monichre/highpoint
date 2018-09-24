import React, { Fragment, Component } from "react";
import MenuLink from "../menuLink";
import CinderBlock from "../cinderblock";
import HoverLink from "../hoverLink";
import { links, mobileLinks } from "../../links";
import MobileMenu from "../mobileMenu";
import { BROWSER } from "../../utils/browser";
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
    const { isMobile } = this.state;
    this.DOM = {};
    const mobileMenu = document.querySelector(".mobile-menu");
    if (isMobile && mobileMenu) {
      this.DOM.menu = new Menu(mobileMenu);
      this.DOM.menuCtrls = {
        open: document.querySelector(".menu-trigger"),
        close: document.querySelector(".menu-trigger--close")
      };
    }
  }

  toggleMobileNav = e => {
    e.preventDefault();
    console.log(e);
    const { mobileNavOpen } = this.state;
    this.setState(
      {
        mobileNavOpen: !mobileNavOpen
      },
      () => {
        this.state.mobileNavOpen ? this.DOM.menu.close() : this.DOM.menu.open();
      }
    );
  };

  render() {
    const { isMobile, mobileNavOpen } = this.state;
    const conditionalMobileMenu = isMobile ? (
      <MobileMenu links={mobileLinks} toggleMenu={this.toggleMobileNav} />
    ) : null;

    const conditionalTrigger = isMobile ? (
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
