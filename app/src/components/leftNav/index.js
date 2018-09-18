import React, { Fragment, Component } from "react";
import MenuLink from "../menuLink";
import CinderBlock from "../cinderblock";
import HoverLink from "../hoverLink";
import { links } from "../../links";
import superslide from "../superslide";
import MobileMenuSideBar from "../mobileMenuSideBar";
import { BROWSER } from "../../utils/browser";

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
    const slider = document.getElementById("mobile_menu_sidebar");
    const content = document.querySelector(".sidebar_main_menu");

    if (slider && content) {
      this.sidebarMenu = new superslide({
        slider: slider,
        content: content,
        slideContent: true,
        animation: "slideLeft",
        width: "30vw",
        height: "100vh"
      });
    }
  }

  toggleMobileNav = e => {
    console.log(e);
    e.preventDefault();
    e.stopPropagation();
    const { mobileNavOpen } = this.state;
    this.setState(
      {
        mobileNavOpen: !mobileNavOpen
      },
      () => {
        this.state.mobileNavOpen
          ? this.sidebarMenu.open()
          : this.sidebarMenu.close();
      }
    );
  };
  render() {
    const conditionalMobileMenu = this.state.isMobile ? (
      <MobileMenuSideBar links={links} toggleMenu={this.toggleMobileNav} />
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
  <li className={`hover-link`} onClick={toggleMobile}>
    <div className={`text`} />
    <div className="hover-link-icon">
      <span />
      <span />
    </div>
  </li>
);
