import React from "react";
import { Close, MobileMenuLogo } from "../icons";
import MenuLink from "../menuLink";

import "./_index.scss";
const MobileMenuSideBar = ({ links }) => (
  <div id="mobile_menu_sidebar">
    <span className="mobile_menu_close">
      <Close />
    </span>
    <header>
      <MobileMenuLogo />
    </header>
    <ul className="sidebar_main_menu">
      {links.map((link, i) => (
        <MenuLink key={i} link={link} mobileSidebar />
      ))}
    </ul>
    <footer>
      <p>Developer | Owner | Operator</p>
    </footer>
  </div>
);

export default MobileMenuSideBar;
