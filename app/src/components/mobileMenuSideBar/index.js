import React from "react";
import { Close, MobileMenuLogo } from "../icons";
import { Link } from "react-router-dom";

import "./_index.scss";
const goToPage = (e, link) => {
  e.preventDefault();
  console.log(link);
};
const MobileMenuSideBar = ({ links, toggleMenu }) => (
  <div id="mobile_menu_sidebar">
    <span
      onClick={toggleMenu}
      className="mobile_menu_close"
      style={{ height: "min-content", width: "min-content" }}
    >
      <Close />
    </span>
    <header>
      <MobileMenuLogo />
    </header>
    <ul className="sidebar_main_menu">
      {links.map((link, i) => (
        <li
          key={i}
          className={`menu_link mobile_sidebar_link`}
          onClick={e => goToPage(e, `/${link.toLowerCase()}`)}
        >
          <a href={`/${link.toLowerCase()}`}>{link}</a>
        </li>
      ))}
    </ul>
    <footer>
      <p>Developer | Owner | Operator</p>
    </footer>
  </div>
);

export default MobileMenuSideBar;
