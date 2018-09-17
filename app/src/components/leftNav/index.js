import React, { Fragment } from "react";
import MenuLink from "../menuLink";
import CinderBlock from "../cinderblock";
import HoverLink from "../hoverLink";
import { links } from "../../links";
import superslide from "../superslide";
import MobileMenuSideBar from "../mobileMenuSideBar";
import { BROWSER } from "../../utils/browser";

const LeftNav = () => {
  const { status } = BROWSER.isMobile();
  console.log("isMobile", status);
  const conditionalMobileMenu = status ? (
    <MobileMenuSideBar links={links} />
  ) : null;
  let sidebarMenu;
  const slider = document.getElementById("mobile_menu_sidebar");
  const content = document.querySelector(".sidebar_main_menu");

  if (slider && content) {
    sidebarMenu = new superslide({
      slider: slider,
      content: content,
      slideContent: false,
      animation: "slideLeft",
      width: "30vw",
      height: "100vh"
    });
  }

  const openSideBar = () => {
    sidebarMenu.open();
  };

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
          <ul className="bottom">
            <HoverLink
              link="Contact"
              className="contact"
              isMobile={status}
              onClick={openSideBar}
            />
          </ul>
        </div>
      </section>
    </Fragment>
  );
};

export default LeftNav;
